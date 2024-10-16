// pages/index.js
import { useEffect, useRef } from 'react';
import MainLayout from '../layouts/MainLayout';
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

function Home() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      {/* Meta Information */}
      <Meta
        title="Water Damage Restoration in Chanhassen | Family-Owned"
        description="Get professional water damage restoration services in Chanhassen. Family-owned and trusted for over 20 years. Call for a free quote now!"
        url="https://water-damage.vercel.app/"
      />

      {/* Hero Section */}
      <section className="hero-section bg-cover bg-center mt-0 relative h-screen text-white flex flex-col justify-center items-left text-left">

        <div className="z-10 container">
          <h1 className="text-5xl text-white lg:w-1/2 font-extrabold mb-6">Protect Your Home with Expert Water Damage Services</h1>
          <p className="text-l text-grey mb-6">Family-Owned, Customer-Trusted for Over 20 Years</p>

          <Link href={`tel:${config.phone}`} passHref>
            <button className="bg-orange text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-sky transition duration-300 shadow-lg">
              Call Now {config.phone}
            </button>
          </Link>

          <div className="flex justify-left mt-8 space-x-8">
            <Icon icon={bbbIcon} className="h-20 w-14" title="Better Business Bureau" />
            <Icon icon={homeAdvisorIcon} className="h-20 w-14" title="Home Advisor" />
            <Icon icon={googleIcon} className="h-20 w-14" title="Google" />
          </div>

        </div>

      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start text-left">
            <div className="md:w-1/2 mb-8 md:mb-5">
            <h2 className="text-4xl font-bold mb-10 text-left">About Our Water Damage Restoration Team</h2>

              <p className="text-l mx-auto pb-2">
                Our team, established over 20 years ago, was founded by a dedicated professional who left a successful corporate career to build a family-owned business focused on helping homeowners recover from disasters. With a steadfast commitment to quality and customer satisfaction, we've earned a respected reputation for reliability and excellence.
              </p>
              <p className="text-l mx-auto pb-2">
                Whether you’re dealing with unexpected water damage or need preventive services, we understand the urgency of these situations. We are here for you around the clock, ready to assist with a full range of services to restore and protect your home.
              </p>
              <p className="text-l mx-auto pb-2">
                Our services include water extraction, mold remediation, structural drying, waterproofing, and complete home restoration.
              </p>
              <p className="text-l mx-auto pb-2">
                We’re available 24/7 with expert help right in your community – call us now to receive fast and reliable service.
              </p>
              <p className="text-l mx-auto pb-2">
                Local water damage restoration services are available in the following areas:
              </p>
            </div>

            <div className="md:w-1/2 flex justify-right md:justify-start">
              <img src="/images/mike.png" alt="Founder" className=" object-cover" />
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Service Items */}
            {[
              { title: "Emergency Water Extraction", description: "We offer rapid emergency water extraction to remove excess water and mitigate further damage to your property.", icon: waterIcon },
              { title: "Mold Removal and Remediation", description: "Our mold removal services eliminate dangerous mold spores, restore air quality, and prevent mold from returning.", icon: germIcon },
              { title: "Structural Drying and Dehumidification", description: "We thoroughly dry walls, floors, and other materials to prevent long-term damage.", icon: dryingIcon },
              { title: "Basement Waterproofing", description: "Protect your basement from future water damage with our waterproofing solutions.", icon: waterproofingIcon },
              { title: "Full Restoration Services", description: "Our comprehensive restoration services return your property to its pre-damage condition.", icon: restorationIcon },
              { title: "Sewage Cleanup and Sanitization", description: "Our sewage cleanup team provides safe, thorough sanitization to remove hazardous waste.", icon: emergencyIcon },
            ].map((service, index) => (
              <div key={index} className="p-8 bg-white shadow-lg rounded-lg">
                <Icon icon={service.icon} className="text-7xl h-28 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-slate mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Our Customers Say It Best</h2>

          {/* Scrollable Testimonials Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 py-6 px-2 snap-x snap-mandatory"
          >
            {[
              { text: "They were incredibly professional and helped us after a major flood. Highly recommend!", name: "John D." },
              { text: "Quick response, excellent work! They saved our home from serious water damage.", name: "Sarah W." },
              { text: "Best service I've experienced in years. They handled everything with care.", name: "Emily R." },
              { text: "Amazing team and outstanding results. Truly grateful!", name: "Michael B." },
              { text: "Fast and efficient service. They know what they're doing.", name: "Jessica T." },
              { text: "Excellent customer service and impressive work quality!", name: "James L." },
              { text: "Their attention to detail is second to none!", name: "Laura S." },
              { text: "Very professional and efficient. Highly recommended.", name: "Daniel M." },
              { text: "A lifesaver in an emergency situation. Thank you!", name: "Amanda P." },
              { text: "Outstanding service from start to finish.", name: "Christopher H." },
              { text: "Friendly staff and great results. I'm a satisfied customer.", name: "Olivia K." },
              { text: "Top-notch service! Will use them again in the future.", name: "Benjamin F." },
              { text: "Responsive, reliable, and very professional.", name: "Sophia C." },
              { text: "Efficient and friendly. Truly an amazing experience.", name: "Emma W." },
              { text: "Highly recommended for anyone needing reliable help.", name: "Liam J." },
            ].map((testimonial, index) => (
              <div key={index} className="snap-start p-6 bg-gray-100 shadow-lg rounded-lg w-80 flex-shrink-0">
                <p className="text-xl mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold">– {testimonial.name}</p>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            ))}
          </div>
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
                <Icon icon={value.icon} className="h-12 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Assigning layout to Home page
Home.layout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
