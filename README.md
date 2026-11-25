# vamrebirth-sudo.github.io

Root GitHub Pages site.

- `/eatmatch/` — 餓選1 support page, privacy policy and shared 食帖 link page (`/eatmatch/i#c=…`).
- `/.well-known/apple-app-site-association` — Universal Links for 餓選1 (`/eatmatch/i`). Other apps can add their own entries here.

The 食帖 link page decodes the share code only in the browser (it lives after `#`, so it is never sent to the server) and renders text with `textContent` only, never `innerHTML`.
