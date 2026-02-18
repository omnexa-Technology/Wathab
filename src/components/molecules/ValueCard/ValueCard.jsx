/**
 * ValueCard Molecule
 * Wraps shadcn/ui Card around ValueCardContent with custom styling
 */

import { Card, CardContent } from '@/components/ui/card';
import { ValueCardContent } from '@/components/molecules/ValueCardContent/ValueCardContent';

export function ValueCard({
  iconSrc,
  iconAlt,
  titleKey,
  descriptionKey,
  paddingTop = '',
  className = '',
}) {
  return (
    <Card
      className={`flex flex-col items-center justify-center gap-4 pb-0 px-0 relative flex-1 min-w-0 w-full max-w-full border-0 bg-transparent shadow-none
        sm:gap-5 sm:min-h-0
        md:gap-6
        lg:grow lg:gap-8 ${paddingTop}
        ${className}`}
    >
      <CardContent className="p-0 w-full min-w-0 max-w-full">
        <ValueCardContent
          iconSrc={iconSrc}
          iconAlt={iconAlt}
          titleKey={titleKey}
          descriptionKey={descriptionKey}
        />
      </CardContent>
    </Card>
  );
}
