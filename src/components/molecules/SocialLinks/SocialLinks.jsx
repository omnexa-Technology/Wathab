'use client';

import { Icon } from '@/components/atoms/Icon/Icon';

const socialLinks = [
  { name: 'whatsapp', href: '#' },
  { name: 'twitter', href: '#' },
  { name: 'tiktok', href: '#' },
  { name: 'instagram', href: '#' },
  { name: 'facebook', href: '#' },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-action">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          aria-label={social.name}
          className="w-icon-size h-icon-size flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          <Icon name={social.name} size={24} />
        </a>
      ))}
    </div>
  );
}
