import React from 'react';
import { Search, SlidersHorizontal, Paperclip, Sparkles, BookOpen, Layers } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  categories: string[];
  onlyIllustrated: boolean;
  onToggleOnlyIllustrated: () => void;
  sortBy: 'recent' | 'readTime' | 'images';
  onSortChange: (sort: 'recent' | 'readTime' | 'images') => void;
  totalArticles: number;
  totalAttachments: number;
  onOpenAttachModal: () => void;
  onOpenSeoChecklist?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  onlyIllustrated,
  onToggleOnlyIllustrated,
  sortBy,
  onSortChange,
  totalArticles,
  totalAttachments,
  onOpenAttachModal,
  onOpenSeoChecklist,
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
      {/* Top Quiet Curatorial Kicker & Stats */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border-b border-stone-200/80 pb-4">
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-stone-500">
          <span>Vol. VIII</span>
          <span aria-hidden="true">·</span>
          <span>Literary Journal</span>
          <span aria-hidden="true">·</span>
          <span className="text-stone-900 font-semibold">{totalArticles} Curated Essays</span>
        </div>

        <div className="flex items-center gap-3">
          {onOpenSeoChecklist && (
            <button
              onClick={onOpenSeoChecklist}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
              title="View the 10-point page SEO audit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>10-Point Checklist: Passed</span>
            </button>
          )}

          <div className="flex items-center gap-1.5 text-xs font-sans text-stone-600 bg-stone-100 px-3 py-1 rounded-md border border-stone-200/60">
            <Paperclip className="w-3.5 h-3.5 text-amber-800" />
            <span className="font-semibold text-stone-900">{totalAttachments}</span>
            <span>Images</span>
          </div>

          <button
            onClick={onOpenAttachModal}
            className="text-xs font-medium text-amber-900 hover:text-amber-950 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors"
          >
            Attach Image →
          </button>
        </div>
      </div>

      {/* Main Headline (Point 1: Main Keyword, Point 4: Clear Single H1) */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-4 leading-[1.12]">
          Stories That Stay With You: Long-Form Book Reviews
        </h1>
        {/* Point 5: H2 question section & Point 7: Answer-first paragraph */}
        <div className="p-5 bg-white rounded-xl border border-stone-200/90 shadow-xs text-left max-w-3xl mx-auto mt-6">
          <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-1.5">
            What Makes Our Long-Form Book Reviews Distinctive?
          </h2>
          <p className="text-xs sm:text-sm font-light text-stone-700 leading-relaxed">
            Our long-form book reviews combine rigorous literary analysis with historical context and archival visual plates, providing readers with complete thematic breakdowns rather than superficial summaries.
          </p>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search essays by title, author, keyword, or book theme..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-stone-400 text-sm font-sans placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as any)}
              className="px-4 py-3 rounded-xl border border-stone-200 bg-white text-xs font-medium text-stone-700 shadow-xs focus:outline-none focus:ring-2 focus:ring-stone-400"
            >
              <option value="recent">Sort: Most Recent</option>
              <option value="images">Sort: Most Images Attached</option>
              <option value="readTime">Sort: Reading Cadence</option>
            </select>

            <button
              onClick={onToggleOnlyIllustrated}
              className={`inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl border text-xs font-medium shadow-xs transition-colors whitespace-nowrap ${
                onlyIllustrated
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
              }`}
              title="Show only essays with attached images"
            >
              <Paperclip className="w-3.5 h-3.5" />
              <span>With Images</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (Zero-Pill: clean segmented interactive buttons) */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
          <span className="text-xs uppercase tracking-wider font-semibold text-stone-400 mr-2 shrink-0 hidden sm:inline">
            Genres:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                {cat === 'all' ? 'All Genres' : cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
