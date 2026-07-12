# Google OAuth via NextAuth for authentication

Considered email/password (requires owning password storage, hashing, and reset flows) and magic links (requires transactional email infrastructure from day one). Chose Google Social Sign-In via NextAuth/Auth.js instead — no password management, and no external dependency beyond a Google OAuth app.

NextAuth/Auth.js's compatibility with this repo's Next.js 16 release must be verified before implementation — see `AGENTS.md`, which warns this Next.js version has breaking changes relative to what's commonly assumed about Next.js.
