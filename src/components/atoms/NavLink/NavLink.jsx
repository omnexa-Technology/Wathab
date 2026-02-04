'use client';

import { usePathname } from 'next/navigation';
import LocaleLink from '@/components/LocaleLink';
import { useTranslation } from '@/hooks/useTranslation';

export function NavLink({ href, children, translationKey, className = '', ...props }) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const locale = (pathname && pathname.split('/')[1]) || 'ar';
  const normalizedPath = pathname.replace(`/${locale}`, '') || '/';
  const normalizedHref = href === '/' ? '/' : href;
  const isActive = normalizedPath === normalizedHref || (normalizedHref !== '/' && normalizedPath.startsWith(normalizedHref));

  return (
    <LocaleLink
      href={href}
      className={`${className} text-nav font-medium relative transition-colors duration-200 ${
        isActive 
          ? 'text-brand-900 font-semibold' 
          : 'text-foreground hover:text-brand-900'
      }`}
      {...props}
    >
      {translationKey ? t(translationKey) : children}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-indicator bg-brand-900" />
      )}
    </LocaleLink>
  );
}
