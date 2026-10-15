import React from 'react';
import { Paperclip, BookOpen, Edit3, ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ArticleCardProps {
  article: Article;
  onRead: (article: Article) => void;
  onAttachImage: (article: Article) => void;
  onEdit: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onRead,
  onAttachImage,
  onEdit,
}) => {
  const attachmentCount = article.attachments?.length || 0;

  return (
    <article className="group bg-white rounded-xl border border-stone-200/90 hover:border-stone-300 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md">
      <div>
        {/* Cover Image Container */}
        <div
          onClick={() => onRead(article)}
          className="relative aspect-[16/10] overflow-hidden bg-stone-100 cursor-pointer"
        >
          <ImageWithFallback
            src={article.coverImage}
            alt={article.title}
            category={article.category}
            fallbackTitle={article.title}
            className="w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />

          {/* Quiet Category & Attachment Overlay in corner */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-stone-900 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded shadow-xs">
              {article.category}
            </span>

            {attachmentCount > 0 && (
              <span className="inline-flex items-center gap-1 text-[11px] font-sans font-medium text-stone-800 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-xs">
                <Paperclip className="w-3 h-3 text-stone-600" />
                <span>{attachmentCount} {attachmentCount === 1 ? 'image' : 'images'}</span>
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Metadata Row: Clean unboxed typography with typographic dots */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-stone-400">{article.wordCount}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onRead(article)}
            className="font-serif text-2xl font-semibold text-stone-900 group-hover:text-amber-950 transition-colors leading-snug mb-2 cursor-pointer"
          >
            {article.title}
          </h3>

          {/* Byline */}
          <p className="text-xs font-sans uppercase tracking-widest text-stone-500 mb-3">
            By {article.author}
          </p>

          {/* Excerpt */}
          <p className="text-sm font-sans text-stone-600 font-light leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 py-4 border-t border-stone-100 flex items-center justify-between gap-2 bg-stone-50/50">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onAttachImage(article)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-200/80 rounded transition-colors"
            title="Attach a new image to this article"
          >
            <Paperclip className="w-3.5 h-3.5 text-stone-500" />
            <span>Attach Image</span>
          </button>
          
          <button
            onClick={() => onEdit(article)}
            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-white rounded transition-colors"
            title="Edit essay"
            aria-label="Edit essay"
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={() => onRead(article)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 group-hover:text-amber-900 hover:underline transition-all"
        >
          <span>Read Essay</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
};
