import { Building, File, FileText, LucideIcon, Scale, Scroll } from 'lucide-react';

export const DOCUMENT_CATEGORIES = [
  'Property Deeds',
  'Agreements',
  'Mortgage Documents',
  'CMDA Forms',
  'Legal Formats',
] as const;

export type DocumentCategory = (typeof DOCUMENT_CATEGORIES)[number];

export const CATEGORY_CONFIG: Record<
  DocumentCategory,
  { icon: LucideIcon; color: string }
> = {
  'Property Deeds': { icon: Building, color: 'text-emerald-600' },
  Agreements: { icon: File, color: 'text-blue-600' },
  'Mortgage Documents': { icon: Scroll, color: 'text-orange-600' },
  'CMDA Forms': { icon: Scale, color: 'text-teal-600' },
  'Legal Formats': { icon: FileText, color: 'text-indigo-600' },
};
