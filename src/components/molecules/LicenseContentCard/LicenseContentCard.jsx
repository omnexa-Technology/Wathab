'use client';

import Image from 'next/image';


export function LicenseContentCard({
  image,
  alt,
  title,
  description,
  imageOnLeft = false,
  className = '',
}) {
  return (
    <div
      className={`flex flex-col ${
        imageOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-8 lg:gap-12 items-center ${className}`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 shrink-0">
        <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h3 className="font-din font-bold text-2xl lg:text-4xl text-[#1b6936] leading-tight">
          {title}
        </h3>
        <p className="font-din font-normal text-lg lg:text-xl text-grey-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
