export type ImagePlacement = 'cover' | 'in-body' | 'full-width' | 'gallery';

export interface ArticleImageAttachment {
  id: string;
  url: string;
  caption: string;
  credit?: string;
  alt: string;
  placement: ImagePlacement;
  addedAt: string;
  fileSize?: string;
}

export interface Article {
  id: number | string;
  title: string;
  subtitle?: string;
  author: string;
  category: 'Classic' | 'Sci-Fi' | 'Thriller' | 'Fiction' | 'Non-Fiction' | 'Mythology' | string;
  date: string;
  readTime: string;
  wordCount: string;
  coverImage: string;
  excerpt: string;
  seoKeywords: string;
  content: string;
  attachments: ArticleImageAttachment[];
  isCustom?: boolean;
  createdAt: number;
}
