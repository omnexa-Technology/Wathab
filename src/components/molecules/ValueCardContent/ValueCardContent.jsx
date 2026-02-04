/**
 * ValueCardContent Molecule
 * Composes icon, title, and description for a value card
 */

import { useTranslation } from '@/hooks/useTranslation';
import { ValueIcon } from '@/components/atoms/ValueIcon/ValueIcon';
import { ValueTitle } from '@/components/atoms/ValueTitle/ValueTitle';
import { ValueDescription } from '@/components/atoms/ValueDescription/ValueDescription';

export function ValueCardContent({
  iconSrc,
  iconAlt,
  titleKey,
  descriptionKey,
  className = '',
}) {
  const { t } = useTranslation();

  return (
    <div className={`p-0 w-full flex flex-col items-center gap-8 ${className}`}>
      <ValueIcon src={iconSrc} alt={iconAlt} />
      <div className="flex flex-col items-end justify-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <ValueTitle>{t(titleKey)}</ValueTitle>
        <ValueDescription>{t(descriptionKey)}</ValueDescription>
      </div>
    </div>
  );
}
