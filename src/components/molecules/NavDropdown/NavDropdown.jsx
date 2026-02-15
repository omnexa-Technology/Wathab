'use client';

import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import LocaleLink from '@/components/LocaleLink';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


export function NavDropdown({
  label,
  translationKey,
  items,
  className = '',
}) {
  const { t } = useTranslation();
  const pathname = usePathname();

  const locale = (pathname && pathname.split('/')[1]) || 'ar';
  const normalizedPath = pathname.replace(`/${locale}`, '') || '/';

  // Check if any dropdown item is active
  const isAnyItemActive = items.some((item) => {
    const normalizedHref = item.href === '/' ? '/' : item.href;
    return normalizedPath === normalizedHref ||
      (normalizedHref !== '/' && normalizedPath.startsWith(normalizedHref));
  });

  const displayLabel = translationKey ? t(translationKey) : label;

  // Style classes matching NavItem
  const triggerBaseClass =
    'flex h-12 items-center justify-center gap-2 px-4 py-0 rounded-[40px] font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] transition-colors duration-200';

  const triggerActiveClass =
    'font-[number:var(--text-20bold-font-weight)] text-[length:var(--text-20bold-font-size)] text-[#1B6936]';

  const triggerInactiveClass = 'text-grey-600 hover:text-[#1B6936]';

  const activeUnderlineClass =
    "p-2 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1B6936] after:block";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${triggerBaseClass} ${isAnyItemActive ? triggerActiveClass : triggerInactiveClass
          } ${className} bg-transparent hover:bg-transparent border-none outline-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0`}
      >
        {isAnyItemActive ? (
          <span className={activeUnderlineClass}>
            {displayLabel}
            <ChevronDown className="inline-block w-4 h-4 mr-1" />
          </span>
        ) : (
          <>
            {displayLabel}
            <ChevronDown className="w-4 h-4" />
          </>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[200px] bg-white border border-gray-200 shadow-lg rounded-lg p-2"
        dir="rtl"
      >
        {items.map((item, index) => {
          const itemNormalizedHref = item.href === '/' ? '/' : item.href;
          const isItemActive =
            normalizedPath === itemNormalizedHref ||
            (itemNormalizedHref !== '/' && normalizedPath.startsWith(itemNormalizedHref));

          return (
            <DropdownMenuItem
              key={index}
              className={`cursor-pointer rounded-md px-3 py-2 text-right transition-colors outline-none focus:text-[#1B6936] focus:bg-[#1B6936]/10 data-[highlighted]:text-[#1B6936] data-[highlighted]:bg-[#1B6936]/10 ${isItemActive
                ? 'bg-[#1B6936]/10 text-[#1B6936] font-semibold'
                : 'text-gray-700 hover:bg-[#1B6936]/10 hover:text-[#1B6936]'
                }`}
              asChild
            >
              <LocaleLink href={item.href} className="w-full block">
                {item.label}
              </LocaleLink>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
