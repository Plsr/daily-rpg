import { isDatabaseReachable } from "@/data/health";

export type HealthStatus = {
  ok: boolean;
};

export async function getHealthStatus(): Promise<HealthStatus> {
  try {
    const ok = await isDatabaseReachable();
    return { ok };
  } catch {
    return { ok: false };
  }
}
