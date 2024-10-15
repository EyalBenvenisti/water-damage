// components/PageLayout.js
import PageHeader from './PageHeader';

export default function PageLayout({ children, title, subtitle, breadcrumbs }) {
  return (
    <>
      {/* Optional Page Header */}
      {title && (
        <PageHeader
          title={title}
          subtitle={subtitle}
          breadcrumbs={breadcrumbs}
        />
      )}
      {/* Main Container */}
      <main className="py-10 px-6 container mx-auto max-w-4xl">
        {children}
      </main>
    </>
  );
}
