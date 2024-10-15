import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import config from '../config/config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email || !validateEmail(formData.email)) validationErrors.email = 'Valid email is required';
    if (!formData.phone) validationErrors.phone = 'Phone number is required';
    if (!formData.message) validationErrors.message = 'Message is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      alert("Thank you for reaching out! We'll get back to you soon.");
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="bg-white text-navy">
    <PageHeader
      title="Contact Us"
      subtitle="Get in Touch with Our Team for Expert Assistance"
    />

      <section>
        <div className="flex flex-col md:flex-row justify-center items-start gap-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="text-left">
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-sky"
                />
                {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-sky"
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block font-semibold mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-sky"
                />
                {errors.phone && <p className="text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-sky"
                ></textarea>
                {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-orange text-white py-3 rounded-lg hover:bg-sky transition duration-300"
              >
                Submit
              </button>

              {submitted && <p className="text-green-500 mt-4">Your message has been sent successfully!</p>}
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-lg mb-4">
              We’re here to answer any questions you may have about our services. Reach out to us and we’ll respond as soon as possible.
            </p>
            <div className="mb-8">
              <p className="font-semibold mb-2">Phone:</p>
              <a href={`tel:${config.phone}`} className="text-orange text-xl hover:underline">
                {config.phone}
              </a>
            </div>
            <div className="mb-8">
              <p className="font-semibold mb-2">Email:</p>
              <a href={`mailto:${config.email}`} className="text-orange text-xl hover:underline">
                {config.email}
              </a>
            </div>
            <div>
              <p className="font-semibold mb-2">Location:</p>
              <p className="text-lg">{config.address}, {config.cityState} {config.zipCodeArea}</p>
              <a
                href={config.googleMapURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky hover:underline text-lg"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
