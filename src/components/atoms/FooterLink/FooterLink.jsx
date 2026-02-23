'use client';

import LocaleLink from '../../LocaleLink';

export function FooterLink({ href, variant = 'default', children, className = '', ...props }) {
  const baseClass =
    'font-din font-normal text-base sm:text-lg leading-relaxed sm:leading-8 tracking-normal transition-colors inline-block min-h-[44px] py-2 flex items-center justify-end [direction:rtl]';

  const variantClasses = {
    default: 'text-[#b6b6b6] hover:text-[#86ba41] hover:no-underline',
    active: 'text-[#86ba41] underline hover:text-[#86ba41] hover:underline',
    large:
      'font-din font-normal text-base sm:text-lg lg:text-xl leading-relaxed text-[#b6b6b6] underline hover:text-[#86ba41] min-h-[44px]',
  };

  return (
    <LocaleLink href={href} className={`${baseClass} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </LocaleLink>
  );
}
