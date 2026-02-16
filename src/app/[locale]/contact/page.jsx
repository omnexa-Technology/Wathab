import { getLocaleAndTranslations } from '@/lib/getLocaleAndTranslations';
import { buildPageMetadata } from '@/lib/getPageMetadata';
import { InnerHero } from '@/components/sections/InnerHero';
import { ContactSection } from '@/components/organisms/ContactSection/ContactSection';
// import { ContactForm } from '@/components/organisms/ContactForm/ContactForm';
export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'contact');
}

export default async function ContactPage() {
  const { t } = await getLocaleAndTranslations();
  return (
    <>
      <InnerHero
        title={t.contact.heroTitle}
        breadcrumbLabel={t.contact.breadcrumbLabel}
        image="/assets/images/contact/heroContact.webp"
      />
      <ContactSection />
      {/* <ContactForm /> */}
    </>
  );
}
