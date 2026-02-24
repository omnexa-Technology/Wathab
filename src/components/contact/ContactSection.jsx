'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ContactForm } from './ContactForm';
import { ContactCard } from './ContactCard';

export function ContactSection() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="bg-gradient-to-l from-[#eaeaea] to-white px-4 py-[96px] sm:px-[120px]"
    >
      <div className="mx-auto flex max-w-[1680px] flex-col gap-[96px] md:flex-row md:items-start">

        {/* Right column - Card */}
        <div className="flex w-full justify-center md:w-[680px] md:shrink-0">
          <ContactCard />
        </div>

        {/* Left column - Form */}
        <div className="flex-1">
          <h2 className="text-[48px] font-bold text-[#141414]">
            {t('contact.form.title')}
          </h2>
          <p className="mt-4 text-[24px] text-[#595959]">
            {t('contact.form.subtitle')}
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        
      </div>
    </section>
  );
}
