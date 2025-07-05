export interface Subcategory {
  id: string;
  title: string;
}

export interface TopicSubcategories {
  [topicId: string]: Subcategory[];
}

export const subcategories: TopicSubcategories = {
  'account-opening-kyc': [
    {
      id: 'documents-eligibility',
      title: 'Documents & Eligibility'
    },
    {
      id: 'kyc-process-verification',
      title: 'KYC Process & Verification'
    },
    {
      id: 'account-opening-methods',
      title: 'Account Opening Methods'
    },
    {
      id: 'types-of-accounts',
      title: 'Types of Accounts'
    },
    {
      id: 'kyc-update-re-kyc',
      title: 'KYC Update & Re-KYC'
    },
    {
      id: 'account-opening-charges',
      title: 'Account Opening Charges'
    },
    {
      id: 'pan-aadhaar-esign-related',
      title: 'PAN, Aadhaar & eSign Related'
    },
    {
      id: 'status-tracking-timelines',
      title: 'Status Tracking & Timelines'
    },
    {
      id: 'special-account-types-poa',
      title: 'Special Account Types & POA'
    },
    {
      id: 'errors-rejections-troubleshooting',
      title: 'Errors, Rejections & Troubleshooting'
    },
    {
      id: 'exchange-segment-activation',
      title: 'Exchange Segment Activation'
    }
  ],
    'fund-transfer-withdrawals': [
    {
      id: 'adding-funds',
      title: 'Adding Funds'
    },
    {
      id: 'withdrawal-of-funds',
      title: 'Withdrawal of Funds'
    },
    {
      id: 'bank-account-management',
      title: 'Bank Account Management'
    },
    {
      id: 'upi-specific-issues',
      title: 'UPI Specific Issues'
    },
    {
      id: 'fund-transfer-charges-limits',
      title: 'Fund Transfer Charges & Limits'
    },
    {
      id: 'transfer-delays-failures',
      title: 'Transfer Delays & Failures'
    },
    {
      id: 'ledger-balance-limits',
      title: 'Ledger, Balance & Limits'
    },
    {
      id: 'bank-mandate-autopay',
      title: 'Bank Mandate & AutoPay'
    },
    {
      id: 'transaction-reports-statements',
      title: 'Transaction Reports & Statements'
    },
    {
      id: 'nri-nro-nre-fund-handling',
      title: 'NRI/NRO/NRE Fund Handling'
    }
  ],
  'trading-orders': [
    {
      id: 'order-types',
      title: 'Order Types'
    },
    {
      id: 'order-placement-process',
      title: 'Order Placement Process'
    },
    {
      id: 'order-rejections-errors',
      title: 'Order Rejections & Errors'
    },
    {
      id: 'intraday-vs-delivery',
      title: 'Intraday vs Delivery'
    },
    {
      id: 'order-execution-trade-status',
      title: 'Order Execution & Trade Status'
    },
    {
      id: 'exchange-segment-specific',
      title: 'Exchange Segment Specific'
    },
    {
      id: 'charges-on-trades',
      title: 'Charges on Trades'
    },
    {
      id: 'advanced-trading-tools',
      title: 'Advanced Trading Tools'
    },
    {
      id: 'trading-timings-holidays',
      title: 'Trading Timings & Holidays'
    },
    {
      id: 'position-holdings-related',
      title: 'Position & Holdings Related'
    },
    {
      id: 'corporate-action-adjustments',
      title: 'Corporate Action Adjustments'
    },
    {
      id: 'miscellaneous-scenarios',
      title: 'Miscellaneous Scenarios'
    }
  ],
  'pledge-margin-collateral': [
    {
      id: 'pledging-of-shares',
      title: 'Pledging of Shares'
    },
    {
      id: 'unpledging-of-shares',
      title: 'Unpledging of Shares'
    },
    {
      id: 'collateral-margin',
      title: 'Collateral Margin'
    },
    {
      id: 'margin-requirements',
      title: 'Margin Requirements'
    },
    {
      id: 'margin-shortfall-penalty',
      title: 'Margin Shortfall & Penalty'
    },
    {
      id: 'margin-utilization-availability',
      title: 'Margin Utilization & Availability'
    },
    {
      id: 'pledge-status-reporting',
      title: 'Pledge Status & Reporting'
    },
    {
      id: 'liquid-funds-other-collateral',
      title: 'Liquid Funds & Other Collateral'
    },
    {
      id: 'margin-trading-facility-mtf',
      title: 'Margin Trading Facility (MTF)'
    },
    {
      id: 'regulatory-guidelines',
      title: 'Regulatory Guidelines'
    },
    {
      id: 'troubleshooting-errors',
      title: 'Troubleshooting & Errors'
    }
  ],
    'reports-statements': [
    {
      id: 'contract-notes',
      title: 'Contract Notes'
    },
    {
      id: 'ledger-reports',
      title: 'Ledger Reports'
    },
    {
      id: 'profit-loss-reports',
      title: 'Profit & Loss Reports'
    },
    {
      id: 'holdings-positions-reports',
      title: 'Holdings & Positions Reports'
    },
    {
      id: 'tax-reports-statements',
      title: 'Tax Reports & Statements'
    },
    {
      id: 'transaction-reports',
      title: 'Transaction Reports'
    },
    {
      id: 'margin-reports',
      title: 'Margin Reports'
    },
    {
      id: 'dp-holdings-cdsl-reports',
      title: 'DP Holdings & CDSL Reports'
    },
    {
      id: 'mutual-fund-statements',
      title: 'Mutual Fund Statements'
    },
    {
      id: 'statement-delivery-issues',
      title: 'Statement Delivery Issues'
    }
  ],
  'ipos-buybacks-corporate-actions': [
    {
      id: 'ipo-application-process',
      title: 'IPO Application Process'
    },
    {
      id: 'ipo-allotment-refunds',
      title: 'IPO Allotment & Refunds'
    },
    {
      id: 'sme-mainboard-ipo-differences',
      title: 'SME & Mainboard IPO Differences'
    },
    {
      id: 'buybacks',
      title: 'Buybacks'
    },
    {
      id: 'delistings-open-offers',
      title: 'Delistings & Open Offers'
    },
    {
      id: 'bonus-split-rights-issues',
      title: 'Bonus, Split & Rights Issues'
    },
    {
      id: 'dividend-related-queries',
      title: 'Dividend Related Queries'
    },
    {
      id: 'corporate-action-adjustments',
      title: 'Corporate Action Adjustments'
    },
    {
      id: 'reports-statements',
      title: 'Reports & Statements'
    },
    {
      id: 'common-errors-troubleshooting',
      title: 'Common Errors & Troubleshooting'
    }
  ],
  'technical-platform-issues': [
    {
      id: 'login-access-issues',
      title: 'Login & Access Issues'
    },
    {
      id: 'app-website-not-working',
      title: 'App / Website Not Working'
    },
    {
      id: 'slow-performance-lag',
      title: 'Slow Performance / Lag'
    },
    {
      id: 'order-placement-errors',
      title: 'Order Placement Errors'
    },
    {
      id: 'charting-issues',
      title: 'Charting Issues'
    },
    {
      id: 'watchlist-portfolio-sync',
      title: 'Watchlist / Portfolio Sync'
    },
    {
      id: 'notification-alerts',
      title: 'Notification & Alerts'
    },
    {
      id: 'account-settings-ui-errors',
      title: 'Account Settings & UI Errors'
    },
    {
      id: 'device-os-browser-compatibility',
      title: 'Device, OS & Browser Compatibility'
    },
    {
      id: 'api-integration-errors',
      title: 'API & Integration Errors'
    },
    {
      id: 'maintenance-downtime-outages',
      title: 'Maintenance, Downtime & Outages'
    },
    {
      id: 'troubleshooting-escalation',
      title: 'Troubleshooting & Escalation'
    }
  ],
  'api-developer-access': [
    {
      id: 'getting-started-with-apis',
      title: 'Getting Started with APIs'
    },
    {
      id: 'api-key-authentication',
      title: 'API Key & Authentication'
    },
    {
      id: 'api-documentation-sdks',
      title: 'API Documentation & SDKs'
    },
    {
      id: 'market-data-apis',
      title: 'Market Data APIs'
    },
    {
      id: 'order-management-apis',
      title: 'Order Management APIs'
    },
    {
      id: 'portfolio-holdings-apis',
      title: 'Portfolio & Holdings APIs'
    },
    {
      id: 'funds-ledger-apis',
      title: 'Funds & Ledger APIs'
    },
    {
      id: 'error-codes-troubleshooting',
      title: 'Error Codes & Troubleshooting'
    },
    {
      id: 'rate-limits-throttling',
      title: 'Rate Limits & Throttling'
    },
    {
      id: 'algo-trading-guidelines',
      title: 'Algo Trading Guidelines'
    },
    {
      id: 'support-feedback-reporting-issues',
      title: 'Support, Feedback & Reporting Issues'
    },
    {
      id: 'api-versioning-deprecation',
      title: 'API Versioning & Deprecation'
    }
  ],
  'regulatory-disclosures': [
    {
      id: 'sebi-mandated-disclosures',
      title: 'SEBI Mandated Disclosures'
    },
    {
      id: 'exchange-membership-information',
      title: 'Exchange Membership Information'
    },
    {
      id: 'investor-grievance-handling',
      title: 'Investor Grievance Handling'
    },
    {
      id: 'brokerage-charges-disclosures',
      title: 'Brokerage & Charges Disclosures'
    },
    {
      id: 'policies-procedures',
      title: 'Policies & Procedures'
    },
    {
      id: 'client-communications-recordings',
      title: 'Client Communications & Recordings'
    },
    {
      id: 'statutory-disclosures',
      title: 'Statutory Disclosures'
    },
    {
      id: 'cybersecurity-data-privacy-disclosures',
      title: 'Cybersecurity & Data Privacy Disclosures'
    },
    {
      id: 'investor-awareness-education',
      title: 'Investor Awareness & Education'
    },
    {
      id: 'periodic-regulatory-updates',
      title: 'Periodic Regulatory Updates'
    }
  ],
  'sub-broker-franchise-help': [
    {
      id: 'partner-onboarding-process',
      title: 'Partner Onboarding Process'
    },
    {
      id: 'revenue-sharing-payouts',
      title: 'Revenue Sharing & Payouts'
    },
    {
      id: 'client-onboarding-for-partners',
      title: 'Client Onboarding for Partners'
    },
    {
      id: 'partner-dashboard-access',
      title: 'Partner Dashboard & Access'
    },
    {
      id: 'marketing-branding-support',
      title: 'Marketing & Branding Support'
    },
    {
      id: 'training-certification',
      title: 'Training & Certification'
    },
    {
      id: 'compliance-regulatory-requirements',
      title: 'Compliance & Regulatory Requirements'
    },
    {
      id: 'tools-tech-support-for-partners',
      title: 'Tools & Tech Support for Partners'
    },
    {
      id: 'support-escalation-matrix',
      title: 'Support & Escalation Matrix'
    },
    {
      id: 'performance-metrics-incentives',
      title: 'Performance Metrics & Incentives'
    }
  ],
  'account-reactivation-closure': [
    {
      id: 'dormant-inactive-account',
      title: 'Dormant / Inactive Account'
    },
    {
      id: 'account-reactivation-process',
      title: 'Account Reactivation Process'
    },
    {
      id: 're-kyc-compliance-requirements',
      title: 'Re-KYC and Compliance Requirements'
    },
    {
      id: 'trading-segment-reactivation',
      title: 'Trading Segment Reactivation'
    },
    {
      id: 'account-closure-process',
      title: 'Account Closure Process'
    },
    {
      id: 'charges-refunds',
      title: 'Charges & Refunds'
    },
    {
      id: 'closure-due-compliance-violation',
      title: 'Closure Due to Compliance/Violation'
    },
    {
      id: 'partial-deactivation-segment-deletion',
      title: 'Partial Deactivation / Segment Deletion'
    },
    {
      id: 'support-follow-up',
      title: 'Support & Follow-up'
    }
  ],
  'segment-specific-help': [
    {
      id: 'segment-eligibility-activation',
      title: 'Segment Eligibility & Activation'
    },
    {
      id: 'trading-timings-sessions',
      title: 'Trading Timings & Sessions'
    },
    {
      id: 'order-types-product-codes',
      title: 'Order Types & Product Codes'
    },
    {
      id: 'segment-specific-charges-taxes',
      title: 'Segment-Specific Charges & Taxes'
    },
    {
      id: 'scrip-contract-issues',
      title: 'Scrip/Contract Issues'
    },
    {
      id: 'corporate-actions-per-segment',
      title: 'Corporate Actions per Segment'
    },
    {
      id: 'settlement-margin-rules',
      title: 'Settlement & Margin Rules'
    },
    {
      id: 'auction-penalties-close-out',
      title: 'Auction Penalties & Close-out'
    },
    {
      id: 'segment-specific-notifications-alerts',
      title: 'Segment-Specific Notifications & Alerts'
    },
    {
      id: 'error-codes-trading-restrictions',
      title: 'Error Codes & Trading Restrictions'
    }
  ],
  'nri-international-client-help': [
    {
      id: 'eligibility-account-types',
      title: 'Eligibility & Account Types'
    },
    {
      id: 'account-opening-for-nris',
      title: 'Account Opening for NRIs'
    },
    {
      id: 'pis-vs-non-pis-route',
      title: 'PIS vs Non-PIS Route'
    },
    {
      id: 'banking-fund-transfers',
      title: 'Banking & Fund Transfers'
    },
    {
      id: 'taxation-for-nris',
      title: 'Taxation for NRIs'
    },
    {
      id: 'trading-investment-restrictions',
      title: 'Trading & Investment Restrictions'
    },
    {
      id: 'mutual-funds-corporate-actions',
      title: 'Mutual Funds & Corporate Actions'
    },
    {
      id: 'regulatory-disclosures-compliance',
      title: 'Regulatory Disclosures & Compliance'
    },
    {
      id: 'support-escalation-for-nris',
      title: 'Support & Escalation for NRIs'
    },
    {
      id: 'account-modification-closure-nri-specific',
      title: 'Account Modification & Closure (NRI-specific)'
    }
  ]
};

export const getSubcategoriesByTopic = (topicId: string): Subcategory[] => {
  return subcategories[topicId] || [];
};

export const getSubcategoryById = (topicId: string, subcategoryId: string): Subcategory | undefined => {
  const topicSubcategories = subcategories[topicId];
  return topicSubcategories?.find(subcategory => subcategory.id === subcategoryId);
};

export const getSubcategoryTitle = (topicId: string, subcategoryId: string): string => {
  const subcategory = getSubcategoryById(topicId, subcategoryId);
  return subcategory ? subcategory.title : subcategoryId;
};

