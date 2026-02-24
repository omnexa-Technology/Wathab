'use client';

import Image from 'next/image';

export function ContactInfoCard({ icon, value, label, href, isRTL, className = '' }) {
  const content = (
    <>
      {/* Icon */}
      {/* Content */}
      <div className="flex shrink-0 w-14 h-14 rounded-full bg-[#E8F0EB] items-center justify-center">
        <div className="relative w-6 h-6">
          <Image
            src={icon}
            alt=""
            fill
            className="object-contain"
            sizes="24px"
          />
        </div>
      </div>
      <div className={`flex flex-col gap-1 min-w-0 items-start`}>
        <p className="font-din text-xl font-medium text-[#141414] leading-tight whitespace-pre-wrap break-words">
          {value}
        </p>
        <p className="font-din text-sm font-normal text-[#595959] leading-relaxed ">
          {label}
        </p>
      </div>
    </>
  );

  const sharedClasses =
    `flex flex-1 min-w-0 gap-4 items-center rounded-2xl border border-[#E5E5E5] bg-white px-6 py-6 transition-all duration-300 hover:border-[#1B6936]/30 hover:shadow-md `;

  if (href) {
    return (
      <a
        href={href}
        className={`${sharedClasses} ${className}`}
        target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={`${sharedClasses} ${className}`}>
      {content}
    </div>
  );
}
