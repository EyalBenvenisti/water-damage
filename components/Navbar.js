import Link from 'next/link';
import config from '../config'; // Import the config file

export default function Navbar() {
  return (
    <nav className="bg-navy text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Use the website name dynamically */}
        <h1 className="text-xl font-bold">{config.siteName}</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" passHref>
              <span className="hover:text-orange">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/services" passHref>
              <span className="hover:text-orange">Services</span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span className="hover:text-orange">About</span>
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              <span className="hover:text-orange">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span className="hover:text-orange">Contact</span>
            </Link>
          </li>
        </ul>
        <Link href={`tel:${config.phone}`} passHref>
          <button className="bg-orange text-white px-4 py-2 rounded-full hover:bg-sky transition duration-300">
            Call Us Now
          </button>
        </Link>
      </div>
    </nav>
  );
}
