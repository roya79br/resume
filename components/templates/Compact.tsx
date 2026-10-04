import type { TemplateProps } from "./types";
import { displayUrl } from "@/components/parts";
import styles from "./Compact.module.css";

// Single column, plain structure: the safest choice for applicant tracking systems (ATS)
export default function Compact({ r }: TemplateProps) {
  return (
    <main className={`page ${styles.root}`}>
      <header className={styles.head}>
        <h1>{r.name}</h1>
        <p>
          {r.role} · {r.location}
        </p>
        <p className="muted">
          {r.contact.map((c, i) => (
            <span key={c.label}>
              {i > 0 && " | "}
              {c.href ? <a href={c.href}>{c.label}</a> : c.label}
            </span>
          ))}
        </p>
      </header>

      <h2>Summary</h2>
      <p>{r.summary}</p>

      <h2>Education</h2>
      {r.education.map((e) => (
        <p key={e.degree} className={styles.line}>
          <strong>{e.degree}</strong>, {e.school}, {e.period}
        </p>
      ))}

      <h2>Projects</h2>
      {r.projects.map((p) => (
        <article key={p.slug} className={styles.item}>
          <p>
            <strong>{p.name}</strong> ({p.year}): {p.tagline}.{" "}
            <span className="muted">
              {p.stack.join(", ")}
              {p.link && (
                <>
                  {" · "}
                  <a href={p.link}>{displayUrl(p.link)}</a>
                </>
              )}
            </span>
          </p>
          <ul>
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </article>
      ))}

      <h2>Experience</h2>
      {r.experience.map((job) => (
        <article key={`${job.company}-${job.period}`} className={styles.item}>
          <div className="row">
            <h3>
              {job.title}, {job.company}, {job.place}
            </h3>
            <span className="muted">{job.period}</span>
          </div>
          <ul>
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
      ))}

      <h2>Skills</h2>
      {r.skills.map((s) => (
        <p key={s.group} className={styles.line}>
          <strong>{s.group}:</strong> {s.items.join(", ")}
        </p>
      ))}

      <h2>Spoken languages</h2>
      <p>{r.spokenLanguages.join(", ")}</p>
    </main>
  );
}
