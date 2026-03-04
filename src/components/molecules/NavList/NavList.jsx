'use client';

import { NavItem } from '../../atoms/NavItem/NavItem';
import { NavDropdown } from '../NavDropdown/NavDropdown';

const navItems = [
  {
    type: 'link',
    href: '/',
    key: 'navbar.home',
  },
  {
    type: 'dropdown',
    key: 'navbar.about',
    items: [
      { key: 'navbar.aboutOverview', href: '/about' },
      { key: 'navbar.aboutTeam', href: '/about/team' },
      { key: 'navbar.aboutClients', href: '/about/clients' },
      { key: 'navbar.aboutFaq', href: '/about/faq' },
    ],
  },
  {
    type: 'dropdown',
    key: 'navbar.services',
  },
  {
    type: 'link',
    key: 'navbar.projects',
    href: '/sectors',
  },
  {
    type: 'link',
    href: '/articles',
    key: 'navbar.articles'
  },
  {
    type: 'link',
    href: '/news',
    key: 'navbar.news'
  },
  {
    type: 'link',
    href: '/licenses',
    key: 'navbar.licenses'
  },
];

export function NavList({ className = '', serviceItems, variant = 'desktop', ...props }) {
  const resolvedNavItems = navItems.map((item) => {
    if (item.type === 'dropdown' && item.key === 'navbar.services') {
      const staticServicesLink = { key: 'navbar.servicesAll', href: '/services' };
      const dynamicItems = serviceItems ?? [];
      return { ...item, items: [staticServicesLink, ...dynamicItems] };
    }
    return item;
  });

  const isMobile = variant === 'mobile';

  return (
    <ul
      className={`flex items-center justify-end gap-2 flex-col min-[1300px]:flex-row min-[1300px]:items-center min-[1300px]:justify-end min-[1300px]:gap-2 ${isMobile ? 'w-full gap-0' : ''} ${className}`}
      {...props}
    >
      {resolvedNavItems.map((item) => {
        if (item.type === 'dropdown') {
          return (
            <li key={item.key} className={isMobile ? 'w-full border-b border-gray-100 last:border-b-0' : ''}>
              <NavDropdown
                translationKey={item.key}
                label={item.key}
                items={item.items}
                variant={variant}
              />
            </li>
          );
        }

        return (
          <NavItem
            key={item.href}
            href={item.href}
            translationKey={item.key}
            variant={variant}
            wrapperClassName={isMobile ? 'w-full border-b border-gray-100 last:border-b-0' : ''}
          />
        );
      })}
    </ul>
  );
}
