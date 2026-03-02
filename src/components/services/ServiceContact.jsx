'use client';

import { useState } from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * ServiceContact — contact form accepting service name as a hidden field.
 * Prepared for future API integration.
 * Client component.
 */
export function ServiceContact({ serviceName, t }) {
  const language = useLanguageStore((s) => s.language);
  const isRTL = language === 'ar';
  const ct = t?.serviceDetail?.contact || {};

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const data = Object.fromEntries(new FormData(e.target));

    try {
      // Future API integration point
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // placeholder
      setStatus('success');
      e.target.reset();
    } catch {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className="w-full rounded-3xl bg-[#f8faf9] p-6 sm:p-8 lg:p-10"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="w-full">
        <div className="grid grid-cols-1 gap-10  items-start">

          {/* ── Left: Section header ─────────────────────────── */}
          <div className="flex flex-col gap-6 lg:pt-4">
            {/* Accent */}
            <div className="flex items-center gap-2" aria-hidden>
              <div className="w-1.5 h-1.5 rounded-full bg-[#1B6936]" />
              <div className="w-10 h-1.5 rounded-sm bg-[#1B6936]" />
            </div>

            <h2 className="font-din font-bold text-[#0b2c16] text-3xl leading-snug lg:text-[48px] lg:leading-[72px]">
              {ct.title || (isRTL ? 'تواصل معنا' : 'Contact Us')}
            </h2>

            <p className="font-din font-normal text-grey-600 text-lg leading-9 lg:text-2xl lg:leading-[48px]">
              {ct.subtitle || (isRTL ? 'أرسل لنا رسالة وسيتواصل معك أحد متخصصينا في أقرب وقت.' : 'Send us a message and one of our specialists will get in touch with you soon.')}
            </p>

            {/* Service badge */}
            {/* {serviceName && (
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1B6936]/10 rounded-full w-fit">
                <div className="w-2 h-2 rounded-full bg-[#1B6936]" aria-hidden />
                <span className="font-din font-medium text-[#1B6936] text-sm">
                  {ct.service || (isRTL ? 'الخدمة المطلوبة' : 'Requested Service')}: {serviceName}
                </span>
              </div>
            )} */}
          </div>

          {/* ── Right: Form ──────────────────────────────────── */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-white rounded-3xl p-8 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)]"
            noValidate
          >
            <input type="hidden" name="service" value={serviceName || ''} />

            {/* Name + Phone row */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="font-din font-medium text-[#303030] text-sm">
                  {ct.name || (isRTL ? 'الاسم الكامل' : 'Full Name')}
                  <span className="text-red-500 me-1">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  disabled={isLoading}
                  placeholder={ct.namePlaceholder || (isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name')}
                  className="h-12 w-full rounded-xl border border-[#eaeaea] bg-[#f8faf9] px-4 font-din text-sm text-[#303030] placeholder:text-grey-600/60 outline-none transition-colors focus:border-[#1B6936] focus:ring-2 focus:ring-[#1B6936]/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-phone" className="font-din font-medium text-[#303030] text-sm">
                  {ct.phone || (isRTL ? 'رقم الهاتف' : 'Phone Number')}
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  disabled={isLoading}
                  placeholder={ct.phonePlaceholder || (isRTL ? '05xxxxxxxx' : '+966 5x xxx xxxx')}
                  className="h-12 w-full rounded-xl border border-[#eaeaea] bg-[#f8faf9] px-4 font-din text-sm text-[#303030] placeholder:text-grey-600/60 outline-none transition-colors focus:border-[#1B6936] focus:ring-2 focus:ring-[#1B6936]/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="font-din font-medium text-[#303030] text-sm">
                {ct.email || (isRTL ? 'البريد الإلكتروني' : 'Email Address')}
                <span className="text-red-500 me-1">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                disabled={isLoading}
                placeholder={ct.emailPlaceholder || 'example@email.com'}
                className="h-12 w-full rounded-xl border border-[#eaeaea] bg-[#f8faf9] px-4 font-din text-sm text-[#303030] placeholder:text-grey-600/60 outline-none transition-colors focus:border-[#1B6936] focus:ring-2 focus:ring-[#1B6936]/20 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="font-din font-medium text-[#303030] text-sm">
                {ct.message || (isRTL ? 'رسالتك' : 'Your Message')}
                <span className="text-red-500 me-1">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                disabled={isLoading}
                placeholder={ct.messagePlaceholder || (isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...')}
                className="w-full rounded-xl border border-[#eaeaea] bg-[#f8faf9] px-4 py-3 font-din text-sm text-[#303030] placeholder:text-grey-600/60 outline-none transition-colors focus:border-[#1B6936] focus:ring-2 focus:ring-[#1B6936]/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              />
            </div>

            {/* Status feedback */}
            {status === 'success' && (
              <div className="flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-200 rounded-xl text-green-700">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <p className="font-din text-sm">{ct.success || (isRTL ? 'تم إرسال رسالتك بنجاح، سنتواصل معك قريباً.' : 'Your message was sent successfully.')}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-700">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p className="font-din text-sm">{ct.error || (isRTL ? 'حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.')}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center gap-3 h-14 w-full rounded-2xl bg-[#1B6936] text-white font-din font-bold text-base transition-colors hover:bg-[#0d4020] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  <span>{isRTL ? 'جارٍ الإرسال...' : 'Sending...'}</span>
                </>
              ) : (
                ct.submit || (isRTL ? 'إرسال الرسالة' : 'Send Message')
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
