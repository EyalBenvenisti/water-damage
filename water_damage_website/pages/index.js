import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-navy text-white h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Water Damage Restoration Experts</h1>
          <p className="text-lg mb-6">
            Reliable, Family-Owned Services to Help with Water Damage, Mold Remediation, and More.
          </p>
          <Link href="/contact">
            <button className="bg-orange text-white px-8 py-3 rounded-full hover:bg-sky transition duration-300">
              Contact Us Now
            </button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-grey text-center">
        <h2 className="text-3xl font-bold mb-8 text-navy">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-navy">Water Extraction</h3>
            <p className="text-slate">We remove excess water quickly and efficiently to minimize damage.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-navy">Mold Remediation</h3>
            <p className="text-slate">Eliminate mold and prevent future growth to protect your home.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-navy">Structural Drying</h3>
            <p className="text-slate">Thorough drying to prevent long-term structural damage.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-navy">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-slate">
          After a successful career at M3, our founder decided to create a family-owned business dedicated to helping homeowners recover from water damage. Our commitment to quality and customer service is unmatched.
        </p>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-grey text-center">
        <h2 className="text-3xl font-bold mb-8 text-navy">Our Location</h2>
        <div className="h-64 bg-white shadow-lg mx-auto w-full max-w-3xl">
          {/* Add Google Maps or image here */}
          <div className="flex items-center justify-center h-full">
            <p className="text-slate">Map Placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
}
