"use client";

interface BrowserFrameProps {
  title: string;
  openInNewTabUrl?: string;
  children: React.ReactNode;
}

export default function BrowserFrame({ title, openInNewTabUrl, children }: BrowserFrameProps) {
  return (
    <div className="w-full border border-grid-line rounded-lg overflow-hidden bg-white shadow-lg relative">
      <div className="w-full bg-neutral-100 h-8 flex items-center px-4 border-b border-neutral-200">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="mx-auto text-xs text-neutral-500 font-mono">{title}</span>
        {openInNewTabUrl && (
          <a
            href={openInNewTabUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-400 hover:text-neutral-600 font-mono"
          >
            ↗
          </a>
        )}
      </div>
      {children}
    </div>
  );
}
