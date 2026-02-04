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
      className={`flex flex-col items-center justify-center gap-8 ${paddingTop} pb-0 px-0 relative flex-1 grow border-0 bg-transparent shadow-none ${className}`}
    >
      <CardContent className="p-0">
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
