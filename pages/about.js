import Meta from '../components/Meta';
import PageHeader from '../components/PageHeader';
import Head from 'next/head';
import config from '../config/config';

export default function About() {
  return (
    <div className="bg-white text-navy">
      {/* Meta Tags for SEO */}
      <Meta
        title={`About Us - ${config.siteName}`}
        description={`Learn more about ${config.siteOwner} and our family-owned water damage restoration business, dedicated to helping the ${config.cityState} community with reliable services.`}
      />

      {/* Google Schema Markup */}
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": config.siteName,
            "url": "https://www.example.com/about", // Replace with your actual site URL
            "logo": "https://www.example.com/logo.png", // Update with your logo URL
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": config.phone,
              "contactType": "Customer Service",
              "email": config.email
            },
            "sameAs": [
              config.socialLinks.facebook,
              config.socialLinks.twitter,
              config.socialLinks.instagram
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": config.address,
              "addressLocality": config.cityState.split(',')[0],
              "addressRegion": config.cityState.split(',')[1].trim(),
              "postalCode": config.zipCodeArea,
              "addressCountry": "US"
            },
            "description": `We provide expert water damage restoration services in ${config.cityState} and surrounding areas. Our family-owned business is dedicated to helping the community with trustworthy and reliable service.`,
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "44.8615",  // Replace with actual coordinates
              "longitude": "-93.5305" // Replace with actual coordinates
            }
          })}
        </script>
      </Head>

      {/* Header */}
      <PageHeader
        title="Our Story"
        subtitle="Reliable, Professional, and Compassionate Service for Your Home and Business"
      />

      {/* Story Section */}
      <section>
        <p className="mb-6">
          After years in a successful corporate career, our founder, {config.siteOwner}, realized there was a deeper calling—to make a genuine difference in people’s lives. Leaving the corporate world behind, {config.siteOwner} returned to the roots of community service, establishing {config.siteName} right here in {config.cityState}.
        </p>
        <p className="mb-6">
          Today, we stand as a proud, family-operated business committed to helping families and businesses recover from water damage quickly and efficiently. Our services include water extraction, mold remediation, and full property restoration, ensuring our clients receive the highest level of care during stressful times. Our team brings not only technical expertise but also a deep understanding of the local community’s needs.
        </p>
        <p className="mb-6">
          We believe in building lasting relationships with our clients through integrity, dedication, and exceptional service. Our family values drive us to go above and beyond to restore properties to their original condition, and our reputation for reliability and trustworthiness speaks for itself. Every client we serve becomes part of our extended family, and we’re honored to be the trusted choice for water damage restoration services in {config.cityState}.
        </p>
        <p className="mb-6">
          As a family business, we understand the importance of home, and we’re here to protect yours. Our commitment to quality and care extends beyond restoration—we’re dedicated to making a positive impact in our community, one property at a time.
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-12 bg-orange text-white py-8 text-center">
        <h2 className="text-3xl font-semibold">Ready to Restore Your Home?</h2>
        <p className="text-lg mt-2 mb-6">Contact us for a free consultation and see how we can help you.</p>
        <a href={`tel:${config.phone}`} className="bg-navy hover:bg-sky text-white px-8 py-3 rounded-full inline-block transition duration-300">
          Call Us: {config.phone}
        </a>
      </section>
    </div>
  );
}
