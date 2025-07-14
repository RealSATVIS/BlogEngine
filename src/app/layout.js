import './globals.css';
import NavigationWrapper from '../components/NavigationWrapper';
import Footer from '../components/Footer';

export const metadata = {
  title: 'BlogEngine Pro',
  description: 'Professional Blogging Made Simple',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-secondary-50 text-secondary-900">
        <NavigationWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
