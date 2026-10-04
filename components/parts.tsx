import type { Job, Project, Resume } from "@/data/resume";

// "https://github.com/x/y" -> "github.com/x/y"
export const displayUrl = (url: string) => url.replace(/^https?:\/\//, "");

export function ContactItems({ contact }: { contact: Resume["contact"] }) {
  return contact.map((c) => <li key={c.label}>{c.href ? <a href={c.href}>{c.label}</a> : c.label}</li>);
}

// A real list instead of loose <span>s, so screen readers and copy-paste see separate items.
// role="list" keeps the list semantics in Safari/VoiceOver, which drops them when list-style is none.
export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="tags" role="list">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

// Company line + bullet points, shared by Classic, Modern and Bold
export function JobBody({ job }: { job: Job }) {
  return (
    <>
      <p className="muted">
        {job.company}, {job.place}
      </p>
      <ul>
        {job.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </>
  );
}

// The link text is hidden on screen (the title is already a link) and shown in the printed PDF
export function ProjectBody({ p }: { p: Project }) {
  return (
    <>
      <p>{p.tagline}</p>
      <ul className="hl">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <p className="muted">
        {p.stack.join(", ")}
        {p.link && <span className="print-url"> · {displayUrl(p.link)}</span>}
      </p>
    </>
  );
}
