"use client";

interface BrowserFrameProps {
  title: string;
  openInNewTabUrl?: string;
  children: React.ReactNode;
}

export default function BrowserFrame({ title, openInNewTabUrl, children }: BrowserFrameProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-grid-line bg-white shadow-lg">
      <div className="flex h-8 w-full items-center border-b border-neutral-200 bg-neutral-100 px-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <span className="mx-auto font-mono text-xs text-neutral-600">{title}</span>
        {openInNewTabUrl && (
          <a
            href={openInNewTabUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-neutral-500 transition-colors duration-300 hover:text-deep-navy"
          >
            OPEN ↗
          </a>
        )}
      </div>
      {children}
    </div>
  );
}
