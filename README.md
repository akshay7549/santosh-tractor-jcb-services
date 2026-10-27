# Santosh Tractor & JCB Services

A responsive business website for tractor, JCB, farming, transport and service enquiries in Sitamarhi, Bihar.

**Live website:** https://akshay7549.github.io/santosh-tractor-jcb-services/

**GitHub repository:** https://github.com/akshay7549/santosh-tractor-jcb-services

## Business contact

- Haribela Lokhar Chowk, Sonbarsa, Sitamarhi, Bihar — 843317
- Phone: +91 80026 26322 / +91 96931 90326
- Google Maps: https://maps.app.goo.gl/nssfVizCD9dunNpg8
- Tagline: “Khet se nirman tak, har kaam me hm aapke saath.”

## Files

- `index.html`: page content, business details and search metadata.
- CSS files: responsive layout, service photography, premium design and footer.
- `app.js`, `catalog.js`, `premium.js`: navigation, service selection, WhatsApp enquiry, filters and visual interactions.
- `assets/`: images used by the website. See `ASSETS.md` and `SERVICE-IMAGES.md` for provenance.
- `assets/real/`, `real-photos.css`, `real-photos.js`: owner-supplied photographs, responsive gallery and accessible full-photo viewer with keyboard navigation.
- `robots.txt`, `sitemap.xml`: search discovery files configured for this GitHub Pages URL.
- `.nojekyll`: serve this static website directly.

## Preview locally

No package installation or build step is needed. Run a static server from this directory, for example:

```sh
python -m http.server 4174
```

Then visit http://localhost:4174.

## Publish changes

GitHub Pages serves the root of the `main` branch. Edit the files, commit and push to `main`; GitHub Pages publishes the update automatically.

The enquiry form opens WhatsApp with the visitor's details. Sending the message and confirming availability/rates happen separately; this website has no database or payment backend.
