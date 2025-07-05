export interface Topic {
  id: string;
  title: string;
}

export const topics: Topic[] = [
  {
    id: 'account-opening',
    title: 'Account Opening'
  },
  {
    id: 'funds',
    title: 'Funds & Payments'
  },
  {
    id: 'trading',
    title: 'Trading'
  },
  {
    id: 'technical',
    title: 'Technical Issues'
  }
];

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find(topic => topic.id === id);
};

export const getTopicTitle = (id: string): string => {
  const topic = getTopicById(id);
  return topic ? topic.title : id;
};
