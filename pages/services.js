import Meta from '../components/Meta';
import PageHeader from '../components/PageHeader';
import { useState } from 'react';
import Head from 'next/head';

export default function Services() {
  const faqs = [
    {
      question: "What should I do immediately after water damage occurs?",
      answer: "Ensure safety by turning off the water source and electricity, if safe to do so. Call our 24/7 emergency hotline for a quick response.",
    },
    {
      question: "How long does water damage restoration take?",
      answer: "The duration depends on the extent of the damage. Smaller jobs may take a few days, while larger projects may require more time.",
    },
    {
      question: "What types of damage does your team handle?",
      answer: "We handle flood damage, smoke damage, mold remediation, and construction services for homes and businesses.",
    },
    {
      question: "Is mold dangerous, and how quickly does it grow after water damage?",
      answer: "Mold can start to grow within 24-48 hours of water exposure and poses health risks, especially for those with allergies or respiratory issues.",
    },
    {
      question: "Do you work with insurance companies for water damage claims?",
      answer: "Yes, we are a preferred provider for several insurance companies, making the claims process easier for you.",
    },
    {
      question: "How can I prevent future water damage?",
      answer: "Regular maintenance, such as checking for leaks and ensuring proper drainage, can help prevent future water damage.",
    },
    {
      question: "Are your services available 24/7 for emergencies?",
      answer: "Yes, we offer 24/7 emergency response services in Chanhassen, MN, and surrounding areas.",
    },
    {
      question: "How do you handle smoke damage restoration?",
      answer: "Our smoke damage restoration process includes soot and odor removal, air purification, and deep cleaning of affected areas.",
    },
    {
      question: "Why choose a local, family-owned business for restoration services?",
      answer: "As a family-owned business, we understand the importance of personalized service. We’re committed to treating every home like our own.",
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve Chanhassen, MN, and surrounding areas, providing fast and reliable water damage restoration services.",
    },
  ];

  const servicesSchema = [
    {
      "@type": "Service",
      "serviceType": "Flood Damage Restoration",
      "description": "Quick and efficient flood damage restoration including water extraction and structural drying.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Water Damage Experts",
        "areaServed": {
          "@type": "Place",
          "name": "Chanhassen, MN"
        }
      }
    },
    {
      "@type": "Service",
      "serviceType": "Smoke Damage Restoration",
      "description": "Professional smoke damage restoration services to eliminate smoke residue and odors from your property.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Water Damage Experts",
        "areaServed": {
          "@type": "Place",
          "name": "Chanhassen, MN"
        }
      }
    },
    {
      "@type": "Service",
      "serviceType": "Mold Remediation",
      "description": "We offer thorough mold inspection, containment, and safe removal services.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Water Damage Experts",
        "areaServed": {
          "@type": "Place",
          "name": "Chanhassen, MN"
        }
      }
    },
    {
      "@type": "Service",
      "serviceType": "Construction Services",
      "description": "Full-scale construction services, including remodeling and structural repairs.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Water Damage Experts",
        "areaServed": {
          "@type": "Place",
          "name": "Chanhassen, MN"
        }
      }
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-grey min-h-screen">
      <Meta
        title="Our Services | Water Damage Restoration Experts"
        description="Explore our range of water damage restoration services including flood damage, smoke damage, mold remediation, and construction services."
        url="https://water-damage.vercel.app/services"
        ogImage="/images/services-og.jpg"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "service": servicesSchema,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      <PageHeader
        title="Our Services"
        subtitle="Comprehensive Solutions for All Your Water Damage Restoration Needs"
      />

      <main>
        <section>
          <h2 className="text-3xl font-semibold text-sky">Flood Damage</h2>
          <p className="mt-4 text-slate">
            Flooding can cause severe and lasting damage to property if not addressed quickly. Our flood damage restoration service is here to help you restore your home or business to its original condition.
          </p>
          <ul className="list-disc pl-5 mt-4 text-slate">
            <li>Quick and efficient water removal from flooded areas</li>
            <li>Industrial-grade dehumidifiers for structural drying</li>
            <li>Comprehensive sanitization of affected areas</li>
            <li>Repair and restoration of damaged flooring and walls</li>
          </ul>
        </section>

        <section id="smoke-damage" className="mb-10">
          <h2 className="text-3xl font-semibold text-sky">Smoke Damage</h2>
          <p className="mt-4 text-slate">
            Smoke damage can linger long after a fire is put out. Our smoke damage restoration service is designed to eliminate smoke residue, remove odors, and restore affected areas.
          </p>
          <ul className="list-disc pl-5 mt-4 text-slate">
            <li>Cleaning surfaces and removing soot from walls, ceilings, and floors</li>
            <li>Odor neutralization with thermal fogging and ozone treatment</li>
            <li>Air filtration to improve indoor air quality</li>
            <li>Deep cleaning and repair of damaged surfaces</li>
          </ul>
        </section>

        <section id="mold-remediation" className="mb-10">
          <h2 className="text-3xl font-semibold text-sky">Mold Remediation</h2>
          <p className="mt-4 text-slate">
            Mold can develop quickly in moist environments, posing health risks and causing property damage. Our mold remediation services are designed to identify, contain, and eliminate mold growth safely.
          </p>
          <ul className="list-disc pl-5 mt-4 text-slate">
            <li>Comprehensive inspection and testing for mold growth</li>
            <li>Containing affected areas to prevent further spread</li>
            <li>Using HEPA filters and negative air machines to improve air quality</li>
            <li>Applying mold-resistant treatments and moisture control solutions</li>
          </ul>
        </section>

        <section id="faq" className="py-12">
          <h2 className="text-3xl font-semibold text-center text-sky mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate rounded-md">
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-sky font-semibold focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span>{activeIndex === index ? '-' : '+'}</span>
                </button>
                {activeIndex === index && (
                  <div className="px-4 py-3 text-slate bg-grey">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/contact" className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-md hover:bg-sky transition">
              Contact Us for 24/7 Emergency Service
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
