import Link from "next/link";
import type { TemplateProps } from "./types";
import { ContactItems, JobBody, ProjectBody, TagList } from "@/components/parts";

export default function Classic({ r }: TemplateProps) {
  return (
    <main className="page t-classic">
      <header className="head">
        <div>
          <h1>{r.name}</h1>
          <p className="role">{r.role}</p>
          <p className="muted">{r.location}</p>
        </div>
        <ul className="contact">
          <ContactItems contact={r.contact} />
        </ul>
      </header>

      <p className="summary">{r.summary}</p>

      <div className="grid">
        <div>
          <section>
            <h2>Projects</h2>
            {r.projects.map((p) => (
              <article className="project" key={p.slug}>
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
          <section>
            <h2>Experience</h2>
            {r.experience.map((job) => (
              <article className="job" key={`${job.company}-${job.period}`}>
                <p className="years">{job.period}</p>
                <div>
                  <h3>{job.title}</h3>
                  <JobBody job={job} />
                </div>
              </article>
            ))}
          </section>
        </div>
        <aside>
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
            <h2>Skills</h2>
            {r.skills.map((s) => (
              <div className="skill" key={s.group}>
                <h3>{s.group}</h3>
                <TagList items={s.items} />
              </div>
            ))}
          </section>
          <section>
            <h2>Spoken languages</h2>
            <p>{r.spokenLanguages.join(" · ")}</p>
          </section>
        </aside>
      </div>
    </main>
  );
}
