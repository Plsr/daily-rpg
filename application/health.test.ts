import { describe, expect, it, vi } from "vitest";
import { getHealthStatus } from "./health";

vi.mock("@/data/health", () => ({
  isDatabaseReachable: vi.fn(),
}));

const { isDatabaseReachable } = await import("@/data/health");

describe("getHealthStatus", () => {
  it("reports ok when the database is reachable", async () => {
    vi.mocked(isDatabaseReachable).mockResolvedValue(true);

    await expect(getHealthStatus()).resolves.toEqual({ ok: true });
  });

  it("reports not ok when the database check fails", async () => {
    vi.mocked(isDatabaseReachable).mockRejectedValue(new Error("connection refused"));

    await expect(getHealthStatus()).resolves.toEqual({ ok: false });
  });
});
