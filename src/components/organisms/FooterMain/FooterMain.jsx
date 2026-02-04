'use client';

import { ContactInfoList } from '@/components/molecules/ContactInfoList/ContactInfoList';
import { BusinessHours } from '@/components/molecules/BusinessHours/BusinessHours';
import { FooterLinkList } from '@/components/molecules/FooterLinkList/FooterLinkList';
import { FooterBrand } from '@/components/molecules/FooterBrand/FooterBrand';
import { SectionDivider } from '@/components/atoms/SectionDivider/SectionDivider';
import { useTranslation } from '@/hooks/useTranslation';

export function FooterMain({ className = '', ...props }) {
  const { t } = useTranslation();

  const quickLinks = [
    { href: '/contact', label: t('footer.quickLinks.contact'), active: false },
    { href: '/faq', label: t('footer.quickLinks.faq'), active: false },
    { href: '/team', label: t('footer.quickLinks.team'), active: false },
    { href: '/clients', label: t('footer.quickLinks.clients'), active: false },
  ];

  const mainLinks = [
    { href: '/about', label: t('footer.mainLinks.about'), active: false },
    { href: '/services', label: t('footer.mainLinks.services'), active: false },
    { href: '/sectors', label: t('footer.mainLinks.sectors'), active: false },
    { href: '/success-stories', label: t('footer.mainLinks.successStories'), active: false },
    { href: '/media', label: t('footer.mainLinks.mediaCenter'), active: false },
    { href: '/licenses', label: t('footer.mainLinks.licenses'), active: false },
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-16 px-6 py-12 lg:p-[120px] self-stretch w-full bg-[#141414] ${className}`} {...props}>
      {/* Brand Section - Rightmost in RTL */}
      <FooterBrand />

      {/* Main Links Section */}
      <FooterLinkList title={t('footer.mainLinksTitle')} links={mainLinks} />

      {/* Quick Links Section */}
      <FooterLinkList title={t('footer.quickLinksTitle')} links={quickLinks} />

      {/* Contact Info Section - Leftmost in RTL */}
      <div className="flex flex-col items-start justify-center gap-8 flex-1 text-right">
        <div className="inline-flex flex-col items-start gap-8">
          <h3 className="flex items-center justify-center font-h5 font-[number:var(--h5-font-weight)] text-white text-[length:var(--h5-font-size)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] whitespace-nowrap [direction:rtl] [font-style:var(--h5-font-style)]">
            {t('footer.contactTitle')}
          </h3>
          <SectionDivider />
        </div>
        <ContactInfoList />
        <BusinessHours />
      </div>
    </div>
  );
}
