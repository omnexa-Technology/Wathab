'use client';

import { SocialIconsList } from '@/components/molecules/SocialIconsList/SocialIconsList';
import { CopyrightText } from '@/components/molecules/CopyrightText/CopyrightText';
import { FooterLink } from '@/components/atoms/FooterLink/FooterLink';
import { useTranslation } from '@/hooks/useTranslation';

export function FooterBottom({ className = '', ...props }) {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col lg:flex-row items-center justify-between gap-6 px-6 py-12 lg:px-[120px] lg:py-12 self-stretch w-full bg-[#141414] ${className}`} {...props}>
      {/* Policy Links - appears on RIGHT in RTL */}
      <nav className="inline-flex items-center gap-6">
        <FooterLink href="/privacy-policy" variant="large">
          {t('footer.policies.privacy')}
        </FooterLink>
        <FooterLink href="/terms-of-service" variant="large">
          {t('footer.policies.terms')}
        </FooterLink>
      </nav>

      {/* Copyright Text - appears in CENTER */}
      <CopyrightText />

      {/* Social Icons - appears on LEFT in RTL */}
      <SocialIconsList />
    </div>
  );
}
