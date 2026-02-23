'use client';

import { FooterMain } from '../FooterMain/FooterMain';
import { FooterBottom } from '../FooterBottom/FooterBottom';
import { WhatsAppButton } from '../../atoms/WhatsAppButton/WhatsAppButton';

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
