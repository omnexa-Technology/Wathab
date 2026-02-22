'use client';

import { SectionDivider } from '../../atoms/SectionDivider/SectionDivider';
import { FooterLink } from '../../atoms/FooterLink/FooterLink';

export function FooterLinkList({ title, links, className = '', ...props }) {
  return (
    <div
      className={`flex flex-col items-start justify-center gap-4 flex-1 text-right min-w-0 sm:gap-6 lg:gap-8 ${className}`}
      {...props}
    >
      <div className="inline-flex flex-col items-start gap-4 sm:gap-6 lg:gap-8">
        <h3 className="font-din font-medium text-white text-xl sm:text-[22px] lg:text-2xl leading-tight tracking-normal">
          {title}
        </h3>
        <SectionDivider />
      </div>
      <nav className="flex flex-col items-start gap-3 self-stretch w-full sm:gap-4 lg:gap-5">
        {links.map((link, index) => (
          <FooterLink key={index} href={link.href} variant={link.active ? 'active' : 'default'}>
            {link.label}
          </FooterLink>
        ))}
      </nav>
    </div>
  );
}
