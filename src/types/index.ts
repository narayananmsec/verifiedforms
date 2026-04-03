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

export type Category = 'Property Deeds' | 'Agreements' | 'Mortgage Documents' | 'CMDA Forms' | 'Legal Formats';
