import { useEffect, useRef } from 'react'

/**
 * Interactive dot grid behind the hero. Each dot stands for one listener;
 * dots near the cursor light up in brand red.
 */
export default function DotField({ spacing = 14, radius = 110 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let mouse = { x: -9999, y: -9999 }
    let frame = 0

    const draw = () => {
      frame = 0
      ctx.clearRect(0, 0, w, h)
      for (let y = spacing / 2; y < h; y += spacing) {
        for (let x = spacing / 2; x < w; x += spacing) {
          const d = Math.hypot(x - mouse.x, y - mouse.y)
          const t = Math.max(0, 1 - d / radius)
          if (t > 0) {
            ctx.fillStyle = `rgba(227, 30, 36, ${0.25 + t * 0.75})`
            ctx.beginPath()
            ctx.arc(x, y, 1 + t * 1.4, 0, Math.PI * 2)
            ctx.fill()
          } else {
            ctx.fillStyle = 'rgba(148, 163, 184, 0.10)'
            ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5)
          }
        }
      }
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }

    const onMove = (e) => {
      if (reduced) return
      const rect = canvas.getBoundingClientRect()
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      if (!frame) frame = requestAnimationFrame(draw)
    }
    const onLeave = () => {
      mouse = { x: -9999, y: -9999 }
      if (!frame) frame = requestAnimationFrame(draw)
    }

    const host = canvas.parentElement
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    return () => {
      ro.disconnect()
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [spacing, radius])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />
}
