import React from 'react';
import { X, Download } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  caption: string;
  credit?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  caption,
  credit,
}) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-60 bg-stone-950/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8 animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between text-white pb-4">
        <span className="text-xs font-sans uppercase tracking-widest text-stone-400">
          Attached Media Inspector
        </span>
        <div className="flex items-center gap-3">
          <a
            href={imageUrl}
            download="attached-figure.jpg"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Open/Download image"
          >
            <Download className="w-5 h-5" />
          </a>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Frame */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl max-h-[75vh] w-full flex items-center justify-center overflow-hidden"
      >
        <ImageWithFallback
          src={imageUrl}
          alt={caption}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
        />
      </div>

      {/* Caption & Credit Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl text-center pt-4"
      >
        <p className="font-serif italic text-sm sm:text-base text-stone-200 mb-1">
          {caption}
        </p>
        {credit && (
          <p className="text-xs font-sans text-stone-400 tracking-wider">
            Collection / Credit: {credit}
          </p>
        )}
      </div>
    </div>
  );
};
