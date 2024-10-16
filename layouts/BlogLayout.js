// layouts/BlogLayout.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-3xl py-6 px-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
