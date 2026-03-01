'use client';

import { useState } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ClientCard } from '../../../components/molecules/ClientCard/ClientCard';

const CLIENTS_PER_PAGE_MOBILE = 4;

export function AboutClientSection({ className = '', ...props }) {
    const { t } = useTranslation();
    const language = useLanguageStore((s) => s.language);
    const isRTL = language === 'ar';
    const [currentPage, setCurrentPage] = useState(1);

    const clientsData = [
        {
            id: 'petromin',
            logoSrc: '/assets/images/clients/Component141(2).webp',
            name: 'بترو مين',
        },
        {
            id: 'alfahd',
            logoSrc: '/assets/images/clients/image30.webp',
            name: 'شركة الفهد للتجارة والصناعه والمقاولات',
        },
        {
            id: 'rtcc',
            logoSrc: '/assets/images/clients/image27.webp',
            name: 'شركة الراشد للتجارة والمقالاوت',
        },

        {
            id: 'nesco',
            logoSrc: '/assets/images/clients/Component141(3).webp',
            name: 'نسكو',
        },
        {
            id: 'saudi-cables',
            logoSrc: '/assets/images/clients/Frame 2147224060.webp',
            name: 'شركة الكابلات السعودية',
        },
        {
            id: 'ahmadia',
            logoSrc: '/assets/images/clients/image31.webp',
            name: 'شركة الأحمدية العالمية ',
        },
        {
            id: 'ajeeg',
            logoSrc: '/assets/images/clients/image28.webp',
            name: 'شركة اجيج لصناعة الصلب ومشتقاتة',
        },
        {
            id: 'sareef',
            logoSrc: '/assets/images/clients/image44.webp',
            name: 'مجموعة الصريف',
        },
        {
            id: 'national-chemistry',
            logoSrc: '/assets/images/clients/image54.webp',
            name: 'شركة الكيمياء الوطنية للصناعات الكيميائية',
        },
        {
            id: 'fine',
            logoSrc: '/assets/images/clients/Component141(4).webp',
            name: 'شركة فاين',
        },
        {
            id: 'saaf',
            logoSrc: '/assets/images/clients/Component141(5).webp',
            name: 'شركة سعف الصناعية',
        },
        {
            id: 'mahaib',
            logoSrc: '/assets/images/clients/Component141(1).webp',
            name: 'شركة مجموعة المهيلب للمنتجات الأسمنتية',
        },
        {
            id: 'mastoura',
            logoSrc: '/assets/images/clients/Component141.webp',
            name: 'شركة مستورة',
        },
        {
            id: 'alseel',
            logoSrc: '/assets/images/clients/image55.webp',
            name: 'شركة السيل للحفر وصيانة الأبار النفطية',
        },
        {
            id: 'ansab',
            logoSrc: '/assets/images/clients/image52.webp',
            name: 'شركة انساب ',
        },
        {
            id: 'alsayeg',
            logoSrc: '/assets/images/clients/image49.webp',
            name: 'شركة الصايغ ',
        },
        {
            id: 'atheel',
            logoSrc: '/assets/images/clients/Component141(9).webp',
            name: 'شركة اثيل للمقاولات',
        },
        {
            id: 'sultan-aldukhil',
            logoSrc: '/assets/images/clients/Component141(8).webp',
            name: 'شركة سلطان الدخيل للمقاولات',
        },
        {
            id: 'albarghash',
            logoSrc: '/assets/images/clients/Component141(7).webp',
            name: 'شركة محمد البرغش ',
        },
        {
            id: 'almarai',
            logoSrc: '/assets/images/clients/Component141(3).webp',
            name: 'شركة المري ',
        },
    ];

    const totalPages = Math.ceil(clientsData.length / CLIENTS_PER_PAGE_MOBILE);
    const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
    const handleNext = () =>
        setCurrentPage((p) => Math.min(totalPages, p + 1));

    return (
        <section
            className={`
                flex flex-col items-start gap-0 w-full
                bg-linear-to-l from-[#fdfdfd] to-white
                px-5 py-12
                sm:px-6 sm:py-14
                md:px-8 md:py-16
                lg:px-12 lg:py-20
                xl:px-16 xl:py-24
                2xl:px-[120px] 2xl:py-24
                ${className}
            `}
            dir={isRTL ? 'rtl' : 'ltr'}
            {...props}
        >
            <div className="flex flex-col gap-12 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 items-start w-full max-w-[1680px] mx-auto">
                {/* Header */}
                <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center w-full">
                    {/* Section Title */}
                    <div className="flex items-center justify-center gap-2 sm:gap-4 w-full flex-wrap">
                        <div className="flex items-center gap-1 h-1.5 sm:h-2 shrink-0">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-carousel-active" />
                            <div className="w-10 h-1.5 sm:w-16 sm:h-2 rounded-sm bg-carousel-active" />
                        </div>
                        <h2 className="font-din font-medium text-[#0b2c16] text-2xl leading-8 sm:text-3xl sm:leading-10 md:text-4xl md:leading-[48px] lg:text-5xl lg:leading-[64px] xl:text-[56px] xl:leading-[80px] 2xl:text-[64px] 2xl:leading-[108px]">
                            {t('clients.sectionTitle')}
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <div className="bg-[rgba(134,186,65,0.01)] flex items-center justify-center px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 rounded-2xl w-full max-w-4xl">
                        <p className="font-din font-normal text-center text-[#303030] text-base leading-relaxed sm:text-lg sm:leading-7 md:text-xl md:leading-8 lg:text-2xl lg:leading-9 xl:text-3xl xl:leading-normal 2xl:text-5xl 2xl:leading-normal">
                            {t('clients.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Client Cards Grid - responsive cols; on mobile show only current page */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    {clientsData.map((client, index) => {
                        const pageIndex =
                            Math.floor(index / CLIENTS_PER_PAGE_MOBILE) + 1;
                        const visibleOnMobile = pageIndex === currentPage;
                        return (
                            <div
                                key={client.id}
                                className={
                                    visibleOnMobile ? '' : 'hidden md:block'
                                }
                            >
                                <ClientCard
                                    logoSrc={client.logoSrc}
                                    name={client.name}
                                    imageAlt={`${client.name} logo`}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Pagination - mobile only */}
                {totalPages > 1 && (
                    <div className="flex md:hidden items-center justify-center gap-4 w-full">
                        <button
                            type="button"
                            onClick={handlePrev}
                            disabled={currentPage <= 1}
                            className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg border-2 border-[#1b6936] text-[#1b6936] disabled:border-[#b6b6b6] disabled:text-[#b6b6b6] disabled:cursor-not-allowed hover:bg-[#1b6936]/5 transition-colors"
                            aria-label={isRTL ? 'الصفحة السابقة' : 'Previous page'}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 32 32"
                                fill="none"
                                className={`w-5 h-5 sm:w-6 sm:h-6 ${isRTL ? '' : 'rotate-180'}`}
                                aria-hidden
                            >
                                <path
                                    d="M14.6667 8L6.66667 16L14.6667 24M24 8L16 16L24 24"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                            {Array.from(
                                { length: totalPages },
                                (_, i) => (isRTL ? totalPages - i : i + 1)
                            ).map((num) => (
                                <button
                                    key={num}
                                    type="button"
                                    onClick={() => setCurrentPage(num)}
                                    className={`
                                        min-w-[40px] sm:min-w-[48px] h-10 sm:h-12 px-2 sm:px-3 rounded-lg font-din text-sm sm:text-base flex items-center justify-center transition-colors
                                        ${
                                            currentPage === num
                                                ? 'bg-[#1b6936] text-white font-bold'
                                                : 'bg-[#fbfdfc] text-[#b6b6b6] font-normal hover:bg-[#f0f0f0]'
                                        }
                                    `}
                                    aria-label={t('clients.sectionTitle')}
                                    aria-current={
                                        currentPage === num
                                            ? 'true'
                                            : undefined
                                    }
                                >
                                    {num}
                                </button>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={currentPage >= totalPages}
                            className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg border-2 border-[#1b6936] text-[#1b6936] disabled:border-[#b6b6b6] disabled:text-[#b6b6b6] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1b6936]/5 transition-colors"
                            aria-label={isRTL ? 'الصفحة التالية' : 'Next page'}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 32 32"
                                fill="none"
                                className={`w-5 h-5 sm:w-6 sm:h-6 ${isRTL ? 'rotate-180' : ''}`}
                                aria-hidden
                            >
                                <path
                                    d="M14.6667 8L6.66667 16L14.6667 24M24 8L16 16L24 24"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}