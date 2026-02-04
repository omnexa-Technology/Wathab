'use client';

import { FooterMain } from '@/components/organisms/FooterMain/FooterMain';
import { FooterBottom } from '@/components/organisms/FooterBottom/FooterBottom';
import { WhatsAppButton } from '@/components/atoms/WhatsAppButton/WhatsAppButton';

export function Footer() {
  return (
    <>
      <footer className="flex flex-col w-full items-start bg-[#141414]">
        <FooterMain />
        <div className="w-full h-px bg-[#595959]" />
        <FooterBottom />
      </footer>
      <WhatsAppButton />
    </>
  );
}
