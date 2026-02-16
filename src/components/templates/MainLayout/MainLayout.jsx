import { Navbar } from '@/components/organisms/Navbar/Navbar';
import { Footer } from '@/components/organisms/Footer/Footer';
// import { HeadNav } from '@/components/organisms/HeadNav/HeadNav';

export function MainLayout({ children }) {
  return (
    <>
      <header>
        {/* <HeadNav /> */}
        <Navbar />
      </header>
      {/* <main>
        {children}
      </main> */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
