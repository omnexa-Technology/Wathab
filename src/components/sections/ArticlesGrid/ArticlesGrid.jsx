'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { ArticleGridCard } from '../../../components/molecules/ArticleGridCard';


export function ArticlesGrid({ className = '' }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  // Article data configuration
  const articles = [
    {
      id: 'article-1',
      imageSrc: '/assets/images/Articels/articlesGrid/article1.webp',
      iconSrc: '/assets/icons/ui/article/Frame (1).svg',
      titleKey: 'articles.grid.article1.title',
      projectKey: 'articles.grid.article1.project',
      achievementKey: 'articles.grid.article1.achievement',
      imageLeft: true,
    },
    {
      id: 'article-2',
      imageSrc: '/assets/images/Articels/articlesGrid/article2.webp',
      iconSrc: '/assets/icons/ui/article/Frame (2).svg',
      titleKey: 'articles.grid.article2.title',
      projectKey: 'articles.grid.article2.project',
      achievementKey: 'articles.grid.article2.achievement',
      imageLeft: false,
    },
    {
      id: 'article-3',
      imageSrc: '/assets/images/Articels/articlesGrid/article3.webp',
      iconSrc: '/assets/icons/ui/article/Frame (3).svg',
      titleKey: 'articles.grid.article3.title',
      projectKey: 'articles.grid.article3.project',
      achievementKey: 'articles.grid.article3.achievement',
      imageLeft: true,
    },
    {
      id: 'article-4',
      imageSrc: '/assets/images/Articels/articlesGrid/article4.webp',
      iconSrc: '/assets/icons/ui/article/Frame (4).svg',
      titleKey: 'articles.grid.article4.title',
      projectKey: 'articles.grid.article4.project',
      achievementKey: 'articles.grid.article4.achievement',
      imageLeft: false,
    },
  ];

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`bg-white py-24 px-8 lg:px-[120px] ${className}`}
    >
      <div className="w-full max-w-[1680px] mx-auto flex flex-col gap-24">
        {articles.map((article) => (
          <ArticleGridCard
            key={article.id}
            imageSrc={article.imageSrc}
            iconSrc={article.iconSrc}
            title={t(article.titleKey)}
            project={t(article.projectKey)}
            achievement={t(article.achievementKey)}
            projectLabel={t('articles.grid.projectLabel')}
            achievementLabel={t('articles.grid.achievementLabel')}
            imageLeft={article.imageLeft}
          />
        ))}
      </div>
    </section>
  );
}
