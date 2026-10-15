import React, { useState } from 'react';
import {
  X,
  Paperclip,
  Edit3,
  Share2,
  Maximize2,
  Bookmark,
  BookOpen,
  ZoomIn,
  Type,
  Sun,
  Moon,
  Coffee,
  Check,
  Link as LinkIcon
} from 'lucide-react';
import { Article, ArticleImageAttachment } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  onAttachImage: (article: Article) => void;
  onEditArticle: (article: Article) => void;
  onOpenLightbox: (imageUrl: string, caption: string, credit?: string) => void;
  onNavigateSlug?: (slug: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  onAttachImage,
  onEditArticle,
  onOpenLightbox,
  onNavigateSlug,
}) => {
  const [fontSize, setFontSize] = useState<'md' | 'lg' | 'xl'>('lg');
  const [readingTheme, setReadingTheme] = useState<'parchment' | 'pure' | 'dark'>('parchment');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'read' | 'attachments' | 'seo'>('read');

  if (!article) return null;

  const articleUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/article/${article.slug}`
    : `/article/${article.slug}`;

  const inBodyAttachments = article.attachments?.filter(
    (att) => att.placement === 'in-body' || att.placement === 'full-width'
  ) || [];

  const galleryAttachments = article.attachments?.filter(
    (att) => att.placement === 'gallery'
  ) || [];

  const allAttachments = article.attachments || [];

  const getThemeClasses = () => {
    switch (readingTheme) {
      case 'dark':
        return 'bg-stone-900 text-stone-100';
      case 'pure':
        return 'bg-white text-stone-900';
      case 'parchment':
      default:
        return 'bg-[#FAF8F5] text-stone-900';
    }
  };

  const getProseThemeClasses = () => {
    switch (readingTheme) {
      case 'dark':
        return 'text-stone-300';
      case 'pure':
      case 'parchment':
      default:
        return 'text-stone-800';
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'md':
        return 'text-base leading-relaxed';
      case 'xl':
        return 'text-xl leading-loose';
      case 'lg':
      default:
        return 'text-lg leading-relaxed';
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div
        className={`w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-stone-300/40 my-auto transition-colors duration-200 ${getThemeClasses()}`}
      >
        {/* Sticky Top Reading Bar */}
        <div className="sticky top-0 z-30 px-6 py-3.5 border-b border-stone-200/60 flex items-center justify-between gap-4 bg-inherit/90 backdrop-blur-md">
          {/* Left: View Mode Tabs */}
          <div className="flex items-center gap-1 text-xs font-medium">
            <button
              onClick={() => setActiveTab('read')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'read'
                  ? 'bg-stone-200/80 text-stone-900 font-semibold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Essay
            </button>
            <button
              onClick={() => setActiveTab('attachments')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'attachments'
                  ? 'bg-stone-200/80 text-stone-900 font-semibold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <Paperclip className="w-3 h-3" />
              <span>Images ({allAttachments.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'seo'
                  ? 'bg-stone-200/80 text-stone-900 font-semibold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Metadata
            </button>
          </div>

          {/* Right: Reading Adjustments & Actions */}
          <div className="flex items-center gap-2">
            {/* Theme selector */}
            <div className="hidden sm:flex items-center p-0.5 rounded-md bg-stone-200/50 text-stone-600">
              <button
                onClick={() => setReadingTheme('parchment')}
                className={`p-1.5 rounded ${readingTheme === 'parchment' ? 'bg-white shadow-xs text-stone-900' : 'hover:text-stone-900'}`}
                title="Parchment paper"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setReadingTheme('pure')}
                className={`p-1.5 rounded ${readingTheme === 'pure' ? 'bg-white shadow-xs text-stone-900' : 'hover:text-stone-900'}`}
                title="Pure white"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setReadingTheme('dark')}
                className={`p-1.5 rounded ${readingTheme === 'dark' ? 'bg-stone-800 text-stone-100' : 'hover:text-stone-900'}`}
                title="Night dark"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Font family toggle */}
            <button
              onClick={() => setFontFamily(fontFamily === 'serif' ? 'sans' : 'serif')}
              className="p-1.5 text-xs font-semibold px-2 rounded-md bg-stone-200/50 hover:bg-stone-200 text-stone-700 transition-colors hidden sm:block"
              title="Toggle Serif/Sans prose"
            >
              {fontFamily === 'serif' ? 'Serif' : 'Sans'}
            </button>

            {/* Font size toggle */}
            <button
              onClick={() => {
                if (fontSize === 'md') setFontSize('lg');
                else if (fontSize === 'lg') setFontSize('xl');
                else setFontSize('md');
              }}
              className="p-1.5 text-xs font-mono px-2 rounded-md bg-stone-200/50 hover:bg-stone-200 text-stone-700 transition-colors"
              title="Adjust text size"
            >
              A{fontSize === 'xl' ? '++' : fontSize === 'lg' ? '+' : ''}
            </button>

            {/* Attach Image button */}
            <button
              onClick={() => onAttachImage(article)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-stone-900 text-white hover:bg-stone-800 rounded-md transition-colors"
              title="Attach new image to this essay"
            >
              <Paperclip className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Attach Image</span>
            </button>

            {/* Edit button */}
            <button
              onClick={() => onEditArticle(article)}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-md transition-colors"
              title="Edit Essay"
              aria-label="Edit Essay"
            >
              <Edit3 className="w-4 h-4" />
            </button>

            {/* Share / Copy */}
            <button
              onClick={handleCopyLink}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-md transition-colors"
              title="Copy share link"
              aria-label="Copy share link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-md transition-colors ml-1"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-12 md:px-16 py-8">
          {activeTab === 'read' && (
            <div className="max-w-2xl mx-auto space-y-8">
              {/* Header Title & Byline */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-stone-500">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{article.wordCount}</span>
                </div>

                {/* Dedicated URL Permalink Strip */}
                <div className="flex items-center justify-between text-xs text-stone-500 bg-stone-100/80 dark:bg-stone-800/80 px-3.5 py-2 rounded-lg border border-stone-200/60 dark:border-stone-700/60">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] truncate">
                    <LinkIcon className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="text-stone-400">URL:</span>
                    <span className="text-stone-800 dark:text-stone-200 font-semibold truncate">
                      /article/{article.slug}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="ml-3 px-2.5 py-1 text-[11px] font-sans font-medium text-stone-700 dark:text-stone-200 hover:text-stone-900 bg-white dark:bg-stone-700 rounded border border-stone-200/80 dark:border-stone-600 shadow-xs transition-colors shrink-0 flex items-center gap-1"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">URL Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3 h-3 text-stone-500" />
                        <span>Copy Article URL</span>
                      </>
                    )}
                  </button>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-inherit leading-[1.15]">
                  {article.title}
                </h1>

                {article.subtitle && (
                  <p className="text-lg font-serif italic text-stone-500 leading-relaxed">
                    {article.subtitle}
                  </p>
                )}

                <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-sans uppercase tracking-wider font-medium">
                    By {article.author}
                  </span>
                  <span>
                    {allAttachments.length} {allAttachments.length === 1 ? 'figure' : 'figures'} attached
                  </span>
                </div>
              </div>

              {/* Primary Cover Image Plate */}
              <div className="my-8 rounded-xl overflow-hidden border border-stone-200/80 shadow-xs bg-stone-100 group relative">
                <div
                  className="aspect-[16/10] overflow-hidden cursor-zoom-in"
                  onClick={() =>
                    onOpenLightbox(
                      article.coverImage,
                      `Cover: ${article.title}`,
                      article.author
                    )
                  }
                >
                  <ImageWithFallback
                    src={article.coverImage}
                    alt={article.title}
                    category={article.category}
                    fallbackTitle={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-stone-50/80 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-600">
                  <span className="font-serif italic truncate">
                    {article.attachments?.[0]?.caption || `Plate 1: Primary cover illustration for ${article.title}`}
                  </span>
                  <span className="text-[11px] font-sans text-stone-400 shrink-0 ml-3">
                    {article.attachments?.[0]?.credit || 'Collection Archive'}
                  </span>
                </div>
              </div>

              {/* Prose Content */}
              <div
                className={`prose max-w-none ${
                  fontFamily === 'serif' ? 'font-serif' : 'font-sans'
                } ${getFontSizeClass()} ${getProseThemeClasses()} [&_p]:mb-6 [&_p]:font-light [&_p]:leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:font-serif [&_blockquote]:border-l-2 [&_blockquote]:border-stone-400 [&_blockquote]:pl-4 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-stone-600 dark:[&_blockquote]:text-stone-300`}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* In-Body Attached Figures */}
              {inBodyAttachments.length > 0 && (
                <div className="my-10 space-y-8 pt-6 border-t border-stone-200/60">
                  <h3 className="text-xs font-sans uppercase tracking-widest text-stone-400 text-center">
                    Attached In-Text Figures
                  </h3>
                  {inBodyAttachments.map((att, idx) => (
                    <figure
                      key={att.id || idx}
                      className="rounded-xl overflow-hidden border border-stone-200/80 bg-stone-50/50"
                    >
                      <div
                        onClick={() => onOpenLightbox(att.url, att.caption, att.credit)}
                        className="cursor-zoom-in group relative aspect-[16/9] overflow-hidden bg-stone-100"
                      >
                        <ImageWithFallback
                          src={att.url}
                          alt={att.alt}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute bottom-2 right-2 p-1.5 bg-black/60 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>
                      <figcaption className="p-3 text-xs text-stone-600 flex items-center justify-between border-t border-stone-200/60">
                        <span className="font-serif italic">{att.caption}</span>
                        {att.credit && (
                          <span className="text-[11px] text-stone-400 ml-3 shrink-0">
                            Credit: {att.credit}
                          </span>
                        )}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {/* Attached Media Gallery Section */}
              {galleryAttachments.length > 0 && (
                <div className="my-10 pt-6 border-t border-stone-200/60 space-y-4">
                  <h3 className="text-xs font-sans uppercase tracking-widest text-stone-400">
                    Curatorial Gallery Plates
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {galleryAttachments.map((att, idx) => (
                      <div
                        key={att.id || idx}
                        onClick={() => onOpenLightbox(att.url, att.caption, att.credit)}
                        className="group cursor-zoom-in rounded-lg overflow-hidden border border-stone-200 bg-stone-50"
                      >
                        <div className="aspect-[4/3] bg-stone-100 overflow-hidden">
                          <ImageWithFallback
                            src={att.url}
                            alt={att.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <p className="p-2 text-[11px] font-serif italic text-stone-600 truncate">
                          {att.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Attach Image Footer banner */}
              <div className="mt-12 p-6 rounded-xl border border-stone-200 bg-stone-100/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-semibold text-stone-900 text-lg">
                    Have an archival image or diagram for this essay?
                  </h4>
                  <p className="text-xs text-stone-600">
                    Attach reference plates, manuscripts, or book covers directly into this article.
                  </p>
                </div>
                <button
                  onClick={() => onAttachImage(article)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm whitespace-nowrap active:scale-95 transition-all"
                >
                  <Paperclip className="w-3.5 h-3.5" />
                  <span>Attach Image Now</span>
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Full Media Attachments List */}
          {activeTab === 'attachments' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">
                    Attached Media Assets ({allAttachments.length})
                  </h2>
                  <p className="text-xs text-stone-500">
                    All images, figures, and illustrations attached to &ldquo;{article.title}&rdquo;
                  </p>
                </div>
                <button
                  onClick={() => onAttachImage(article)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg"
                >
                  <Paperclip className="w-3.5 h-3.5" />
                  <span>Attach Image</span>
                </button>
              </div>

              {allAttachments.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {allAttachments.map((att, idx) => {
                    const isCover = article.coverImage === att.url;
                    return (
                      <div
                        key={att.id || idx}
                        className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                      >
                        <div
                          onClick={() => onOpenLightbox(att.url, att.caption, att.credit)}
                          className="aspect-[16/10] bg-stone-100 overflow-hidden cursor-zoom-in relative group"
                        >
                          <ImageWithFallback
                            src={att.url}
                            alt={att.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                          {isCover && (
                            <span className="absolute top-2 left-2 text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-stone-900 text-white">
                              Cover Image
                            </span>
                          )}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                            <ZoomIn className="w-6 h-6" />
                          </div>
                        </div>

                        <div className="p-3">
                          <p className="text-xs font-serif font-semibold text-stone-900 line-clamp-2 mb-1">
                            {att.caption || `Figure ${idx + 1}`}
                          </p>
                          <div className="flex items-center justify-between text-[11px] text-stone-500">
                            <span className="capitalize">{att.placement}</span>
                            <span>{att.fileSize || 'Standard Asset'}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16 border border-dashed border-stone-300 rounded-xl p-8">
                  <Paperclip className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                  <p className="text-sm font-medium text-stone-700">No images attached yet</p>
                  <p className="text-xs text-stone-500 mb-4">
                    Attach photos, sketches, or reference covers to this article.
                  </p>
                  <button
                    onClick={() => onAttachImage(article)}
                    className="px-4 py-2 text-xs font-semibold bg-stone-900 text-white rounded-lg hover:bg-stone-800"
                  >
                    Attach Image
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: SEO & Curatorial Metadata */}
          {activeTab === 'seo' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-1">
                  Catalog & Metadata Inspector
                </h2>
                <p className="text-xs text-stone-500">
                  Structured accession records, word metrics, and search engine optimization keywords
                </p>
              </div>

              <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 space-y-4">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <dt className="text-stone-400 font-sans uppercase tracking-wider font-semibold">
                      Author / Origin
                    </dt>
                    <dd className="font-serif text-stone-900 text-sm mt-0.5">{article.author}</dd>
                  </div>
                  <div>
                    <dt className="text-stone-400 font-sans uppercase tracking-wider font-semibold">
                      Literary Category
                    </dt>
                    <dd className="text-stone-900 text-sm mt-0.5">{article.category}</dd>
                  </div>
                  <div>
                    <dt className="text-stone-400 font-sans uppercase tracking-wider font-semibold">
                      Publication Date
                    </dt>
                    <dd className="text-stone-900 text-sm mt-0.5">{article.date}</dd>
                  </div>
                  <div>
                    <dt className="text-stone-400 font-sans uppercase tracking-wider font-semibold">
                      Reading Cadence
                    </dt>
                    <dd className="text-stone-900 text-sm mt-0.5">{article.readTime} ({article.wordCount})</dd>
                  </div>
                </dl>

                <div className="pt-4 border-t border-stone-200">
                  <span className="block text-xs font-sans uppercase tracking-wider font-semibold text-stone-400 mb-1">
                    SEO Keywords & Search Indexing:
                  </span>
                  <p className="font-mono text-xs text-stone-600 bg-white p-3 rounded border border-stone-200">
                    {article.seoKeywords || 'No keywords defined'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
