'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ArticleCard } from '@/components/molecules/ArticleCard/ArticleCard';
import Link from 'next/link';

/**
 * NewsSection - Displays latest news and articles
 * @param {Object} props
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {JSX.Element}
 */
export function NewsSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const articlesData = [
    {
      id: 'article-1',
      imageSrc: '/assets/images/pages/Home/news-1.webp',
      title: 'الاصلاحات والانشاءات البيئية',
      date: '12 July 2023',
      excerpt: 'من ناحية نساعدكم في دمج ممارسات التنمية المستدامة وكفاءة الموارد، كما نخفّض تكاليف التشغيل على المدى الطويل',
      href: '/articles/environmental-reforms',
    },
    {
      id: 'article-2',
      imageSrc: '/assets/images/pages/Home/news-2.webp',
      title: 'الأصلاحات البيئية',
      date: '12 July 2023',
      excerpt: 'تطوير حلول مستدامة للحفاظ على البيئة وتحسين جودة الحياة',
      href: '/articles/environmental-solutions',
    },
    {
      id: 'article-3',
      imageSrc: '/assets/images/pages/Home/news-3.webp',
      title: 'التنمية المستدامة',
      date: '12 July 2023',
      excerpt: 'مشاريع تنموية تراعي البيئة وتحقق التوازن بين التقدم والحفاظ على الموارد',
      href: '/articles/sustainable-development',
    },
  ];

  return (
    <section
      className={`flex flex-col gap-16 items-center px-[120px] py-24 bg-white w-full ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="flex flex-col gap-16 items-center w-full max-w-[1680px]">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          {/* Discover More Link */}
          <Link
            href="/articles"
            className="flex items-center gap-2 text-[#1b6936] hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6667 16H5.33337M5.33337 16L16 26.6667M5.33337 16L16 5.33337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-din font-medium text-[32px] leading-[56px]">
              اكتشف المزيد
            </span>
          </Link>

          {/* Section Title */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <h2 className="font-din font-medium text-[64px] leading-[108px] text-[#0b2c16]">
              {t('news.sectionTitle')}
            </h2>
            <div className="flex items-center gap-1 h-2">
              <div className="w-2 h-2 rounded-full bg-[#86ba41]" />
              <div className="w-16 h-2 rounded-sm bg-[#86ba41]" />
            </div>
          </div>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-3 gap-8 w-full">
          {articlesData.map((article) => (
            <ArticleCard
              key={article.id}
              imageSrc={article.imageSrc}
              title={article.title}
              date={article.date}
              excerpt={article.excerpt}
              href={article.href}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-6">
          <button className="w-6 h-6 flex items-center justify-center text-[#1b6936] hover:opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-[#86ba41]" />
            <div className="w-4 h-4 rounded-full bg-[#e5e5e5]" />
            <div className="w-14 h-3.5 rounded-sm bg-[#e5e5e5]" />
          </div>

          <button className="w-6 h-6 flex items-center justify-center text-[#1b6936] hover:opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
