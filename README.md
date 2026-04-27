# Junjie Wu Personal Website

This repository hosts the source code for Junjie Wu's personal academic website. The site presents research interests, publications, education, research experience, academic service, and selected project work.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- next-intl
- OpenNext Cloudflare adapter

## Local Development

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:3000`.

## Build

```bash
npm run build
```

## Cloudflare Deployment

This project is configured for Cloudflare Workers with the OpenNext Cloudflare adapter.

```bash
npm run preview
npm run deploy
```

For Cloudflare dashboard deployment from GitHub, use:

- Build command: `npm run upload`
- Runtime compatibility flag: `nodejs_compat`
- Compatibility date: `2024-09-23` or later

## Project Structure

- `src/i18n/messages/`: bilingual profile, publication, and section content
- `src/app/[locale]/`: localized page routes and layout
- `src/data/site.ts`: global site metadata
- `public/`: static assets, including avatar and resume PDF
- `open-next.config.ts`: OpenNext Cloudflare adapter config
- `wrangler.jsonc`: Cloudflare Workers deployment config

## Deployment

The project can be deployed to Cloudflare Workers. After deployment, attach a custom domain in the Cloudflare dashboard.
