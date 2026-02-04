'use client';

import { NavLink } from '@/components/atoms/NavLink/NavLink';

const navItems = [
  { href: '/', key: 'navbar.home' },
  { href: '/about', key: 'navbar.about' },
  { href: '/services', key: 'navbar.services' },
  { href: '/projects', key: 'navbar.projects' },
  { href: '/articles', key: 'navbar.articles' },
  { href: '/contact', key: 'navbar.contact' },
];

export function NavLinks() {
  return (
    <ul className="flex items-center gap-nav">
      {navItems.map((item) => (
        <li key={item.href}>
          <NavLink href={item.href} translationKey={item.key} />
        </li>
      ))}
    </ul>
  );
}
