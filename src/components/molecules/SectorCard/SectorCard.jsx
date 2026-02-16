'use client';

import Image from 'next/image';
import Link from 'next/link';


export function SectorCard({ image, title, href, className = '' }) {
  const cardContent = (
    <div
      className={`group relative w-full h-[280px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl  ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/20  to-transparent" />

      {/* Label Overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-black/10 backdrop-blur-sm">
        <h3 className="font-din font-medium text-xl text-white text-right leading-[32px] whitespace-pre-wrap">
          {title}
        </h3>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
