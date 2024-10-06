
export default function Contact() {
  return (
    <div className="bg-white text-navy min-h-screen p-6">
      <header className="bg-navy text-white p-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </header>
      <form className="mt-6 bg-grey p-4 rounded">
        <label className="block mb-2 text-slate">Name</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />
        <label className="block mb-2 text-slate">Email</label>
        <input type="email" className="w-full p-2 mb-4 border rounded" />
        <label className="block mb-2 text-slate">Message</label>
        <textarea className="w-full p-2 mb-4 border rounded"></textarea>
        <button className="bg-orange text-white py-2 px-4 rounded hover:bg-sky">Submit</button>
      </form>
    </div>
  );
}
