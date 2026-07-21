import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* WhatsApp */}
      <a
        href="https://wa.me/917538821468"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 p-4 rounded-full text-white text-xl shadow-lg transition duration-300"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a
        href="tel:+917538821468"
        className="bg-blue-700 hover:bg-blue-800 p-4 rounded-full text-white text-xl shadow-lg transition duration-300"
        title="Call"
      >
        <FaPhoneAlt />
      </a>

      {/* Directions */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Vin+Nagar+8th+Cross,+Near+Sub+Registrar+Office,+Kattur,+Tiruchirappalli,+Tamil+Nadu+620019"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 hover:bg-red-600 p-4 rounded-full text-white text-xl shadow-lg transition duration-300"
        title="Get Directions"
      >
        <FaMapMarkerAlt />
      </a>

    </div>
  );
}

export default FloatingButtons;