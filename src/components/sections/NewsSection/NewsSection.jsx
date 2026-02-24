'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ArticleCard } from '../../molecules/ArticleCard/ArticleCard';
import Link from 'next/link';
import { sanityClient, urlFor } from '../../../lib/sanity';
import { NEWS_LIST_QUERY } from '../../../lib/queries';

const FALLBACK_IMAGE = '/assets/images/pages/Home/news1.webp';

function formatDate(iso) {
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

function mapSanityArticle(item, index, language) {
  const slug = item.slug ?? item._id;
  const imageSrc = item.mainImage?.asset?.url
    ? urlFor(item.mainImage).width(800).height(580).url()
    : FALLBACK_IMAGE;
  return {
    id: `article-${index}`,
    imageSrc,
    title: item.title ?? '',
    date: formatDate(item.publishedAt),
    excerpt: item.excerpt ?? '',
    href: `/${language}/news/${slug}`,
  };
}

export function NewsSection({ articles: articlesProp, className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const [sanityArticles, setSanityArticles] = useState(
    articlesProp?.length > 0
      ? articlesProp.map((a, i) => ({ id: `article-${i}`, ...a }))
      : []
  );
  const [isLoading, setIsLoading] = useState(!articlesProp?.length);

  useEffect(() => {
    if (articlesProp?.length > 0) return;
    let cancelled = false;
    sanityClient
      .fetch(NEWS_LIST_QUERY, { limit: 10})
      .then((data) => {
        if (cancelled) return;
        // #region agent log
        fetch('/api/debug-log',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'bc4867',location:'NewsSection.jsx:fetch.then',message:'Raw Sanity data',data:{isArray:Array.isArray(data),count:Array.isArray(data)?data.length:null,firstRaw:Array.isArray(data)?{_id:data[0]?._id,title:data[0]?.title,slug:data[0]?.slug,hasMainImage:!!data[0]?.mainImage,assetUrl:data[0]?.mainImage?.asset?.url??null,excerpt:data[0]?.excerpt??null,publishedAt:data[0]?.publishedAt??null}:data},timestamp:Date.now(),hypothesisId:'H-A H-C'})}).catch(()=>{});
        // #endregion
        const mapped = Array.isArray(data)
          ? data.map((item, i) => mapSanityArticle(item, i, language))
          : [];
        // #region agent log
        fetch('/api/debug-log',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'bc4867',location:'NewsSection.jsx:fetch.mapped',message:'Mapped articles',data:{count:mapped.length,firstMapped:mapped[0]??null},timestamp:Date.now(),hypothesisId:'H-A H-C'})}).catch(()=>{});
        // #endregion
        setSanityArticles(mapped);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => { cancelled = true; };
  }, [articlesProp, language]);

  const articlesData = sanityArticles;

  const carouselOptions = useMemo(
    () => ({ align: 'start', containScroll: 'trimSnaps', loop: false }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    const raf = requestAnimationFrame(() => onSelect(emblaApi));
    return () => {
      cancelAnimationFrame(raf);
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    emblaApi?.reInit();
  }, [articlesData, emblaApi]);


  useEffect(() => {
    if (!emblaApi || articlesData.length === 0) return;
    const viewport = emblaApi.rootNode();
    const firstSlide = viewport?.querySelector('.embla-slide-debug');
    // #region agent log
    fetch('/api/debug-log',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'bc4867',location:'NewsSection.jsx:dom-measure',message:'DOM measurement after embla ready',data:{viewportH:viewport?.offsetHeight??null,viewportW:viewport?.offsetWidth??null,firstSlideH:firstSlide?.offsetHeight??null,firstSlideDisplay:firstSlide?getComputedStyle(firstSlide).display:null,firstChildTag:firstSlide?.firstElementChild?.tagName??null,firstChildH:firstSlide?.firstElementChild?.offsetHeight??null,firstChildDisplay:firstSlide?.firstElementChild?getComputedStyle(firstSlide.firstElementChild).display:null},timestamp:Date.now(),hypothesisId:'H-B'})}).catch(()=>{});
    // #endregion
  }, [emblaApi, articlesData]);

  const scrollSnaps = emblaApi ? emblaApi.scrollSnapList() : articlesData.map((_, i) => i);

  useEffect(() => {
    // #region agent log
    fetch('/api/debug-log',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'bc4867',location:'NewsSection.jsx:render-effect',message:'Post-render state',data:{isLoading,articlesCount:articlesData.length,firstArticle:articlesData[0]??null,emblaReady:!!emblaApi,scrollSnapsCount:scrollSnaps.length,articlesPropLength:articlesProp?.length??null},timestamp:Date.now(),hypothesisId:'H-A H-B H-C'})}).catch(()=>{});
    // #endregion
  });

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
      <div className="flex flex-col gap-8 w-full max-w-[1680px] mx-auto min-w-0 sm:gap-10 md:gap-12 lg:gap-14">

        {/* Header */}
        <div className="flex items-center justify-between w-full min-w-0 flex-wrap gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1 h-1.5 shrink-0 sm:h-2" aria-hidden>
              <div className="w-1.5 h-1.5 rounded-full bg-[#86ba41] sm:w-2 sm:h-2" />
              <div className="w-12 h-1.5 rounded-sm bg-[#86ba41] sm:w-16 sm:h-2" />
            </div>
            <h2 className="font-din font-medium text-[#0b2c16]
              text-2xl leading-tight
              sm:text-3xl
              md:text-4xl md:leading-snug
              lg:text-5xl lg:leading-tight
              xl:text-[64px] xl:leading-[108px]">
              {t('news.sectionTitle')}
            </h2>
          </div>

          <Link
            href={`/${language}/news`}
            className="flex items-center gap-2 text-[#1b6936] hover:opacity-80 transition-opacity"
          >
            <span className="font-din font-medium text-xl leading-tight sm:text-2xl md:text-3xl lg:text-[32px] lg:leading-[56px]">
              اكتشف المزيد
            </span>
            <div className="w-6 h-6 flex items-center justify-center sm:w-8 sm:h-8" aria-hidden>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6667 16H5.33337M5.33337 16L16 26.6667M5.33337 16L16 5.33337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Loading skeletons */}
        {isLoading && (
          <div className="flex gap-4 sm:gap-6 w-full">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="shrink-0 basis-[90%] sm:basis-[80%] md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] h-[580px] rounded-2xl bg-[#e8f0eb] animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Carousel */}
        {!isLoading && articlesData.length > 0 && (
          <div className="overflow-hidden w-full min-w-0" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {articlesData.map((article, idx) => (
                <div
                  key={article.id}
                  className="embla-slide-debug shrink-0 grow-0 flex flex-col basis-[90%] min-w-0 sm:basis-[80%] md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
                  ref={(el) => {
                    if (el && idx === 0) {
                      // #region agent log
                      const child = el.firstElementChild;
                      fetch('/api/debug-log',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'bc4867',location:'NewsSection.jsx:slide-0-ref',message:'First slide mounted POST-FIX',data:{slideHeight:el.offsetHeight,slideWidth:el.offsetWidth,childTag:child?.tagName??null,childDisplay:child?getComputedStyle(child).display:null,childHeight:child?.offsetHeight??null,articleData:{id:article.id,title:article.title,imageSrc:article.imageSrc,href:article.href}},timestamp:Date.now(),hypothesisId:'H-B'})}).catch(()=>{});
                      // #endregion
                    }
                  }}
                >
                  <ArticleCard
                    imageSrc={article.imageSrc}
                    title={article.title}
                    date={article.date}
                    excerpt={article.excerpt}
                    href={article.href}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No results */}
        {!isLoading && articlesData.length === 0 && (
          <p className="text-center text-[#595959] font-din py-12">
            لا توجد أخبار متاحة حالياً
          </p>
        )}

        

      </div>
    </section>
  );
}
