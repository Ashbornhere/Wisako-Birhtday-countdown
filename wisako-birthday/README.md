# For Wisako, Always — Birthday Countdown

A custom React + Vite birthday microsite with a live countdown, birthday letter, Hinata-inspired section, and a warm editorial art direction.

## Run locally
1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this folder.
3. Open a terminal inside the folder and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL Vite prints (usually http://localhost:5173).

## Customize
- Countdown date: `src/main.jsx`, `getNextBirthday()` and the `BIRTHDAY_MONTH` / `BIRTHDAY_DAY` constants.
- Letter text: the `letter-body` section in `src/main.jsx`.
- Palette and layout: `src/style.css`.
- Social share preview (Open Graph / Twitter card title, description and image): `index.html`. Replace the preview image URL with a public image URL you own for a fully personal share card.
- Hero image: replace the image URL in `src/main.jsx` with Wisako's own art or a photo you have permission to use.

The countdown automatically targets the next February 22. The year label updates on its own. It is a frontend-only site; it does not collect user data or require a backend.
