import React, { useState, useRef } from 'react';
import { Upload, CheckCircle2, Image as ImageIcon, Sparkles, X, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface BatchImageMatcherProps {
  articles: Article[];
  onBatchUpdateImages: (mappings: { articleId: number | string; imageUrl: string; fileName: string }[]) => void;
}

export const BatchImageMatcher: React.FC<BatchImageMatcherProps> = ({
  articles,
  onBatchUpdateImages,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [matchedResults, setMatchedResults] = useState<{
    fileName: string;
    articleTitle: string;
    success: boolean;
  }[] | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const matchFileToArticle = (fileName: string): Article | undefined => {
    const fn = fileName.toLowerCase();

    if (fn.includes('sensibility') || fn.includes('austen') || fn.includes('sense')) {
      return articles.find((a) => a.title.toLowerCase().includes('sense'));
    }
    if (fn.includes('dune')) {
      return articles.find((a) => a.title.toLowerCase().includes('dune'));
    }
    if (fn.includes('hail') || fn.includes('mary') || fn.includes('27')) {
      return articles.find((a) => a.title.toLowerCase().includes('hail mary'));
    }
    if (fn.includes('silent') || fn.includes('patient')) {
      return articles.find((a) => a.title.toLowerCase().includes('silent patient'));
    }
    if (fn.includes('atomic') || fn.includes('habits')) {
      return articles.find((a) => a.title.toLowerCase().includes('atomic habits'));
    }
    if (fn.includes('midnight') || fn.includes('library')) {
      return articles.find((a) => a.title.toLowerCase().includes('midnight library'));
    }
    if (fn.includes('epic') || fn.includes('warikoo') || fn.includes('28')) {
      return articles.find((a) => a.title.toLowerCase().includes('do epic shit'));
    }
    if (fn.includes('palace') || fn.includes('illusions')) {
      return articles.find((a) => a.title.toLowerCase().includes('palace of illusions'));
    }
    if (fn.includes('none') || fn.includes('christie') || fn.includes('agatha')) {
      return articles.find((a) => a.title.toLowerCase().includes('then there were none'));
    }

    return undefined;
  };

  const handleProcessFiles = (fileList: FileList) => {
    const files = Array.from(fileList);
    const results: { fileName: string; articleTitle: string; success: boolean }[] = [];
    const updates: { articleId: number | string; imageUrl: string; fileName: string }[] = [];

    let processedCount = 0;

    files.forEach((file) => {
      const matched = matchFileToArticle(file.name);
      if (matched) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (typeof e.target?.result === 'string') {
            updates.push({
              articleId: matched.id,
              imageUrl: e.target.result,
              fileName: file.name,
            });
            results.push({
              fileName: file.name,
              articleTitle: matched.title,
              success: true,
            });
          }
          processedCount++;
          if (processedCount === files.length) {
            onBatchUpdateImages(updates);
            setMatchedResults(results);
          }
        };
        reader.readAsDataURL(file);
      } else {
        results.push({
          fileName: file.name,
          articleTitle: 'Unmatched file',
          success: false,
        });
        processedCount++;
        if (processedCount === files.length) {
          if (updates.length > 0) {
            onBatchUpdateImages(updates);
          }
          setMatchedResults(results);
        }
      }
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleProcessFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative rounded-2xl border transition-all p-5 sm:p-6 bg-white shadow-xs ${
          isDragging
            ? 'border-amber-700 bg-amber-50/50 ring-2 ring-amber-500/20'
            : 'border-stone-200/90 hover:border-stone-300'
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1"
          title="Dismiss banner"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/70 flex items-center justify-center shrink-0">
              <Upload className="w-6 h-6 stroke-[1.75]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Import Your Exact Uploaded Book Images
                </h3>
                <span className="text-[11px] font-sans font-medium px-2 py-0.5 rounded bg-amber-100/70 text-amber-900">
                  1-Click Auto-Match
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
                Drag and drop your exact downloaded image files here (or click below) to apply them
                directly to each essay. Our smart matcher automatically pairs each book photo with its article.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleProcessFiles(e.target.files);
                }
              }}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span>Select Your Image Files</span>
            </button>
          </div>
        </div>

        {/* Success / Feedback List */}
        {matchedResults && (
          <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>
                  Successfully applied {matchedResults.filter((r) => r.success).length} of{' '}
                  {matchedResults.length} exact image files:
                </span>
              </span>
              <button
                onClick={() => setMatchedResults(null)}
                className="text-[11px] text-stone-500 hover:text-stone-800 underline"
              >
                Clear Results
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              {matchedResults.map((res, i) => (
                <div
                  key={i}
                  className={`p-2 rounded border flex items-center gap-2 ${
                    res.success
                      ? 'bg-emerald-50/60 border-emerald-200/80 text-emerald-950'
                      : 'bg-stone-50 border-stone-200 text-stone-600'
                  }`}
                >
                  <CheckCircle2
                    className={`w-3.5 h-3.5 shrink-0 ${
                      res.success ? 'text-emerald-600' : 'text-stone-400'
                    }`}
                  />
                  <div className="min-w-0 flex-1 truncate">
                    <p className="font-medium truncate">{res.articleTitle}</p>
                    <p className="text-[10px] text-stone-500 truncate">{res.fileName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
