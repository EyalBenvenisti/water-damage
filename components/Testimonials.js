import { useRef } from 'react';

export default function Testimonials() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Our Customers Say It Best</h2>

        {/* Scrollable Testimonials Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange text-white px-4 py-2 rounded-full shadow-lg hover:bg-sky transition"
          >
            &lt;
          </button>

          {/* Testimonials Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 py-6 px-2 snap-x snap-mandatory"
          >
            {[
              { text: "They were incredibly professional and helped us after a major flood. Highly recommend!", name: "John D." },
              { text: "Quick response, excellent work! They saved our home from serious water damage.", name: "Sarah W." },
              { text: "Best service I've experienced in years. They handled everything with care.", name: "Emily R." },
              { text: "Amazing team and outstanding results. Truly grateful!", name: "Michael B." },
              { text: "Fast and efficient service. They know what they're doing.", name: "Jessica T." },
              { text: "Excellent customer service and impressive work quality!", name: "James L." },
              { text: "Their attention to detail is second to none!", name: "Laura S." },
              { text: "Very professional and efficient. Highly recommended.", name: "Daniel M." },
            ].map((testimonial, index) => (
              <div key={index} className="snap-start p-6 bg-gray-100 border border-gray-300 rounded-lg w-80 flex-shrink-0">
              <div className="text-yellow-400">★★★★★</div>
                <p className="text-xl mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold">– {testimonial.name}</p>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange text-white px-4 py-2 rounded-full shadow-lg hover:bg-sky transition"
          >
            &gt;
          </button>
        </div>

        <p className="text-2xl mt-12">Overall Rating: <span className="font-bold">4.8/5</span> based on 250+ reviews</p>
      </div>
    </section>
  );
}
