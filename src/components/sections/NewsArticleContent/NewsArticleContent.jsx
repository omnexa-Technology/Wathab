'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { SocialIconButton } from '../../atoms/SocialIconButton/SocialIconButton';

const LATEST_SIDEBAR_COUNT = 7;
const GREEN_BG = 'bg-[#1b6936]';

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

function ArticleBody({ content }) {
  if (!content || !String(content).trim()) return null;
  const paragraphs = String(content)
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return (
    <div className="flex flex-col gap-6">
      {paragraphs.map((text, i) => (
        <p
          key={i}
          className="font-din font-normal text-xl leading-[40px] text-[#0b2c16] text-right"
        >
          {text}
        </p>
      ))}
    </div>
  );
}

export function NewsArticleContent({
  title,
  date,
  excerpt,
  content,
  imageSrc,
  imageAlt = '',
  locale,
  latestArticles = [],
  currentId,
  shareUrl,
}) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';
  const basePath = `/${locale}/news`;

  const latest = latestArticles
    .filter((a) => a._id !== currentId)
    .slice(0, LATEST_SIDEBAR_COUNT);

  const url = shareUrl || (typeof window !== 'undefined' ? window.location.href : '');

  const socialLinks = [
    { icon: 'twitter', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}` },
    { icon: 'instagram', href: 'https://instagram.com' },
    { icon: 'whatsapp', href: `https://wa.me/?text=${encodeURIComponent(url)}` },
    { icon: 'tiktok', href: 'https://tiktok.com' },
    { icon: 'facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
  ];

  return (
    <section
      className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Sidebar - Latest Posts (left in RTL) */}
        <aside className="w-full lg:w-[380px] shrink-0 flex flex-col gap-6 order-1 lg:order-1">
          <h3 className="font-din font-medium text-2xl text-[#0b2c16] text-right">
            {t('news.latestArticlesTitle')}
          </h3>
          <div className="flex flex-col gap-1">
            {latest.length === 0 ? (
              <p className="font-din text-[#0b2c16]/70 py-4 text-right">
                {t('news.noArticles')}
              </p>
            ) : (
              latest.map((item) => (
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
        </aside>
        {/* Main article column (right in RTL) */}
        <div className="flex-1 min-w-0 order-2 lg:order-2">
          <article className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <time
                className="font-din text-lg text-[#1b6936]"
                dateTime={date}
              >
                {formatNewsDate(date)}
              </time>
              <h1 className="font-din font-medium text-3xl sm:text-4xl lg:text-[40px] leading-tight text-[#0b2c16] text-right">
                {title}
              </h1>
            </div>

            {excerpt && (
              <p className="font-din font-normal text-xl leading-[40px] text-[#0b2c16]/90 text-right">
                {excerpt}
              </p>
            )}

            {imageSrc && (
              <div className="relative w-full aspect-[1200/630] max-h-[500px] rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
              </div>
            )}

            <ArticleBody content={content} />

            {/* Share on */}
            <div className="flex flex-col gap-4 pt-6 border-t border-[#e5e5e5]">
              <h3 className="font-din font-medium text-2xl text-[#0b2c16] text-right">
                {t('news.shareOn')}
              </h3>
              <div className="flex flex-wrap items-center gap-3 justify-end">
                {socialLinks.map(({ icon, href }) => (
                  <SocialIconButton
                    key={icon}
                    icon={icon}
                    bgColor={GREEN_BG}
                    href={href}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>


      </div>
    </section>
  );
}
