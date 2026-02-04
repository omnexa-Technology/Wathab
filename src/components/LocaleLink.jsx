'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function LocaleLink({ href, ...props }) {
  const pathname = usePathname();
  const locale = (pathname && pathname.split('/')[1]) || 'ar';
  const resolved = href === '/' ? `/${locale}` : `/${locale}${href.startsWith('/') ? href : `/${href}`}`;
  return <NextLink href={resolved} {...props} />;
}
