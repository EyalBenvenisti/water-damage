import Link from 'next/link';

export default function PageHeader({ title, subtitle, breadcrumbs }) {
  return (
    <header className="bg-navy text-white py-10 border-t border-navy">
      <div className="container mx-auto px-4 md:px-0">
        <h1 className="text-4xl mb-0 md:text-6xl text-left">{title}</h1>
        {subtitle && (
          <span className="mt-2 text-gray-300 text-sm md:text-md text-left">
            {subtitle}
          </span>
        )}

        {/* Breadcrumbs */}
        <nav className="mt-4">
          <ul className="flex justify-start items-center text-sm md:text-base space-x-2">
            <li>
              <Link href="/" passHref>
                <span className="hover:underline   cursor-pointer">Home</span>
              </Link>
            </li>
            {breadcrumbs && breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                <span className="mx-1">/</span>
                <Link href={breadcrumb.href} passHref>
                  <span className="hover:underline   cursor-pointer">{breadcrumb.label}</span>
                </Link>
              </li>
            ))}
            <li className="mx-1">/</li>
            <li>{title}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
