// pages/_app.js
import '../styles/global.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import PageLayout from '../components/PageLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Default Meta Tags */}
      <Meta
        title="Water Damage Restoration Experts"
        description="Top-rated water damage restoration services. Family-owned and trusted in Chanhassen."
        url="https://water-damage.vercel.app/"
        // TODO: Fix later ogImage="/images/default-og-image.jpg"
      />

      {/* Navbar at the top */}
      <Navbar />

      {/* PageLayout with dynamic page headers */}
      <PageLayout
        title={pageProps.title || 'Water Damage Experts'}
        subtitle={pageProps.subtitle || ''}
        breadcrumbs={pageProps.breadcrumbs || []}
      >
        <Component {...pageProps} />
      </PageLayout>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
}

export default MyApp;
