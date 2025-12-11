import { FaCompass, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <FaCompass className="text-2xl text-blue-400 mr-2" />
              <span className="text-xl font-bold">Atithi Tours</span>
            </div>

            <p className="text-gray-400 mb-4">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/tours" className="text-gray-400 hover:text-white transition">Tours</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Manali & Himachal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Goa Beaches</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Haridwar & Rishikesh</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Golden Triangle</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <FaPhone className="mr-2" /> +91 98765 43210
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" /> info@atithitours.in
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Atithi Tours. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
