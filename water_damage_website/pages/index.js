import config from '../config'; // Import config for dynamic values
import Meta from '../components/Meta';


// page loca
import Link from 'next/link';
import { Icon } from '@iconify/react';
import bbbIcon from '@iconify-icons/mdi/badge-account-outline';
import homeAdvisorIcon from '@iconify-icons/mdi/home-circle';
import googleIcon from '@iconify-icons/mdi/google';
import waterIcon from '@iconify-icons/mdi/water';
import germIcon from '@iconify-icons/mdi/germ'; // Alternative icon for mold
import dryingIcon from '@iconify-icons/mdi/fan';
import waterproofingIcon from '@iconify-icons/mdi/water-well';
import restorationIcon from '@iconify-icons/mdi/home-outline'; // Updated icon for restoration
import emergencyIcon from '@iconify-icons/mdi/alarm-light';
import licensedIcon from '@iconify-icons/mdi/license';
import ecoFriendlyIcon from '@iconify-icons/mdi/leaf';
import satisfactionIcon from '@iconify-icons/mdi/thumb-up';

export default function Home() {
  return (
    <div className="bg-white">

    <Meta
      title="Water Damage Restoration in Chanhassen | Family-Owned"
      description="Get professional water damage restoration services in Chanhassen. Family-owned and trusted for over 20 years. Call for a free quote now!"
      url="https://www.example.com"
    />

      {/* Hero Section */}
      <section className="relative bg-navy h-screen text-white flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-4">Protect Your Home with Expert Water Damage Services</h1>
          <p className="text-xl mb-6">Family-Owned, Customer-Trusted for Over 20 Years</p>

          {/* Call-to-Action */}
          <Link href={`tel:${config.phone}`} passHref>
            <button className="bg-orange text-white px-8 py-4 rounded-full hover:bg-sky transition duration-300">
              Call Now {config.phone}
            </button>
          </Link>

          {/* Social Proof - Logos/Icons */}
          <div className="flex justify-center mt-8 space-x-6">
            <Icon icon={bbbIcon} className="h-12" />
            <Icon icon={homeAdvisorIcon} className="h-12" />
            <Icon icon={googleIcon} className="h-12" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">A Passion for Helping Homeowners</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-xl max-w-md mx-auto">
                After leaving a successful corporate job, our founder started this family-owned business to help families restore their homes after disasters. We've been helping the community for over 20 years, committed to quality and customer satisfaction.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/images/founder-photo.jpg" alt="Founder" className="rounded-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Service Cards */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Icon icon={waterIcon} className="h-20 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Emergency Water Extraction</h3>
              <p className="text-slate mb-4">Quick removal of excess water to minimize damage.</p>
              <Link href="/services/emergency-water-extraction" passHref>
                <span className="text-sky hover:text-orange">Learn More</span>
              </Link>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Icon icon={germIcon} className="h-20 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Mold Removal and Remediation</h3>
              <p className="text-slate mb-4">Eliminate mold and prevent its return.</p>
              <Link href="/services/mold-removal" passHref>
                <span className="text-sky hover:text-orange">Learn More</span>
              </Link>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Icon icon={dryingIcon} className="h-20 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Structural Drying and Dehumidification</h3>
              <p className="text-slate mb-4">Thorough drying to prevent long-term damage.</p>
              <Link href="/services/structural-drying" passHref>
                <span className="text-sky hover:text-orange">Learn More</span>
              </Link>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Icon icon={waterproofingIcon} className="h-20 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Basement Waterproofing</h3>
              <p className="text-slate mb-4">Protect your basement from future water damage.</p>
              <Link href="/services/basement-waterproofing" passHref>
                <span className="text-sky hover:text-orange">Learn More</span>
              </Link>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Icon icon={restorationIcon} className="h-20 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Full Restoration Services</h3>
              <p className="text-slate mb-4">Comprehensive restoration to return your property to normal.</p>
              <Link href="/services/full-restoration" passHref>
                <span className="text-sky hover:text-orange">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Customers Say It Best</h2>

          {/* Testimonials Carousel/Slider */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <p className="text-xl mb-4">"They were incredibly professional and helped us after a major flood. Highly recommend!"</p>
              <p className="text-sky font-bold">– John D.</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>

            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <p className="text-xl mb-4">"Quick response, excellent work! They saved our home from serious water damage."</p>
              <p className="text-sky font-bold">– Sarah W.</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>

            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <p className="text-xl mb-4">"Best service I've experienced in years. They handled everything with care."</p>
              <p className="text-sky font-bold">– Emily R.</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          </div>

          {/* Overall Rating */}
          <div className="mt-8">
            <p className="text-2xl">Overall Rating: <span className="font-bold">4.8/5</span> based on 250+ reviews</p>
          </div>
        </div>
      </section>

      {/* Trust & Business Values Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Icon icon={emergencyIcon} className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">24/7 Emergency Services</h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Icon icon={licensedIcon} className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Licensed & Insured</h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Icon icon={ecoFriendlyIcon} className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Environmentally Friendly Solutions</h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Icon icon={satisfactionIcon} className="h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">100% Satisfaction Guarantee</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
