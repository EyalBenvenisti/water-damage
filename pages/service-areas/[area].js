import { useRouter } from 'next/router';
import config from '../../config/config';

export default function ServiceArea({ area }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-navy text-white p-4">
        <h1 className="text-3xl font-bold">Water Damage Restoration in {area}</h1>
      </header>

      <section className="mt-6">
        <p className="text-lg text-slate">
          {config.siteName} is proud to offer reliable, professional water damage restoration services in {area}. Our team of experts is equipped to handle all aspects of water damage repair, including water extraction, mold remediation, structural drying, and more.
        </p>
        <p className="mt-4 text-lg text-slate">
          Serving {area} and surrounding areas for over 20 years, we’re dedicated to helping the community restore their homes and businesses quickly and efficiently.
        </p>
        <p className="mt-4 text-lg text-slate">
          Contact us today at <a href={`tel:${config.phone}`} className="text-orange hover:underline">{config.phone}</a> or email us at <a href={`mailto:${config.email}`} className="text-orange hover:underline">{config.email}</a> for a free consultation.
        </p>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  // Generate paths for each service area
  const paths = config.serviceAreas.map((area) => ({
    params: { area: area.toLowerCase().replace(/\s+/g, '-') },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const area = config.serviceAreas.find((a) =>
    a.toLowerCase().replace(/\s+/g, '-') === params.area
  );

  if (!area) {
    return { notFound: true };
  }

  return {
    props: {
      area,
    },
  };
}
