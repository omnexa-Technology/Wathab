import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';
import { InnerHero } from '@/components/sections/InnerHero';
export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'contact');
}

export default async function ContactPage() {
  const { t } = await getLocaleAndTranslations();
  return (
    // <div className='h-[100vh] w-full'>
    //   <h1 className='m-24 text-8xl font-bold'>{t.contact.title}</h1>
    //   <p className='m-24 text-3xl font-medium'>{t.contact.description}</p>
    // </div>
    <>
      <InnerHero
        title={t.contact.heroTitle}
        breadcrumbLabel={t.contact.breadcrumbLabel}
        image="/assets/images/contact/heroContact.webp"
      />
    </>
  );
}
