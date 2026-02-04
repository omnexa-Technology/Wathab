'use client';

import Image from 'next/image';

/**
 * ClientCard - Displays a client logo card
 * @param {Object} props
 * @param {string} props.logoSrc - Path to client logo image
 * @param {string} props.name - Client name
 * @param {string} [props.imageAlt=''] - Alt text for logo
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function ClientCard({
  logoSrc,
  name,
  imageAlt = '',
  className = '',
  ...props
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 px-6 py-6 bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] h-64 w-full ${className}`}
      {...props}
    >
      {/* Logo */}
      <div className="relative w-[164px] h-[164px] flex items-center justify-center">
        <Image
          src={logoSrc}
          alt={imageAlt || name}
          width={164}
          height={164}
          className="object-contain"
        />
      </div>

      {/* Client Name */}
      <p className="font-din font-medium text-2xl leading-7 text-center text-[#303030] whitespace-pre-wrap">
        {name}
      </p>
    </div>
  );
}
