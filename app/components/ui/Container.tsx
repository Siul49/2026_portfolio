import { cn } from "../../lib/utils";

type ContainerSize = "default" | "narrow" | "tight" | "wide";

const sizeMap: Record<ContainerSize, string> = {
  wide: "max-w-7xl",
  default: "max-w-5xl",
  narrow: "max-w-4xl",
  tight: "max-w-sm",
};

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section" | "article" | "footer";
  id?: string;
}

export default function Container({
  size = "default",
  className,
  children,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={cn(sizeMap[size], "mx-auto px-8", className)}>
      {children}
    </Tag>
  );
}
