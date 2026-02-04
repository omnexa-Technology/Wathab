'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { ContactItem } from '@/components/atoms/ContactItem/ContactItem';

export function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-nav">
      <ContactItem icon="call" text={t('headNav.phone')} />
      <div className="w-px h-divider-height bg-neutral-700 rotate-90" />
      <ContactItem icon="mail" text={t('headNav.email')} />
      <div className="w-px h-divider-height bg-neutral-700 rotate-90" />
      <ContactItem icon="location" text={t('headNav.address')} />
    </div>
  );
}
