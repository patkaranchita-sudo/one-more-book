import React, { useState, useRef } from 'react';
import {
  X,
  Paperclip,
  Save,
  Upload,
  Link as LinkIcon,
  Sparkles,
  Trash2,
  Star,
  Check,
  Plus
} from 'lucide-react';
import { Article, ArticleImageAttachment, ImagePlacement } from '../types';
import { CURATED_STOCK_IMAGES } from '../data/initialArticles';
import { ImageWithFallback } from './ImageWithFallback';
import { slugify } from '../utils/slugify';

interface ArticleEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  articleToEdit: Article | null;
  onSave: (article: Article) => void;
}

export const ArticleEditorModal: React.FC<ArticleEditorModalProps> = ({
  isOpen,
  onClose,
  articleToEdit,
  onSave,
}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Classic');
  const [readTime, setReadTime] = useState('7 min read');
  const [excerpt, setExcerpt] = useState('');
  const [seoKeywords, setSeoKeywords] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [attachments, setAttachments] = useState<ArticleImageAttachment[]>([]);

  // Mini-attachment quick upload inside editor
  const [showAttachDrawer, setShowAttachDrawer] = useState(false);
  const [drawerUrl, setDrawerUrl] = useState('');
  const [drawerCaption, setDrawerCaption] = useState('');
  const [drawerCredit, setDrawerCredit] = useState('');
  const [drawerPlacement, setDrawerPlacement] = useState<ImagePlacement>('in-body');

  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (articleToEdit) {
      setTitle(articleToEdit.title);
      setSubtitle(articleToEdit.subtitle || '');
      setAuthor(articleToEdit.author);
      setCategory(articleToEdit.category);
      setReadTime(articleToEdit.readTime);
      setExcerpt(articleToEdit.excerpt);
      setSeoKeywords(articleToEdit.seoKeywords || '');
      setContent(articleToEdit.content);
      setCoverImage(articleToEdit.coverImage);
      setAttachments(articleToEdit.attachments || []);
    } else {
      // New article defaults
      setTitle('');
      setSubtitle('');
      setAuthor('');
      setCategory('Classic');
      setReadTime('6 min read');
      setExcerpt('');
      setSeoKeywords('');
      setContent(
        '<p class="lead">Begin your literary essay with an opening hook that establishes the thematic question...</p>\n\n<h2>Thematic Analysis</h2>\n<p>Explore the central motifs, symbolism, and narrative structure.</p>\n\n<blockquote>\n  "Insert an impactful quotation from the text here."\n</blockquote>\n\n<h2>Curatorial Conclusion</h2>\n<p>Reflect on why this work continues to resonate with contemporary readers.</p>'
      );
      setCoverImage('/src/assets/images/literary_classic_manuscript_1792103094046.jpg');
      setAttachments([
        {
          id: `att-${Date.now()}`,
          url: '/src/assets/images/literary_classic_manuscript_1792103094046.jpg',
          caption: 'Fig. 1 — Cover plate illustration',
          credit: 'Studio Archive',
          alt: 'Open manuscript',
          placement: 'cover',
          addedAt: 'Today',
          fileSize: '1.4 MB',
        },
      ]);
    }
  }, [articleToEdit, isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeFormatted =
        file.size > 1024 * 1024
          ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
          : `${Math.round(file.size / 1024)} KB`;

      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === 'string') {
          const newAtt: ArticleImageAttachment = {
            id: `att-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
            url: event.target.result,
            caption: drawerCaption || `Fig. — ${file.name.replace(/\.[^/.]+$/, '')}`,
            credit: drawerCredit || 'Uploaded Asset',
            alt: file.name,
            placement: drawerPlacement,
            addedAt: 'Today',
            fileSize: sizeFormatted,
          };

          setAttachments((prev) => [...prev, newAtt]);
          if (drawerPlacement === 'cover' || !coverImage) {
            setCoverImage(newAtt.url);
          }
          setShowAttachDrawer(false);
          setDrawerUrl('');
          setDrawerCaption('');
          setDrawerCredit('');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddDrawerImage = () => {
    if (!drawerUrl.trim()) return;

    const newAtt: ArticleImageAttachment = {
      id: `att-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      url: drawerUrl.trim(),
      caption: drawerCaption.trim() || 'Attached figure',
      credit: drawerCredit.trim() || 'Archive',
      alt: drawerCaption.trim() || 'Article illustration',
      placement: drawerPlacement,
      addedAt: 'Today',
      fileSize: 'Online Asset',
    };

    setAttachments((prev) => [...prev, newAtt]);
    if (drawerPlacement === 'cover' || !coverImage) {
      setCoverImage(newAtt.url);
    }
    setShowAttachDrawer(false);
    setDrawerUrl('');
    setDrawerCaption('');
    setDrawerCredit('');
  };

  const handleRemoveAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((a) => a.id !== id));
  };

  const handleSetCover = (url: string) => {
    setCoverImage(url);
    // update placement
    setAttachments((prev) =>
      prev.map((a) => ({
        ...a,
        placement: a.url === url ? 'cover' : a.placement === 'cover' ? 'in-body' : a.placement,
      }))
    );
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter an essay title.');
      return;
    }
    if (!author.trim()) {
      alert('Please enter an author name.');
      return;
    }

    const words = content.replace(/<[^>]*>/g, '').trim().split(/\s+/).length;

    const savedArticle: Article = {
      id: articleToEdit?.id || Date.now(),
      slug: articleToEdit?.slug || slugify(title.trim()),
      title: title.trim(),
      subtitle: subtitle.trim(),
      author: author.trim(),
      category: category.trim(),
      date: articleToEdit?.date || 'October 2026',
      readTime: readTime || `${Math.max(2, Math.round(words / 200))} min read`,
      wordCount: `${words.toLocaleString()} words`,
      coverImage: coverImage || '/src/assets/images/literary_classic_manuscript_1792103094046.jpg',
      excerpt: excerpt.trim() || title.trim(),
      seoKeywords: seoKeywords.trim() || `${title}, ${author}, literary essay, book review`,
      content: content.trim(),
      attachments,
      isCustom: true,
      createdAt: articleToEdit?.createdAt || Date.now(),
    };

    onSave(savedArticle);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden my-auto animate-in fade-in duration-200">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              {articleToEdit ? 'Edit Literary Essay' : 'Compose New Essay with Image Attachments'}
            </h2>
            <p className="text-xs text-stone-500">
              Write rich long-form critiques and attach photographic figures, manuscripts, and artwork
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto flex-1 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Essay Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Persuasion: Autumnal Melancholy and Second Chances"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Book / Subject Author *
              </label>
              <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g., Jane Austen"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-stone-400"
              >
                <option value="Classic">Classic</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Thriller">Thriller</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Mythology">Mythology</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Subtitle (Optional)
              </label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="e.g., A study in emotional endurance"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Reading Cadence
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="e.g., 8 min read"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
              Short Excerpt / Deck
            </label>
            <textarea
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief summary that introduces the essay on cards and social previews..."
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 font-sans"
            />
          </div>

          {/* ATTACHED IMAGES SECTION (Central to the requirement) */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                  <Paperclip className="w-4 h-4 text-stone-700" />
                  <span>Attached Article Images ({attachments.length})</span>
                </h3>
                <p className="text-[11px] text-stone-500">
                  Attach book covers, manuscripts, historical portraits, or diagrams
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAttachDrawer(!showAttachDrawer)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-900 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Attach Another Image</span>
              </button>
            </div>

            {/* Quick Attach drawer inside editor */}
            {showAttachDrawer && (
              <div className="p-4 bg-white rounded-lg border border-stone-300 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-800">
                    Add New Image Attachment
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowAttachDrawer(false)}
                    className="text-stone-400 hover:text-stone-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-2.5 px-3 border border-dashed border-stone-300 hover:border-stone-400 rounded-lg text-xs font-medium text-stone-700 flex items-center justify-center gap-2 bg-stone-50 hover:bg-stone-100 transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Image From Computer</span>
                    </button>
                  </div>

                  <div>
                    <input
                      type="url"
                      placeholder="Or paste image URL (https://...)"
                      value={drawerUrl}
                      onChange={(e) => setDrawerUrl(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Caption (e.g. Fig. 1 — Manuscript)"
                    value={drawerCaption}
                    onChange={(e) => setDrawerCaption(e.target.value)}
                    className="px-3 py-1.5 text-xs rounded border border-stone-300"
                  />
                  <input
                    type="text"
                    placeholder="Credit (e.g. British Library)"
                    value={drawerCredit}
                    onChange={(e) => setDrawerCredit(e.target.value)}
                    className="px-3 py-1.5 text-xs rounded border border-stone-300"
                  />
                  <select
                    value={drawerPlacement}
                    onChange={(e) => setDrawerPlacement(e.target.value as ImagePlacement)}
                    className="px-3 py-1.5 text-xs rounded border border-stone-300 bg-white"
                  >
                    <option value="cover">Cover Image</option>
                    <option value="in-body">In-Body Figure</option>
                    <option value="gallery">Gallery Plate</option>
                  </select>
                </div>

                {drawerUrl && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleAddDrawerImage}
                      className="px-3 py-1.5 text-xs font-semibold bg-stone-900 text-white rounded-md hover:bg-stone-800"
                    >
                      Attach This Image
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* List of currently attached images in editor */}
            {attachments.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {attachments.map((att, idx) => {
                  const isCover = coverImage === att.url;
                  return (
                    <div
                      key={att.id || idx}
                      className="flex items-center justify-between p-2.5 rounded-lg border border-stone-200 bg-white gap-3 shadow-xs"
                    >
                      <div className="w-14 h-12 rounded overflow-hidden bg-stone-100 shrink-0">
                        <ImageWithFallback
                          src={att.url}
                          alt={att.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-stone-900 truncate">
                          {att.caption || `Figure ${idx + 1}`}
                        </p>
                        <div className="flex items-center gap-1.5 text-[10px] text-stone-500">
                          {isCover ? (
                            <span className="font-semibold text-amber-900">★ Primary Cover</span>
                          ) : (
                            <span className="capitalize">{att.placement}</span>
                          )}
                          <span>·</span>
                          <span>{att.fileSize || 'Asset'}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        {!isCover && (
                          <button
                            type="button"
                            onClick={() => handleSetCover(att.url)}
                            className="p-1 text-stone-400 hover:text-amber-800 rounded"
                            title="Set as primary cover image"
                          >
                            <Star className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => handleRemoveAttachment(att.id)}
                          className="p-1 text-stone-400 hover:text-red-600 rounded"
                          title="Remove attachment"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-stone-400 italic">
                No images attached yet. Click &quot;Attach Another Image&quot; above to add one.
              </p>
            )}
          </div>

          {/* Full Essay Content (HTML or formatted text) */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                Essay Body (HTML or Paragraphs) *
              </label>
              <span className="text-[11px] text-stone-400">
                Supports &lt;h2&gt;, &lt;p&gt;, &lt;blockquote&gt;
              </span>
            </div>
            <textarea
              required
              rows={9}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3.5 py-3 text-sm font-mono rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
              SEO Keywords & Topics
            </label>
            <input
              type="text"
              value={seoKeywords}
              onChange={(e) => setSeoKeywords(e.target.value)}
              placeholder="e.g., Jane Austen, Regency literature, Elinor Marianne critique"
              className="w-full px-3.5 py-2 text-xs rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 font-mono"
            />
          </div>
        </form>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-stone-200 bg-[#FAF8F5] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm active:scale-95 transition-all"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save & Publish Essay</span>
          </button>
        </div>
      </div>
    </div>
  );
};
