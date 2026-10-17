# Abdul Rehman — Portfolio (HTML, CSS & JavaScript)

A static version of the Lovable portfolio, prepared for GitHub Pages. It uses no React, build tools, package manager, server, or external JavaScript libraries.

## Files
- `index.html` — all portfolio sections and content
- `styles.css` — responsive design and styling
- `script.js` — mobile navigation, current year, and WhatsApp contact form
- `images/` — portfolio logo and portrait
- `favicon.png` — browser icon

## Publish on GitHub Pages
1. Create a new GitHub repository.
2. Extract this ZIP and upload the **contents of this folder** to the repository root (so `index.html` is visible on the Code tab, not inside another nested folder).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for the Pages deployment to finish and open the URL GitHub provides.

This version does not need GitHub Actions or a build step. The contact form opens WhatsApp with the visitor's details and message; static GitHub Pages cannot securely store submissions without a separate backend/service.
