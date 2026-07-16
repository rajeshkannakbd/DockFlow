import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();

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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b transition-all duration-300">
      <div className="container-custom flex items-center justify-between h-20">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 w-[430px] transition-all duration-300"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-24 object-contain flex-shrink-0"
          />

          <div className="overflow-hidden">
            <h1 className="text-2xl font-bold text-blue-700 whitespace-nowrap transition-all duration-300">
              {text.company}
            </h1>

            <p className="text-xs text-gray-500 whitespace-nowrap transition-all duration-300">
              {text.subtitle}
            </p>
          </div>
        </Link>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">

          <Link
            to="/"
            className="min-w-[80px] text-center hover:text-blue-700 transition-all duration-300 whitespace-nowrap"
          >
            {text.home}
          </Link>

          <Link
            to="/services"
            className="min-w-[90px] text-center hover:text-blue-700 transition-all duration-300 whitespace-nowrap"
          >
            {text.services}
          </Link>

          <Link
            to="/about"
            className="min-w-[110px] text-center hover:text-blue-700 transition-all duration-300 whitespace-nowrap"
          >
            {text.about}
          </Link>

          <Link
            to="/contact"
            className="min-w-[90px] text-center hover:text-blue-700 transition-all duration-300 whitespace-nowrap"
          >
            {text.contact}
          </Link>

          <button
            onClick={toggleLanguage}
            className="w-28 border border-blue-700 text-blue-700 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300"
          >
            🌐 {text.switch}
          </button>

          <Link
            to="/login"
            className="w-28 text-center bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg transition-all duration-300"
          >
            {text.login}
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;