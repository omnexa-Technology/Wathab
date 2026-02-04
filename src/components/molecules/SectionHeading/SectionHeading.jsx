/**
 * SectionHeading Molecule
 * Combines Indicator and Heading for section titles
 */

import { Heading } from '@/components/atoms/Heading/Heading';
import { Indicator } from '@/components/atoms/Indicator/Indicator';

export function SectionHeading({
  title,
  level = 'h2',
  variant = 'h2',
  indicatorPosition = 'start',
  className = ''
}) {
  return (
    <div className={`inline-flex items-center  gap-4 ${className}`}>
      {indicatorPosition === 'start' && <Indicator />}
      <Heading
        level={level}
        variant={variant}
        className="whitespace-nowrap"
      >
        {title}
      </Heading>
      {indicatorPosition === '' && <Indicator />}
    </div>
  );
}
