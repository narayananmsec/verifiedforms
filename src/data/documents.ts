export type DocumentData = {
  slug: string;
  title: string;
  description: string;
  paymentLink: string;
  category?: string;
  price?: number;
};

export const documents: DocumentData[] = [
  { slug: 'sale-conveyance-deed', title: 'Sale/Conveyance Deed', description: 'Legal document transferring property ownership from seller to buyer.', paymentLink: 'https://rzp.io/rzp/XHAn7GH' },
  { slug: 'agreement-deposit-title-deeds', title: 'Agreement Relating to Deposit of Title Deeds', description: 'Agreement for depositing title deeds as loan security.', paymentLink: 'https://rzp.io/rzp/KpqCRVuV' },
  { slug: 'promissory-note', title: 'Promissory Note', description: 'Written promise to pay a specified amount on demand or date.', paymentLink: 'https://rzp.io/rzp/dg3ZqQeA' },
  { slug: 'exchange-deed', title: 'Exchange Deed', description: 'Legal document for exchange of properties.', paymentLink: 'https://rzp.io/rzp/xhw882Rg' },
  { slug: 'deed-of-receipt', title: 'Deed of Receipt', description: 'Acknowledges receipt of money or property.', paymentLink: 'https://rzp.io/rzp/zxMjfQo' },
  { slug: 'lease-deed', title: 'Lease Deed', description: 'Agreement between landlord and tenant for rental.', paymentLink: 'https://rzp.io/rzp/lYQ4FqKT' },
  { slug: 'sale-favor-mortgage', title: 'Sale in Favor of Mortgage', description: 'Sale document where buyer assumes existing mortgage.', paymentLink: 'https://rzp.io/rzp/CVJgooZw' },
  { slug: 'sale-agreement', title: 'Sale Agreement', description: 'Preliminary agreement outlining sale terms.', paymentLink: 'https://rzp.io/rzp/HMWDa2fT' },
  { slug: 'construction-agreement', title: 'Construction Agreement', description: 'Contract between owner and builder.', paymentLink: 'https://rzp.io/rzp/96zfdSoO' },
  { slug: 'cancellation-deed', title: 'Cancellation Deed', description: 'Cancels previously executed document.', paymentLink: 'https://rzp.io/rzp/KR99gx7' },

  { slug: 'gift-deed', title: 'Gift Deed', description: 'Transfer property without payment.', paymentLink: 'https://rzp.io/rzp/SVRepr7b' },
  { slug: 'general-power-of-attorney', title: 'General Power of Attorney', description: 'Authority to act on behalf of another.', paymentLink: 'https://rzp.io/rzp/wVshCdc' },
  { slug: 'mortgage-with-possession', title: 'Mortgage With Possession', description: 'Mortgage where lender takes possession.', paymentLink: 'https://rzp.io/rzp/cCxiw8d' },
  { slug: 'mortgage-without-possession', title: 'Mortgage Without Possession', description: 'Mortgage without possession transfer.', paymentLink: 'https://rzp.io/rzp/YTv5xpTw' },
  { slug: 'further-charge-mortgage-possession', title: 'Further Charge Mortgage With Possession', description: 'Additional loan with possession.', paymentLink: 'https://rzp.io/rzp/XmN3vOig' },
  { slug: 'further-charge-mortgage-no-possession', title: 'Further Charge Mortgage Without Possession', description: 'Additional loan without possession.', paymentLink: 'https://rzp.io/rzp/zJrAeyyc' },

  { slug: 'settlement-deed', title: 'Settlement Deed', description: 'Family property settlement document.', paymentLink: 'https://rzp.io/rzp/8AeWQQq' },
  { slug: 'revocation-settlement-deed', title: 'Revocation of Settlement Deed', description: 'Cancel settlement deed.', paymentLink: 'https://rzp.io/rzp/hPdLmsi' },
  { slug: 'will-deed', title: 'Will Deed', description: 'Asset distribution after death.', paymentLink: 'https://rzp.io/rzp/L8Mfez9' },
  { slug: 'will-cancellation-deed', title: 'Will Cancellation Deed', description: 'Cancel an existing will.', paymentLink: 'https://rzp.io/rzp/Hfow7XKj' },

  { slug: 'trust-deed', title: 'Trust Deed', description: 'Establishes trust and beneficiaries.', paymentLink: 'https://rzp.io/rzp/xl74P4R' },
  { slug: 'partnership-deed', title: 'Partnership Deed', description: 'Defines partnership terms.', paymentLink: 'https://rzp.io/rzp/EI0n2s3A' },
  { slug: 'dissolution-partnership', title: 'Dissolution of Partnership', description: 'Ends partnership agreement.', paymentLink: 'https://rzp.io/rzp/ADpUY8rr' },

  { slug: 'partition-deed', title: 'Partition Deed', description: 'Divides property among owners.', paymentLink: 'https://rzp.io/rzp/G3efVTVs' },
  { slug: 'release-deed', title: 'Release Deed', description: 'Releases claims on property.', paymentLink: 'https://rzp.io/rzp/cu1LjxL' },
  { slug: 'rectification-deed', title: 'Rectification Deed', description: 'Corrects errors in documents.', paymentLink: 'https://rzp.io/rzp/QD6iNg5' },
  { slug: 'ratification-deed', title: 'Ratification Deed', description: 'Validates previous document.', paymentLink: 'https://rzp.io/rzp/cT0ObT5' },

  { slug: 'special-power-of-attorney', title: 'Special Power of Attorney', description: 'Limited authority document.', paymentLink: 'https://rzp.io/rzp/0I6hf6v' },
  { slug: 'adoption-deed', title: 'Adoption Deed', description: 'Legal adoption document.', paymentLink: 'https://rzp.io/rzp/tj81K4hL' },

  { slug: 'encumbrance-certificate-application', title: 'Encumbrance Certificate Application', description: 'Apply for EC/CC.', paymentLink: 'https://rzp.io/rzp/pbTi2g0V' },
  { slug: 'annexure-1a', title: 'Annexure 1-A', description: 'Legal annexure format.', paymentLink: 'https://rzp.io/rzp/GDPt4Mm' },
  { slug: 'deficit-stamp-duty-application', title: 'Deficit Stamp Duty Application', description: 'Pay deficit stamp duty.', paymentLink: 'https://rzp.io/rzp/IACKPhJa' },

  { slug: 'affidavit-loss-receipt', title: 'Affidavit for Loss of Receipt', description: 'Affidavit for lost receipt.', paymentLink: 'https://rzp.io/rzp/okWfKfB' },
  { slug: 'annexure-development-format', title: 'Annexure Development Format', description: 'Development format details.', paymentLink: 'https://rzp.io/rzp/UneNcd7' },

  { slug: 'bank-guarantee-cd', title: 'Bank Guarantee for CD', description: 'Guarantee for caution deposit.', paymentLink: 'https://rzp.io/rzp/i8RmDZa7' },
  { slug: 'bank-guarantee-sd', title: 'Bank Guarantee for SD', description: 'Guarantee for security deposit.', paymentLink: 'https://rzp.io/rzp/iLzckmeA' },

  { slug: 'cmda-form-a', title: 'CMDA Form A', description: 'Subdivision and layout application.', paymentLink: 'https://rzp.io/rzp/LkRbz5t' },
  { slug: 'cmda-form-b', title: 'CMDA Form B', description: 'Construction permission application.', paymentLink: 'https://rzp.io/rzp/edsuohXy' },
  { slug: 'cmda-form-c', title: 'CMDA Form C', description: 'Undertaking form.', paymentLink: 'https://rzp.io/rzp/fUZ2oWU' },

  { slug: 'indemnity-bond', title: 'Indemnity Bond', description: 'Bond for compliance assurance.', paymentLink: 'https://rzp.io/rzp/BWqLfrS' },
  { slug: 'document-history', title: 'Document History', description: 'Property history record.', paymentLink: 'https://rzp.io/rzp/FWaow78u' },

  { slug: 'inspection-report-industrial', title: 'Inspection Report (Industrial)', description: 'Industrial inspection format.', paymentLink: 'https://rzp.io/rzp/VohRD4Z' },
  { slug: 'noc-sd-refund', title: 'NOC for SD Refund', description: 'NOC for deposit refund.', paymentLink: 'https://rzp.io/rzp/QTPvh0R' },

  { slug: 'advanced-stamped-receipt', title: 'Advanced Stamped Receipt', description: 'Receipt acknowledgment format.', paymentLink: 'https://rzp.io/rzp/GgsJh5Ky' },
  { slug: 'deed-of-reconstitution', title: 'Deed of Reconstitution', description: 'Reconstitution of property.', paymentLink: 'https://rzp.io/rzp/a508jvN' },

  { slug: 'tncdr-registration-format', title: 'TNCDR-2019 Registration Format', description: 'Registration format under TNCDR.', paymentLink: 'https://rzp.io/rzp/ecJ3b1yW' }
];

export default documents;

