// Export all types and constants
export * from './category';
export * from './subcategory';
export * from './qna';

// Re-export commonly used items for convenience
export { topics, getCategoryById, getCategoryTitle } from './category';
export { subcategories, getSubcategoriesByTopic, getSubcategoryById, getSubcategoryTitle } from './subcategory';
export { questions, getQuestion, getQuestionsBySubcategory, getAllQuestions, searchQuestions, getQuestionsByTopic, getRelatedQuestions } from './qna';

// Import functions for aliases
import { getCategoryById, getCategoryTitle } from './category';
import { getSubcategoriesByTopic, getSubcategoryById, getSubcategoryTitle } from './subcategory';
import { getQuestionsBySubcategory } from './qna';

// Alias functions for backward compatibility
export const getTopicById = getCategoryById;
export const getTopicTitle = getCategoryTitle;
export const getDoubtsByTopic = getSubcategoriesByTopic;
export const getDoubtById = getSubcategoryById;
export const getDoubtTitle = getSubcategoryTitle;
export const getQuestionsByDoubt = getQuestionsBySubcategory;
