'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * TeamMemberCardAlt - Team member card matching Figma (الفريق)
 * Image 180px, gradient LinkedIn button, 14px name, 12px role, rounded-2xl
 */
export const TeamMemberCardAlt = React.memo(function TeamMemberCardAlt({
  imageSrc,
  name,
  role,
  linkedin,
  className = '',
  ...props
}) {
  return (
    <div
      className={`
        flex flex-col items-center
        gap-8
        px-4 py-6 sm:px-5 sm:py-6 md:px-6 md:py-6 lg:px-6 lg:py-6 xl:px-8 xl:py-8 2xl:px-8 2xl:py-8
        rounded-2xl bg-white
        w-full min-w-0
        ${className}
      `}
      {...props}
    >
      {/* Profile image - Figma 180px circle */}
      <div className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[180px] md:h-[180px] shrink-0 overflow-hidden rounded-full">
        <Image
          src={imageSrc}
          alt={name || 'Team member'}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 160px, 180px"
        />
      </div>

      {/* LinkedIn + Name + Role - gap 24px (space-md) between icon and text block, 16px inside text block */}
      <div className="flex flex-col items-center gap-6 w-full">
        <Link
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 shrink-0  rounded-full  bg-[#1b6936]  p-2.5 hover:opacity-90 transition-opacity"
          aria-label="LinkedIn"
        >
          <Image
            src="/assets/icons/social/linkedIn1.svg"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
        </Link>

        <div className="flex flex-col gap-4 items-center text-center w-full">
          <p className="font-din font-medium text-[#222] text-[14px] leading-7 md:text-base lg:leading-7 2xl:text-lg 2xl:leading-8">
            {name}
          </p>
          <p className="font-din font-normal text-[#747474] text-[12px] leading-6 md:text-sm 2xl:text-base">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
});
