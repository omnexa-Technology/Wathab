'use client';
import Image from 'next/image';
// import { ArticleIcon } from '@/components/atoms/ArticleIcon';
import { useLanguageStore } from '@/store/useLanguageStore';
export function ArticleGridCard({
  imageSrc,
  iconSrc,
  title,
  project,
  achievement,
  projectLabel,
  achievementLabel,
  imageLeft = true,
  className = '',
}) {
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const ImageSection = () => (
    <div className="relative w-full lg:w-[780px] h-[580px] rounded-3xl overflow-hidden shrink-0 bg-gray-200">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 780px"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </div>
  );

  const ContentSection = () => (
    <div className={`flex flex-col gap-16 flex-1 min-w-0 ${isRTL ? 'items-end' : 'items-start'}`}>
      {/* Icon */}
      {/* <ArticleIcon iconSrc={iconSrc} iconAlt="" /> */}
      {/* Title */}
      <h3 className="font-din font-bold text-[30px] leading-[80px] text-[#1b6936] text-right w-full">
        {title}
      </h3>

      {/* Project Section */}
      <div className="flex flex-col gap-8 w-full">
        <h4 className="font-din font-medium text-2xl leading-[48px] text-[#141414] text-right">
          {projectLabel}
        </h4>
        <p className="font-din font-normal text-2xl leading-[48px] text-grey-600 text-right">
          {project}
        </p>
      </div>

      {/* Achievement Section */}
      <div className="flex flex-col gap-8 w-full">
        <h4 className="font-din font-medium text-2xl leading-[48px] text-[#141414] text-right">
          {achievementLabel}
        </h4>
        <p className="font-din font-normal text-2xl leading-[48px] text-grey-600 text-right">
          {achievement}
        </p>
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-16 w-full ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {imageLeft ? (
        <>
          <ContentSection />
          <ImageSection />
        </>
      ) : (
        <>
          <ImageSection />
          <ContentSection />
        </>
      )}
    </div>
  );
}