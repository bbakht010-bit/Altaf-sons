# Deployment Guide

This project is prepared for Cloudflare Pages free hosting.

## 1. Install npm locally

This computer currently exposes Cursor's bundled Node.js, but `npm` is not available in the terminal. Install the current LTS version of Node.js from:

https://nodejs.org/

After installation, open a new terminal and confirm:

```bash
node --version
npm --version
```

## 2. Run the site locally

From the project folder:

```bash
npm install
npm run dev
```

Astro will show a local preview URL.

## 3. Test the production build

```bash
npm run build
npm run preview
```

The generated production files will be in `dist/`.

## 4. Put the project on GitHub

Create a GitHub repository, then push this workspace to it. If Git is not initialized yet:

```bash
git init
git add .
git commit -m "Create Altaf and Sons website prototype"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the repository URL from GitHub.

## 5. Connect Cloudflare Pages

1. Open the Cloudflare dashboard.
2. Go to Workers & Pages.
3. Select Create application.
4. Choose Pages.
5. Connect your GitHub account.
6. Select the Altaf and Sons repository.
7. Use these build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

Cloudflare will install dependencies and deploy the website.

## 6. Before launch

Replace placeholder content in `src/data/site.ts`:

- Real phone number
- Real email address
- Office/service location
- Approved project descriptions
- Verified client or partner names
- Product and service categories

Update `astro.config.mjs` and `public/robots.txt` with the final production domain after Cloudflare gives you the live URL or after you connect a custom domain.
