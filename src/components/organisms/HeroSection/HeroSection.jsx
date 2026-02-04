'use client';

import { useTranslation } from '@/hooks/useTranslation';
import LocaleLink from '@/components/LocaleLink';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
      <nav>
        <LocaleLink href="/services">{t('home.heroCta')}</LocaleLink>
        <LocaleLink href="/contact">{t('home.heroSecondary')}</LocaleLink>
      </nav>
    </section>
  );
}
