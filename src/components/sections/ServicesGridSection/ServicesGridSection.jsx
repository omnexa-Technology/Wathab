'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ServicesGridCard } from '@/components/molecules/ServicesGridCard/ServicesGridCard';
import {
  FileText,
  Leaf,
  ClipboardList,
  Recycle,
  BarChart3,
  Search,
  FileCheck,
  Globe,
  Users,
  GraduationCap,
} from 'lucide-react';

const CARD_ICONS = [
  FileText,
  Leaf,
  ClipboardList,
  Recycle,
  BarChart3,
  Search,
  FileCheck,
  Globe,
  Users,
  GraduationCap,
];

const CARD_KEYS = [
  'services.grid.cards.card1',
  'services.grid.cards.card2',
  'services.grid.cards.card3',
  'services.grid.cards.card4',
  'services.grid.cards.card5',
  'services.grid.cards.card6',
  'services.grid.cards.card7',
  'services.grid.cards.card8',
  'services.grid.cards.card9',
  'services.grid.cards.card10',
];

/** Cards at 1-based positions 3 and 8 use dark variant (index 2 and 7). */
const DARK_INDICES = [0];

export function ServicesGridSection({ className = '', ...props }) {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  return (
    <section
      className={`flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white ${className}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      {...props}
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center max-w-4xl mx-auto">
          <h2 className="font-din font-bold text-2xl sm:text-3xl lg:text-4xl text-[#1b6936] text-balance">
            {t('services.grid.mainTitle')}
          </h2>
          <p className="font-din font-normal text-base sm:text-lg text-[#222222] leading-relaxed text-pretty">
            {t('services.grid.introDescription')}
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {CARD_KEYS.map((baseKey, index) => (
            <ServicesGridCard
              key={baseKey}
              icon={CARD_ICONS[index]}
              titleKey={`${baseKey}.title`}
              descriptionKey={`${baseKey}.description`}
              variant={DARK_INDICES.includes(index) ? 'dark' : 'light'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
