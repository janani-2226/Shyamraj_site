# A. Shyamraj — Speaker Website

Single-page site for A. Shyamraj, built from the client-approved template.

**Stack:** React 19 · Vite · Tailwind CSS v4 (via `@tailwindcss/vite`) · Figtree (Google Fonts)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  data/content.js        ← all site copy, links, stats, records, gallery items
  components/
    Header.jsx           top info bar + sticky nav with scrollspy + mobile menu
    Hero.jsx             hero with 17,303 record card
    DotField.jsx         interactive dot canvas behind the hero (one dot = one listener)
    Intro.jsx            Associations strip, Stats row, About section
    Programs.jsx         tabbed programs; "Request this program" pre-fills the contact form
    Process.jsx          three-step process
    Records.jsx          Guinness records drawn to scale (canvas) + Recognition list
    Gallery.jsx          filterable photo grid with lightbox + video cards
    Testimonials.jsx     principal testimonials
    Contact.jsx          contact details, enquiry form (mailto), Abacus of English banner
    Footer.jsx
    ui.jsx               SectionLabel and Button
  index.css              Tailwind import + theme tokens (navy, brand red, paper)
public/images/           photos (cropped from the approved template screenshot)
```

Brand colours live in `src/index.css` under `@theme` (`navy-*`, `brand`, `paper`, `ink`) and are used as normal Tailwind classes, e.g. `bg-navy-900`, `text-brand`.

## Before launch (TODO)

Search the code for `TODO` — everything that needs client input is in `src/data/content.js`:

- **Photos:** images in `public/images/` were cropped from the template screenshot, so they're lower resolution. Replace with the original photo files (same filenames).
- **Programs:** descriptions/duration/audience for *Humor 359 Degrees*, *Dare To Start* and *Odyssey* are placeholder copy — only *Abacus of English* details were in the template.
- **Links:** social profile URLs, YouTube video links, and the Abacus of English course login URL (`courseUrl`).
- **Enquiry form:** currently opens the visitor's mail app (`mailto:`). Swap `handleSubmit` in `Contact.jsx` for Formspree/EmailJS/an API if a server-side form is wanted.
