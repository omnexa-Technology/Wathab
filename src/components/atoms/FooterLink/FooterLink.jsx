'use client';

import LocaleLink from '@/components/LocaleLink';

export function FooterLink({ href, variant = 'default', children, className = '', ...props }) {
  const baseClass =
    'font-text-20regular font-[number:var(--text-20regular-font-weight)] text-[length:var(--text-20regular-font-size)] leading-[var(--text-20regular-line-height)] tracking-[var(--text-20regular-letter-spacing)] [font-style:var(--text-20regular-font-style)] whitespace-nowrap [direction:rtl] transition-colors';

  const variantClasses = {
    default: 'text-[#b6b6b6] hover:text-[#86ba41] hover:no-underline',
    active: 'text-[#86ba41] underline hover:text-[#86ba41] hover:underline',
    large:
      'font-text-24regular font-[number:var(--text-24regular-font-weight)] text-[length:var(--text-24regular-font-size)] leading-[var(--text-24regular-line-height)] tracking-[var(--text-24regular-letter-spacing)] [font-style:var(--text-24regular-font-style)] text-[#b6b6b6] underline hover:text-[#86ba41]',
  };

  return (
    <LocaleLink href={href} className={`${baseClass} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </LocaleLink>
  );
}
