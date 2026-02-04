'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LocaleLink from '@/components/LocaleLink';
import { useTranslation } from '@/hooks/useTranslation';

const linkBaseClass =
  ' flex h-12 items-center text-green-900 justify-center gap-2.5 px-4 py-0 rounded-[40px] font-[number:var(--body-font-weight)] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] ';

const linkActiveClass =
  ' font-[number:var(--text-20bold-font-weight)] text-[length:var(--text-20bold-font-size)] tracking-[var(--text-20bold-letter-spacing)] leading-[var(--text-20bold-line-height)] [font-style:var(--text-20bold-font-style)] text-[#FFFFFF]';

const linkInactiveClass = 'text-grey-600';

const activeUnderlineClass =
  " p-2 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1B6936] after:block ";

const triggerClass =
  'h-12 gap-2.5 px-4 py-0 text bg-transparent hover:bg-white/10 rounded-[40px] font-[number:var(--body-font-weight)] text[#eaeaea] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)] data-[state=open]:bg-white/10 border-none cursor-pointer flex items-center justify-center';

/**
 * Single nav entry: link or dropdown trigger.
 * Preserves routing and active state; uses Anima design tokens.
 */
export function NavItem({ href, translationKey, hasDropdown = false, dropdownContent, children, className = '', ...props }) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const locale = (pathname && pathname.split('/')[1]) || 'ar';
  const normalizedPath = pathname.replace(`/${locale}`, '') || '/';
  const normalizedHref = href === '/' ? '/' : href;
  const isActive = normalizedPath === normalizedHref || (normalizedHref !== '/' && normalizedPath.startsWith(normalizedHref));

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const label = translationKey ? t(translationKey) : children;

  if (hasDropdown) {
    return (
      <li ref={ref} className="relative ">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen((o) => !o)}
          className={`${triggerClass} ${className}`}
          {...props}
        >
          {label}
        </button>
        {open && (
          <div className="absolute top-full end-0 z-50 mt-1 min-w-[200px] rounded-lg border border-grey-600 bg-grey-600 p-4 shadow-lg" dir="rtl">
            {dropdownContent ?? <p className="text-sm text-muted-foreground text-grey-600">محتوى القائمة المنسدلة</p>}
          </div>
        )}
      </li>
    );
  }

  return (
    <li>
      <LocaleLink
        href={href}
        className={`${linkBaseClass} ${isActive ? linkActiveClass : linkInactiveClass} ${className} `}
        {...props}
      >
        {isActive ? <span className={activeUnderlineClass}>{label}</span> : label}
      </LocaleLink>
    </li>
  );
}
