
export default function Location() {
  return (
    <div className="bg-white text-navy min-h-screen">
      <header className="bg-navy text-white p-4">
        <h1 className="text-3xl font-bold">Our Location</h1>
      </header>
      <section className="p-6">
        <h2 className="text-2xl text-slate">We proudly serve these areas:</h2>
        <p className="mt-2">Minneapolis, Saint Paul, and surrounding regions</p>
        <div className="mt-6" id="map" style={{ height: '400px', width: '100%' }}></div>
      </section>
    </div>
  );
}
