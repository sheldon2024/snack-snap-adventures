
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#064E3B] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Snack & Snap</h3>
            <p className="text-gray-300">
              Discover Kenya's natural wonders and create unforgettable outdoor experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sites" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Sites
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© 2025 Snack & Snap. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
