import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Associations", path: "/associations" },
    { name: "NRI Corner", path: "/nri-corner" },
    { name: "Press & Media", path: "/press-media" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/">
            <h1 className="text-white font-bold text-xl md:text-2xl">
              Stable Evershine
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <button className="hidden lg:block bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold transition duration-300">
            Enquire
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg"
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-yellow-500 text-black py-3 rounded-xl font-semibold">
              Enquire
            </button>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;