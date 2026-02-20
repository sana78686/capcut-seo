# CapCut SEO – Vue, Nuxt, Payload (same project)

This repo contains:

1. **Laravel + Vue** (existing) – frontend in `resources/js`, Laravel routes, no change.
2. **Payload CMS** – SEO/admin in `payload/` (Next.js + Payload 3, SQLite).
3. **Nuxt 3** – SEO-focused frontend in `nuxt/` (same design, locale routes `/en`, `/ar`, `/es`).

All use the **same database idea**: Payload uses SQLite by default (`payload/payload.sqlite`). You can switch Payload to PostgreSQL and use the same server as Laravel if you prefer one DB server.

---

## Quick start

### 1. Laravel + Vue (unchanged)

```bash
composer install
cp .env.example .env && php artisan key:generate
npm install && npm run build
php artisan serve
# Open http://localhost:8000/en
```

### 2. Payload CMS (admin + API)

```bash
cd payload
cp .env.example .env
# Edit .env: set PAYLOAD_SECRET, DATABASE_URL (default: file:./payload.sqlite)
npm install
npm run dev
# Open http://localhost:3001/admin — create first user, then use Pages & Site SEO.
# API: http://localhost:3001/api
```

### 3. Nuxt (SEO frontend)

```bash
cd nuxt
npm install
npm run dev
# Open http://localhost:3000/en (or /ar, /es)
# Build for production / static:
npm run generate
# Output in .output/public — copy to Laravel public/ or serve separately.
```

---

## Database

- **Laravel:** Uses `.env` (`DB_CONNECTION`, `DB_DATABASE`, etc.). Default can be SQLite or MySQL.
- **Payload:** Uses `payload/.env` → `DATABASE_URL`.
  - **SQLite (default):** `DATABASE_URL=file:./payload.sqlite` (file in `payload/`).
  - **Same DB server (e.g. PostgreSQL):** Create a DB for Payload and set  
    `DATABASE_URL=postgresql://user:pass@127.0.0.1:5432/capcut_payload`.
- **Nuxt:** Does not connect to the DB. It can read content via **Payload REST API** (e.g. `http://localhost:3001/api/pages?locale=en`) when you wire it.

---

## Routes

| What        | URL / note |
|------------|------------|
| Laravel+Vue | `http://localhost:8000/en`, `/ar`, `/es` (your existing app) |
| Payload admin | `http://localhost:3001/admin` |
| Payload API | `http://localhost:3001/api/*` (e.g. `/api/pages`, `/api/users`) |
| Nuxt dev   | `http://localhost:3000/en`, `/ar`, `/es` |
| Nuxt static | After `nuxt generate`, serve `.output/public` (e.g. copy to Laravel `public/nuxt` or host elsewhere) |

---

## SEO

- **Nuxt:** Uses `useHead()` for title/meta per page; i18n for locale; `nuxt generate` for static HTML (good for crawlers).
- **Payload:** Store meta title, description, OG image per page (and in Site SEO global). Later you can have Nuxt or Laravel fetch from Payload API and render these in the first HTML.
- **Vue (existing):** Unchanged; Laravel Blade can still output meta from Payload or config when you’re ready.

---

## Deploy (one server)

1. **Laravel:** As you do now (PHP + web server).
2. **Payload:** Run Node: `cd payload && npm run build && npm run start` (e.g. with PM2 on port 3001 or behind a subdomain like `cms.yoursite.com`).
3. **Nuxt (optional):** Run `cd nuxt && npm run generate`, then copy `.output/public` into Laravel `public/` (or a subfolder) and serve via the same web server; or run Nuxt in SSR mode as a second Node app.

---

## Summary

- **Vue:** Kept as-is, no impact.
- **Nuxt:** New frontend with same look, locale URLs, SEO-friendly (static or SSR).
- **Payload:** Same project folder, same DB server possible (SQLite or shared PostgreSQL), SEO fields in admin; no impact on Vue until you connect it.
