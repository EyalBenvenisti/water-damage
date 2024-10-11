import Head from 'next/head';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

// Utility function to capitalize the page name
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const Meta = ({ title, description, keywords, ogImage, url, type = "website", pageName }) => {
  const router = useRouter();

  // Derive page name from route if not provided
  const currentPage = pageName || capitalize(router.pathname.split('/').pop() || 'Home');
  const fullTitle = `${currentPage} | ${title}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  );
};

// Prop Types for validation
Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  url: PropTypes.string.isRequired,
  type: PropTypes.string,
  pageName: PropTypes.string,
};

Meta.defaultProps = {
  keywords: 'water damage, restoration, emergency services, mold remediation, water extraction',
  ogImage: '/images/default-og-image.jpg',  // Provide a default OG image
};

export default Meta;
