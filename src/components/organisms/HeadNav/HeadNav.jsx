'use client';

import { Container } from '@/components/atoms/Container/Container';
import { SocialLinks } from '@/components/molecules/SocialLinks/SocialLinks';
import { useTranslation } from '@/hooks/useTranslation';
import { ContactItem } from '@/components/atoms/ContactItem/ContactItem';

export function HeadNav() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-brand-900 py-topbar-y">
      <Container className="px-section flex justify-center items-center">
        <div className="flex-1 flex justify-between items-center gap-section-gap">
          <div className="flex items-center gap-nav">
            <SocialLinks />
            <div className="w-px h-divider-height bg-neutral-700 rotate-90" />
            <ContactItem icon="call" text={t('headNav.phone')} />
          </div>
          <div className="flex items-center gap-nav">
            <ContactItem icon="mail" text={t('headNav.email')} />
            <div className="w-px h-divider-height bg-neutral-700 rotate-90" />
            <ContactItem icon="location" text={t('headNav.address')} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeadNav;
