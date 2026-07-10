import type { DocumentCategory } from './categories';

export type DocumentData = {
  slug: string;
  title: string;
  description: string;
  paymentLink: string;
  category: DocumentCategory;
  price?: number;
};

export const documents: DocumentData[] = [
  { slug: 'sale-conveyance-deed', title: 'Sale/Conveyance Deed', description: 'Legal document transferring property ownership from seller to buyer.', paymentLink: 'https://rzp.io/rzp/XHAn7GH', category: 'Property Deeds' },
  { slug: 'agreement-deposit-title-deeds', title: 'Agreement Relating to Deposit of Title Deeds', description: 'Agreement for depositing title deeds as loan security.', paymentLink: 'https://rzp.io/rzp/KpqCRVuV', category: 'Agreements' },
  { slug: 'promissory-note', title: 'Promissory Note', description: 'Written promise to pay a specified amount on demand or date.', paymentLink: 'https://rzp.io/rzp/dg3ZqQeA', category: 'Mortgage Documents' },
  { slug: 'exchange-deed', title: 'Exchange Deed', description: 'Legal document for exchange of properties.', paymentLink: 'https://rzp.io/rzp/xhw882Rg', category: 'Property Deeds' },
  { slug: 'deed-of-receipt', title: 'Deed of Receipt', description: 'Acknowledges receipt of money or property.', paymentLink: 'https://rzp.io/rzp/zxMjfQo', category: 'Property Deeds' },
  { slug: 'lease-deed', title: 'Lease Deed', description: 'Agreement between landlord and tenant for rental.', paymentLink: 'https://rzp.io/rzp/lYQ4FqKT', category: 'Property Deeds' },
  { slug: 'sale-favor-mortgage', title: 'Sale in Favor of Mortgage', description: 'Sale document where buyer assumes existing mortgage.', paymentLink: 'https://rzp.io/rzp/CVJgooZw', category: 'Mortgage Documents' },
  { slug: 'sale-agreement', title: 'Sale Agreement', description: 'Preliminary agreement outlining sale terms.', paymentLink: 'https://rzp.io/rzp/HMWDa2fT', category: 'Agreements' },
  { slug: 'construction-agreement', title: 'Construction Agreement', description: 'Contract between owner and builder.', paymentLink: 'https://rzp.io/rzp/96zfdSoO', category: 'Agreements' },
  { slug: 'cancellation-deed', title: 'Cancellation Deed', description: 'Cancels previously executed document.', paymentLink: 'https://rzp.io/rzp/KR99gx7', category: 'Property Deeds' },

  { slug: 'gift-deed', title: 'Gift Deed', description: 'Transfer property without payment.', paymentLink: 'https://rzp.io/rzp/SVRepr7b', category: 'Property Deeds' },
  { slug: 'general-power-of-attorney', title: 'General Power of Attorney', description: 'Authority to act on behalf of another.', paymentLink: 'https://rzp.io/rzp/wVshCdc', category: 'Legal Formats' },
  { slug: 'mortgage-with-possession', title: 'Mortgage With Possession', description: 'Mortgage where lender takes possession.', paymentLink: 'https://rzp.io/rzp/cCxiw8d', category: 'Mortgage Documents' },
  { slug: 'mortgage-without-possession', title: 'Mortgage Without Possession', description: 'Mortgage without possession transfer.', paymentLink: 'https://rzp.io/rzp/YTv5xpTw', category: 'Mortgage Documents' },
  { slug: 'further-charge-mortgage-possession', title: 'Further Charge Mortgage With Possession', description: 'Additional loan with possession.', paymentLink: 'https://rzp.io/rzp/XmN3vOig', category: 'Mortgage Documents' },
  { slug: 'further-charge-mortgage-no-possession', title: 'Further Charge Mortgage Without Possession', description: 'Additional loan without possession.', paymentLink: 'https://rzp.io/rzp/zJrAeyyc', category: 'Mortgage Documents' },

  { slug: 'settlement-deed', title: 'Settlement Deed', description: 'Family property settlement document.', paymentLink: 'https://rzp.io/rzp/8AeWQQq', category: 'Property Deeds' },
  { slug: 'revocation-settlement-deed', title: 'Revocation of Settlement Deed', description: 'Cancel settlement deed.', paymentLink: 'https://rzp.io/rzp/hPdLmsi', category: 'Property Deeds' },
  { slug: 'will-deed', title: 'Will Deed', description: 'Asset distribution after death.', paymentLink: 'https://rzp.io/rzp/L8Mfez9', category: 'Legal Formats' },
  { slug: 'will-cancellation-deed', title: 'Will Cancellation Deed', description: 'Cancel an existing will.', paymentLink: 'https://rzp.io/rzp/Hfow7XKj', category: 'Legal Formats' },

  { slug: 'trust-deed', title: 'Trust Deed', description: 'Establishes trust and beneficiaries.', paymentLink: 'https://rzp.io/rzp/xl74P4R', category: 'Agreements' },
  { slug: 'partnership-deed', title: 'Partnership Deed', description: 'Defines partnership terms.', paymentLink: 'https://rzp.io/rzp/EI0n2s3A', category: 'Agreements' },
  { slug: 'dissolution-partnership', title: 'Dissolution of Partnership', description: 'Ends partnership agreement.', paymentLink: 'https://rzp.io/rzp/ADpUY8rr', category: 'Agreements' },

  { slug: 'partition-deed', title: 'Partition Deed', description: 'Divides property among owners.', paymentLink: 'https://rzp.io/rzp/G3efVTVs', category: 'Property Deeds' },
  { slug: 'release-deed', title: 'Release Deed', description: 'Releases claims on property.', paymentLink: 'https://rzp.io/rzp/cu1LjxL', category: 'Property Deeds' },
  { slug: 'rectification-deed', title: 'Rectification Deed', description: 'Corrects errors in documents.', paymentLink: 'https://rzp.io/rzp/QD6iNg5', category: 'Property Deeds' },
  { slug: 'ratification-deed', title: 'Ratification Deed', description: 'Validates previous document.', paymentLink: 'https://rzp.io/rzp/cT0ObT5', category: 'Property Deeds' },

  { slug: 'special-power-of-attorney', title: 'Special Power of Attorney', description: 'Limited authority document.', paymentLink: 'https://rzp.io/rzp/0I6hf6v', category: 'Legal Formats' },
  { slug: 'adoption-deed', title: 'Adoption Deed', description: 'Legal adoption document.', paymentLink: 'https://rzp.io/rzp/tj81K4hL', category: 'Legal Formats' },

  { slug: 'encumbrance-certificate-application', title: 'Encumbrance Certificate Application', description: 'Apply for EC/CC.', paymentLink: 'https://rzp.io/rzp/pbTi2g0V', category: 'CMDA Forms' },
  { slug: 'annexure-1a', title: 'Annexure 1-A', description: 'Legal annexure format.', paymentLink: 'https://rzp.io/rzp/GDPt4Mm', category: 'CMDA Forms' },
  { slug: 'deficit-stamp-duty-application', title: 'Deficit Stamp Duty Application', description: 'Pay deficit stamp duty.', paymentLink: 'https://rzp.io/rzp/IACKPhJa', category: 'CMDA Forms' },

  { slug: 'affidavit-loss-receipt', title: 'Affidavit for Loss of Receipt', description: 'Affidavit for lost receipt.', paymentLink: 'https://rzp.io/rzp/okWfKfB', category: 'Legal Formats' },
  { slug: 'annexure-development-format', title: 'Annexure Development Format', description: 'Development format details.', paymentLink: 'https://rzp.io/rzp/UneNcd7', category: 'CMDA Forms' },

  { slug: 'bank-guarantee-cd', title: 'Bank Guarantee for CD', description: 'Guarantee for caution deposit.', paymentLink: 'https://rzp.io/rzp/i8RmDZa7', category: 'CMDA Forms' },
  { slug: 'bank-guarantee-sd', title: 'Bank Guarantee for SD', description: 'Guarantee for security deposit.', paymentLink: 'https://rzp.io/rzp/iLzckmeA', category: 'CMDA Forms' },

  { slug: 'cmda-form-a', title: 'CMDA Form A', description: 'Subdivision and layout application.', paymentLink: 'https://rzp.io/rzp/LkRbz5t', category: 'CMDA Forms' },
  { slug: 'cmda-form-b', title: 'CMDA Form B', description: 'Construction permission application.', paymentLink: 'https://rzp.io/rzp/edsuohXy', category: 'CMDA Forms' },
  { slug: 'cmda-form-c', title: 'CMDA Form C', description: 'Undertaking form.', paymentLink: 'https://rzp.io/rzp/fUZ2oWU', category: 'CMDA Forms' },

  { slug: 'indemnity-bond', title: 'Indemnity Bond', description: 'Bond for compliance assurance.', paymentLink: 'https://rzp.io/rzp/BWqLfrS', category: 'CMDA Forms' },
  { slug: 'document-history', title: 'Document History', description: 'Property history record.', paymentLink: 'https://rzp.io/rzp/FWaow78u', category: 'CMDA Forms' },

  { slug: 'inspection-report-industrial', title: 'Inspection Report (Industrial)', description: 'Industrial inspection format.', paymentLink: 'https://rzp.io/rzp/VohRD4Z', category: 'CMDA Forms' },
  { slug: 'noc-sd-refund', title: 'NOC for SD Refund', description: 'NOC for deposit refund.', paymentLink: 'https://rzp.io/rzp/QTPvh0R', category: 'CMDA Forms' },

  { slug: 'advanced-stamped-receipt', title: 'Advanced Stamped Receipt', description: 'Receipt acknowledgment format.', paymentLink: 'https://rzp.io/rzp/GgsJh5Ky', category: 'Legal Formats' },
  { slug: 'deed-of-reconstitution', title: 'Deed of Reconstitution', description: 'Reconstitution of property.', paymentLink: 'https://rzp.io/rzp/a508jvN', category: 'Property Deeds' },

  { slug: 'tncdr-registration-format', title: 'TNCDR-2019 Registration Format', description: 'Registration format under TNCDR.', paymentLink: 'https://rzp.io/rzp/ecJ3b1yW', category: 'CMDA Forms' }
];

export default documents;
