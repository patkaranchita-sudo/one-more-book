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
  slug: string;
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
  mainKeyword?: string;
  seoTitle?: string;
  metaDescription?: string;
  content: string;
  attachments: ArticleImageAttachment[];
  isCustom?: boolean;
  createdAt: number;
}
