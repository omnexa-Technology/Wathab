'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';

export function TeamMemberCard({
  imageSrc,
  name,
  role,
  linkedin,
  className = '',
  ...props
}) {
  return (
    <div>
      <Card className={`flex flex-col items-center gap-6 bg-white p-4 border-none ${className} h-full `}
        {...props}>
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        {/* Member Info */}
        <div className="flex flex-col items-center gap-2">
          <CardTitle>
            <h3 className="font-din font-medium text-2xl leading-normal text-center text-[#0b2c16]">
              {name}
            </h3>
          </CardTitle>
          <CardDescription>
            <p className="font-din font-normal text-xl leading-normal text-center text-[#595959]">
              {role}
            </p>
          </CardDescription>
          <CardFooter>

            <Link href={linkedin} target="_blank">
              <div className="w-15 h-15 bg-[#1B6936] rounded-full flex items-center justify-center">
                <Image
                  src="/assets/icons/social/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </Link>

          </CardFooter>
        </div>
      </Card>
    </div>

  );
}
