import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ResumeView from "@/components/ResumeView";
import { getTemplate, isTemplateId, templates } from "@/components/templates";

type Props = { params: Promise<{ template: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  // "classic" lives at "/", so it does not need a second page
  return templates.filter((t) => t.id !== "classic").map((t) => ({ template: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { template } = await params;
  return { title: `${getTemplate(template)?.name ?? "Resume"} template` };
}

export default async function TemplatePage({ params }: Props) {
  const { template } = await params;
  if (!isTemplateId(template)) notFound();
  return <ResumeView id={template} />;
}
