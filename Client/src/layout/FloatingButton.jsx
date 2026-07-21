import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-3 md:bottom-6 md:right-6 flex flex-col gap-3 z-50">

      {/* WhatsApp */}
      <a
        href="https://wa.me/917538821468"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 hover:scale-110"
        title="WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Call */}
      <a
        href="tel:+917538821468"
        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 text-white shadow-lg transition-all duration-300 hover:scale-110"
        title="Call"
      >
        <FaPhoneAlt className="text-xl" />
      </a>

      {/* Directions */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Vin+Nagar+8th+Cross,+Near+Sub+Registrar+Office,+Kattur,+Tiruchirappalli,+Tamil+Nadu+620019"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg transition-all duration-300 hover:scale-110"
        title="Get Directions"
      >
        <FaMapMarkerAlt className="text-xl" />
      </a>

    </div>
  );
}

export default FloatingButtons;