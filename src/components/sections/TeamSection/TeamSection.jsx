'use client';

import { useMemo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { TeamMemberCard } from '@/components/molecules/TeamMemberCard/TeamMemberCard';
import { Link } from '@/i18n/routing';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const TEAM_DATA = [
  { id: 'member-0', imageSrc: '/assets/images/team/Ellipse 7 (3).svg', name: 'مانع أبو دراهم', role: 'مدير عام وثب', linkedin: 'https://www.linkedin.com/in/mane-abudrahem-37a14a95/' },
  { id: 'member-1', imageSrc: '/assets/images/team/Ellipse 7 (2).svg', name: 'محمد ال خضير', role: 'أخصائى صحه بيئية', linkedin: 'https://www.linkedin.com/feed/' },
  { id: 'member-2', imageSrc: '/assets/images/team/Ellipse 7 (1).svg', name: 'محمد فتحى', role: 'مهندس بيئى أول (أخصائى بيئة بحرية)', linkedin: 'https://www.linkedin.com/in/mohamed-fathy-366a77293/' },
  { id: 'member-3', imageSrc: '/assets/images/team/Ellipse 7.svg', name: 'محمود عبد الله', role: 'مهندس بيئى أول (أخصائى بيئة بحرية)', linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/' },
  { id: 'member-4', imageSrc: '/assets/images/team/Ellipse 7 (7).svg', name: 'د.أيمن عبد الرحمن', role: 'خبير استخدام الاستشعار عن بعد والذكاء الصناعي ، في الرصد البيئي، عضو المركز الاوربي لابحاث الفضاء.', linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/' },
  { id: 'member-5', imageSrc: '/assets/images/team/Ellipse 7 (6).svg', name: 'محمد الفاتح', role: 'مدير الجودة', linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/' },
  { id: 'member-6', imageSrc: '/assets/images/team/Ellipse 7 (5).svg', name: 'كستافو', role: 'مستشار وثب، خبير البنك الدولي وبرامج الامم المتحدة الانمائية في قضايا البيئة والمياه', linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/' },
  { id: 'member-7', imageSrc: '/assets/images/team/Ellipse 7 (4).svg', name: 'بيتر', role: 'مستشار وثب ، خبير موارد المياه بالمملكة العربية السعودية والنمذجة الرياضية للمتكونات المائية', linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/' },
  { id: 'member-8', imageSrc: '/assets/images/team/womans.svg', name: 'وجدان على', role: 'اخصائى بيئة و طاقة متجددة', linkedin: 'https://www.linkedin.com/in/wejdan-a-6a26b4247/' },
  { id: 'member-9', imageSrc: '/assets/images/team/womans.svg', name: 'جواهر الهزلى', role: 'اخصائى تقنية حيوية و بيئة', linkedin: 'https://www.linkedin.com/in/jawaheralhuthali/' },
  { id: 'member-10', imageSrc: '/assets/images/team/womans.svg', name: 'سعاد عبدالله', role: 'ماجستير فى البيئة و الموارد الطبيعية', linkedin: 'https://www.linkedin.com/' },
];

export function TeamSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const carouselOptions = useMemo(
    () => ({
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: false,
      slidesToScroll: 1,
      direction: isRTL ? 'rtl' : 'ltr',
    }),
    [isRTL]
  );

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`flex flex-col gap-8 w-full overflow-x-hidden min-w-0 bg-white
        px-4 py-12
        sm:px-5 sm:py-14 sm:gap-10
        md:px-6 md:py-16 md:gap-12
        lg:gap-14 lg:py-24 lg:px-12
        xl:px-16
        2xl:px-[120px] 2xl:py-24
        ${className}`}
      {...props}
    >
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto min-w-0 sm:gap-10 md:gap-12 lg:gap-14">
        {/* Header: title + accent + description */}
        <div className="flex flex-col gap-4 items-center text-center w-full min-w-0 sm:gap-5 md:gap-6">
          <h2 className="font-din font-medium text-[#0b2c16] w-full min-w-0
            text-2xl leading-tight
            sm:text-3xl
            md:text-4xl md:leading-snug
            lg:text-5xl lg:leading-tight
            xl:text-[64px] xl:leading-[108px]">
            {t('team.sectionTitle')}
          </h2>
          <div className="flex items-center gap-1 h-1.5 shrink-0 sm:h-2" aria-hidden>
            <div className="w-1.5 h-1.5 rounded-full bg-[#86ba41] sm:w-2 sm:h-2" />
            <div className="w-12 h-1.5 rounded-sm bg-[#86ba41] sm:w-16 sm:h-2" />
          </div>
          <p className="font-din font-normal text-[#303030] max-w-3xl mx-auto w-full min-w-0
            text-sm leading-relaxed
            sm:text-base sm:leading-7
            md:text-lg md:leading-8
            lg:text-xl lg:leading-8">
            {t('team.description')}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full min-w-0">
          <Carousel opts={carouselOptions} className="relative w-full">
            <CarouselContent className="-ml-3 sm:-ml-4">
              {TEAM_DATA.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="pl-3 basis-[85%] min-w-0 sm:pl-4 sm:basis-[75%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <TeamMemberCard {...member} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="left-1 min-w-[44px] min-h-[44px] h-11 w-11 touch-manipulation sm:left-2 md:left-4 lg:-left-12"
              aria-label={isRTL ? 'Next' : 'Previous'}
            />
            <CarouselNext
              className="right-1 min-w-[44px] min-h-[44px] h-11 w-11 touch-manipulation sm:right-2 md:right-4 lg:-right-12"
              aria-label={isRTL ? 'Previous' : 'Next'}
            />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center w-full min-w-0">
          <Link
            href="/about/team"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-2xl border-2 border-[#1b6936] bg-white text-[#1b6936] font-din font-medium hover:bg-[#1b6936]/5 transition-colors touch-manipulation
              text-sm sm:text-base md:text-lg leading-normal"
          >
            <span>{t('team.discoverMore')}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="shrink-0 w-5 h-5 sm:w-6 sm:h-6">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
