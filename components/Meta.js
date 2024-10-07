import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = ({ title, description, keywords, ogImage, url, type = "website" }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
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
};

Meta.defaultProps = {
  keywords: 'water damage, restoration, emergency services, mold remediation, water extraction',
  ogImage: '/images/default-og-image.jpg',  // Provide a default OG image
};

export default Meta;