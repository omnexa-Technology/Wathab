/**
 * OurValuesHeader Molecule
 * Composes section title with green dots decoration
 */

import { useTranslation } from '@/hooks/useTranslation';
import { SectionTitleText } from '@/components/atoms/SectionTitleText/SectionTitleText';
import { GreenDotsDecoration } from '@/components/atoms/GreenDotsDecoration/GreenDotsDecoration';

export function OurValuesHeader({ titleKey = 'ourValues.sectionTitle', className = '' }) {
  const { t } = useTranslation();

  return (
    <header className={`inline-flex items-center justify-center gap-4 relative flex-[0_0_auto] ${className}`}>
      <SectionTitleText>{t(titleKey)}</SectionTitleText>
      <GreenDotsDecoration />
    </header>
  );
}
