import { getLocaleAndTranslations } from '../../../lib/getLocaleAndTranslations';
import { buildPageMetadata } from '../../../lib/getPageMetadata';
import { InnerHero } from '../../../components/sections/InnerHero';
import { TermsOfServiceContent } from '../../../components/sections/TermsOfServiceContent/TermsOfServiceContent';
import { PrivacyPolicyContactSection } from '../../../components/sections/PrivacyPolicyContactSection/PrivacyPolicyContactSection';

export async function generateMetadata() {
  const { t } = await getLocaleAndTranslations();
  return buildPageMetadata(t, 'termsOfService');
}

export default async function TermsOfServicePage() {
  const { t } = await getLocaleAndTranslations();

  return (
    <>
      <InnerHero
        title={t.termsOfService.title}
        breadcrumbLabel={t.termsOfService.breadcrumbLabel}
        image="/assets/images/terms-of-service/hero.webp"
      />
      <TermsOfServiceContent />
      <div className="flex justify-center relative w-full my-24 ">
        <PrivacyPolicyContactSection />
      </div>
    </>
  );
}
