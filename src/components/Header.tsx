import React from 'react';
import { Plus, BookOpen } from 'lucide-react';

interface HeaderProps {
  onOpenNewArticle: () => void;
  onOpenAttachModal: () => void;
  onFilterIllustrated: () => void;
  onResetToTop: () => void;
  illustratedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNewArticle,
  onOpenAttachModal,
  onFilterIllustrated,
  onResetToTop,
  illustratedCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in Cormorant Garamond display face) */}
        <button
          onClick={onResetToTop}
          className="text-left group cursor-pointer focus:outline-none"
          aria-label="One More Book Home"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-2xl select-none" aria-hidden="true">📖</span>
            <span className="font-serif font-bold text-2xl tracking-tight text-stone-900 whitespace-nowrap shrink-0 group-hover:text-amber-900 transition-colors">
              One More Book
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={onResetToTop}
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 focus:outline-none"
          >
            Essays
          </button>
          <a
            href="#reading-catalog"
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
          >
            Catalog
          </a>
          <button
            onClick={onFilterIllustrated}
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 focus:outline-none flex items-center gap-1.5"
          >
            <span>Illustrated Editions</span>
            <span className="text-xs text-stone-400 font-mono">({illustratedCount})</span>
          </button>
          <button
            onClick={onOpenAttachModal}
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 focus:outline-none"
          >
            Media Attachments
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenNewArticle}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-stone-400"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Write Essay</span>
          </button>
        </div>
      </div>
    </header>
  );
};
