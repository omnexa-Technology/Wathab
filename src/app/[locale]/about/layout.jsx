import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'about');
}

export default function AboutLayout({ children }) {
  return children;
}
