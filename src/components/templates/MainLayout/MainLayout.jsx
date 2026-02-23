import { Navbar } from '../../organisms/Navbar/Navbar';
import { Footer } from '../../organisms/Footer/Footer';
// import { HeadNav } from '@/components/organisms/HeadNav/HeadNav';

export function MainLayout({ children }) {
  return (
    <>
      <header>
        {/* <HeadNav /> */}
        <Navbar />
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
