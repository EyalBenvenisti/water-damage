import Meta from '../components/Meta'; // Import the Meta component

export default function Services() {
  return (
    <div>
      <Meta
        title="Our Services | Water Damage Restoration Experts"
        description="Explore our range of water damage restoration services including water extraction, mold remediation, structural drying, and dehumidification."
        url="https://www.example.com/services"
        ogImage="/images/services-og.jpg" // Replace with a relevant image
      />
      <div className="bg-grey min-h-screen p-6">
        <header className="bg-navy text-white p-4">
          <h1 className="text-3xl font-bold">Our Services</h1>
        </header>
        <section className="mt-6">
          <ul className="text-slate">
            <li className="mb-4">✔ Water Extraction</li>
            <li className="mb-4">✔ Mold Remediation</li>
            <li className="mb-4">✔ Structural Drying</li>
            <li className="mb-4">✔ Dehumidification</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
