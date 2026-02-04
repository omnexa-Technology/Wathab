'use client';

import { NavItem } from '@/components/atoms/NavItem/NavItem';
import { NavDropdown } from '@/components/molecules/NavDropdown/NavDropdown';

const navItems = [
  {
    type: 'link',
    href: '/',
    key: 'navbar.home'
  },
  {
    type: 'dropdown',
    key: 'navbar.about',
    items: [
      { label: 'نبذة عن وثب', href: '/about/overview' },
      { label: 'رؤيتنا ورسالتنا', href: '/about/vision' },
      { label: 'قيمنا', href: '/about/values' },
    ]
  },
  {
    type: 'dropdown',
    key: 'navbar.services',
    items: [
      { label: 'دراسات تقييم الأثر البيئي', href: '/services/eia' },
      { label: 'التدقيق البيئي', href: '/services/audit' },
      { label: 'التراخيص البيئية', href: '/services/permits' },
    ]
  },
  {
    type: 'dropdown',
    key: 'navbar.projects',
    items: [
      { label: 'القطاع الصناعي', href: '/projects/industrial' },
      { label: 'القطاع التجاري', href: '/projects/commercial' },
      { label: 'القطاع الحكومي', href: '/projects/government' },
    ]
  },
  {
    type: 'link',
    href: '/articles',
    key: 'navbar.articles'
  },
  {
    type: 'link',
    href: '/contact',
    key: 'navbar.contact'
  },
];

export function NavList({ className = '', ...props }) {
  return (
    <ul className={`flex items-center justify-end gap-2  ${className}`} dir="rtl" {...props}>
      {navItems.map((item, index) => {
        if (item.type === 'dropdown') {
          return (
            <li key={item.key}>
              <NavDropdown
                translationKey={item.key}
                label={item.key}
                items={item.items}
              />
            </li>
          );
        }

        return (
          <NavItem
            key={item.href}
            href={item.href}
            translationKey={item.key}
          />
        );
      })}
    </ul>
  );
}
