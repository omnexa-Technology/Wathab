import { headers } from 'next/headers';
import ar from '@/locales/ar';
import en from '@/locales/en';

const m = { ar, en };

export async function generateMetadata() {
  const h = await headers();
  const locale = h.get('x-next-locale') || 'ar';
  const t = m[locale] || m.ar;
  return { title: `${t.contact.title} - Wathb`, description: t.contact.description };
}

export default async function ContactPage() {
  const h = await headers();
  const locale = h.get('x-next-locale') || 'ar';
  const t = m[locale] || m.ar;
  return (
    <div className='h-[100vh] w-full'>
      <h1 className='m-24 text-8xl font-bold'>{t.contact.title}</h1>
      <p className='m-24 text-3xl font-medium'>{t.contact.description}</p>
    </div>
  );
}
