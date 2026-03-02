'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';



export function ContactCard() {
  return (
    <div className="relative w-full max-w-[680px] shrink-0">
      {/* Ghost card behind: two backgrounds (overlay + SVG) via CSS class to avoid Tailwind url() resolve error */}
      <div
        className="absolute inset-0 rounded-[24px] -rotate-4 contact-card-cover-bg"
        aria-hidden
      />
      {/* Main card */}
      <div
        className={cn(
          'relative flex flex-col items-center justify-center gap-12',
          'w-full aspect-square  rounded-[24px] bg-[#0b2c16] rotate-4',
          'p-8 md:p-12'
        )}
      >
        <div className=" flex-1 flex items-center justify-center w-full -rotate-4">
          <Image
            src="/assets/icons/logo/logo-Dark.svg"
            alt="Wathb"
            width={250}
            height={100}
            className="object-contain w-auto h-auto max-h-[120px]"
            priority
          />
        </div>

      </div>
    </div>
  );
}
