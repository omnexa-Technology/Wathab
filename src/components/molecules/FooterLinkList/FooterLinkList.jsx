'use client';

import { SectionDivider } from '@/components/atoms/SectionDivider/SectionDivider';
import { FooterLink } from '@/components/atoms/FooterLink/FooterLink';

export function FooterLinkList({ title, links, className = '', ...props }) {
  return (
    <div className={`flex flex-col items-start justify-center gap-8 flex-1 text-right ${className}`} {...props}>
      <div className="inline-flex flex-col items-start gap-8">
        <h3 className="flex items-center justify-center font-h5 font-[number:var(--h5-font-weight)] text-white text-[length:var(--h5-font-size)] leading-[var(--h5-line-height)] tracking-[var(--h5-letter-spacing)] whitespace-nowrap [direction:rtl] [font-style:var(--h5-font-style)]">
          {title}
        </h3>
        <SectionDivider />
      </div>
      <nav className="flex flex-col items-start gap-8 self-stretch w-full">
        {links.map((link, index) => (
          <FooterLink key={index} href={link.href} variant={link.active ? 'active' : 'default'}>
            {link.label}
          </FooterLink>
        ))}
      </nav>
    </div>
  );
}
