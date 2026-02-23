import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ServicesNavSidebar } from './ServicesNavSidebar';

/**
 * ServiceSidebar — sticky CTA card shown alongside the main service content.
 * Server component.
 */
export function ServiceSidebar({ t, locale }) {
  const sd = t.serviceDetail?.sidebar || {};

  return (
    <>

      <aside className="flex flex-col gap-6 lg:sticky lg:top-28">
        {/* CTA Card */}
        <div
          className="flex flex-col gap-6 rounded-3xl p-8"
          style={{ background: 'linear-gradient(135deg, #1B6936 0%, #0d4020 100%)' }}
        >
          {/* Decorative accent */}
          <div className="flex items-center gap-1" aria-hidden>
            <div className="w-2 h-2 rounded-full bg-[#86ba41]" />
            <div className="w-12 h-2 rounded-sm bg-[#86ba41]" />
          </div>

          <h3 className="font-din font-bold text-white text-2xl leading-snug">
            {sd.ctaTitle || 'Need a consultation?'}
          </h3>

          <p className="font-din font-normal text-white/80 text-base leading-relaxed">
            {sd.ctaDescription || 'Contact our specialist team for a free consultation.'}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="group flex items-center gap-3 w-fit px-6 h-12 bg-white rounded-[32px] transition-colors hover:bg-[#86ba41]"
          >
            <span className="font-din font-bold text-[#1B6936] group-hover:text-white text-sm transition-colors whitespace-nowrap">
              {sd.ctaButton || 'Contact Us'}
            </span>
            <ArrowLeft className="text-[#1B6936] group-hover:text-white transition-all duration-300 w-4 h-4 group-hover:rotate-45" />
          </Link>
        </div>

        {/* Quick contact info */}
        <div className="rounded-3xl border border-[#eaeaea] p-6 flex flex-col gap-4 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1B6936]/10 flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 10.5 19.79 19.79 0 01.77 1.82 2 2 0 012.75 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l.88-.88a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#1B6936" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-din text-xs text-grey-600">
                {locale === 'ar' ? 'اتصل بنا' : 'Call Us'}
              </span>
              <a href="tel:+966" className="font-din font-medium text-[#1B6936] text-sm hover:underline">
                +966 xx xxx xxxx
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1B6936]/10 flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#1B6936" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" stroke="#1B6936" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-din text-xs text-grey-600">
                {locale === 'ar' ? 'راسلنا' : 'Email Us'}
              </span>
              <a href="mailto:info@wathb.com" className="font-din font-medium text-[#1B6936] text-sm hover:underline">
                info@wathb.com
              </a>
            </div>
          </div>
        </div>
      </aside>

    </>
  );
}
