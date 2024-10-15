import Link from 'next/link';

export default function PageHeader({ title, subtitle, breadcrumbs }) {
  return (
    <header className="bg-navy text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-left">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-lg md:text-xl text-left">
            {subtitle}
          </p>
        )}

        {/* Breadcrumbs */}
        <nav className="mt-4">
          <ul className="flex justify-start items-center text-sm md:text-base space-x-2">
            <li>
              <Link href="/" passHref>
                <span className="hover:underline text-sky cursor-pointer">Home</span>
              </Link>
            </li>
            {breadcrumbs && breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                <span className="mx-1">/</span>
                <Link href={breadcrumb.href} passHref>
                  <span className="hover:underline text-sky cursor-pointer">{breadcrumb.label}</span>
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
