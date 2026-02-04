'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * ArticleCard - Displays an article/news card with hover effects
 * @param {Object} props
 * @param {string} props.imageSrc - Path to article image
 * @param {string} props.title - Article title
 * @param {string} props.date - Article publication date
 * @param {string} props.excerpt - Article excerpt
 * @param {string} [props.href='#'] - Link to full article
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function ArticleCard({
  imageSrc,
  title,
  date,
  excerpt,
  href = '#',
  className = '',
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`relative h-[580px] rounded-2xl overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay & Content */}
      <div
        className={`absolute bottom-0 left-0 right-0 px-8 py-12 bg-gradient-to-t from-[#141414] to-[rgba(20,20,20,0.12)] backdrop-blur-[12px] transition-all duration-300 ${isHovered ? 'min-h-[400px]' : 'min-h-[174px]'
          }`}
      >
        <div className="flex flex-col gap-12 pb-6">
          {/* Title */}
          <h3 className="font-din font-medium text-[32px] leading-[56px] text-right text-white">
            {title}
          </h3>

          {/* Date */}
          <div className="flex items-center justify-end gap-2">
            <span className="font-din font-normal text-xl leading-[40px] text-[#eaeaea]">
              {date}
            </span>
            <div className="w-6 h-6 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#eaeaea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 2V6M8 2V6M3 10H21" stroke="#eaeaea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Excerpt (shown on hover) */}
          {isHovered && (
            <p className="font-din font-normal text-xl leading-[40px] text-right text-[#eaeaea] animate-in fade-in duration-300">
              {excerpt}
            </p>
          )}
        </div>

        {/* Action Button (shown on hover) */}
        {isHovered && (
          <div className="flex items-center justify-center">
            <div className="bg-[#1b6936] rounded-full p-2 w-16 h-16 flex items-center justify-center animate-in fade-in duration-300">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3334 10.6667L10.6667 21.3333M10.6667 21.3333H21.3334M10.6667 21.3333V10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
