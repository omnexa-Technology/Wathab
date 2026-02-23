'use client';

import { useRef, useState, useEffect } from 'react';
import { StatCard } from '../../molecules/StatCard/StatCard';

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
 * Stats section: four horizontal cards with icon, animated counter, and label.
 * Counters animate from 0 to value when the section scrolls into view.
 */
export function StatsSection({ className = '', ...props }) {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex w-full max-w-[1680px] flex-wrap items-stretch justify-center gap-6 px-4 py-8 md:flex-nowrap md:justify-between ${className}`}
      aria-label="Statistics"
      {...props}
    >
      {STATS_DATA.map((stat) => (
        <StatCard
          key={stat.id}
          iconSrc={stat.iconSrc}
          value={isInView ? stat.value : 0}
          labelKey={stat.labelKey}
          duration={1800}
          className="min-w-0 flex-1 basis-full md:basis-0"
        />
      ))}
    </section>
  );
}
