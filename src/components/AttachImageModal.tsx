import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  Link as LinkIcon,
  Sparkles,
  Image as ImageIcon,
  Check,
  Trash2,
  Paperclip,
  Star,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Article, ArticleImageAttachment, ImagePlacement } from '../types';
import { CURATED_STOCK_IMAGES } from '../data/initialArticles';
import { ImageWithFallback } from './ImageWithFallback';

interface AttachImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  selectedArticleId: number | string | null;
  onAttachImage: (
    articleId: number | string,
    attachment: Omit<ArticleImageAttachment, 'id' | 'addedAt'>
  ) => void;
  onRemoveAttachment: (articleId: number | string, attachmentId: string) => void;
  onSetCoverImage: (articleId: number | string, imageUrl: string) => void;
}

export const AttachImageModal: React.FC<AttachImageModalProps> = ({
  isOpen,
  onClose,
  articles,
  selectedArticleId,
  onAttachImage,
  onRemoveAttachment,
  onSetCoverImage,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'stock'>('upload');
  const [targetArticleId, setTargetArticleId] = useState<number | string>(
    selectedArticleId || (articles.length > 0 ? articles[0].id : '')
  );

  // Attachment inputs
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [credit, setCredit] = useState('');
  const [altText, setAltText] = useState('');
  const [placement, setPlacement] = useState<ImagePlacement>('in-body');
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [successToast, setSuccessToast] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync targetArticleId when prop changes
  React.useEffect(() => {
    if (selectedArticleId) {
      setTargetArticleId(selectedArticleId);
    } else if (articles.length > 0 && !targetArticleId) {
      setTargetArticleId(articles[0].id);
    }
  }, [selectedArticleId, articles]);

  if (!isOpen) return null;

  const currentArticle = articles.find((a) => String(a.id) === String(targetArticleId));

  const handleFileProcess = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WebP, SVG, GIF).');
      return;
    }

    const sizeFormatted =
      file.size > 1024 * 1024
        ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
        : `${Math.round(file.size / 1024)} KB`;

    setFileName(file.name);
    setFileSize(sizeFormatted);
    setPreviewError(false);

    if (!caption) {
      const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      setCaption(`Fig. ${cleanName.charAt(0).toUpperCase() + cleanName.slice(1)}`);
    }
    if (!altText) {
      setAltText(file.name);
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        setImageUrl(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileProcess(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleSelectPreset = (stock: (typeof CURATED_STOCK_IMAGES)[0]) => {
    setImageUrl(stock.url);
    setCaption(`Fig. — ${stock.name}`);
    setCredit(stock.credit);
    setAltText(stock.description);
    setFileName(stock.name);
    setFileSize('1.2 MB');
    setPreviewError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl.trim()) {
      alert('Please upload an image file, enter an image URL, or choose a curated preset.');
      return;
    }
    if (!targetArticleId) {
      alert('Please choose an article to attach the image to.');
      return;
    }

    onAttachImage(targetArticleId, {
      url: imageUrl.trim(),
      caption: caption.trim() || 'Attached article illustration',
      credit: credit.trim(),
      alt: altText.trim() || caption.trim() || 'Article attached figure',
      placement,
      fileSize: fileSize || 'Uploaded asset',
    });

    setSuccessToast(`Image successfully attached to "${currentArticle?.title.slice(0, 32)}..."`);
    setTimeout(() => setSuccessToast(''), 3000);

    // Reset fields for another attachment
    setImageUrl('');
    setCaption('');
    setCredit('');
    setAltText('');
    setFileName('');
    setFileSize('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden my-auto animate-in fade-in duration-200">
        {/* Modal Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-100 flex items-center justify-center">
              <Paperclip className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 leading-tight">
                Attach Image to Article
              </h2>
              <p className="text-xs font-sans text-stone-500">
                Upload photos, figures, or sketches to enrich editorial essays
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {successToast && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successToast}</span>
            </div>
          )}

          {/* Target Article Picker */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
              1. Select Destination Article
            </label>
            <select
              value={targetArticleId}
              onChange={(e) => setTargetArticleId(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400"
            >
              {articles.map((art) => (
                <option key={art.id} value={art.id}>
                  [{art.category}] {art.title} — by {art.author} ({art.attachments?.length || 0} images)
                </option>
              ))}
            </select>
          </div>

          {/* Method Selector Tabs */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
              2. Choose Image Source
            </label>
            <div className="grid grid-cols-3 gap-1 p-1 bg-stone-100 rounded-lg text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('upload')}
                className={`py-2 px-3 rounded-md transition-colors flex items-center justify-center gap-2 ${
                  activeTab === 'upload'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload File</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('url')}
                className={`py-2 px-3 rounded-md transition-colors flex items-center justify-center gap-2 ${
                  activeTab === 'url'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5" />
                <span>Image URL</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('stock')}
                className={`py-2 px-3 rounded-md transition-colors flex items-center justify-center gap-2 ${
                  activeTab === 'stock'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curated Presets</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Upload File */}
          {activeTab === 'upload' && (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                isDragging
                  ? 'border-amber-700 bg-amber-50/50'
                  : 'border-stone-300 hover:border-stone-400 bg-stone-50/40'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-12 h-12 rounded-full bg-white shadow-xs border border-stone-200 mx-auto flex items-center justify-center text-stone-600 mb-3">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-stone-900 mb-1">
                Click to browse or drag and drop an image
              </p>
              <p className="text-xs text-stone-500">
                Supports JPG, PNG, WEBP, SVG, and GIF from your computer
              </p>
              {fileName && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-stone-200/60 rounded text-xs text-stone-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-medium">{fileName}</span>
                  <span className="text-stone-500">({fileSize})</span>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: URL */}
          {activeTab === 'url' && (
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="url"
                  placeholder="Paste direct image link (e.g., https://...)"
                  value={imageUrl}
                  onChange={(e) => {
                    setImageUrl(e.target.value);
                    setPreviewError(false);
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
                />
              </div>
              <p className="text-xs text-stone-400">
                Paste any valid public image link. The image will be verified in the preview panel below.
              </p>
            </div>
          )}

          {/* Tab 3: Curated Presets */}
          {activeTab === 'stock' && (
            <div className="space-y-3">
              <p className="text-xs text-stone-500">
                Choose from our high-resolution library of literary, astronomical, and architectural photography:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-48 overflow-y-auto pr-1">
                {CURATED_STOCK_IMAGES.map((stock) => (
                  <div
                    key={stock.id}
                    onClick={() => handleSelectPreset(stock)}
                    className={`group relative rounded-lg overflow-hidden border cursor-pointer transition-all ${
                      imageUrl === stock.url
                        ? 'border-stone-900 ring-2 ring-stone-900'
                        : 'border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <div className="aspect-[4/3] bg-stone-100 overflow-hidden">
                      <ImageWithFallback
                        src={stock.url}
                        alt={stock.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-2 bg-white">
                      <p className="text-xs font-serif font-semibold text-stone-900 truncate">
                        {stock.name}
                      </p>
                      <p className="text-[10px] text-stone-500 truncate">{stock.credit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Image Preview & Details Grid */}
          {imageUrl && (
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-700">
                <span>3. Attachment Preview & Metadata</span>
                <button
                  type="button"
                  onClick={() => {
                    setImageUrl('');
                    setFileName('');
                  }}
                  className="text-stone-400 hover:text-red-600 transition-colors"
                >
                  Clear Selection
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <div className="rounded-lg overflow-hidden border border-stone-200 aspect-[4/3] bg-stone-100">
                    <ImageWithFallback
                      src={imageUrl}
                      alt={altText || 'Preview'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Caption / Figure Description
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Fig. 1 — First edition manuscript title page"
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Placement in Article
                      </label>
                      <select
                        value={placement}
                        onChange={(e) => setPlacement(e.target.value as ImagePlacement)}
                        className="w-full px-3 py-2 text-xs rounded border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-500 bg-white"
                      >
                        <option value="cover">Primary Cover Image (Hero)</option>
                        <option value="in-body">In-Body Figure (Reading flow)</option>
                        <option value="full-width">Full-Width Breakout Banner</option>
                        <option value="gallery">Article Media Gallery</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Attribution / Source Credit
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Oxford Bodleian Library"
                        value={credit}
                        onChange={(e) => setCredit(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Current Attachments on Destination Article */}
          {currentArticle && (
            <div className="pt-4 border-t border-stone-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>
                    Current Attachments on &ldquo;{currentArticle.title.slice(0, 36)}...&rdquo; (
                    {currentArticle.attachments?.length || 0})
                  </span>
                </span>
              </div>

              {currentArticle.attachments && currentArticle.attachments.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto pr-1">
                  {currentArticle.attachments.map((att, idx) => {
                    const isCover = currentArticle.coverImage === att.url;
                    return (
                      <div
                        key={att.id || idx}
                        className="flex items-center justify-between p-2.5 rounded-lg border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors gap-3"
                      >
                        <div className="w-14 h-12 rounded overflow-hidden bg-stone-200 shrink-0">
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
                            <span className="capitalize">{att.placement}</span>
                            <span>·</span>
                            <span>{att.fileSize || 'Asset'}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {!isCover && (
                            <button
                              type="button"
                              onClick={() => onSetCoverImage(currentArticle.id, att.url)}
                              className="p-1 text-stone-400 hover:text-amber-700 rounded"
                              title="Set as primary cover"
                            >
                              <Star className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => onRemoveAttachment(currentArticle.id, att.id)}
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
                  No images currently attached to this essay. Attach one above!
                </p>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-stone-200 bg-[#FAF8F5] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 rounded-lg transition-colors"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!imageUrl}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white rounded-lg shadow-sm transition-all ${
              imageUrl
                ? 'bg-stone-900 hover:bg-stone-800 active:scale-95 cursor-pointer'
                : 'bg-stone-300 cursor-not-allowed'
            }`}
          >
            <Paperclip className="w-3.5 h-3.5" />
            <span>Confirm & Attach Image</span>
          </button>
        </div>
      </div>
    </div>
  );
};
