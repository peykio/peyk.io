# Peyk.io

Static landing page for Peyk.

## Stack

- Plain HTML + CSS
- No framework
- No JavaScript

## Project structure

- `index.html` - page markup and SEO metadata
- `styles.css` - all styles
- `home-gallery.html` - links to inspiration builds
- `home-blend-1.html` + `theme-blend-1.css` - trust-first consulting layout
- `home-blend-2.html` + `theme-blend-2.css` - modular high-contrast layout
- `home-blend-3.html` + `theme-blend-3.css` - human-centered collaborative layout
- `public/` - fonts, icons, and image assets

## Run locally

Use any static file server from the project root.

Examples:

```bash
python3 -m http.server 8080
```

or

```bash
npx serve .
```

Then open http://localhost:8080.

## Deploy

This repo can be deployed directly as a static site on Vercel.
