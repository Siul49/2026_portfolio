import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-xs font-mono border border-deep-navy/20 px-2.5 py-1 rounded-full text-deep-navy",
        className
      )}
    >
      {children}
    </span>
  );
}
