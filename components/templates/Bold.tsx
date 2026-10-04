import Link from "next/link";
import type { TemplateProps } from "./types";
import { ContactItems, JobBody, ProjectBody, TagList } from "@/components/parts";
import styles from "./Bold.module.css";

export default function Bold({ r }: TemplateProps) {
  return (
    <main className={`page ${styles.root}`}>
      <header className={styles.band}>
        <h1>{r.name}</h1>
        <p className={styles.role}>{r.role}</p>
        <ul className={styles.contact}>
          <li>{r.location}</li>
          <ContactItems contact={r.contact} />
        </ul>
      </header>

      <div className={styles.body}>
        <p className={styles.lead}>{r.summary}</p>

        <section>
          <h2>Skills</h2>
          {r.skills.map((s) => (
            <div key={s.group} className={styles.skill}>
              <strong>{s.group}:</strong>
              <TagList items={s.items} />
            </div>
          ))}
        </section>

        <div className={styles.cols}>
          <section>
            <h2>Projects</h2>
            {r.projects.map((p) => (
              <article key={p.slug} className={styles.card}>
                <div className="row">
                  <h3>
                    <Link href={`/projects/${p.slug}`}>{p.name}</Link>
                  </h3>
                  <span className="muted">{p.year}</span>
                </div>
                <ProjectBody p={p} />
              </article>
            ))}
          </section>

          <div>
            <section>
              <h2>Experience</h2>
              {r.experience.map((job) => (
                <article key={`${job.company}-${job.period}`} className={styles.job}>
                  <div className="row">
                    <h3>{job.title}</h3>
                    <span className={styles.date}>{job.period}</span>
                  </div>
                  <JobBody job={job} />
                </article>
              ))}
            </section>

            <section>
              <h2>Education</h2>
              {r.education.map((e) => (
                <div key={e.degree}>
                  <h3>{e.degree}</h3>
                  <p className="muted">
                    {e.school}, {e.period}
                  </p>
                </div>
              ))}
            </section>

            <section>
              <h2>Spoken languages</h2>
              <p>{r.spokenLanguages.join(" · ")}</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
