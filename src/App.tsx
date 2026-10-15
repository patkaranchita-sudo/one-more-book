import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { AttachImageModal } from './components/AttachImageModal';
import { ArticleEditorModal } from './components/ArticleEditorModal';
import { ImageLightbox } from './components/ImageLightbox';
import { Footer } from './components/Footer';
import { Article, ArticleImageAttachment } from './types';
import { INITIAL_ARTICLES } from './data/initialArticles';
import { BookOpen, Paperclip, Plus, Sparkles, Filter } from 'lucide-react';

const STORAGE_KEY = 'one_more_book_articles_v1';

export default function App() {
  // Articles state initialized from localStorage or defaults
  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load articles from storage', e);
    }
    return INITIAL_ARTICLES;
  });

  // Save to localStorage whenever articles change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    } catch (e) {
      console.error('Failed to persist articles', e);
    }
  }, [articles]);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [onlyIllustrated, setOnlyIllustrated] = useState(false);
  const [sortBy, setSortBy] = useState<'recent' | 'readTime' | 'images'>('recent');

  // Modals state
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);
  const [attachModalOpen, setAttachModalOpen] = useState(false);
  const [attachArticleId, setAttachArticleId] = useState<number | string | null>(null);

  const [editorModalOpen, setEditorModalOpen] = useState(false);
  const [articleToEdit, setArticleToEdit] = useState<Article | null>(null);

  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageUrl: string;
    caption: string;
    credit?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    caption: '',
    credit: '',
  });

  // Keep reading modal in sync if the open article is updated (e.g. image attached while reading)
  useEffect(() => {
    if (readingArticle) {
      const updated = articles.find((a) => a.id === readingArticle.id);
      if (updated) {
        setReadingArticle(updated);
      }
    }
  }, [articles]);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => set.add(a.category));
    return ['all', ...Array.from(set)];
  }, [articles]);

  // Filtered & sorted articles
  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        const query = searchQuery.toLowerCase().trim();
        const matchesQuery =
          !query ||
          article.title.toLowerCase().includes(query) ||
          article.author.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          (article.seoKeywords && article.seoKeywords.toLowerCase().includes(query)) ||
          article.category.toLowerCase().includes(query);

        const matchesCategory =
          selectedCategory === 'all' || article.category === selectedCategory;

        const matchesIllustrated =
          !onlyIllustrated || (article.attachments && article.attachments.length > 0);

        return matchesQuery && matchesCategory && matchesIllustrated;
      })
      .sort((a, b) => {
        if (sortBy === 'images') {
          return (b.attachments?.length || 0) - (a.attachments?.length || 0);
        }
        if (sortBy === 'readTime') {
          const numA = parseInt(a.readTime, 10) || 5;
          const numB = parseInt(b.readTime, 10) || 5;
          return numB - numA;
        }
        // Recent default
        return (b.createdAt || 0) - (a.createdAt || 0);
      });
  }, [articles, searchQuery, selectedCategory, onlyIllustrated, sortBy]);

  // Aggregate stats
  const totalAttachments = useMemo(() => {
    return articles.reduce((acc, art) => acc + (art.attachments?.length || 0), 0);
  }, [articles]);

  const illustratedArticlesCount = useMemo(() => {
    return articles.filter((a) => a.attachments && a.attachments.length > 0).length;
  }, [articles]);

  // --- Handlers ---
  const handleOpenAttachForArticle = (article: Article) => {
    setAttachArticleId(article.id);
    setAttachModalOpen(true);
  };

  const handleOpenGeneralAttachModal = () => {
    setAttachArticleId(articles[0]?.id || null);
    setAttachModalOpen(true);
  };

  const handleOpenNewArticle = () => {
    setArticleToEdit(null);
    setEditorModalOpen(true);
  };

  const handleOpenEditArticle = (article: Article) => {
    setArticleToEdit(article);
    setEditorModalOpen(true);
  };

  const handleAttachImage = (
    articleId: number | string,
    attachmentData: Omit<ArticleImageAttachment, 'id' | 'addedAt'>
  ) => {
    const newAttachment: ArticleImageAttachment = {
      ...attachmentData,
      id: `att-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      addedAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    setArticles((prev) =>
      prev.map((art) => {
        if (String(art.id) === String(articleId)) {
          const updatedAttachments = [...(art.attachments || []), newAttachment];
          const shouldUpdateCover =
            attachmentData.placement === 'cover' || !art.coverImage;

          return {
            ...art,
            coverImage: shouldUpdateCover ? attachmentData.url : art.coverImage,
            attachments: updatedAttachments,
          };
        }
        return art;
      })
    );
  };

  const handleRemoveAttachment = (articleId: number | string, attachmentId: string) => {
    setArticles((prev) =>
      prev.map((art) => {
        if (String(art.id) === String(articleId)) {
          const filtered = (art.attachments || []).filter((a) => a.id !== attachmentId);
          let newCover = art.coverImage;

          // If the removed attachment was the cover image, fallback to another attachment or default
          const removed = art.attachments?.find((a) => a.id === attachmentId);
          if (removed && removed.url === art.coverImage) {
            newCover = filtered[0]?.url || '/src/assets/images/literary_classic_manuscript_1792103094046.jpg';
          }

          return {
            ...art,
            coverImage: newCover,
            attachments: filtered,
          };
        }
        return art;
      })
    );
  };

  const handleSetCoverImage = (articleId: number | string, imageUrl: string) => {
    setArticles((prev) =>
      prev.map((art) => {
        if (String(art.id) === String(articleId)) {
          return {
            ...art,
            coverImage: imageUrl,
            attachments: (art.attachments || []).map((att) => ({
              ...att,
              placement: att.url === imageUrl ? 'cover' : att.placement,
            })),
          };
        }
        return art;
      })
    );
  };

  const handleSaveArticle = (savedArticle: Article) => {
    setArticles((prev) => {
      const existsIndex = prev.findIndex((a) => String(a.id) === String(savedArticle.id));
      if (existsIndex >= 0) {
        const copy = [...prev];
        copy[existsIndex] = savedArticle;
        return copy;
      } else {
        return [savedArticle, ...prev];
      }
    });
  };

  const handleResetToDefaults = () => {
    if (
      window.confirm(
        'Restore the original 10 classic literary essays and sample figures? Custom essays and attachments will be reset.'
      )
    ) {
      setArticles(INITIAL_ARTICLES);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleOpenLightbox = (imageUrl: string, caption: string, credit?: string) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      caption,
      credit,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar Header */}
      <Header
        onOpenNewArticle={handleOpenNewArticle}
        onOpenAttachModal={handleOpenGeneralAttachModal}
        onFilterIllustrated={() => {
          setOnlyIllustrated(true);
          const el = document.getElementById('reading-catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onResetToTop={() => {
          setSelectedCategory('all');
          setSearchQuery('');
          setOnlyIllustrated(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        illustratedCount={illustratedArticlesCount}
      />

      {/* Hero & Search/Filter Section */}
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
        onlyIllustrated={onlyIllustrated}
        onToggleOnlyIllustrated={() => setOnlyIllustrated((prev) => !prev)}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalArticles={articles.length}
        totalAttachments={totalAttachments}
        onOpenAttachModal={handleOpenGeneralAttachModal}
      />

      {/* Main Articles Catalog */}
      <main id="reading-catalog" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        {/* Active Filter Indicator bar */}
        {(selectedCategory !== 'all' || searchQuery || onlyIllustrated) && (
          <div className="mb-6 flex items-center justify-between p-3.5 bg-stone-100/70 border border-stone-200/80 rounded-xl text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-stone-500" />
              <span>
                Showing {filteredArticles.length} of {articles.length} essays
              </span>
              {selectedCategory !== 'all' && (
                <span className="font-semibold text-stone-900">
                  in {selectedCategory}
                </span>
              )}
              {onlyIllustrated && (
                <span className="font-semibold text-amber-900">
                  (Illustrated only)
                </span>
              )}
              {searchQuery && (
                <span className="italic text-stone-500">
                  matching &ldquo;{searchQuery}&rdquo;
                </span>
              )}
            </div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setOnlyIllustrated(false);
              }}
              className="text-xs font-medium text-stone-700 hover:text-stone-950 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Article Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onRead={setReadingArticle}
                onAttachImage={handleOpenAttachForArticle}
                onEdit={handleOpenEditArticle}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 p-8 max-w-lg mx-auto">
            <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              No essays found
            </h3>
            <p className="text-sm text-stone-500 mb-6 font-light">
              We couldn&apos;t find any literary essays matching your current search or genre filters.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setOnlyIllustrated(false);
                }}
                className="px-4 py-2 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
              <button
                onClick={handleOpenNewArticle}
                className="px-4 py-2 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition-colors"
              >
                + Write New Essay
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Reader Modal */}
      <ArticleReaderModal
        article={readingArticle}
        onClose={() => setReadingArticle(null)}
        onAttachImage={(art) => {
          setAttachArticleId(art.id);
          setAttachModalOpen(true);
        }}
        onEditArticle={(art) => {
          setReadingArticle(null);
          setArticleToEdit(art);
          setEditorModalOpen(true);
        }}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Attach Image Modal (Core User Feature) */}
      <AttachImageModal
        isOpen={attachModalOpen}
        onClose={() => setAttachModalOpen(false)}
        articles={articles}
        selectedArticleId={attachArticleId}
        onAttachImage={handleAttachImage}
        onRemoveAttachment={handleRemoveAttachment}
        onSetCoverImage={handleSetCoverImage}
      />

      {/* Compose / Edit Article Modal */}
      <ArticleEditorModal
        isOpen={editorModalOpen}
        onClose={() => setEditorModalOpen(false)}
        articleToEdit={articleToEdit}
        onSave={handleSaveArticle}
      />

      {/* Lightbox for Fullscreen Image Viewing */}
      <ImageLightbox
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox((prev) => ({ ...prev, isOpen: false }))}
        imageUrl={lightbox.imageUrl}
        caption={lightbox.caption}
        credit={lightbox.credit}
      />

      {/* Editorial Footer */}
      <Footer
        onResetToDefaults={handleResetToDefaults}
        onOpenNewArticle={handleOpenNewArticle}
        onOpenAttachModal={handleOpenGeneralAttachModal}
        totalArticles={articles.length}
      />
    </div>
  );
}
