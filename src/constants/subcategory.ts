export interface Doubt {
  id: string;
  title: string;
}

export interface TopicDoubts {
  [topicId: string]: Doubt[];
}

export const doubts: TopicDoubts = {
  'account-opening': [
    {
      id: 'resident-individual',
      title: 'Resident Individual'
    },
    {
      id: 'nri',
      title: 'NRI Account'
    },
    {
      id: 'corporate',
      title: 'Corporate Account'
    }
  ],
  'funds': [
    {
      id: 'add-money',
      title: 'Add Money'
    },
    {
      id: 'withdraw-money',
      title: 'Withdraw Money'
    },
    {
      id: 'payment-issues',
      title: 'Payment Issues'
    }
  ],
  'trading': [
    {
      id: 'equity',
      title: 'Equity Trading'
    },
    {
      id: 'fno',
      title: 'F&O Trading'
    },
    {
      id: 'currency',
      title: 'Currency Trading'
    }
  ],
  'technical': [
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

