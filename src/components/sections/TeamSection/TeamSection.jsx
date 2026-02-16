'use client';

import { useMemo } from 'react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { TeamMemberCard } from '@/components/molecules/TeamMemberCard/TeamMemberCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const TEAM_DATA = [
  {
    id: 'member-0',
    imageSrc: '/assets/images/team/Ellipse 7 (3).svg',
    name: 'مانع أبو دراهم',
    role: 'مدير عام وثب',
    linkedin: 'https://www.linkedin.com/in/mane-abudrahem-37a14a95/',
  },
  {
    id: 'member-1',
    imageSrc: '/assets/images/team/Ellipse 7 (2).svg',
    name: 'محمد ال خضير',
    role: 'أخصائى صحه بيئية',
    linkedin: 'https://www.linkedin.com/feed/',
  },
  {
    id: 'member-2',
    imageSrc: '/assets/images/team/Ellipse 7 (1).svg',
    name: 'محمد فتحى',
    role: 'مهندس بيئى أول (أخصائى بيئة بحرية)',
    linkedin: 'https://www.linkedin.com/in/mohamed-fathy-366a77293/',
  },
  {
    id: 'member-3',
    imageSrc: '/assets/images/team/Ellipse 7.svg',
    name: 'محمود عبد الله',
    role: 'مهندس بيئى أول (أخصائى بيئة بحرية)',
    linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/',
  },
  {
    id: 'member-4',
    imageSrc: '/assets/images/team/Ellipse 7 (7).svg',
    name: 'د.أيمن عبد الرحمن',
    role: 'خبير استخدام الاستشعار عن بعد والذكاء الصناعي ، في الرصد البيئي، عضو المركز الاوربي لابحاث الفضاء.',
    linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/',
  },
  {
    id: 'member-5',
    imageSrc: '/assets/images/team/Ellipse 7 (6).svg',
    name: 'محمد الفاتح',
    role: 'مدير الجودة',
    linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/',
  },
  {
    id: 'member-6',
    imageSrc: '/assets/images/team/Ellipse 7 (5).svg',
    name: 'كستافو',
    role: 'مستشار وثب، خبير البنك الدولي وبرامج الامم المتحدة الانمائية في قضايا البيئة والمياه',
    linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/',
  },
  {
    id: 'member-7',
    imageSrc: '/assets/images/team/Ellipse 7 (4).svg',
    name: 'بيتر',
    role: 'مستشار وثب ، خبير موارد المياه بالمملكة العربية السعودية والنمذجة الرياضية للمتكونات المائية',
    linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/',
  },
  {
    id: 'member-8',
    imageSrc: '/assets/images/team/womans.svg',
    name: 'وجدان على',
    role: 'اخصائى بيئة و طاقة متجددة',
    linkedin: 'https://www.linkedin.com/in/wejdan-a-6a26b4247/',
  },
  {
    id: 'member-9',
    imageSrc: '/assets/images/team/womans.svg',
    name: 'جواهر الهزلى',
    role: 'اخصائى تقنية حيوية و بيئة',
    linkedin: 'https://www.linkedin.com/in/jawaheralhuthali/',
  },
  {
    id: 'member-10',
    imageSrc: '/assets/images/team/womans.svg',
    name: 'سعاد عبدالله',
    role: 'ماجستير فى البيئة و الموارد الطبيعية',
    linkedin: 'https://www.linkedin.com/',
  },
];

export function TeamSection() {

  const language = useLanguageStore((s) => s.language)
  const isRTL = language === "ar"

  const carouselOptions = useMemo(
    () => ({
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
      slidesToScroll: 1,
      direction: isRTL ? "rtl" : "ltr",
    }),
    [isRTL]
  )
  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="py-24 ">
      <div className="w-full max-w-7xl mx-auto">
        <Carousel opts={carouselOptions} className="relative ">
          <CarouselContent>
            {TEAM_DATA.map((member) => (
              <CarouselItem
                key={member.id}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <TeamMemberCard {...member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}