'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

/**
 * ServicesNavSidebar
 * Client component — needs useParams to detect the active slug.
 *
 * Displays a sticky navigation list of all services for the current locale.
 * Active item (matching current slug) receives a green highlight.
 */
export function ServicesNavSidebar({ services = [], sectionLabel }) {
  const params = useParams();
  const currentSlug = params?.slug ?? '';
  const locale = params?.locale ?? 'ar';
  const isRTL = locale === 'ar';

  return (
    <aside
      className="lg:sticky lg:top-28 flex flex-col gap-3 self-start"
      aria-label={sectionLabel || (isRTL ? 'قائمة الخدمات' : 'Services list')}
    >
      {/* Panel header */}
      <div className="flex flex-col gap-4 rounded-2xl bg-white border border-[#eaeaea] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)] overflow-hidden">

        {/* Title bar */}
        <div className="flex items-center gap-3 px-5 pt-5">
          <div className="flex items-center gap-1 shrink-0" aria-hidden>
            <div className="w-2 h-2 rounded-full bg-[#1B6936]" />
            <div className="w-8 h-2 rounded-sm bg-[#1B6936]" />
          </div>
          <h2 className="font-din font-bold text-[#0b2c16] text-lg leading-snug">
            {sectionLabel || (isRTL ? 'خدماتنا' : 'Our Services')}
          </h2>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#eaeaea]" />

        {/* Service links */}
        <nav className="flex flex-col gap-1 px-3 pb-3">
          {services.map((service) => {
            const isActive = service.slug === currentSlug;

            return (
              <Link
                key={service.slug}
                href={`/${locale}/services/${service.slug}`}
                className={[
                  'group flex items-center gap-3 w-full rounded-xl px-4 py-3 transition-all duration-200',
                  isActive
                    ? 'bg-[#1B6936] text-white shadow-sm'
                    : 'text-[#303030] hover:bg-[#1B6936]/8 hover:text-[#1B6936]',
                ].join(' ')}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Bullet indicator */}
                <span
                  className={[
                    'shrink-0 w-1.5 h-1.5 rounded-full transition-colors',
                    isActive
                      ? 'bg-white'
                      : 'bg-[#1B6936]/40 group-hover:bg-[#1B6936]',
                  ].join(' ')}
                  aria-hidden
                />

                <span className="font-din font-medium text-sm leading-snug line-clamp-2">
                  {service.title}
                </span>

                {/* Active arrow — points toward content (flips with RTL) */}
                {isActive && (
                  <svg
                    className={`shrink-0 w-4 h-4 opacity-70 ms-auto ${isRTL ? 'rotate-180' : ''}`}
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 12l4-4-4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
