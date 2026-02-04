'use client';

import { StatCard } from '@/components/molecules/StatCard/StatCard';

const STATS_DATA = [
  {
    id: 'completed-projects',
    iconSrc: '/assets/icons/ui/countH1.svg',
    value: 670,
    labelKey: 'stats.completedProjects',
  },
  {
    id: 'environmental-studies',
    iconSrc: '/assets/icons/ui/countH2.svg',
    value: 456,
    labelKey: 'stats.environmentalStudies',
  },
  {
    id: 'completed-permits',
    iconSrc: '/assets/icons/ui/countH3.svg',
    value: 700,
    labelKey: 'stats.completedPermits',
  },
  {
    id: 'clients',
    iconSrc: '/assets/icons/ui/countH4.svg',
    value: 600,
    labelKey: 'stats.clients',
  },
];

/**
 * Stats section: four horizontal cards with icon, counter, and label.
 * @param {Object} props
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function StatsSection({ className = '', ...props }) {
  return (
    <section
      className={`flex w-full max-w-[1680px] flex-wrap items-stretch justify-center gap-6 px-4 py-8 md:flex-nowrap md:justify-between ${className}`}
      aria-label="Statistics"
      {...props}
    >
      {STATS_DATA.map((stat) => (
        <StatCard
          key={stat.id}
          iconSrc={stat.iconSrc}
          value={stat.value}
          labelKey={stat.labelKey}
          className="min-w-0 flex-1 basis-full md:basis-0"
        />
      ))}
    </section>
  );
}
