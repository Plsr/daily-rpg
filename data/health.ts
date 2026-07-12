import { sql } from "drizzle-orm";
import { db } from "@/data/db";

export async function isDatabaseReachable(): Promise<boolean> {
  await db.execute(sql`select 1`);
  return true;
}
