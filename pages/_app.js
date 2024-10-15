import '../styles/global.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Default Meta Tags - can be overridden by individual pages */}
      <Meta
        title="Water Damage Restoration Experts"
        description="Top-rated water damage restoration services. Family-owned and trusted in Chanhassen."
        url="https://water-damage.vercel.app/"
        // TODO: Fix later ogImage="/images/default-og-image.jpg"  {/* Default OG image */}
      />

      <Navbar />  {/* Navigation bar at the top */}
      <Component {...pageProps} />  {/* Main page content */}
      <Footer />  {/* Footer at the bottom */}
    </>
  );
}

export default MyApp;
