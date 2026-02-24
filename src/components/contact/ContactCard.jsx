'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

const SOCIAL_ICONS = [
  { id: 'twitter', path: '/assets/icons/social/twitter.svg', gradient: false },
  { id: 'instagram', path: '/assets/icons/social/instagram.svg', gradient: false },
  { id: 'whatsapp', path: '/assets/icons/social/whatsapp.svg', gradient: false },
  { id: 'tiktok', path: '/assets/icons/social/tiktok.svg', gradient: false },
  { id: 'facebook', path: '/assets/icons/social/facebook.svg', gradient: true },
];

export function ContactCard() {
  return (
    <div className="relative w-full max-w-[680px] shrink-0">
      {/* Ghost card behind */}
      <div
        className="absolute inset-0 rounded-[24px] bg-[rgba(11,44,22,0.16)] -rotate-4"
        aria-hidden
      />
      {/* Main card */}
      <div
        className={cn(
          'relative flex flex-col items-center justify-center gap-12',
          'w-full aspect-square max-w-[680px] rounded-[24px] bg-[#0b2c16] rotate-4',
          'p-8 md:p-12'
        )}
      >
        <div className="flex-1 flex items-center justify-center w-full">
          <Image
            src="/assets/icons/logo/logo-light.svg"
            alt="Wathb"
            width={200}
            height={80}
            className="object-contain w-auto h-auto max-h-[120px]"
            priority
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3 w-full">
          {SOCIAL_ICONS.map(({ id, path, gradient }) => (
            <a
              key={id}
              href="#"
              className={cn(
                'flex items-center justify-center w-12 h-12 rounded-bl-[8px] rounded-tr-[8px]',
                'transition-opacity hover:opacity-80',
                gradient
                  ? 'bg-gradient-to-br from-[#1b6936] to-[#86ba41]'
                  : 'bg-[#1f1e17]'
              )}
              aria-label={id}
            >
              <Image src={path} alt="" width={24} height={24} className="invert" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
