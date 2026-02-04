import Image from 'next/image';

const iconMap = {
  search: '/assets/icons/ui/search.svg',
  whatsapp: '/assets/icons/social/whatsapp.svg',
  facebook: '/assets/icons/social/facebook.svg',
  instagram: '/assets/icons/social/instagram.svg',
  twitter: '/assets/icons/social/twitter.svg',
  tiktok: '/assets/icons/social/tiktok.svg',
  call: '/assets/icons/social/call.svg',
  mail: '/assets/icons/social/mail.svg',
  location: '/assets/icons/social/location.svg',
  ar: '/assets/icons/flags/ar.svg',
  en: '/assets/icons/flags/ar.svg', // Fallback - use ar flag or create en flag later
};

export function Icon({ name, size = 24, className = '', ...props }) {
  const iconSrc = iconMap[name];
  if (!iconSrc) return null;

  return (
    <Image
      src={iconSrc}
      alt={name}
      width={size}
      height={size}
      className={className}
      {...props}
    />
  );
}
