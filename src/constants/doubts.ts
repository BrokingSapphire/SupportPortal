export interface Doubt {
  id: string;
  title: string;
  description: string;
}

export interface TopicDoubts {
  [topicId: string]: Doubt[];
}

export const doubts: TopicDoubts = {
  'account-opening': [
    {
      id: 'resident-individual',
      title: 'Resident Individual',
      description: 'Account opening for Indian residents'
    },
    {
      id: 'nri',
      title: 'NRI Account',
      description: 'Non-Resident Indian account opening'
    },
    {
      id: 'corporate',
      title: 'Corporate Account',
      description: 'Business and corporate account opening'
    }
  ],
  'funds': [
    {
      id: 'add-money',
      title: 'Add Money',
      description: 'Adding funds to your trading account'
    },
    {
      id: 'withdraw-money',
      title: 'Withdraw Money',
      description: 'Withdrawing funds from your account'
    },
    {
      id: 'payment-issues',
      title: 'Payment Issues',
      description: 'Payment failures and related problems'
    }
  ],
  'trading': [
    {
      id: 'equity',
      title: 'Equity Trading',
      description: 'Stock trading related queries'
    },
    {
      id: 'fno',
      title: 'F&O Trading',
      description: 'Futures and Options trading'
    },
    {
      id: 'currency',
      title: 'Currency Trading',
      description: 'Currency derivatives trading'
    }
  ],
  'technical': [
    {
      id: 'app-issues',
      title: 'App Issues',
      description: 'Mobile app related problems'
    },
    {
      id: 'login-issues',
      title: 'Login Issues',
      description: 'Login and authentication problems'
    },
    {
      id: 'platform-issues',
      title: 'Platform Issues',
      description: 'Web platform and technical issues'
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
