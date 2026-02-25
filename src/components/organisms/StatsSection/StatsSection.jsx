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
      className={`w-full max-w-[1680px] mx-auto
        grid grid-cols-1  gap-4 px-4 py-8
        sm:gap-5 sm:px-5
        md:grid-cols-2 md:gap-6 md:px-6 md:py-10
        lg:grid-cols-3 
        xl:grid-cols-4
        lg:px-12 lg:gap-8
        ${className}`}
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
          className="min-w-0 w-full"
        />
      ))}
    </section>
  );
}
