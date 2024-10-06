
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-slate min-h-screen">
      <header className="bg-navy text-white p-4">
        <h1 className="text-3xl font-bold">Water Damage Restoration Experts</h1>
        <p className="mt-2">Reliable, Family-Owned Services</p>
        <Link href="/contact">
          <a className="mt-4 inline-block bg-orange text-white py-2 px-4 rounded hover:bg-sky">
            Contact Us Now
          </a>
        </Link>
      </header>
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-navy">Our Services</h2>
        <p className="mt-2 text-slate">We provide water extraction, mold remediation, and more.</p>
        <Link href="/services">
          <a className="mt-4 inline-block bg-navy text-white py-2 px-4 rounded hover:bg-sky">
            View Services
          </a>
        </Link>
      </section>
    </div>
  );
}
