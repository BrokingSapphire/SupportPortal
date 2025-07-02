// Export all types and constants
export * from './topics';
export * from './doubts';
export * from './questions';

// Re-export commonly used items for convenience
export { topics, getTopicById, getTopicTitle } from './topics';
export { doubts, getDoubtsByTopic, getDoubtById, getDoubtTitle } from './doubts';
export { questions, getQuestion, getQuestionsByDoubt, getAllQuestions, searchQuestions } from './questions';
