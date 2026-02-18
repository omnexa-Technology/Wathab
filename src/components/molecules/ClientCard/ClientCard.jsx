'use client';

import Image from 'next/image';

export function ClientCard({
  logoSrc,
  name,
  imageAlt = '',
  className = '',
  ...props
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 px-4 py-5 bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] w-full min-w-0 hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.16)] transition-all duration-300
        sm:gap-4 sm:px-5 sm:py-6
        h-52 sm:h-56 lg:h-64
        ${className}`}
      {...props}
    >
      {/* Logo */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-[164px] lg:h-[164px] flex items-center justify-center shrink-0">
        <Image
          src={logoSrc}
          alt={imageAlt || name}
          width={164}
          height={164}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Client Name */}
      <p className="font-din font-medium text-center text-[#303030] w-full min-w-0 text-sm leading-snug sm:text-base sm:leading-6 md:text-lg lg:text-2xl lg:leading-7 line-clamp-2">
        {name}
      </p>
    </div>
  );
}
