import config from '../config/config';
import Meta from '../components/Meta';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import bbbIcon from '@iconify-icons/mdi/badge-account-outline';
import homeAdvisorIcon from '@iconify-icons/mdi/home-circle';
import googleIcon from '@iconify-icons/mdi/google';
import waterIcon from '@iconify-icons/mdi/water';
import germIcon from '@iconify-icons/mdi/germ';
import dryingIcon from '@iconify-icons/mdi/fan';
import waterproofingIcon from '@iconify-icons/mdi/water-well';
import restorationIcon from '@iconify-icons/mdi/home-outline';
import emergencyIcon from '@iconify-icons/mdi/alarm-light';
import licensedIcon from '@iconify-icons/mdi/license';
import ecoFriendlyIcon from '@iconify-icons/mdi/leaf';
import satisfactionIcon from '@iconify-icons/mdi/thumb-up';

export default function Home() {
  return (
    <div className="bg-white">

      {/* Meta Information */}
      <Meta
        title="Water Damage Restoration in Chanhassen | Family-Owned"
        description="Get professional water damage restoration services in Chanhassen. Family-owned and trusted for over 20 years. Call for a free quote now!"
        url="https://water-damage.vercel.app/"
      />

      {/* Hero Section */}
      <section className="relative bg-navy h-screen text-white flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-6">Protect Your Home with Expert Water Damage Services</h1>
          <p className="text-xl mb-6">Family-Owned, Customer-Trusted for Over 20 Years</p>

          {/* Call-to-Action */}
          <Link href={`tel:${config.phone}`} passHref>
            <button className="bg-orange text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-sky transition duration-300 shadow-lg">
              Call Now {config.phone}
            </button>
          </Link>

          {/* Social Proof */}
          <div className="flex justify-center mt-8 space-x-8">
            <Icon icon={bbbIcon} className="h-14" />
            <Icon icon={homeAdvisorIcon} className="h-14" />
            <Icon icon={googleIcon} className="h-14" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10">A Passion for Helping Homeowners</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-xl max-w-md mx-auto">
                After leaving a successful corporate job, our founder started this family-owned business to help families restore their homes after disasters. We've been helping the community for over 20 years, committed to quality and customer satisfaction.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/images/mike.webp" alt="Founder" className="rounded-full shadow-lg w-48 h-48 object-cover mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {/* Emergency Water Extraction */}
            <div className="p-8 bg-white shadow-lg rounded-lg">
            <Icon icon={waterIcon} className="text-7xl h-28 mx-auto mb-6 text-sky" />
              <h3 className="text-2xl font-semibold mb-4">Emergency Water Extraction</h3>
              <p className="text-slate mb-4">
                We offer rapid emergency water extraction to remove excess water and mitigate further damage to your property. Our team uses advanced equipment to ensure complete water removal, protecting your home from mold and structural damage.
              </p>
            </div>

            {/* Mold Removal and Remediation */}
            <div className="p-8 bg-white shadow-lg rounded-lg">
              <Icon icon={germIcon} className="text-7xl h-28 mx-auto mb-6 text-sky" />
              <h3 className="text-2xl font-semibold mb-4">Mold Removal and Remediation</h3>
              <p className="text-slate mb-4">
                Our mold removal services eliminate dangerous mold spores, restore air quality, and prevent mold from returning. We use environmentally friendly techniques to clean and sanitize affected areas, ensuring a safe and healthy environment.
              </p>
            </div>

            {/* Structural Drying and Dehumidification */}
            <div className="p-8 bg-white shadow-lg rounded-lg">
              <Icon icon={dryingIcon} className="text-7xl h-28 mx-auto mb-6 text-sky" />
              <h3 className="text-2xl font-semibold mb-4">Structural Drying and Dehumidification</h3>
              <p className="text-slate mb-4">
                With our structural drying and dehumidification services, we thoroughly dry walls, floors, and other materials to prevent long-term damage. Our dehumidifiers remove excess moisture, reducing the risk of mold growth and structural issues.
              </p>
            </div>

            {/* Basement Waterproofing */}
            <div className="p-8 bg-white shadow-lg rounded-lg">
              <Icon icon={waterproofingIcon} className="text-7xl h-28 mx-auto mb-6 text-sky" />
              <h3 className="text-2xl font-semibold mb-4">Basement Waterproofing</h3>
              <p className="text-slate mb-4">
                Protect your basement from future water damage with our waterproofing solutions. We seal cracks, install sump pumps, and use effective drainage techniques to keep your basement dry and secure, even during heavy rains.
              </p>
            </div>

            {/* Full Restoration Services */}
            <div className="p-8 bg-white shadow-lg rounded-lg">
              <Icon icon={restorationIcon} className="text-7xl h-28 mx-auto mb-6 text-sky" />
              <h3 className="text-2xl font-semibold mb-4">Full Restoration Services</h3>
              <p className="text-slate mb-4">
                Our comprehensive restoration services return your property to its pre-damage condition. We handle everything from minor repairs to complete overhauls, ensuring your space looks and functions just as it did before.
              </p>
            </div>

            {/* Sewage Cleanup and Sanitization */}
            <div className="p-8 bg-white shadow-lg rounded-lg">
              <Icon icon={emergencyIcon} className="text-7xl h-28 mx-auto mb-6 text-sky" />
              <h3 className="text-2xl font-semibold mb-4">Sewage Cleanup and Sanitization</h3>
              <p className="text-slate mb-4">
                Our sewage cleanup team provides safe, thorough sanitization to remove hazardous waste and restore affected areas. We use high-grade disinfectants and follow strict protocols to ensure your home is clean and safe.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Our Customers Say It Best</h2>

          {/* Scrollable Testimonials Container */}
          <div className="flex overflow-x-auto space-x-4 py-6 px-2 snap-x snap-mandatory">
            {[
              { text: "They were incredibly professional and helped us after a major flood. Highly recommend!", name: "John D." },
              { text: "Quick response, excellent work! They saved our home from serious water damage.", name: "Sarah W." },
              { text: "Best service I've experienced in years. They handled everything with care.", name: "Emily R." },
              { text: "The team was thorough and professional. Our basement looks better than before!", name: "Mike L." },
              { text: "Incredible service! They were there quickly and did an amazing job.", name: "Rachel P." },
              { text: "From start to finish, they took care of everything. Great job!", name: "Samantha K." },
              { text: "Professional, reliable, and effective. I'm extremely satisfied with their work.", name: "Daniel W." },
              { text: "Excellent communication and results. Highly recommend this team!", name: "Jessica M." },
              { text: "Fast, efficient, and thorough. They made the process stress-free!", name: "Brian T." },
              { text: "Absolutely the best service I've received for home repairs. Thank you!", name: "Linda E." },
              { text: "I couldn't believe how quickly they responded. Truly lifesavers!", name: "Tom G." },
              { text: "Great team! They restored my home beautifully and were very friendly.", name: "Olivia S." },
            ].map((testimonial, index) => (
              <div key={index} className="snap-start p-6 bg-gray-100 shadow-lg rounded-lg w-80 flex-shrink-0">
                <p className="text-xl mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sky font-bold">– {testimonial.name}</p>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            ))}
          </div>

          {/* Overall Rating */}
          <p className="text-2xl mt-12">Overall Rating: <span className="font-bold">4.8/5</span> based on 250+ reviews</p>
        </div>
      </section>

      {/* Trust & Business Values Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { title: "24/7 Emergency Services", icon: emergencyIcon },
              { title: "Licensed & Insured", icon: licensedIcon },
              { title: "Environmentally Friendly Solutions", icon: ecoFriendlyIcon },
              { title: "100% Satisfaction Guarantee", icon: satisfactionIcon },
            ].map((value, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <Icon icon={value.icon} className="h-12 text-sky mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
