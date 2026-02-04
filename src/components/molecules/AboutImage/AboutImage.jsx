/**
 * AboutImage Molecule
 * Image container with logo overlay and floating top logo
 */

import Image from 'next/image';
import { LogoOverlay } from '@/components/molecules/LogoOverlay/LogoOverlay';

export function AboutImage({
  logoTextSrc = 'assets/icons/logo/logo-dark1.svg',
  logoTextAlt = 'Company Logo',
  className = ''
}) {
  return (
    <div className={`relative w-full lg:w-[732px] h-[830px] shrink-0 ${className}`}>
      {/* Floating top logo */}
      <Image
        className=" absolute z-20 top-0 left-1/2 -translate-x-1/2 w-56 h-56"
        alt='Company Logo'
        src='/assets/icons/logo/logoAbout.svg'
        width={224}
        height={224}
        loading="lazy"
      />

      {/* Main image container with overlay */}
      <div className="absolute top-[150px] left-0 w-full lg:w-[732px] h-[680px] flex items-end justify-center overflow-hidden rounded-lg">
        <Image
          src='/assets/images/pages/Home/about.webp'
          alt='Environmental workers with wind turbines'
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 732px"
          loading="lazy"
        />

        {/* Logo overlay at bottom */}
        <LogoOverlay
          logoTextSrc={logoTextSrc}
          logoTextAlt={logoTextAlt}
        />
      </div>
    </div>
  );
}
