export interface Document {
  id: string;
  slug?: string;
  title: string;
  description: string;
  category: string;
  price: number;
  razorpay_link: string;
  download_link: string;
  is_featured: boolean;
  download_count: number;
  created_at: string;
}

export type { DocumentCategory as Category } from '../data/categories';
