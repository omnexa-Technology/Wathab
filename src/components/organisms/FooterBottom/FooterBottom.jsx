'use client';

import { SocialIconsList } from '@/components/molecules/SocialIconsList/SocialIconsList';
import { CopyrightText } from '@/components/molecules/CopyrightText/CopyrightText';
import { FooterLink } from '@/components/atoms/FooterLink/FooterLink';
import { useTranslation } from '@/hooks/useTranslation';

export function FooterBottom({ className = '', ...props }) {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col items-center justify-between gap-4 px-4 py-8 sm:gap-6 sm:px-5 sm:py-10 md:px-6 lg:flex-row lg:px-12 lg:py-12 xl:px-16 2xl:px-[120px] self-stretch w-full min-w-0 bg-[#141414] ${className}`}
      {...props}
    >
      {/* Policy links – right in RTL, wrap on small screens */}
      <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:justify-end">
        <FooterLink href="/privacy-policy" variant="large">
          {t('footer.policies.privacy')}
        </FooterLink>
        <FooterLink href="/terms-of-service" variant="large">
          {t('footer.policies.terms')}
        </FooterLink>
      </nav>

      {/* Copyright – center on mobile, order middle on desktop */}
      <CopyrightText />

      {/* Social icons – left in RTL */}
      <SocialIconsList />
    </div>
  );
}
