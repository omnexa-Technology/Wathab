import { getLocaleAndTranslations } from '../../../lib/getLocaleAndTranslations';
import { buildPageMetadata } from '../../../lib/getPageMetadata';
import { InnerHero } from '../../../components/sections/InnerHero';
import { PrivacyPolicyContent } from '../../../components/sections/PrivacyPolicyContent/PrivacyPolicyContent';
import { PrivacyPolicyContactSection } from '../../../components/sections/PrivacyPolicyContactSection/PrivacyPolicyContactSection';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'privacyPolicy');
}

export default async function PrivacyPolicyPage() {
  const { t } = await getLocaleAndTranslations();

  return (
    <>
      <InnerHero
        title={t.privacyPolicy.title}
        breadcrumbLabel={t.privacyPolicy.breadcrumbLabel}
        image="/assets/images/privacy-policy/hero.webp"
      />
      <PrivacyPolicyContent />
      <PrivacyPolicyContactSection />
    </>
  );
}
