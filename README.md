# Daily RPG

Turns self-defined real-life tasks into an RPG progression loop. See `CONTEXT.md` for the domain glossary and `docs/adr/` for architectural decisions.

## Getting started

Requires Node 22 and pnpm (`packageManager` is pinned in `package.json`).

```bash
pnpm install
cp .env.example .env.local # then fill in DATABASE_URL
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

- `DATABASE_URL` — a Postgres connection string. In production this should be a [Neon](https://neon.tech) **pooled** connection string (the `-pooler` host), since the app connects via a plain `pg.Pool` — see `data/db.ts`. For local development, any reachable Postgres works (e.g. `docker run -e POSTGRES_PASSWORD=postgres -p 5432:5432 postgres:16-alpine`).

## Scripts

- `pnpm dev` / `pnpm build` / `pnpm start` — Next.js dev/build/start
- `pnpm lint` — ESLint
- `pnpm typecheck` — TypeScript, no emit
- `pnpm test` — Vitest (unit/integration)
- `pnpm e2e` — Playwright (end-to-end; builds and starts the app first)
- `pnpm db:generate` / `pnpm db:migrate` — Drizzle Kit migrations

## Architecture

Strict one-way dependency: `app/` (presentation, incl. Server Actions/Route Handlers as thin adapters) → `application/` (business logic, framework-free) → `data/` (Drizzle schema/queries only). See `docs/adr/0003-layered-architecture.md`.

## Deployment

Deployed to [Vercel](https://vercel.com) from `main`. CI (`.github/workflows/ci.yml`) runs lint, typecheck, Vitest, and Playwright on every push/PR and should be set as a required check before merging to `main`.
