export interface Category {
  id: string;
  title: string;
}

export const topics: Category[] = [
  {
    id: "account-opening-kyc",
    title: "Account Opening & KYC",
  },
  {
    id: "fund-transfer-withdrawals",
    title: "Fund Transfer & Withdrawals",
  },
  {
    id: "trading-orders",
    title: "Trading & Orders",
  },
  {
    id: "pledge-margin-collateral",
    title: "Pledge, Margin & Collateral",
  },
  {
    id: "reports-statements",
    title: "Reports & Statements",
  },
  {
    id: "ipos-buybacks-corporate-actions",
    title: "IPOs, Buybacks, and Corporate Actions",
  },
  {
    id: "technical-platform-issues",
    title: "Technical & Platform Issues",
  },
  {
    id: "api-developer-access",
    title: "API & Developer Access",
  },
  {
    id: "regulatory-disclosures",
    title: "Regulatory Disclosures",
  },
  {
    id: "sub-broker-franchise-help",
    title: "Sub-Broker / Franchise Help",
  },
  {
    id: "account-reactivation-closure",
    title: "Account Reactivation/Closure",
  },
  {
    id: "segment-specific-help",
    title: "Segment-Specific Help (NSE, BSE, MCX, NCDEX)",
  },
  {
    id: "nri-international-client-help",
    title: "NRI & International Client Help",
  },
  {
    id: "new-user-guide-getting-started",
    title: "New User Guide / Getting Started",
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return topics.find((topic) => topic.id === id);
};

export const getCategoryTitle = (id: string): string => {
  const category = getCategoryById(id);
  return category ? category.title : id;
};
