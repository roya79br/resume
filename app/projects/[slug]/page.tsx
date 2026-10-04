import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { resume } from "@/data/resume";
import { TagList } from "@/components/parts";

type Props = { params: Promise<{ slug: string }> };

// Every project page is built ahead of time
export const dynamicParams = false;
export function generateStaticParams() {
  return resume.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = resume.projects.find((p) => p.slug === slug);
  return { title: project?.name ?? "Project", description: project?.tagline };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = resume.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="page">
      <p><Link href="/">← Back to resume</Link></p>
      <h1>{project.name}</h1>
      <p className="role">{project.tagline}</p>
      <p className="muted">{project.year}</p>
      <div style={{ margin: "14px 0" }}>
        <TagList items={project.stack} />
      </div>
      <p className="summary">{project.description}</p>
      <h2>Highlights</h2>
      <ul className="plain">
        {project.highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      {project.link && <p style={{ marginTop: 16 }}><a href={project.link}>Open project</a></p>}
    </main>
  );
}
