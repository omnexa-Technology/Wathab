/**
 * OurValuesHeader Molecule
 * Composes section title with green dots decoration
 */

import { useTranslation } from '@/hooks/useTranslation';
import { GreenDotsDecoration } from '@/components/atoms/GreenDotsDecoration/GreenDotsDecoration';

export function OurValuesHeader({ titleKey = 'ourValues.sectionTitle', className = '' }) {
  const { t } = useTranslation();

  return (
    <header
      className={`inline-flex items-center justify-center gap-3 flex-shrink-0 sm:gap-4 ${className}`}
    >
      <GreenDotsDecoration />
      <h2 className="font-din font-bold text-white text-2xl leading-tight sm:text-3xl md:text-4xl lg:text-5xl tracking-normal text-center">
        {t(titleKey)}
      </h2>
    </header>
  );
}
