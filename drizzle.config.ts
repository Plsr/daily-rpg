import "./envConfig";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./data/migrations",
  schema: "./data/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
