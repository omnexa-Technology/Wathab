'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ArticleCard } from '../../molecules/ArticleCard/ArticleCard';

const ITEMS_PER_PAGE = 6;
const LATEST_SIDEBAR_COUNT = 5;

function formatNewsDate(iso) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}

function LatestArticleItem({ imageSrc, title, date, href }) {
  return (
    <Link
      href={href}
      className="flex gap-4 p-2 rounded-lg hover:bg-[#0b2c16]/5 transition-colors group"
    >
      <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-200">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <span className="font-din font-medium text-base leading-tight text-[#0b2c16] line-clamp-2 group-hover:text-[#1b6936]">
          {title}
        </span>
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 text-[#1b6936]"
          >
            <path
              d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 2V6M8 2V6M3 10H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-din text-sm text-[#0b2c16]/80">{date}</span>
        </div>
      </div>
    </Link>
  );
}

export function NewsPageContent({ articles = [], locale }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return articles;
    const q = searchQuery.toLowerCase().trim();
    return articles.filter(
      (a) =>
        (a.title ?? '').toLowerCase().includes(q) ||
        (a.excerpt ?? '').toLowerCase().includes(q)
    );
  }, [articles, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const pageIndex = Math.min(Math.max(1, currentPage), totalPages);
  const pageItems = useMemo(
    () =>
      filtered.slice(
        (pageIndex - 1) * ITEMS_PER_PAGE,
        pageIndex * ITEMS_PER_PAGE
      ),
    [filtered, pageIndex]
  );

  const latestForSidebar = filtered.slice(0, LATEST_SIDEBAR_COUNT);

  const basePath = `/${locale}/news`;

  return (
    <section
      className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* Main grid */}
        <div className="flex-1 min-w-0">
          {pageItems.length === 0 ? (
            <p className="font-din text-xl text-[#0b2c16]/80 py-16 text-center">
              {searchQuery.trim() ? t('news.noResults') : t('news.noArticles')}
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pageItems.map((item) => (
                  <ArticleCard
                    key={item._id}
                    imageSrc={item.imageSrc}
                    title={item.title ?? ''}
                    date={formatNewsDate(item.publishedAt)}
                    excerpt={item.excerpt ?? ''}
                    href={`${basePath}/${item._id}`}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-14">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={pageIndex <= 1}
                    className="w-12 h-12 flex items-center justify-center rounded-full text-[#1b6936] hover:bg-[#1b6936]/10 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                    aria-label={isRTL ? 'الصفحة التالية' : 'Previous page'}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={isRTL ? 'rotate-180' : ''}
                    >
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setCurrentPage(num)}
                          className={`min-w-[44px] h-11 px-3 rounded-lg font-din font-medium text-lg flex items-center justify-center transition-colors ${pageIndex === num
                              ? 'bg-[#0b2c16] text-white'
                              : 'text-[#0b2c16] hover:bg-[#e5e5e5]'
                            }`}
                        >
                          {num}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={pageIndex >= totalPages}
                    className="w-12 h-12 flex items-center justify-center rounded-full text-[#1b6936] hover:bg-[#1b6936]/10 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                    aria-label={isRTL ? 'الصفحة السابقة' : 'Next page'}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={isRTL ? 'rotate-180' : ''}
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[380px] shrink-0 flex flex-col gap-10">
          {/* Search */}
          <div className="flex gap-2">
            <div className="relative flex-1 flex items-center bg-white border border-[#e5e5e5] rounded-xl overflow-hidden focus-within:border-[#1b6936] focus-within:ring-2 focus-within:ring-[#1b6936]/20">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={t('news.searchPlaceholder')}
                className="flex-1 py-4 pr-4 pl-2 font-din text-[#0b2c16] placeholder:text-[#0b2c16]/50 outline-none bg-transparent"
                aria-label={t('news.searchPlaceholder')}
              />
            </div>
            <button
              type="button"
              className="shrink-0 w-14 h-14 flex items-center justify-center bg-[#0b2c16] text-white rounded-xl hover:bg-[#1b6936] transition-colors"
              aria-label={t('news.searchPlaceholder')}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>

          {/* Latest Articles */}
          <div className="flex flex-col gap-4">
            <h3 className="font-din font-medium text-2xl text-[#0b2c16]">
              {t('news.latestArticlesTitle')}
            </h3>
            <div className="flex flex-col gap-1">
              {latestForSidebar.length === 0 ? (
                <p className="font-din text-[#0b2c16]/70 py-4">
                  {searchQuery.trim() ? t('news.noResults') : t('news.noArticles')}
                </p>
              ) : (
                latestForSidebar.map((item) => (
                    <LatestArticleItem
                      key={item._id}
                      imageSrc={item.imageSrc}
                      title={item.title ?? ''}
                      date={formatNewsDate(item.publishedAt)}
                      href={`${basePath}/${item._id}`}
                    />
                  ))
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
