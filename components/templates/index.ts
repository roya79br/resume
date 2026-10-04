import type { ComponentType } from "react";
import Classic from "./Classic";
import Modern from "./Modern";
import Compact from "./Compact";
import Bold from "./Bold";
import type { TemplateProps } from "./types";

export type { TemplateProps };

// One place that connects an id to its component.
// `satisfies` checks the shape but keeps the exact keys, so TemplateId is derived from here.
const components = {
  classic: Classic,
  modern: Modern,
  compact: Compact,
  bold: Bold,
} satisfies Record<string, ComponentType<TemplateProps>>;

export type TemplateId = keyof typeof components;

// The order here is the order of the buttons
export const templates: { id: TemplateId; name: string }[] = [
  { id: "classic", name: "Classic" },
  { id: "modern", name: "Modern" },
  { id: "compact", name: "Compact" },
  { id: "bold", name: "Bold" },
];

export function isTemplateId(id: string): id is TemplateId {
  return Object.hasOwn(components, id);
}

export function getTemplate(id: string) {
  return templates.find((t) => t.id === id);
}

export function getTemplateComponent(id: TemplateId): ComponentType<TemplateProps> {
  return components[id];
}

// Classic is the home page, the others live under /templates
export function templateHref(id: TemplateId) {
  return id === "classic" ? "/" : `/templates/${id}`;
}