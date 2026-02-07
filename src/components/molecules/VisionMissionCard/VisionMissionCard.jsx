/**
 * VisionMissionCard Molecule
 * Composed card component for displaying vision/mission content
 * Features: glass-morphism effect, green border, backdrop blur
 */

import { Card, CardContent } from "@/components/ui/card";
// import { CardTitle } from "@/components/atoms/CardTitle/CardTitle";
import { CardDescription } from "@/components/atoms/CardDescription/CardDescription";
import FadeContent from "@/components/FadeContent";
export function VisionMissionCard({
  title,
  description,
  className = '',
}) {
  return (
    <Card
      className={`w-full rounded-2xl border-[3px] border-[#86ba41] backdrop-blur-[6px] backdrop-brightness-100 backdrop-saturate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_4px_rgba(0,0,0,0.13),inset_-1px_0_4px_rgba(0,0,0,0.11)] ${className}`}
    >
      <CardContent className="flex flex-col items-end justify-end gap-14 px-10 py-16">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <CardDescription className="text-white">{description}</CardDescription>
        </FadeContent>
        {/* <CardTitle className="text-start text-white">{title}</CardTitle> */}
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <h1 className="text-start text-5xl font-bold rotate-180 flex items-end justify-start text-white">{title}</h1>
        </FadeContent>
      </CardContent>
    </Card>
  );
}

