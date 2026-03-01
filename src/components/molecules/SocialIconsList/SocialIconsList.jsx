'use client';

import { SocialIconButton } from '../../atoms/SocialIconButton/SocialIconButton';

export function SocialIconsList({ className = '', ...props }) {
  const socialIcons = [
    {
      icon: 'twitter', bgColor: 'bg-[#1f1e17]', href: 'https://x.com/WathebEnv'},
    { icon: 'instagram', bgColor: 'bg-[#1f1e17]', href: 'https://instagram.com' },
    { icon: 'whatsapp', bgColor: 'bg-[#1f1e17]', href: 'https://wa.me/966561199191' },
    { icon: 'tiktok', bgColor: 'bg-[#1f1e17]', href: 'https://www.tiktok.com/@watheb2' },
    {
      icon: 'facebook', bgColor: 'bg-[#1b6936]', href: 'https://www.facebook.com/profile.php?id=61584283496346'
    },
  ];

  return (
    <div
      className={`inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-end ${className}`}
      {...props}
    >
      {socialIcons.map((social, index) => (
        <SocialIconButton key={index} icon={social.icon} bgColor={social.bgColor} href={social.href} />
      ))}
    </div>
  );
}
