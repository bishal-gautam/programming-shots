import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'ne'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  // Load all locale messages
  const messages = {
    common: (await import(`@/locales/${locale}/common.json`)).default,
    courses: (await import(`@/locales/${locale}/courses.json`)).default,
    roadmap: (await import(`@/locales/${locale}/roadmap.json`)).default,
  };

  return {
    messages
  };
});
