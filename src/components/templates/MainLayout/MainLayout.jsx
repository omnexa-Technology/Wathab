import { Navbar } from '../../organisms/Navbar/Navbar';
import { Footer } from '../../organisms/Footer/Footer';
import { getLocaleAndTranslations } from '../../../lib/getLocaleAndTranslations';
import { sanityFetch } from '../../../lib/sanity';
import { SERVICES_NAV_QUERY } from '../../../lib/queries';

export async function MainLayout({ children }) {
  const { locale } = await getLocaleAndTranslations();

  let serviceItems = [];
  try {
    const services = await sanityFetch(SERVICES_NAV_QUERY, { locale });
    if (Array.isArray(services)) {
      serviceItems = services
        .filter((s) => s.slug)
        .map((s) => ({ label: s.title, href: `/services/${s.slug}` }));
    }
  } catch {
    // Fallback to static items if Sanity is unavailable
  }

  return (
    <>
      <header>
        <Navbar serviceItems={serviceItems.length > 0 ? serviceItems : undefined} />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
