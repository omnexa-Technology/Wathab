'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardDescription, CardFooter, CardTitle } from '../../../components/ui/card';

/**
 * TeamMemberCardAlt - Displays a single team member with image, name, role, and LinkedIn link
 * Uses the same styling as TeamMemberCard for consistency
 * @param {Object} props
 * @param {string} props.imageSrc - Image URL for the team member
 * @param {string} props.name - Team member name
 * @param {string} props.role - Team member role/title
 * @param {string} props.linkedin - LinkedIn profile URL
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
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
    <div>
      <Card
        className={`flex flex-col items-center gap-6 bg-gray-50 p-4 border-none ${className} h-[590px]`}
      >
        <div className="relative w-full aspect-square rounded-full border-2 border-carousel-active overflow-hidden">
          <Image
            src={imageSrc}
            alt={name || 'Team member'}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-2 flex-1 w-full">
          <CardTitle>
            <h3 className="font-din font-medium text-2xl text-center text-[#0b2c16]">
              {name}
            </h3>
          </CardTitle>

          <CardDescription>
            <p className="font-din font-normal text-xl text-center text-grey-600">
              {role}
            </p>
          </CardDescription>

          <CardFooter className="mt-auto">
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-all duration-300"
            >
              <div className="w-15 h-15 bg-[#1B6936] rounded-full flex items-center justify-center">
                <Image
                  src="/assets/icons/social/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
});
