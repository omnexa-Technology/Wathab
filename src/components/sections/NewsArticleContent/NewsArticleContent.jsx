'use client';

/**
 * NewsArticleContent — News details page layout.
 *
 * Figma node: 3885:12122
 * Layout  : 2-column RTL  [main content flex-1] | [sidebar 440px]
 * Sidebar : #F8F8F9 bg, rounded-3xl, latest posts list
 * Share   : #fdfdfd card, rounded-3xl, social icons with Figma corner shape
 */

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { NewsContent } from '../../news/NewsContent';

const LATEST_SIDEBAR_COUNT = 7;

// ─── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso, locale = 'ar') {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
}

// ─── Calendar icon (matches Figma date icon) ───────────────────────────────────

function CalendarIcon({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2V6M8 2V6M3 10H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Sidebar: latest article item ─────────────────────────────────────────────
// Figma: image 96×96 rounded-lg on the right (RTL start),
//        date (14px grey-500) + title (20px grey-800) on the left

function LatestArticleItem({ imageSrc, title, date, href, locale }) {
  const isRTL = locale === 'ar';
  return (
    <Link
      href={href}
      className="group flex gap-3 items-center w-full hover:bg-[#0b2c16]/5 transition-colors rounded-xl p-2"
    >
      {/* Text (flex-1, text on the opposite side from the image) */}
      <div className={`flex flex-1 min-w-0 flex-col gap-4  justify-start`}>
        {/* Date row */}
        <div className={`flex items-center gap-2 flex-row-reverse justify-start`}>
          <CalendarIcon size={24} className="text-[#1b6936] shrink-0" />
          <span className="font-din text-[14px] leading-[32px] text-[#747474]">
            {date}
          </span>
        </div>
        {/* Title */}
        <p className="font-din text-[#222] text-[20px] leading-normal line-clamp-2 group-hover:text-[#1b6936] transition-colors w-full text-right">
          {title}
        </p>
      </div>

      {/* Thumbnail — always on the start side (right in RTL) */}
      <div
        className={`relative shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-200 ${isRTL ? 'order-first' : 'order-last'}`}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
    </Link>
  );
}

// ─── Social icon button (Figma: rounded-bl-[8px] rounded-tr-[8px] 48×48) ──────

const SOCIAL_ICONS = {
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.23H2.766l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
};

/**
 * Social share icon — Figma shape: rounded-bl-[8px] + rounded-tr-[8px] only,
 * 48×48, dark (#1f1e17) default, green gradient for the active/Facebook icon.
 */
function SocialShareButton({ icon, href, isActive = false }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full text-[#1B6936] hover:text-white transition-colors bg-[#E8F0EB] hover:bg-[#1B6936]"
      aria-label={icon}
    >
      {SOCIAL_ICONS[icon]}
    </Link>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

export function NewsArticleContent({
  title,
  date,
  excerpt,
  content,
  imageSrc,
  imageAlt = '',
  locale = 'ar',
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
    { icon: 'facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, isActive: true },
  ];

  return (
    <section
      className="w-full  mx-auto px-4 sm:px-6 lg:px-12 xl:px-10  py-16 lg:py-24"
      dir={isRTL ? 'ltr' : 'rtl'}
    >
      {/* ── Page grid: [sidebar 440px] | [main content flex-1] ── */}
      <div className="flex flex-col lg:flex-row gap-16">

        {/* ── Sidebar: Latest Posts ──────────────────────────────────────
              Figma: bg #F8F8F9, rounded 24px, w-[440px], padding 24px 48px
              Items: image 96×96 rounded-lg (start side) + date + title
          ─────────────────────────────────────────────────────────────── */}
        <aside className="w-full lg:w-[440px] shrink-0 order-2 lg:order-1 lg:sticky lg:top-28 lg:self-start">
          <div className="flex flex-col gap-8 bg-[#f8f8f9] rounded-3xl px-6 py-12">
            {/* Sidebar title */}
            <p className={`font-din font-bold text-[24px] leading-normal text-[#0b2c16] ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('news.latestArticlesTitle')}
            </p>

            {/* Items */}
            <div className="flex flex-col gap-8">
              {latest.length === 0 ? (
                <p className={`font-din text-[#0b2c16]/60 text-base ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('news.noArticles')}
                </p>
              ) : (
                latest.map((item) => (
                  <LatestArticleItem
                    key={item._id}
                    imageSrc={item.imageSrc}
                    title={item.title ?? ''}
                    date={formatDate(item.publishedAt, locale)}
                    href={`${basePath}/${item._id}`}
                    locale={locale}
                  />
                ))
              )}
            </div>
          </div>
        </aside>

        {/* ── Main article ───────────────────────────────────────────────
              Figma: hero image h-[680px] rounded-3xl,
                     logo + date row below image,
                     content blocks (NewsContent),
                     share bar at bottom
          ─────────────────────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0 order-1 lg:order-2 flex flex-col gap-16">

          {/* Hero image — Figma: h-[680px] rounded-3xl */}
          {imageSrc && (
            <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[680px] rounded-3xl overflow-hidden bg-gray-200 shrink-0">
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </div>
          )}

          {/* Date row — Figma: calendar icon (32px) + date text (24px Tajawal grey-600) */}
          <div className={`flex items-center gap-3 flex-row-reverse justify-start`}>
            <CalendarIcon size={32} className="text-[#1b6936] shrink-0" />
            <time
              dateTime={date}
              className="font-din text-[24px] leading-normal text-grey-600"
            >
              {formatDate(date, locale)}
            </time>
          <div className="flex flex-col me-7">
            <Image src='/assets/icons/logo/logo-light.svg' alt='logo' width={200} height={100} />
          </div>
          </div>

          {/* Article body */}
          <article className="flex flex-col gap-16">
            {/* Title — Figma: 32px bold green #1b6936 lh-56px */}
            <h1 className={`font-din font-bold text-[#1b6936] text-[28px] sm:text-[32px] leading-[56px] ${isRTL ? 'text-right' : 'text-left'}`}>
              {title}
            </h1>

            {/* Excerpt — Figma: 32px regular grey #595959 lh-64px */}
            {excerpt && (
              <p className={`font-din font-normal text-grey-600 text-[24px] sm:text-[32px] leading-[48px] sm:leading-[64px] ${isRTL ? 'text-right' : 'text-left'}`}>
                {excerpt}
              </p>
            )}

            {/* Portable Text content blocks */}
            <NewsContent content={content} isRTL={isRTL} />
          </article>

          {/* ── Share bar ─────────────────────────────────────────────────
                Figma: bg #fdfdfd, rounded-3xl, px-8 py-6,
                       social icons (dark bg, Figma corner shape) on start side,
                       "شارك علي" label on end side.
            ───────────────────────────────────────────────────────────── */}
          <div className={`flex items-center justify-between bg-[#fdfdfd] rounded-3xl px-8 py-6 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Label — on the end side (left in RTL) */}
            <p className="font-din font-medium text-[24px] leading-[48px] text-[#303030]">
              {/* {t('news.shareOn')} */}
              شارك على
            </p>


            {/* Icons — on the start side (right in RTL) */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon, href, isActive }) => (
                <SocialShareButton
                  key={icon}
                  icon={icon}
                  href={href}
                  isActive={isActive}
                />
              ))}
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
