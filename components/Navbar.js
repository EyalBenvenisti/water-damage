import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';  // Import useRouter
import config from '../config/config';
import navLinks from '../config/navLinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();  // Initialize useRouter

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-navy text-white py-4 relative">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Site name */}
        <h1 className="text-xl font-bold m-0 p-0">
          <Link href="/" className="hover:text-orange">{config.siteName}</Link>
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`hover:text-orange ${router.pathname === link.href ? 'font-semibold' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call Us Button for Desktop */}
        <div className="hidden md:flex">
          <Link href={`tel:${config.phone}`}>
            <button className="bg-orange text-white px-4 py-2 rounded-full hover:bg-sky transition duration-300">
              Call {config.phone}
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 md:hidden" onClick={toggleMenu}>
          {/* Slide-in Menu Content */}
          <div className="bg-navy text-white w-4/5 max-w-xs p-6 h-full overflow-y-auto transform transition-transform duration-300 ease-in-out" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              {/* Close Button */}
              <Link href="#" onClick={toggleMenu} className="text-white focus:outline-none">
                <FaTimes size={24} />
              </Link>
            </div>

            <div className="container mx-auto">
              <ul className="flex flex-col items-start space-y-4 mt-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`hover:text-orange ${router.pathname === link.href ? 'font-semibold' : ''}`}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Call Us Button inside the Mobile Menu */}
              <div className="mt-6">
                <Link href={`tel:${config.phone}`}>
                  <button className="bg-orange text-white px-4 py-2 rounded-full hover:bg-sky transition duration-300">
                    Call {config.phone}
                  </button>
                </Link>
              </div>

              {/* Working Hours */}
              <div className="mt-4">
                <span>Working Hours:</span>
                <p className="text-sm">
                  {config.workingHours}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
