import '../styles/global.css';  // Ensure global CSS is imported
import Navbar from '../components/Navbar';  // Import the Navbar component
import Footer from '../components/Footer';  // Import the Footer component
import Meta from '../components/Meta';  // Import the Meta component

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Default Meta Tags - can be overridden by individual pages */}
      <Meta
        title="Water Damage Restoration Experts"
        description="Top-rated water damage restoration services. Family-owned and trusted in Chanhassen."
        url="https://www.example.com"
        // TODO: Fix later ogImage="/images/default-og-image.jpg"  {/* Default OG image */}
      />

      <Navbar />  {/* Navigation bar at the top */}
      <Component {...pageProps} />  {/* Main page content */}
      <Footer />  {/* Footer at the bottom */}
    </>
  );
}

export default MyApp;
