# Ignis Website

Developer: Brian Mwangi (GitHub: ob55)

Clean, modern kitchens for Africa’s institutions and homes — Ignis Innovation builds and deploys steam-based institutional kitchen systems and efficient household e‑cooking products, backed by training, digital monitoring and after‑sales support.

---

## Table of contents
- Project overview
- Features
- Tech stack
- Local setup
- Build & deploy (GitHub Pages)
- Important configuration notes
- Common issues & fixes
- Contributing
- Contact

---

## Project overview
This is a Create React App project for Ignis Innovation. The site uses React + Tailwind + Framer Motion for UI/animations and includes pages for Home, About, Products, Insight, FAQs, Contact and a simple cart context.

---

## Features
- Responsive landing pages and product pages
- Animated hero sections with Framer Motion
- Contact form with ReCAPTCHA and Formspree integration
- Simple cart context for product flow
- Tailwind CSS for utility-first styling
- Deployable to GitHub Pages

---

## Tech stack
- React (react-scripts / Create React App)
- react-router-dom
- Tailwind CSS + PostCSS + Autoprefixer
- Framer Motion
- react-toastify, react-google-recaptcha
- gh-pages for deployment

---

## Local setup
1. Clone repo
   ```
   git clone https://github.com/ob55/Ignis_Website.git
   cd Ignis_Website
   ```
2. Install
   ```
   npm install
   ```
3. Run dev server
   ```
   npm start
   ```
4. Build for production
   ```
   npm run build
   ```

---

## Build & deploy to GitHub Pages
1. Add `homepage` to `package.json`:
   ```json
   "homepage": "https://<your-github-username>.github.io/Ignis_Website"
   ```
   (replace `<your-github-username>` — e.g. `ob55`)

2. Install gh-pages if not present:
   ```
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

4. Deploy:
   ```
   npm run deploy
   ```

Notes:
- For client-side routing on GitHub Pages use HashRouter (or set up a 404 redirect). Example change in `src/App.js`:
  ```js
  import { HashRouter as Router } from "react-router-dom";
  ```

---

## Important configuration notes
- Asset paths in CRA should use relative/public paths. For example videos/images loaded from public:
  ```
  src={`${process.env.PUBLIC_URL}/images/homePageVideo1.mp4`}
  ```
- `public/manifest.json` must be valid JSON (no comments or trailing commas).
- If deploying to GitHub Pages and routes fail, switch to HashRouter or configure redirects.

---

## Common issues & fixes

- ESLint warning: "React Hook useEffect has a missing dependency: 'benefits'":
  - Fix by memoizing `benefits` or adding it to the effect deps.
  - Example:
    ```js
    const benefits = useMemo(() => [
      "High Throughput...",
      "Energy Flexibility...",
      // ...
    ], []);

    useEffect(() => {
      const timer = setInterval(() => {
        setSelectedBenefit(prev => {
          const i = benefits.indexOf(prev);
          return benefits[(i + 1) % benefits.length];
        });
      }, 5000);
      return () => clearInterval(timer);
    }, [benefits]);
    ```
  - Alternatively, add `// eslint-disable-next-line react-hooks/exhaustive-deps` before the effect (not recommended).

- "end of file expected" for manifest: remove comments; manifest must be pure JSON.

- Deployment shows CRA README instead of app:
  - Ensure `homepage` is set correctly and the repo name matches.
  - Run `npm run build` then `npm run deploy`.
  - Clear browser cache / wait a minute after deploy.

- Routing 404 on refresh:
  - Use `HashRouter` or configure a redirect rule in the hosting platform.

---

## Contributing
- Fork, create a branch, open a PR.
- Keep changes focused and update components/pages under `src/pages` or `src/components`.
- Run `npm run build` and check for console warnings before PR.

---

## Contact
Brian Mwangi — maintainers can reach via your GitHub profile: https://github.com/ob55

---

License
- Add license info here if needed (MIT recommended).