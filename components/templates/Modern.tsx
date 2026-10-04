import Link from "next/link";
import type { TemplateProps } from "./types";
import { ContactItems, JobBody, ProjectBody } from "@/components/parts";
import styles from "./Modern.module.css";

// The main column comes first in the HTML (better reading order for screen readers and ATS).
// CSS moves the sidebar to the left.
export default function Modern({ r }: TemplateProps) {
  return (
    <main className={`page ${styles.root}`}>
      <div className={styles.main}>
        <h1>{r.name}</h1>
        <p className="role">{r.role}</p>
        <p className="summary">{r.summary}</p>

        <h2>Projects</h2>
        {r.projects.map((p) => (
          <article key={p.slug} className={styles.job}>
            <div className="row">
              <h3>
                <Link href={`/projects/${p.slug}`}>{p.name}</Link>
              </h3>
              <span className="muted">{p.year}</span>
            </div>
            <ProjectBody p={p} />
          </article>
        ))}

        <h2>Experience</h2>
        {r.experience.map((job) => (
          <article key={`${job.company}-${job.period}`} className={styles.job}>
            <div className="row">
              <h3>{job.title}</h3>
              <span className="muted">{job.period}</span>
            </div>
            <JobBody job={job} />
          </article>
        ))}
      </div>

      <aside className={styles.side}>
        <h2>Contact</h2>
        <ul>
          <li>{r.location}</li>
          <ContactItems contact={r.contact} />
        </ul>

        <h2>Education</h2>
        {r.education.map((e) => (
          <div key={e.degree}>
            <h3>{e.degree}</h3>
            <p>
              {e.school}, {e.period}
            </p>
          </div>
        ))}

        <h2>Skills</h2>
        {r.skills.map((s) => (
          <div key={s.group}>
            <h3>{s.group}</h3>
            <p>{s.items.join(", ")}</p>
          </div>
        ))}

        <h2>Spoken languages</h2>
        <ul>
          {r.spokenLanguages.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
