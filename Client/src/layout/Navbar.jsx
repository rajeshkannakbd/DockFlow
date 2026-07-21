import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const t = {
    ta: {
      company: "செல்வி ஆவண எழுத்தர்கள்",
      subtitle: "டிஜிட்டல் பதிவு உதவியாளர்",
      home: "முகப்பு",
      services: "சேவைகள்",
      about: "எங்களை பற்றி",
      contact: "தொடர்பு",
      login: "உள்நுழை",
      switch: "English",
    },
    en: {
      company: "Selvi Document Writers",
      subtitle: "Digital Registration Assistant",
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      login: "Login",
      switch: "தமிழ்",
    },
  };

  const text = t[language];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom">

        {/* Navbar */}

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-2 md:gap-3 min-w-0 flex-1"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 md:w-20 md:h-20 object-contain flex-shrink-0"
            />

            <div className="min-w-0">

              <h1
                className="
                  text-sm
                  sm:text-lg
                  md:text-2xl
                  font-bold
                  text-blue-700
                  truncate
                "
              >
                {text.company}
              </h1>

              <p
                className="
                  hidden
                  md:block
                  text-xs
                  text-gray-500
                "
              >
                {text.subtitle}
              </p>

            </div>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8 font-medium">

            <Link to="/">{text.home}</Link>

            <Link to="/services">{text.services}</Link>

            <Link to="/about">{text.about}</Link>

            <Link to="/contact">{text.contact}</Link>

            <button
              onClick={toggleLanguage}
              className="border border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
            >
              🌐 {text.switch}
            </button>

            <Link
              to="/login"
              className="bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              {text.login}
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-blue-700 flex-shrink-0 ml-3"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ${menuOpen ? "max-h-[500px] py-4 border-t" : "max-h-0"}
          `}
        >
          <div className="flex flex-col gap-4">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              {text.home}
            </Link>

            <Link to="/services" onClick={() => setMenuOpen(false)}>
              {text.services}
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              {text.about}
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              {text.contact}
            </Link>

            <button
              onClick={() => {
                toggleLanguage();
                setMenuOpen(false);
              }}
              className="border border-blue-700 text-blue-700 rounded-lg py-2"
            >
              🌐 {text.switch}
            </button>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-700 text-white text-center py-3 rounded-lg"
            >
              {text.login}
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;