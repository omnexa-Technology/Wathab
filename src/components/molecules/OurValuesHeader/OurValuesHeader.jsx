/**
 * OurValuesHeader Molecule
 * Composes section title with green dots decoration
 */

import { useTranslation } from '@/hooks/useTranslation';
import { GreenDotsDecoration } from '@/components/atoms/GreenDotsDecoration/GreenDotsDecoration';

export function OurValuesHeader({ titleKey = 'ourValues.sectionTitle', className = '' }) {
  const { t } = useTranslation();

  return (
    <header className={`inline-flex items-center justify-center gap-4 relative flex-[0_0_auto] ${className}`}>
      <GreenDotsDecoration />
      <h1 className="text-white text-5xl font-bold">
        {t(titleKey)}
      </h1>
    </header>
  );
}
