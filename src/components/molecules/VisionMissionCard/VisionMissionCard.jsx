import FadeContent from '../../FadeContent';

/**
 * VisionMissionCard — Figma nodes 3658:3170 (desktop) / 4180:18570 (mobile)
 * Semi-transparent card with green border for Vision & Mission content.
 */
export function VisionMissionCard({ title, description, className = '' }) {
  return (
    <div
      className={`w-full rounded-lg md:rounded-2xl border border-carousel-active md:border-3 bg-[rgba(26,28,15,0.08)] backdrop-blur-sm flex flex-col gap-6 md:gap-14 p-4 sm:p-6 md:px-10 md:py-16 ${className}`}
    >
      <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
        <h3 className="font-din text-base sm:text-xl md:text-4xl lg:text-[48px] lg:leading-[normal] font-medium md:font-normal text-white leading-7 sm:leading-8">
          {title}
        </h3>
      </FadeContent>

      <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
        <p className="font-din text-xs sm:text-sm md:text-2xl lg:text-[32px] lg:leading-[64px] text-[#e8e8e8] leading-6 sm:leading-7">
          {description}
        </p>
      </FadeContent>
    </div>
  );
}
