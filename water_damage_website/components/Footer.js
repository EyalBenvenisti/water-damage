import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import config from '../config';

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  // Ensure this code runs on the client side after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap">
          {/* Footer Navigation */}
          <div className="space-x-4">
            <Link href="/" className="hover:text-sky">Home</Link>
            <Link href="/services" className="hover:text-sky">Services</Link>
            <Link href="/location" className="hover:text-sky">Location</Link>
            <Link href="/contact" className="hover:text-sky">Contact Us</Link>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <p className="text-slate">Site Owner: {config.siteOwner}</p>
            <p className="text-slate">Address: {config.address}, {config.cityState} {config.zipCodeArea}</p>
            <p className="text-slate">Call us: {config.phone}</p>
            <p className="text-slate">Email: {config.email}</p>
            <a href={config.googleMapURL} target="_blank" rel="noopener noreferrer" className="text-sky">View on Google Maps</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-4">
          {mounted && (
            <>
              <a href={config.socialLinks.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky">
                <FaFacebookF size={24} />
              </a>
              <a href={config.socialLinks.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky">
                <FaTwitter size={24} />
              </a>
              <a href={config.socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky">
                <FaInstagram size={24} />
              </a>
            </>
          )}
        </div>

        <div className="mt-4 text-center text-slate">
          <p>&copy; 2024 {config.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
