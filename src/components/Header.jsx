// src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = ({ isScrolled }) => {
  return (
    <header
      style={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8) text-[#35D18F]' : 'transparent', // Dark background with opacity on scroll
        backdropFilter: isScrolled ? 'blur(10px)' : 'none', // Backdrop blur on scroll
        borderBottom: `1px solid rgb(37, 37, 37)`, // Light border color
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 text-white px-12 border-b border-[rgb(37, 37, 37)]`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center w-full ">
        <Link to="/" className="text-2xl font-bold text-[#35D18F]"> {/* Green color for "{ v }" */}
          V
        </Link>
        <div className="flex items-center space-x-6 text-[#FFFFFF]"> {/* White color for the rest of the content */}
          <Link to="/projects" className="hover:text-[#0D6EFD] transition-colors"> {/* Blue link color on hover */}
            Projects
          </Link>
          <Link to="/Contact" className="hover:text-[#0D6EFD] transition-colors"> {/* Blue link color on hover */}
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;