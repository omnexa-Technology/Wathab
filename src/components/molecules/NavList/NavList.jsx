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
      { label: 'نبذة عن وثب', href: '/about' },
      { label: 'الفريق', href: '/about/team' },
      { label: 'عملائنا', href: '/about/clients' },
    ]
  },
  {
    type: 'dropdown',
    key: 'navbar.services',
    items: [
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
