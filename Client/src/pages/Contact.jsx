import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useLanguage } from "../context/LanguageContext";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  const { language } = useLanguage();

  const t = {
    ta: {
      title: "எங்களை தொடர்பு கொள்ளுங்கள்",
      subtitle:
        "உங்கள் ஆவண பதிவு மற்றும் சட்ட ஆவண தேவைகளுக்கு எங்களை தொடர்பு கொள்ளுங்கள்.",

      office: "அலுவலக முகவரி",
      phone: "தொலைபேசி",
      whatsapp: "வாட்ஸ்அப்",
      email: "மின்னஞ்சல்",
      timing: "அலுவலக நேரம்",

      call: "இப்போது அழைக்கவும்",
      chat: "WhatsApp-ல் தொடர்பு கொள்ளுங்கள்",

      officeTiming: "திங்கள் - சனி\nகாலை 9:30 - மாலை 6:30",

      mapTitle: "எங்கள் அலுவலகம்",

      address: "உங்கள் அலுவலக முகவரியை இங்கே மாற்றவும்",
    },

    en: {
      title: "Contact Us",
      subtitle:
        "Contact us for all your document registration and legal documentation services.",

      office: "Office Address",
      phone: "Phone",
      whatsapp: "WhatsApp",
      email: "Email",
      timing: "Office Hours",

      call: "Call Now",
      chat: "Chat on WhatsApp",

      officeTiming: "Monday - Saturday\n9:30 AM - 6:30 PM",

      mapTitle: "Our Location",

      address: "Replace this with your office address",
    },
  };

  const text = t[language];

  // CHANGE THESE DETAILS
  const phone = "917538821468";
  const whatsapp = "917538821468";
  const email = "selvidocuments@gmail.com";

  return (
    <>
      <Navbar />

      <main className="bg-slate-50">
        {/* Hero */}

        <section className="bg-primary text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold">{text.title}</h1>

            <p className="mt-6 text-lg max-w-3xl mx-auto">{text.subtitle}</p>
          </div>
        </section>

        {/* Contact Details */}

        <section className="py-20">
          <div className="container-custom grid lg:grid-cols-2 gap-12">
            {/* Left */}

            <div className="space-y-6">
              <div className="bg-white shadow-lg rounded-2xl p-8">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-primary text-3xl" />

                  <div>
                    <h3 className="font-bold text-xl">{text.office}</h3>

                    <p className="text-gray-600 mt-2 whitespace-pre-line">
                      {text.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-8">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-primary text-3xl" />

                  <div>
                    <h3 className="font-bold text-xl">{text.phone}</h3>

                    <p className="text-gray-600">+{phone}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-8">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-primary text-3xl" />

                  <div>
                    <h3 className="font-bold text-xl">{text.email}</h3>

                    <p className="text-gray-600">{email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-8">
                <div className="flex items-center gap-4">
                  <FaClock className="text-primary text-3xl" />

                  <div>
                    <h3 className="font-bold text-xl">{text.timing}</h3>

                    <p className="text-gray-600 whitespace-pre-line">
                      {text.officeTiming}
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}

              <div className="flex gap-4">
                <a
                  href={`tel:+${phone}`}
                  className="flex-1 bg-primary text-white py-4 rounded-xl text-center font-semibold hover:opacity-90"
                >
                  📞 {text.call}
                </a>

                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-green-600 text-white py-4 rounded-xl text-center font-semibold hover:bg-green-700"
                >
                  <FaWhatsapp className="inline mr-2" />
                  {text.chat}
                </a>
              </div>
            </div>

            {/* Google Map */}

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {text.mapTitle}
              </h2>

              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771.3033738817803!2d78.75476564897662!3d10.801297175487388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf366bf6903f1%3A0x7a0d0f92df4c176b!2s34%2C%20Vin%20Nagar%201st%20Main%20Rd%2C%20Vin%20Nagar%2C%20East%20Extension%2C%20Kailash%20Nagar%2C%20Tiruchirapalli%2C%20Tiruchirappalli%20(Part%2C%20Tamil%20Nadu%20620019!5e0!3m2!1sen!2sin!4v1784186982864!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
