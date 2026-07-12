# Layered architecture: presentation → application → data

Next.js's App Router makes it easy to blend business logic directly into Server Actions and route components. We enforce a strict one-way dependency instead:

- **Presentation** — pages, components, and Server Actions. Server Actions are thin adapters only: parse input, call exactly one application-layer function, return the result. No business logic here.
- **Application** — use-case functions own all business rules (e.g. `createQuest`, `completeQuest`, `calculateLevel`, XP bounds validation, the edit/delete-only-while-incomplete rule). Fully testable without booting Next.js.
- **Data** — Drizzle schema and queries only. No business logic, no awareness of the layers above it.

This keeps business rules unit-testable in isolation and prevents logic from leaking into route handlers, where it's harder to find and test.
