'use client';

import { FooterMain } from '@/components/organisms/FooterMain/FooterMain';
import { FooterBottom } from '@/components/organisms/FooterBottom/FooterBottom';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton/WhatsAppButton';

export function Footer() {
  return (
    <>
      <footer className="flex flex-col w-full items-start overflow-x-hidden bg-[#141414]" dir="rtl">
        <FooterMain />
        <div className="w-full h-px min-h-px shrink-0 bg-[#595959]" aria-hidden />
        <FooterBottom />
      </footer>
      <WhatsAppButton />
    </>
  );
}
