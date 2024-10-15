import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import config from '../config/config';
import navLinks from '../config/navLinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-navy text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Site name */}
        <h1 className="text-xl font-bold">
          <Link href="/" className="hover:text-orange">{config.siteName}</Link>
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="hover:text-orange">
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

        {/* Mobile Call Us Button and Hamburger Menu */}
        <div className="flex md:hidden items-center space-x-4">
          {/* Call Us Button for Mobile */}
          <Link href={`tel:${config.phone}`}>
            <button className="bg-orange text-white px-4 py-2 rounded-full hover:bg-sky transition duration-300">
            Call {config.phone}
            </button>
          </Link>

          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy text-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-orange" onClick={toggleMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
