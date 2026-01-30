import { useI18n } from '@/i18n/context';
import { TRANSLATION_KEYS } from '@/i18n/translation-keys';

export { TRANSLATION_KEYS };

export type TranslationKey = keyof typeof TRANSLATION_KEYS;

// Translations for each language
const TRANSLATIONS = {
  en: {
    home: 'Home',
    preface: 'Preface',
    chapters: 'Chapters',
    about_book: 'About Book',
    future_of_ai: 'Future of AI',
    contact: 'Contact',
    table_of_contents: 'Table of Contents',
    previous_chapter: 'Previous Chapter',
    next_chapter: 'Next Chapter',
    start_reading: 'Start Reading',
    view_all_chapters: 'View All Chapters',
    copyright: '© Copyright',
    ai_employee_book: 'AI Employee Book',
    read_the_book: 'Read the Book',
    view_toc: 'View Table of Contents',
    
    // Future of AI page
    the_evolution_continues: 'The Evolution Continues',
    future_ai_desc: 'Future AI employees will likely possess enhanced contextual understanding, enabling them to navigate ambiguous situations with greater autonomy.',
    emerging_capabilities: 'Emerging Capabilities',
    organizational_transformation: 'Organizational Transformation',
    preparing_for_tomorrow: 'Preparing for Tomorrow',
    the_path_forward: 'The Path Forward',

    // Additional keys for future-of-ai page
    lifelong_learning: 'Lifelong Learning',
    adaptability: 'Adaptability',
    ethical_leadership: 'Ethical Leadership',
    collaborative_mindset: 'Collaborative Mindset',
    new_roles: 'New Roles',
    dynamic_teams: 'Dynamic Teams',
    global_collaboration: 'Global Collaboration',
    performance_metrics: 'Performance Metrics',
  },
  ur: {
    home: 'صفحۂ اول',
    preface: 'مقدمہ',
    chapters: 'ابواب',
    about_book: 'کتاب کے بارے میں',
    future_of_ai: 'مصنوعی ذہانت کا مستقبل',
    contact: 'رابطہ',
    table_of_contents: 'فہرست',
    previous_chapter: 'پچھلا باب',
    next_chapter: 'اگلا باب',
    start_reading: 'پڑھنا شروع کریں',
    view_all_chapters: 'تمام ابواب دیکھیں',
    copyright: '© کاپی رائٹ',
    ai_employee_book: 'مصنوعی ذہانت ملازم کتاب',
    read_the_book: 'کتاب پڑھیں',
    view_toc: 'فہرست دیکھیں',
    
    // Future of AI page
    the_evolution_continues: 'اvolution جاری ہے',
    future_ai_desc: 'مستقبل کے مصنوعی ذہانت ملازمین میں تقویت یافتہ سیاق و سباق کی سمجھ بوجھ ہوگی، جو انہیں مبہم صورتحال میں زیادہ خودمختاری کے ساتھ نیویگیٹ کرنے کے قابل بنائے گی۔',
    emerging_capabilities: 'نوعیت کی صلاحیتیں',
    organizational_transformation: 'تنظیم کی تبدیلی',
    preparing_for_tomorrow: 'آئندہ کی تیاری',
    the_path_forward: 'آگے کا راستہ',

    // Additional keys for future-of-ai page
    lifelong_learning: ' lifelong سیکھنے کا عمل',
    adaptability: 'موافقت پذیری',
    ethical_leadership: 'اخلاقی قیادت',
    collaborative_mindset: 'تعاونی ذہنیت',
    new_roles: 'نئے کردار',
    dynamic_teams: 'متحرک ٹیمیں',
    global_collaboration: 'عالمی تعاون',
    performance_metrics: 'کارکردگی کے معیارات',
  },
  ar: {
    home: 'الرئيسية',
    preface: 'مقدمة',
    chapters: 'الفصول',
    about_book: 'عن الكتاب',
    future_of_ai: 'مستقبل الذكاء الاصطناعي',
    contact: 'اتصل بنا',
    table_of_contents: 'جدول المحتويات',
    previous_chapter: 'الفصل السابق',
    next_chapter: 'الفصل التالي',
    start_reading: 'ابدأ القراءة',
    view_all_chapters: 'عرض جميع الفصول',
    copyright: '© الحقوق محفوظة',
    ai_employee_book: 'كتاب موظف الذكاء الاصطناعي',
    read_the_book: 'اقرأ الكتاب',
    view_toc: 'عرض جدول المحتويات',
    
    // Future of AI page
    the_evolution_continues: 'المست evolution لا يزال مستمراً',
    future_ai_desc: 'من المحتمل أن تمتلك موظفي الذكاء الاصطناعي في المستقبل فهماً سياقياً مُحسناً، مما يمكنهم من التنقل في المواقف الغامضة بقدر أكبر من الاستقلالية.',
    emerging_capabilities: 'القدرات الناشئة',
    organizational_transformation: 'تحول التنظيم',
    preparing_for_tomorrow: 'الاستعداد لليوم الغد',
    the_path_forward: 'المسار إلى الأمام',

    // Additional keys for future-of-ai page
    lifelong_learning: 'التعلم المستمر',
    adaptability: 'القدرة على التكيف',
    ethical_leadership: 'القيادة الأخلاقية',
    collaborative_mindset: 'العقلية التعاونية',
    new_roles: 'أدوار جديدة',
    dynamic_teams: 'فرق ديناميكية',
    global_collaboration: 'التعاون العالمي',
    performance_metrics: 'مقاييس الأداء',
  },
};

export function useTranslations() {
  const { language } = useI18n();

  const t = (key: TranslationKey): string => {
    const langTranslations = TRANSLATIONS[language];
    return langTranslations[key] || TRANSLATIONS.en[key] || key;
  };

  return { t, language };
}