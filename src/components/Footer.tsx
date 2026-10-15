import React from 'react';
import { ArrowUp, BookOpen, Paperclip, Plus } from 'lucide-react';

interface FooterProps {
  onResetToDefaults: () => void;
  onOpenNewArticle: () => void;
  onOpenAttachModal: () => void;
  totalArticles: number;
}

export const Footer: React.FC<FooterProps> = ({
  onResetToDefaults,
  onOpenNewArticle,
  onOpenAttachModal,
  totalArticles,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl" aria-hidden="true">📖</span>
              <span className="font-serif font-bold text-2xl text-white tracking-tight">
                One More Book
              </span>
            </div>
            <p className="text-xs font-sans uppercase tracking-widest text-stone-400">
              Literary Journal & Article Attachment Studio
            </p>
            <p className="text-sm font-light text-stone-400 max-w-md leading-relaxed">
              Dedicated to slow, immersive literary reading. An open editorial space to study
              masterpieces, critique classics, and attach high-resolution manuscripts, artwork, and
              photographic plates to every essay.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-widest text-stone-200 font-semibold">
              Editorial Studio
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={onOpenNewArticle}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Write New Essay</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAttachModal}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Paperclip className="w-3.5 h-3.5" />
                  <span>Attach Image to Article</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onResetToDefaults}
                  className="hover:text-stone-300 transition-colors text-stone-500 underline"
                  title="Restore original 10 classic essays"
                >
                  Reset Default Essays ({totalArticles})
                </button>
              </li>
            </ul>
          </div>

          {/* Curatorial Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-widest text-stone-200 font-semibold">
              Archival Standards
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              All images and figures are preserved with semantic accession metadata, figure numbers,
              and museum credit attributions for seamless scholarly reference.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-amber-200/80 hover:text-amber-200 transition-colors mt-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top of Journal</span>
            </button>
          </div>
        </div>

        {/* Quiet Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <p>© 2026 One More Book. All literary essays, reviews, and attached visual plates curated for readers.</p>
          <p className="font-mono text-[11px] text-stone-600">Archival Edition · Ready for Production</p>
        </div>
      </div>
    </footer>
  );
};
