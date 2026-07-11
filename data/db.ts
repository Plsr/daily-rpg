import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// Serverless functions scale by running many concurrent instances rather than
// many connections per instance, so each instance's pool is capped to one
// connection to stay under Neon's connection limit. Use Neon's pooled
// (PgBouncer) connection string in DATABASE_URL for production.
const pool = new Pool({ connectionString: requiredEnv("DATABASE_URL"), max: 1 });

export const db = drizzle(pool);
