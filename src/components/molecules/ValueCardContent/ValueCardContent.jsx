/**
 * ValueCardContent Molecule
 * Composes icon, title, and description for a value card
 */

import { useTranslation } from '../../../hooks/useTranslation';
import { ValueIcon } from '../../atoms/ValueIcon/ValueIcon';
import { ValueTitle } from '../../atoms/ValueTitle/ValueTitle';
import { ValueDescription } from '../../atoms/ValueDescription/ValueDescription';
import FadeContent from '../../FadeContent';

export function ValueCardContent({
  iconSrc,
  iconAlt,
  titleKey,
  descriptionKey,
  className = '',
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`p-0 w-full min-w-0 max-w-full flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 ${className}`}
    >
      <ValueIcon src={iconSrc} alt={iconAlt} />
      <div className="flex flex-col items-center justify-center gap-3 w-full min-w-0 flex-shrink-0 sm:gap-4 md:gap-5 lg:items-center lg:gap-8">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <ValueTitle>{t(titleKey)}</ValueTitle>
          <ValueDescription>{t(descriptionKey)}</ValueDescription>
        </FadeContent>
      </div>
    </div>
  );
}
