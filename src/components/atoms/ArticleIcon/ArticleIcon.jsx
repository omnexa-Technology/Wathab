'use client';

import Image from 'next/image';

/**
 * ArticleIcon - Displays an icon in a green circular background
 * @param {Object} props
 * @param {string} props.iconSrc - Path to the icon SVG
 * @param {string} [props.iconAlt=''] - Alt text for the icon
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function ArticleIcon({ iconSrc, iconAlt = '', className = '' }) {
  return (
    <div
      className={`flex items-center justify-center bg-[#e8f0eb] rounded-full w-[120px] h-[120px] p-7 shrink-0 ${className}`}
    >
      <div className="relative w-16 h-16">
        <Image
          src={iconSrc}
          alt={iconAlt}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
