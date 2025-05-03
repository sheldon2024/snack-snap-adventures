
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#10B981] to-[#34D399] text-white py-6 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold tracking-wide">Snack & Snap</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline text-lg transition-colors duration-200">Home</Link>
          <Link to="/sites" className="hover:underline text-lg transition-colors duration-200">Sites</Link>
          <Link to="/about" className="hover:underline text-lg transition-colors duration-200">About</Link>
          <Link to="/contact" className="hover:underline text-lg transition-colors duration-200">Contact</Link>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
