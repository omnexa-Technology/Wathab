'use client';

import Image from 'next/image';

export function WhatsAppButton({ phone = '966561199191', className = '', ...props }) {
  const whatsappUrl = `https://wa.me/${phone}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 left-8 rtl:left-auto rtl:right-8 z-50 flex items-center justify-center w-20 h-20 rounded-full bg-[#1b6936] hover:bg-[#1b6936]/90 transition-colors shadow-lg ${className}`}
      aria-label="Contact us on WhatsApp"
      {...props}
    >
      <Image
        src="/assets/icons/social/whatsapp.svg"
        alt="WhatsApp"
        width={40}
        height={40}
        className="w-10 h-10"
      />
    </a>
  );
}
