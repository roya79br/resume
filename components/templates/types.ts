
import type { Resume } from "@/data/resume";

// Lives in its own file so every template can import it without a circular import through index.ts
export type TemplateProps = { r: Resume };
