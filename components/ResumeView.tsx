import Link from "next/link";
import { resume } from "@/data/resume";
import { getTemplateComponent, templateHref, templates, type TemplateId } from "@/components/templates";
import ThemeToggle from "./ThemeToggle";
import PrintButton from "./PrintButton";

export default function ResumeView({ id }: { id: TemplateId }) {
  const Template = getTemplateComponent(id);
  const fileName = `${resume.name.replace(/\s+/g, "_")}_Resume`;

  return (
    <>
      <div className="toolbar no-print">
        <nav className="templates" aria-label="Templates">
          {templates.map((t) => (
            <Link key={t.id} href={templateHref(t.id)} aria-current={t.id === id ? "page" : undefined}>
              {t.name}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
        <PrintButton fileName={fileName} />
      </div>
      <Template r={resume} />
    </>
  );
}
