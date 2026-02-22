'use client';

import Image from 'next/image';


export function ContactInfoCard({ icon, value, label, className = '' }) {
  return (
    <div
      className={`flex-1 min-w-0  border-grey-50 rounded-2xl px-4 py-8 flex flex-col gap-0 items-center transition-all duration-300 hover:border-carousel-active hover:shadow-lg ${className}`}
    >
      <div className="flex gap-4 items-start justify-end w-full">

        {/* Icon */}
        <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
          {/* Background circle */}
          <div className="absolute inset-0 bg-[#f8f8f8] rounded-full" />
          {/* Icon */}
          <div className="relative w-6 h-6 z-10">
            <Image
              src={icon}
              alt={label}
              fill
              className="object-contain"
            />
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-8 items-end justify-center text-right">
          {/* Value */}
          <p className="font-din font-medium text-2xl leading-[48px] text-grey-900 w-full whitespace-pre-wrap">
            {value}
          </p>
          {/* Label */}
          <p className="font-din font-normal text-2xl leading-[48px] text-grey-500 w-full whitespace-pre-wrap">
            {label}
          </p>
        </div>


      </div>
    </div>
  );
}
