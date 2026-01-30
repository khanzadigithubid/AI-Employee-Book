// Translation keys for common UI elements
export const TRANSLATION_KEYS = {
  // Navigation
  HOME: 'home',
  PREFACE: 'preface',
  CHAPTERS: 'chapters',
  ABOUT_BOOK: 'about_book',
  FUTURE_OF_AI: 'future_of_ai',
  CONTACT: 'contact',
  TABLE_OF_CONTENTS: 'table_of_contents',

  // Chapter navigation
  PREVIOUS_CHAPTER: 'previous_chapter',
  NEXT_CHAPTER: 'next_chapter',
  START_READING: 'start_reading',
  VIEW_ALL_CHAPTERS: 'view_all_chapters',

  // Footer
  COPYRIGHT: 'copyright',

  // Page titles
  AI_EMPLOYEE_BOOK: 'ai_employee_book',

  // Common
  READ_THE_BOOK: 'read_the_book',
  VIEW_TOC: 'view_toc',

  // Future of AI page
  THE_EVOLUTION_CONTINUES: 'the_evolution_continues',
  FUTURE_AI_DESC: 'future_ai_desc',
  EMERGING_CAPABILITIES: 'emerging_capabilities',
  ORGANIZATIONAL_TRANSFORMATION: 'organizational_transformation',
  PREPARING_FOR_TOMORROW: 'preparing_for_tomorrow',
  THE_PATH_FORWARD: 'the_path_forward',

  // Additional keys for future-of-ai page
  LIFELONG_LEARNING: 'lifelong_learning',
  ADAPTABILITY: 'adaptability',
  ETHICAL_LEADERSHIP: 'ethical_leadership',
  COLLABORATIVE_MINDSET: 'collaborative_mindset',
  NEW_ROLES: 'new_roles',
  DYNAMIC_TEAMS: 'dynamic_teams',
  GLOBAL_COLLABORATION: 'global_collaboration',
  PERFORMANCE_METRICS: 'performance_metrics',
} as const;

// Type representing the string values that are used as keys in the translations
export type TranslationKey = typeof TRANSLATION_KEYS[keyof typeof TRANSLATION_KEYS];