import { describe, expect, it } from "vitest";
import { resume } from "../data/resume";

describe("resume data", () => {
  it("has unique project slugs", () => {
    const slugs = resume.projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every project at least two highlights", () => {
    for (const p of resume.projects) expect(p.highlights.length).toBeGreaterThanOrEqual(2);
  });

  it("keeps highlights short so the printed page stays on one sheet", () => {
    for (const p of resume.projects) for (const h of p.highlights) expect(h.length).toBeLessThanOrEqual(70);
  });

  it("uses full URLs for every link", () => {
    for (const c of resume.contact) if (c.href) expect(c.href).toMatch(/^(mailto:|https:\/\/)/);
    for (const p of resume.projects) if (p.link) expect(p.link).toMatch(/^https:\/\//);
  });
});