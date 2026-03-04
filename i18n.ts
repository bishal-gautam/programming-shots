import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'ne'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  const messages = {
    common: (await import(`@/locales/${locale}/common.json`)).default,
    roadmap: (await import(`@/locales/${locale}/roadmap.json`)).default,
  };

  return {
    locale,
    messages
  };
});
