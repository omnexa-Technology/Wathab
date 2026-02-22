'use client';

import Image from 'next/image';


export function LicenseCard({ image, alt, className = '' }) {
  return (
    <div
      className={`group relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
      </div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
    </div>
  );
}
