'use client';

import { Logo } from '@/components/atoms/Logo/Logo';
import LocaleLink from '@/components/LocaleLink';

export function LogoBlock({ className = '', ...props }) {
  return (
    <div className={`flex items-center gap-[6.35px] ${className}`} {...props}>
      <LocaleLink href="/" className="flex items-center gap-[6.35px]" aria-label="Home">
        <Logo
          src="/assets/icons/logo/logo-light.svg"
          alt="Wathb Logo"
          width={193}
          height={48}
          className="w-[193.17px] h-auto"
        />
      </LocaleLink>
    </div>
  );
}
