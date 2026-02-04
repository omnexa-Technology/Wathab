'use client';

import Image from 'next/image';

/** Icon size: 28px (h-7 / w-7) */
const ICON_SIZE = 59;


export function CountIcon({ src, alt = '', className = '', ...props }) {
  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E8F0EB] ${className}`}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={ICON_SIZE}
        height={ICON_SIZE}
        className="object-contain"
      />
    </div>
  );
}
