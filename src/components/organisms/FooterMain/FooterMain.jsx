'use client';

import { usePathname } from 'next/navigation';
import { ContactInfoList } from '../../molecules/ContactInfoList/ContactInfoList';
import { BusinessHours } from '../../molecules/BusinessHours/BusinessHours';
import { FooterLinkList } from '../../molecules/FooterLinkList/FooterLinkList';
import { FooterBrand } from '../../molecules/FooterBrand/FooterBrand';
import { SectionDivider } from '../../atoms/SectionDivider/SectionDivider';
import { useTranslation } from '../../../hooks/useTranslation';

/** Normalize path for comparison (no trailing slash, locale-agnostic). */
function normalizePath(path) {
  if (!path) return '';
  const segments = path.split('/').filter(Boolean);
  return '/' + (segments.slice(1).join('/') || ''); // drop locale (first segment)
}

export function FooterMain({ className = '', ...props }) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  const isActive = (href) => {
    if (href === '/') return currentPath === '' || currentPath === '/';
    return currentPath === href || currentPath.startsWith(href + '/');
  };

  const quickLinks = [
    { href: '/contact', label: t('footer.quickLinks.contact') },
    { href: '/about/faq', label: t('footer.quickLinks.faq') },
    { href: '/about/team', label: t('footer.quickLinks.team') },
    { href: '/about/clients', label: t('footer.quickLinks.clients') },
  ].map((link) => ({ ...link, active: isActive(link.href) }));

  const mainLinks = [
    { href: '/about', label: t('footer.mainLinks.about') },
    { href: '/services', label: t('footer.mainLinks.services') },
    { href: '/sectors', label: t('footer.mainLinks.sectors') },
    { href: '/news', label: t('footer.mainLinks.news') },
    { href: '/licenses', label: t('footer.mainLinks.licenses') },
  ].map((link) => ({ ...link, active: isActive(link.href) }));

  return (
    <div
      className={`grid grid-cols-1 gap-8 px-4 py-8 sm:gap-10 sm:px-5 sm:py-10 md:grid-cols-2 md:gap-12 md:px-6 md:py-12 lg:grid-cols-4 lg:gap-16 lg:px-12 lg:py-16 xl:px-16 xl:py-20 2xl:px-[120px] 2xl:py-24 self-stretch w-full min-w-0 bg-[#141414] ${className}`}
      {...props}
    >
      {/* 1. Brand – mobile first, desktop col 1 */}
      <div className="order-1 lg:order-1 min-w-0">
        <FooterBrand />
      </div>

      {/* 2. Contact – mobile second, desktop col 4 (RTL: leftmost) */}
      <div className="order-2 flex flex-col gap-4 sm:gap-6 lg:order-4 lg:gap-8 text-right min-w-0">
        <div className="inline-flex flex-col items-start gap-4 sm:gap-6 lg:gap-8">
          <h3 className="font-din font-medium text-white text-xl sm:text-[22px] lg:text-2xl leading-tight tracking-normal whitespace-nowrap">
            {t('footer.contactTitle')}
          </h3>
          <SectionDivider />
        </div>
        <ContactInfoList />
        <BusinessHours />
      </div>

      {/* 3. Quick Links – mobile third, desktop col 3 */}
      <div className="order-3 lg:order-3 min-w-0">
        <FooterLinkList title={t('footer.quickLinksTitle')} links={quickLinks} />
      </div>

      {/* 4. Main Links – mobile fourth, desktop col 2 */}
      <div className="order-4 lg:order-2 min-w-0">
        <FooterLinkList title={t('footer.mainLinksTitle')} links={mainLinks} />
      </div>
    </div>
  );
}
