'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';

/**
 * TeamMemberCard - Displays a single team member with image, name, role, and LinkedIn link
 * @param {Object} props
 * @param {string} props.imageSrc - Image URL for the team member
 * @param {string} props.name - Team member name
 * @param {string} props.role - Team member role/title
 * @param {string} props.linkedin - LinkedIn profile URL
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export const TeamMemberCard = React.memo(function TeamMemberCard({
  imageSrc,
  name,
  role,
  linkedin,
  className = '',
  ...props
}) {
  return (
    <div className="w-full min-w-0 h-full">
      <Card
        className={`flex flex-col items-center bg-gray-50 border-none shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden w-full min-w-0
          gap-3 p-3
          sm:gap-4 sm:p-4
          md:gap-5
          lg:gap-6 lg:p-4
          h-[320px] sm:h-[360px] md:h-[420px] lg:h-[500px] xl:h-[590px]
          ${className}`}
      >
        <div className="relative shrink-0 rounded-full overflow-hidden border-2 border-carousel-active
          w-20 h-20
          sm:w-24 sm:h-24
          md:w-28 md:h-28
          lg:w-32 lg:h-32
          xl:w-36 xl:h-36">
          <Image
            src={imageSrc}
            alt={name || 'Team member'}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, (max-width: 1280px) 128px, 144px"
          />
        </div>

        <div className="flex flex-col items-center gap-1 flex-1 min-h-0 w-full min-w-0 text-center">
          <CardTitle className="mb-0">
            <h3 className="font-din font-medium text-[#0b2c16] min-w-0
              text-base leading-snug
              sm:text-lg
              md:text-xl
              lg:text-2xl lg:leading-normal">
              {name}
            </h3>
          </CardTitle>

          <CardDescription className="flex-1 min-w-0">
            <p className="font-din font-normal text-center text-grey-600 min-w-0 line-clamp-3 sm:line-clamp-4
              text-xs leading-relaxed
              sm:text-sm sm:leading-6
              md:text-base
              lg:text-xl lg:leading-7">
              {role}
            </p>
          </CardDescription>

          <CardFooter className="mt-auto pt-1 sm:pt-2">
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center hover:scale-105 transition-transform duration-300 touch-manipulation rounded-full bg-[#1B6936]"
              aria-label={`${name} LinkedIn`}
            >
              <Image
                src="/assets/icons/social/linkedin.svg"
                alt=""
                width={24}
                height={24}
                className="shrink-0"
              />
            </Link>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
});
