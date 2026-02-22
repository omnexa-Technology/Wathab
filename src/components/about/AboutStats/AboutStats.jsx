'use client';

import { useTranslation } from '../../../hooks/useTranslation';
import { useLanguageStore } from '../../../store/useLanguageStore';
import { Container } from '../../../components/atoms/Container/Container';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';
import { Award, Briefcase, FileCheck, Users, Building2, UserCheck } from 'lucide-react';

export function AboutStats() {
  const { t } = useTranslation();
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';

  const title = t('about.stats.title');

  const stats = [
    {
      icon: Briefcase,
      value: t('about.stats.items.projects.value'),
      label: t('about.stats.items.projects.label'),
      color: '#86ba41',
    },
    {
      icon: FileCheck,
      value: t('about.stats.items.studies.value'),
      label: t('about.stats.items.studies.label'),
      color: '#86ba41',
    },
    {
      icon: Award,
      value: t('about.stats.items.permits.value'),
      label: t('about.stats.items.permits.label'),
      color: '#86ba41',
    },
    {
      icon: Users,
      value: t('about.stats.items.clients.value'),
      label: t('about.stats.items.clients.label'),
      color: '#86ba41',
    },
    {
      icon: Building2,
      value: t('about.stats.items.sectors.value'),
      label: t('about.stats.items.sectors.label'),
      color: '#86ba41',
    },
    {
      icon: UserCheck,
      value: t('about.stats.items.experts.value'),
      label: t('about.stats.items.experts.label'),
      color: '#86ba41',
    },
  ];

  return (
    <section
      className="py-24 bg-white"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container>
        {/* Section Title */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading
            level="h2"
            className="text-[#0b2c16] text-3xl lg:text-4xl font-bold"
          >
            {title}
          </Heading>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 ${isRTL ? 'text-right' : 'text-left'
                  }`}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                </div>

                {/* Value */}
                <div className="mb-3">
                  <span
                    className="text-4xl lg:text-5xl font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}+
                  </span>
                </div>

                {/* Label */}
                <Paragraph className="text-gray-700 text-lg font-medium text-center">
                  {stat.label}
                </Paragraph>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
