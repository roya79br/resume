import Link from "next/link";
import type { TemplateProps } from "./types";
import { ContactItems, JobBody, ProjectBody, TagList } from "@/components/parts";

export default function Bold({ r }: TemplateProps) {
  return (
    <main className="page t-bold">
      <header className="b-band">
        <h1>{r.name}</h1>
        <p className="b-role">{r.role}</p>
        <ul className="b-contact">
          <li>{r.location}</li>
          <ContactItems contact={r.contact} />
        </ul>
      </header>

      <div className="b-body">
        <p className="b-lead">{r.summary}</p>

        <section>
          <h2>Skills</h2>
          {r.skills.map((s) => (
            <div key={s.group} className="b-skill">
              <strong>{s.group}:</strong>
              <TagList items={s.items} />
            </div>
          ))}
        </section>

        <div className="b-cols">
          <section>
            <h2>Projects</h2>
            {r.projects.map((p) => (
              <article key={p.slug} className="b-card">
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
                <article key={`${job.company}-${job.period}`} className="b-job">
                  <div className="row">
                    <h3>{job.title}</h3>
                    <span className="b-date">{job.period}</span>
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
