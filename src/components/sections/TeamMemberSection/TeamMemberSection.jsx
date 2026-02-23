'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { TeamMemberCardAlt } from '../../../components/molecules/TeamMemberCardAlt/TeamMemberCardAlt';

const TEAM_DATA = [
  {
    id: 'member-0',
    imageSrc: '/assets/images/team/Ellipse 7 (3).svg',
    name: 'مانع أبو دراهم',
    role: 'مدير عام وثب',
    linkedin: 'https://www.linkedin.com/in/mane-abudrahem-37a14a95/',
  },
  {
    id: 'member-5',
    imageSrc: '/assets/images/team/Ellipse 7 (6).svg',
    name: 'محمد الفاتح',
    role: 'مدير الجودة',
    linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/',
  },
  {
    id: 'member-3',
    imageSrc: '/assets/images/team/Ellipse 7.svg',
    name: 'محمود عبد الله',
    role: 'مهندس بيئى أول (أخصائى بيئة بحرية)',
    linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/',
  },
  {
    id: 'member-2',
    imageSrc: '/assets/images/team/Ellipse 7 (1).svg',
    name: 'محمد فتحى',
    role: 'مهندس بيئى أول (أخصائى بيئة بحرية)',
    linkedin: 'https://www.linkedin.com/in/mohamed-fathy-366a77293/',
  },
  {
    id: 'member-1',
    imageSrc: '/assets/images/team/Ellipse 7 (2).svg',
    name: 'محمد ال خضير',
    role: 'أخصائى صحه بيئية',
    linkedin: 'https://www.linkedin.com/feed/',
  },
  {
    id: 'member-4',
    imageSrc: '/assets/images/team/Ellipse 7 (7).svg',
    name: 'د.أيمن عبد الرحمن',
    role: 'خبير استخدام الاستشعار عن بعد والذكاء الصناعي ، في الرصد البيئي، عضو المركز الاوربي لابحاث الفضاء.',
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

export function TeamMemberSection({ className = '' }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`py-24 px-8 lg:px-[120px] bg-linear-to-l from-[#f8fcf9] to-[#fdfdfd] ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-16 items-center mb-16">
          {/* Title */}
          <div className="flex items-center justify-center w-full">
            <h2 className="font-din font-bold text-[48px] leading-[80px] text-[#0b2c16] text-center">
              {t('team.title')}
            </h2>
          </div>

          {/* Description */}
          <p className="font-din font-normal text-[32px] leading-[64px] text-grey-600 text-center w-full whitespace-pre-wrap">
            {t('team.description')}
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-col gap-12">
          {/* First 8 members - 2 rows of 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_DATA.slice(0, 8).map((member) => (
              <TeamMemberCardAlt key={member.id} {...member} />
            ))}
          </div>

          {/* Last 3 members - centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1266px]">
              {TEAM_DATA.slice(8).map((member) => (
                <TeamMemberCardAlt key={member.id} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
