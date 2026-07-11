# Postgres (Neon) + Drizzle for persistence

Needed a production-viable database that works on serverless/edge deploy targets. Considered SQLite — simplest locally, but plain file-based SQLite doesn't survive a serverless/edge filesystem, so it would need a hosted layer like Turso anyway, reintroducing the same external dependency. Considered Prisma as the ORM — heavier runtime, less direct control over queries.

Decided on Postgres via Neon (serverless-friendly, pairs naturally with Vercel deploys) with Drizzle ORM for schema and queries.
