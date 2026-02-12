import { cn } from "../../lib/utils";

interface MetaItem {
  label: string;
  value: string;
}

interface ProjectMetaProps {
  items: MetaItem[];
  className?: string;
}

export default function ProjectMeta({ items, className }: ProjectMetaProps) {
  return (
    <div className={cn("flex flex-col gap-4 font-mono text-sm text-neutral-400", className)}>
      {items.map((item) => (
        <div
          key={item.label}
          className="flex justify-between border-b border-neutral-100 pb-2"
        >
          <span>{item.label}</span>
          <span className="text-deep-navy">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
