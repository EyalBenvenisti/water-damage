// components/Footer.js
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import config from '../config/config'; // Adjust the import path if necessary

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} {config.siteName} - {config.cityState}</p>
        <address className="not-italic mt-2">
          <p>{config.address}, {config.cityState} {config.zipCodeArea}</p>
          <p>Email: <a href={`mailto:${config.email}`} className="hover:text-orange">{config.email}</a></p>
          <p>Phone: <a href={`tel:${config.phone}`} className="hover:text-orange">{config.phone}</a></p>
        </address>
        <div className="flex justify-center space-x-4 mt-4">
          {config.socialLinks.facebook && (
            <a href={config.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-orange">
              <FaFacebookF />
            </a>
          )}
          {config.socialLinks.twitter && (
            <a href={config.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-orange">
              <FaTwitter />
            </a>
          )}
          {config.socialLinks.instagram && (
            <a href={config.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-orange">
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
