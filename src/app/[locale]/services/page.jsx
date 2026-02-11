import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'services');
}

export default async function ServicesPage() {
  const { t } = await getLocaleAndTranslations();
  return (
    <div className='h-[100vh] w-full'>
      <h1>{t.services.title}</h1>
      <p>{t.services.description}</p>
    </div>
  );
}
