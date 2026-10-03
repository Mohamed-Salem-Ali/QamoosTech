export const languages = [
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'en', label: 'English', dir: 'ltr' },
] as const

export type Lang = (typeof languages)[number]['code']
export const defaultLang: Lang = 'ar'

export function isLang(value: string): value is Lang {
  return languages.some((l) => l.code === value)
}

export function dirOf(lang: Lang) {
  return languages.find((l) => l.code === lang)!.dir
}

// UI strings. To add a language: add it to `languages`, add a block here, and add content/<code>/.
export const ui = {
  ar: {
    siteName: 'قاموس تك',
    tagline: 'افهم الكلمات الإنجليزية التي يستخدمها المبرمجون كل يوم',
    intro: 'قاموس ثنائي اللغة لمصطلحات هندسة البرمجيات: شرح بالعربية، ونطق، وأمثلة حقيقية من العمل والدراسة.',
    searchPlaceholder: 'ابحث عن مصطلح بالإنجليزية أو العربية…',
    searchLabel: 'بحث',
    noResults: 'لا توجد نتائج مطابقة.',
    categories: 'التصنيفات',
    allTerms: 'كل المصطلحات',
    termsCount: (n: number) => (n === 1 ? 'مصطلح واحد' : n === 2 ? 'مصطلحان' : n <= 10 ? `${n} مصطلحات` : `${n} مصطلحًا`),
    definition: 'التعريف',
    context: 'أين تسمعه؟',
    examples: 'أمثلة',
    mistake: 'خطأ شائع',
    related: 'مصطلحات مرتبطة',
    pronunciation: 'النطق',
    listen: 'استمع',
    browserVoice: 'صوت المتصفح',
    level: { beginner: 'مبتدئ', intermediate: 'متوسط' },
    home: 'الرئيسية',
    switchTo: 'English',
    notFound: 'لم نجد هذه الصفحة.',
    backHome: 'العودة إلى الرئيسية',
    contribute: 'ساهم في المشروع',
    footer: 'مشروع مفتوح المصدر. المحتوى بترخيص CC BY-SA 4.0.',
  },
  en: {
    siteName: 'QamoosTech',
    tagline: 'Understand the English words software engineers use every day',
    intro: 'A bilingual dictionary of software-engineering vocabulary: clear explanations, pronunciation, and real examples from work and study.',
    searchPlaceholder: 'Search a term in English or Arabic…',
    searchLabel: 'Search',
    noResults: 'No matching terms.',
    categories: 'Categories',
    allTerms: 'All terms',
    termsCount: (n: number) => (n === 1 ? '1 term' : `${n} terms`),
    definition: 'Definition',
    context: 'Where you hear it',
    examples: 'Examples',
    mistake: 'Common mistake',
    related: 'Related terms',
    pronunciation: 'Pronunciation',
    listen: 'Listen',
    browserVoice: 'Browser voice',
    level: { beginner: 'Beginner', intermediate: 'Intermediate' },
    home: 'Home',
    switchTo: 'العربية',
    notFound: "We couldn't find that page.",
    backHome: 'Back to home',
    contribute: 'Contribute',
    footer: 'Open source. Content licensed CC BY-SA 4.0.',
  },
} satisfies Record<Lang, Record<string, unknown>>
