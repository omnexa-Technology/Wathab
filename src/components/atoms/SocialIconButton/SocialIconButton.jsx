'use client';

import Image from 'next/image';
import Link from 'next/link';
export function SocialIconButton({ icon,  href, className = '', ...props }) {
  const iconPaths = {
    whatsapp: '/assets/icons/social/whatsapp.svg',
    facebook: '/assets/icons/social/facebook.svg',
    instagram: '/assets/icons/social/instagram.svg',
    twitter: '/assets/icons/social/twitter.svg',
    tiktok: '/assets/icons/social/tiktok.svg',
  };

  const iconSrc = iconPaths[icon] || iconPaths.whatsapp;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center w-12 h-12 rounded-3xl hover:bg-[#1b6936] hover:opacity-90 transition-opacity ${className}`}
      aria-label={`${icon} social link`}
      {...props}
    >
      <Image src={iconSrc} alt={icon} width={24} height={24} className="w-6 h-6" />
    </Link>
  );
}
