export interface Topic {
  id: string;
  title: string;
  description: string;
}

export const topics: Topic[] = [
  {
    id: 'account-opening',
    title: 'Account Opening',
    description: 'Everything about opening and setting up your trading account'
  },
  {
    id: 'funds',
    title: 'Funds & Payments',
    description: 'Managing funds, adding money, and payment methods'
  },
  {
    id: 'trading',
    title: 'Trading',
    description: 'Trading related queries and support'
  },
  {
    id: 'technical',
    title: 'Technical Issues',
    description: 'Platform issues, app problems, and technical support'
  }
];

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find(topic => topic.id === id);
};

export const getTopicTitle = (id: string): string => {
  const topic = getTopicById(id);
  return topic ? topic.title : id;
};
