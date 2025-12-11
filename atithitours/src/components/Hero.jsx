import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Discover Incredible India",
      text: "Experience the diverse beauty of India with Atithi Tours. From Himalayan peaks to coastal paradises, we create unforgettable journeys.",
      btn1: "Explore Tours",
      btn2: "Get in Touch",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      gradient: "from-blue-600 to-green-600",
      subIcon: "fas fa-star text-yellow-400",
      subText: "4.9/5 Rating",
      link1: "/tours",
      link2: "/contact",
    },
    {
      title: "Spiritual Journeys",
      text: "Embark on sacred pilgrimages to ancient temples and spiritual centers. Find peace and enlightenment in India's holy lands.",
      btn1: "View Spiritual Tours",
      btn2: "Plan Your Journey",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      gradient: "from-purple-600 to-pink-600",
      subIcon: "fas fa-om text-orange-400",
      subText: "Sacred Sites",
      link1: "/tours",
      link2: "/contact",
    },
    {
      title: "Beach Paradise Awaits",
      text: "Relax on pristine beaches, enjoy water sports, and experience the vibrant culture of India's coastal destinations.",
      btn1: "Beach Tours",
      btn2: "Book Now",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      gradient: "from-green-600 to-teal-600",
      subIcon: "fas fa-umbrella-beach text-blue-400",
      subText: "Beach Paradise",
      link1: "/tours",
      link2: "/contact",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white pt-20 overflow-hidden">
      <div className="relative h-screen w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 
            ${index === currentSlide ? "opacity-100" : "opacity-0"} 
            bg-gradient-to-r ${slide.gradient}`}
          >
            <div className="max-w-7xl mx-auto px-4 py-20 h-full flex items-center">
              <div className="grid md:grid-cols-2 gap-8 items-center w-full">

                {/* LEFT CONTENT */}
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 opacity-90">{slide.text}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => navigate(slide.link1)}
                      className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                    >
                      {slide.btn1}
                    </button>

                    <button
                      onClick={() => navigate(slide.link2)}
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
                    >
                      {slide.btn2}
                    </button>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                  <img
                    src={slide.img}
                    alt=""
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <i className={`${slide.subIcon} mr-2`}></i>
                      <span className="font-semibold text-gray-800">
                        {slide.subText}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CAROUSEL DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all 
            ${currentSlide === i ? "bg-white" : "bg-white/50"}`}
          ></button>
        ))}
      </div>

      {/* WAVE */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12">
          <path
            fill="#f9fafb"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
