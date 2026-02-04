'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { TeamMemberCard } from '@/components/molecules/TeamMemberCard/TeamMemberCard';
import Link from 'next/link';

/**
 * TeamSection - Displays the company team members
 * @param {Object} props
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function TeamSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const teamData = [
    {
      id: 'member-1',
      imageSrc: '/assets/images/team/member-1.webp',
      name: 'أحمد محمد',
      role: 'المدير التنفيذي',
    },
    {
      id: 'member-2',
      imageSrc: '/assets/images/team/member-2.webp',
      name: 'سارة أحمد',
      role: 'مدير العمليات',
    },
    {
      id: 'member-3',
      imageSrc: '/assets/images/team/member-3.webp',
      name: 'خالد عبدالله',
      role: 'مستشار بيئي',
    },
  ];

  return (
    <section
      className={`flex flex-col gap-24 items-center px-[120px] py-24 bg-white w-full ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col gap-24 items-center w-full max-w-[1040px]">
        {/* Header */}
        <div className="flex flex-col gap-16 items-center w-full">
          {/* Section Title */}
          <div className="flex items-center gap-4">
            <h2 className="font-din font-medium text-[64px] leading-[108px] text-[#0b2c16]">
              {t('team.sectionTitle')}
            </h2>
            <div className="flex items-center gap-1 h-2">
              <div className="w-2 h-2 rounded-full bg-[#86ba41]" />
              <div className="w-16 h-2 rounded-sm bg-[#86ba41]" />
            </div>
          </div>

          {/* Description */}
          <p className="font-din font-normal text-[32px] leading-[64px] text-center text-[#595959] w-full">
            {t('team.description')}
          </p>
        </div>

        {/* Team Members Grid - Placeholder */}
        <div className="grid grid-cols-3 gap-8 w-full">
          {teamData.map((member) => (
            <TeamMemberCard
              key={member.id}
              imageSrc={member.imageSrc}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>

        {/* View All Button */}
        <Link
          href="/team"
          className="flex items-center gap-4 px-6 h-16 bg-[#1b6936] hover:bg-[#1b6936]/90 rounded-[32px] transition-colors"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3334 10.6667L10.6667 21.3333M10.6667 21.3333H21.3334M10.6667 21.3333V10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-din font-normal text-xl leading-normal text-white">
            تعرف على فريقنا
          </span>
        </Link>
      </div>
    </section>
  );
}
