# Soft Creative Group — Website

A responsive static website built with HTML, CSS and vanilla JavaScript.

## Preview locally
1. Extract the ZIP file.
2. Open `index.html` in a browser. For best results, use VS Code with the Live Server extension.

## Publish online
Upload `index.html`, `style.css`, and `script.js` to a static hosting service such as Netlify, GitHub Pages, or your web hosting file manager. Connect a domain if you want a custom domain name.

## Contact details included
- Phone: 0816 778 5376
- Phone: 0903 054 7410
- Email: iamsoftworld@gmail.com
- Location: Akure, Ondo State, Nigeria

The floating WhatsApp button opens a chat with the first phone number (0816 778 5376). The contact form opens the visitor's default email application with the inquiry prefilled; it does not store submissions in a database. To receive inquiries without requiring the visitor to have an email app, connect a form service or backend.


## Install as an app (PWA)
The site now includes a web app manifest, 192px and 512px app icons, and a service worker for basic offline access. Publish **all** files in this folder to the same GitHub Pages directory; do not upload only the HTML file.

After deployment, open the website over HTTPS. On Android Chrome, use the browser menu and choose **Install app** or **Add to Home screen** when offered. On supported desktop browsers, use the install icon in the address bar or the browser menu. The first visit must be online so the app shell can be cached.

The service worker caches the main page, stylesheet, script, manifest, and icons. External resources (such as Google Fonts) may still require an internet connection.
