export interface Doubt {
  id: string;
  title: string;
}

export interface TopicDoubts {
  [topicId: string]: Doubt[];
}

export const doubts: TopicDoubts = {
  'account-opening-kyc': [
    {
      id: 'resident-individual',
      title: 'Resident Individual'
    },
    {
      id: 'nri-account',
      title: 'NRI Account'
    },
    {
      id: 'corporate-account',
      title: 'Corporate Account'
    },
    {
      id: 'huf-account',
      title: 'HUF Account'
    },
    {
      id: 'kyc-documents',
      title: 'KYC Documents'
    },
    {
      id: 'account-verification',
      title: 'Account Verification'
    }
  ],
  'fund-transfer-withdrawals': [
    {
      id: 'add-money',
      title: 'Add Money'
    },
    {
      id: 'withdraw-money',
      title: 'Withdraw Money'
    },
    {
      id: 'payment-gateway-issues',
      title: 'Payment Gateway Issues'
    },
    {
      id: 'bank-transfer',
      title: 'Bank Transfer'
    },
    {
      id: 'upi-payments',
      title: 'UPI Payments'
    },
    {
      id: 'withdrawal-limits',
      title: 'Withdrawal Limits'
    }
  ],
  'trading-orders': [
    {
      id: 'equity-trading',
      title: 'Equity Trading'
    },
    {
      id: 'fno-trading',
      title: 'F&O Trading'
    },
    {
      id: 'currency-trading',
      title: 'Currency Trading'
    },
    {
      id: 'commodity-trading',
      title: 'Commodity Trading'
    },
    {
      id: 'order-types',
      title: 'Order Types'
    },
    {
      id: 'order-modifications',
      title: 'Order Modifications'
    }
  ],
  'pledge-margin-collateral': [
    {
      id: 'pledge-shares',
      title: 'Pledge Shares'
    },
    {
      id: 'unpledge-shares',
      title: 'Unpledge Shares'
    },
    {
      id: 'margin-requirements',
      title: 'Margin Requirements'
    },
    {
      id: 'collateral-management',
      title: 'Collateral Management'
    },
    {
      id: 'margin-calculator',
      title: 'Margin Calculator'
    },
    {
      id: 'haircut-values',
      title: 'Haircut Values'
    }
  ],
  'reports-statements': [
    {
      id: 'contract-notes',
      title: 'Contract Notes'
    },
    {
      id: 'ledger-statements',
      title: 'Ledger Statements'
    },
    {
      id: 'pnl-reports',
      title: 'P&L Reports'
    },
    {
      id: 'tax-reports',
      title: 'Tax Reports'
    },
    {
      id: 'holding-statements',
      title: 'Holding Statements'
    },
    {
      id: 'download-reports',
      title: 'Download Reports'
    }
  ],
  'ipos-buybacks-corporate-actions': [
    {
      id: 'ipo-applications',
      title: 'IPO Applications'
    },
    {
      id: 'ipo-allotment',
      title: 'IPO Allotment'
    },
    {
      id: 'buyback-applications',
      title: 'Buyback Applications'
    },
    {
      id: 'rights-issue',
      title: 'Rights Issue'
    },
    {
      id: 'bonus-shares',
      title: 'Bonus Shares'
    },
    {
      id: 'dividend-updates',
      title: 'Dividend Updates'
    }
  ],
  'technical-platform-issues': [
    {
      id: 'app-issues',
      title: 'App Issues'
    },
    {
      id: 'login-issues',
      title: 'Login Issues'
    },
    {
      id: 'platform-issues',
      title: 'Platform Issues'
    },
    {
      id: 'chart-issues',
      title: 'Chart Issues'
    },
    {
      id: 'order-placement-issues',
      title: 'Order Placement Issues'
    },
    {
      id: 'server-downtime',
      title: 'Server Downtime'
    }
  ],
  'api-developer-access': [
    {
      id: 'api-documentation',
      title: 'API Documentation'
    },
    {
      id: 'api-keys',
      title: 'API Keys'
    },
    {
      id: 'api-integration',
      title: 'API Integration'
    },
    {
      id: 'api-limits',
      title: 'API Limits'
    },
    {
      id: 'webhooks',
      title: 'Webhooks'
    },
    {
      id: 'developer-support',
      title: 'Developer Support'
    }
  ],
  'regulatory-disclosures': [
    {
      id: 'sebi-guidelines',
      title: 'SEBI Guidelines'
    },
    {
      id: 'risk-disclosures',
      title: 'Risk Disclosures'
    },
    {
      id: 'compliance-requirements',
      title: 'Compliance Requirements'
    },
    {
      id: 'regulatory-updates',
      title: 'Regulatory Updates'
    },
    {
      id: 'grievance-redressal',
      title: 'Grievance Redressal'
    },
    {
      id: 'investor-protection',
      title: 'Investor Protection'
    }
  ],
  'sub-broker-franchise-help': [
    {
      id: 'become-sub-broker',
      title: 'Become Sub-Broker'
    },
    {
      id: 'franchise-requirements',
      title: 'Franchise Requirements'
    },
    {
      id: 'commission-structure',
      title: 'Commission Structure'
    },
    {
      id: 'client-acquisition',
      title: 'Client Acquisition'
    },
    {
      id: 'business-support',
      title: 'Business Support'
    },
    {
      id: 'training-programs',
      title: 'Training Programs'
    }
  ],
  'account-reactivation-closure': [
    {
      id: 'reactivate-account',
      title: 'Reactivate Account'
    },
    {
      id: 'dormant-account',
      title: 'Dormant Account'
    },
    {
      id: 'close-account',
      title: 'Close Account'
    },
    {
      id: 'account-closure-process',
      title: 'Account Closure Process'
    },
    {
      id: 'transfer-holdings',
      title: 'Transfer Holdings'
    },
    {
      id: 'final-settlement',
      title: 'Final Settlement'
    }
  ],
  'segment-specific-help': [
    {
      id: 'nse-equity',
      title: 'NSE Equity'
    },
    {
      id: 'bse-equity',
      title: 'BSE Equity'
    },
    {
      id: 'nse-fno',
      title: 'NSE F&O'
    },
    {
      id: 'mcx-commodity',
      title: 'MCX Commodity'
    },
    {
      id: 'ncdex-commodity',
      title: 'NCDEX Commodity'
    },
    {
      id: 'currency-derivatives',
      title: 'Currency Derivatives'
    }
  ],
  'nri-international-client-help': [
    {
      id: 'nri-account-opening',
      title: 'NRI Account Opening'
    },
    {
      id: 'pis-permission',
      title: 'PIS Permission'
    },
    {
      id: 'nri-trading-rules',
      title: 'NRI Trading Rules'
    },
    {
      id: 'foreign-exchange',
      title: 'Foreign Exchange'
    },
    {
      id: 'repatriation-benefits',
      title: 'Repatriation Benefits'
    },
    {
      id: 'international-transfers',
      title: 'International Transfers'
    }
  ],
  'new-user-guide-getting-started': [
    {
      id: 'first-time-login',
      title: 'First Time Login'
    },
    {
      id: 'platform-walkthrough',
      title: 'Platform Walkthrough'
    },
    {
      id: 'place-first-order',
      title: 'Place First Order'
    },
    {
      id: 'understanding-charges',
      title: 'Understanding Charges'
    },
    {
      id: 'basic-trading-concepts',
      title: 'Basic Trading Concepts'
    },
    {
      id: 'risk-management',
      title: 'Risk Management'
    }
  ]
};

export const getDoubtsByTopic = (topicId: string): Doubt[] => {
  return doubts[topicId] || [];
};

export const getDoubtById = (topicId: string, doubtId: string): Doubt | undefined => {
  const topicDoubts = doubts[topicId];
  return topicDoubts?.find(doubt => doubt.id === doubtId);
};

export const getDoubtTitle = (topicId: string, doubtId: string): string => {
  const doubt = getDoubtById(topicId, doubtId);
  return doubt ? doubt.title : doubtId;
};

