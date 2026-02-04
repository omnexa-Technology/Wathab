'use client';

import { SocialIconButton } from '@/components/atoms/SocialIconButton/SocialIconButton';

export function SocialIconsList({ className = '', ...props }) {
  const socialIcons = [
    { icon: 'twitter', bgColor: 'bg-[#1f1e17]', href: 'https://twitter.com' },
    { icon: 'instagram', bgColor: 'bg-[#1f1e17]', href: 'https://instagram.com' },
    { icon: 'whatsapp', bgColor: 'bg-[#1f1e17]', href: 'https://wa.me/966561199191' },
    { icon: 'tiktok', bgColor: 'bg-[#1f1e17]', href: 'https://tiktok.com' },
    { icon: 'facebook', bgColor: 'bg-[#1b6936]', href: 'https://facebook.com' },
  ];

  return (
    <div className={`inline-flex items-start justify-end gap-2 ${className}`} {...props}>
      {socialIcons.map((social, index) => (
        <SocialIconButton key={index} icon={social.icon} bgColor={social.bgColor} href={social.href} />
      ))}
    </div>
  );
}
