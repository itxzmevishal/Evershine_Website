import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Stable Evershine
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Creating landmark residences inspired by water,
              light and timeless architecture.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-xl font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">Projects</a>
              </li>

              <li>
                <a href="#">NRI Corner</a>
              </li>

              <li>
                <a href="#">Press & Media</a>
              </li>

            </ul>

          </div>

          {/* Projects */}
          <div>

            <h4 className="text-xl font-semibold mb-6">
              Projects
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>Evershine Solara</li>
              <li>Evershine Waterfront</li>
              <li>Upcoming Projects</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-xl font-semibold mb-6">
              Contact
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>Nashik, Maharashtra</li>

              <li>
                +91 98765 43210
              </li>

              <li>
                info@evershine.com
              </li>

            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Stable Evershine. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed with React + Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;