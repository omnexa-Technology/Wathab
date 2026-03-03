'use client';

import { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { TeamMemberCardAlt } from '../../../components/molecules/TeamMemberCardAlt/TeamMemberCardAlt';

const STATIC_TEAM = [
  { id: 'member-0', imageSrc: '/assets/images/team/Ellipse 7 (3).svg', linkedin: 'https://www.linkedin.com/in/mane-abudrahem-37a14a95/' },
  { id: 'member-5', imageSrc: '/assets/images/team/Ellipse 7 (6).svg', linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/' },
  { id: 'member-3', imageSrc: '/assets/images/team/Ellipse 7.svg', linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/' },
  { id: 'member-2', imageSrc: '/assets/images/team/Ellipse 7 (1).svg', linkedin: 'https://www.linkedin.com/in/mohamed-fathy-366a77293/' },
  { id: 'member-1', imageSrc: '/assets/images/team/Ellipse 7 (2).svg', linkedin: 'https://www.linkedin.com/feed/' },
  { id: 'member-4', imageSrc: '/assets/images/team/Ellipse 7 (7).svg', linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/' },
  { id: 'member-6', imageSrc: '/assets/images/team/Ellipse 7 (5).svg', linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/' },
  { id: 'member-7', imageSrc: '/assets/images/team/Ellipse 7 (4).svg', linkedin: 'https://www.linkedin.com/in/mahmoud-abdallah-133009218/' },
  { id: 'member-8', imageSrc: '/assets/images/team/womans.svg', linkedin: 'https://www.linkedin.com/in/wejdan-a-6a26b4247/' },
  { id: 'member-9', imageSrc: '/assets/images/team/womans.svg', linkedin: 'https://www.linkedin.com/in/jawaheralhuthali/' },
  { id: 'member-10', imageSrc: '/assets/images/team/womans.svg', linkedin: 'https://www.linkedin.com/' },
];

const MEMBERS_PER_PAGE = 6;

export function TeamMemberSection({ className = '' }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';
  const [currentPage, setCurrentPage] = useState(1);

  const localizedMembers = t('team.members');
  const membersArray = Array.isArray(localizedMembers) ? localizedMembers : [];
  const TEAM_DATA = STATIC_TEAM.map((member) => {
    const index = parseInt(member.id.replace('member-', ''), 10);
    const localized = membersArray[index];
    return {
      ...member,
      name: localized?.name ?? '',
      role: localized?.role ?? '',
    };
  });

  const totalMembers = TEAM_DATA.length;
  const totalPages = Math.ceil(totalMembers / MEMBERS_PER_PAGE);

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () =>
    setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`
        bg-linear-to-l from-[#f8fcf9] to-[#fdfdfd]
        py-12 px-5
        sm:py-14 sm:px-6
        md:py-16 md:px-6
        lg:py-24 lg:px-8
        xl:px-12 xl:py-24
        2xl:px-[120px] 2xl:py-24
        flex flex-col items-center gap-12
        sm:gap-14 md:gap-16 lg:gap-16 xl:gap-20 2xl:gap-24
        ${className}
      `}
    >
      <div className="w-full max-w-[1680px] mx-auto flex flex-col items-center gap-12 sm:gap-14 md:gap-16 lg:gap-16 xl:gap-20 2xl:gap-24">
        {/* Header - Figma: title 20px/32, description 14px/28, gap 32px, text-center */}
        <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 items-center text-center w-full">
          <h2
            className="font-din font-bold text-[#0b2c16] leading-8
              text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[48px]
              sm:leading-9 md:leading-[40px] lg:leading-[48px] xl:leading-[56px] 2xl:leading-[64px]"
          >
            {t('team.title')}
          </h2>
          <p
            className="font-din font-normal text-grey-600 leading-7 max-w-3xl
              text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
              sm:leading-7 md:leading-8 lg:leading-8"
          >
            {t('team.description')}
          </p>
        </div>

        {/* Team grid - mobile 1 col (paginated), md+ show all; pagination mobile only */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4
            gap-6 sm:gap-6 md:gap-6 lg:gap-8 xl:gap-8 2xl:gap-10"
        >
          {TEAM_DATA.map((member, index) => {
            const pageIndex = Math.floor(index / MEMBERS_PER_PAGE) + 1;
            const visibleOnMobile = pageIndex === currentPage;
            return (
              <div
                key={member.id}
                className={visibleOnMobile ? '' : 'hidden md:block'}
              >
                <TeamMemberCardAlt {...member} />
              </div>
            );
          })}
        </div>

        {/* Pagination - mobile only; hidden from md and up */}
        {totalPages > 1 && (
          <div className="flex md:hidden items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentPage <= 1}
              className="flex items-center justify-center w-12 h-12 rounded-lg border-2 border-[#1b6936] text-[#1b6936]
                disabled:border-[#b6b6b6] disabled:text-[#b6b6b6] disabled:cursor-not-allowed
                hover:bg-[#1b6936]/5 transition-colors"
              aria-label={isRTL ? 'الصفحة التالية' : 'Previous page'}
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="rotate-180 w-6 h-6" aria-hidden>
                <path d="M14.6667 8L6.66667 16L14.6667 24M24 8L16 16L24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center justify-center gap-2">
              {(isRTL
                ? Array.from({ length: totalPages }, (_, i) => totalPages - i)
                : Array.from({ length: totalPages }, (_, i) => i + 1)
              ).map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setCurrentPage(num)}
                    className={`
                      min-w-[48px] h-12 px-3 rounded-lg font-din text-base flex items-center justify-center
                      transition-colors
                      ${
                        currentPage === num
                          ? 'bg-[#1b6936] text-white font-bold leading-7'
                          : 'bg-[#fbfdfc] text-carousel-inactive font-normal leading-8 hover:bg-[#f0f0f0]'
                      }
                    `}
                  >
                    {num}
                  </button>
                ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage >= totalPages}
              className="flex items-center justify-center w-12 h-12 rounded-lg border-2 border-[#b6b6b6] text-[#b6b6b6]
                disabled:opacity-50 disabled:cursor-not-allowed
                hover:border-[#1b6936] hover:text-[#1b6936] hover:bg-[#1b6936]/5 transition-colors"
              aria-label={isRTL ? 'الصفحة السابقة' : 'Next page'}
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden>
                <path d="M14.6667 8L6.66667 16L14.6667 24M24 8L16 16L24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
