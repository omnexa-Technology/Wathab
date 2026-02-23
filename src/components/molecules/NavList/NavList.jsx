'use client';

import { NavItem } from '../../atoms/NavItem/NavItem';
import { NavDropdown } from '../NavDropdown/NavDropdown';

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
      { label: 'نبذة عن وثب', href: '/about' },
      { label: 'الفريق', href: '/about/team' },
      { label: 'عملائنا', href: '/about/clients' },
      { label: 'الاسألة الشائعة', href: '/about/faq' },
    ]
  },
  {
    type: 'dropdown',
    key: 'navbar.services',
    items: [
      { label: 'خدماتنا', href: '/services' },
      { label: 'إعداد خطط الإدارة البيئية', href: '/services/environmental-management-plans' },

      { label: 'إعداد خطط المعالجه و إعادة التأهيل البيئى', href: '/services/rehabilitation-and-treatment-plans' },
      { label: 'دراسات تقييم الأثر البيئي', href: '/services/environmental-impact-assessment' },
      { label: 'دراسات التدقيق البيئي', href: '/services/environmental-audit' },
      { label: 'إعداد السجلات والتقارير البيئية', href: '/services/environmental-records-and-reports' },
      { label: 'إدارةالنفايات (موان)', href: '/services/ports-waste-management' },
      { label: 'تنفيذ خطط المعاجة و إعادة التأهيل البيئى', href: '/services/rehabilitation-plan-implementation' },
      { label: 'إعداد الخطط التصحيحية للضوضاء و نمذجة الصوت', href: '/services/noise-correction-and-modeling' },
      { label: 'الستشارات البيئية للإمتثال و التراخيص', href: '/services/environmental-compliance-and-permits' },
      { label: 'التدريب و بناء القدرات البيئية', href: '/services/environmental-training-and-capacity-building' },
    ]

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
  // {
  //   type: 'link',
  //   href: '/contact',
  //   key: 'navbar.contact'
  // },
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
