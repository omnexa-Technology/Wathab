import '../globals.css';

export const metadata = {
  title: 'Login',
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
