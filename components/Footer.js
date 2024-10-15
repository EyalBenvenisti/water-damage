import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import config from '../config/config';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p>&copy; {new Date().getFullYear()} {config.siteName} - {config.cityState}</p>
            <address className="not-italic mt-2">
              <p>{config.address}, {config.cityState} {config.zipCodeArea}</p>
              <p>Email: <a href={`mailto:${config.email}`} className="hover:text-orange">{config.email}</a></p>
              <p>Phone: <a href={`tel:${config.phone}`} className="hover:text-orange">{config.phone}</a></p>
            </address>
            <div className="flex space-x-4 mt-4">
              {config.socialLinks.facebook && (
                <a href={config.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-orange">
                  <FaFacebookF size={20} />
                </a>
              )}
              {config.socialLinks.twitter && (
                <a href={config.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-orange">
                  <FaTwitter size={20} />
                </a>
              )}
              {config.socialLinks.instagram && (
                <a href={config.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-orange">
                  <FaInstagram size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Service Areas Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Service Areas</h2>
            <ul className="space-y-2">
              {config.serviceAreas.map((area, index) => (
                <li key={index}>
                  <Link href={`/service-areas/${area.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="hover:text-orange cursor-pointer">{area}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/"><span className="hover:text-orange cursor-pointer">Home</span></Link></li>
              <li><Link href="/about"><span className="hover:text-orange cursor-pointer">About Us</span></Link></li>
              <li><Link href="/services"><span className="hover:text-orange cursor-pointer">Services</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-orange cursor-pointer">Contact Us</span></Link></li>
            </ul>
          </div>

          {/* Business Registration Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Proudly Registered in Carver County</h2>
            <p className="mb-4 text-slate text-white">
              Our business is a trusted, registered member of the Carver County business community. We are dedicated to serving the local area with integrity and commitment.
            </p>
            <Link href="https://www.co.carver.mn.us/business-directory" passHref>
              <span className="text-orange font-semibold hover:text-sky transition duration-300 cursor-pointer">
                View Our Listing
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
