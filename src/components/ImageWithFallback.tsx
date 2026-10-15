import React, { useState } from 'react';
import { ImageOff, BookOpen } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  category?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  category,
  aspectRatioClass,
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`w-full bg-stone-100 dark:bg-stone-800 flex flex-col items-center justify-center p-6 text-stone-400 select-none border border-stone-200/60 ${aspectRatioClass || 'aspect-[4/3]'} ${className}`}
        role="img"
        aria-label={alt || 'Image illustration'}
      >
        <BookOpen className="w-8 h-8 text-stone-400 mb-2 stroke-[1.5]" />
        <span className="text-xs font-serif italic text-stone-600 text-center line-clamp-2 max-w-[80%]">
          {fallbackTitle || alt || 'Literary Illustration'}
        </span>
        {category && (
          <span className="text-[11px] font-sans uppercase tracking-widest text-stone-400 mt-1">
            {category} Archive
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-stone-100 animate-pulse flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-stone-300" />
        </div>
      )}
      <img
        src={src}
        alt={alt || ''}
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};
