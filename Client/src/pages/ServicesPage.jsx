import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useLanguage } from "../context/LanguageContext";
import services from "../constants/services";

function ServicesPage() {
  const { language } = useLanguage();
  const [openCard, setOpenCard] = useState(null);

  const t = {
    ta: {
      title: "எங்கள் ஆவண சேவைகள்",
      subtitle: "அனைத்து வகையான பதிவு மற்றும் சட்ட ஆவண சேவைகளும் ஒரே இடத்தில்.",

      requiredTitle: "பொதுவாக தேவையான ஆவணங்கள்",

      requiredDocs: [
        "ஆதார் அட்டை",
        "பான் அட்டை",
        "பாஸ்போர்ட் புகைப்படம்",
        "தாய் பத்திரம்",
        "பட்டா",
        "சிட்டா / அடங்கல்",
        "வில்லங்கச் சான்றிதழ்",
        "வரி ரசீது",
      ],

      processTitle: "பதிவு செயல்முறை",

      process: [
        "ஆவணங்களை கொண்டு வரவும்",
        "ஆவண சரிபார்ப்பு",
        "ஆவணம் தயாரித்தல்",
        "வாடிக்கையாளர் ஒப்புதல்",
        "சார்பதிவாளர் அலுவலகத்தில் பதிவு",
        "அசல் ஆவணத்தை பெற்றுக்கொள்ளுங்கள்",
      ],

      documents: "தேவையான ஆவணங்கள்",
      open: "விவரங்களை காண",
      close: "மறைக்க",

      contact: "மேலும் தகவலுக்கு எங்களை தொடர்பு கொள்ளுங்கள்",
      button: "தொடர்பு கொள்ளுங்கள்",
    },

    en: {
      title: "Our Document Services",
      subtitle:
        "Complete Registration and Legal Documentation Services Under One Roof.",

      requiredTitle: "Common Required Documents",

      requiredDocs: [
        "Aadhaar Card",
        "PAN Card",
        "Passport Size Photo",
        "Parent Deed",
        "Patta",
        "Chitta / Adangal",
        "Encumbrance Certificate",
        "Property Tax Receipt",
      ],

      processTitle: "Registration Process",

      process: [
        "Bring Required Documents",
        "Document Verification",
        "Draft Preparation",
        "Client Approval",
        "Registration at SRO",
        "Collect Original Document",
      ],

      documents: "Required Documents",
      open: "View Details",
      close: "Hide Details",

      contact: "Need More Information?",
      button: "Contact Us",
    },
  };

  const text = t[language];

  return (
    <>
      <Navbar />

      <section className="bg-slate-50 py-16">
        <div className="container-custom">
          {/* Heading */}

          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
              {text.title}
            </h1>

            <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
              {text.subtitle}
            </p>
          </div>

          {/* Services */}

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-[520px] flex flex-col overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-6 border-b">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">
                        <Icon className="text-3xl text-blue-700" />
                      </div>

                      <div>
                        <h2 className="text-xl font-bold text-blue-700">
                          {language === "ta"
                            ? service.titleTa
                            : service.titleEn}
                        </h2>

                        {language === "ta" && (
                          <p className="text-sm text-gray-500">
                            {service.titleEn}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="mt-5 text-gray-600 leading-7">
                      {service.description[language]}
                    </p>
                  </div>

                  {/* Documents */}

                  <div className="flex-1 overflow-y-auto service-scroll p-6">
                    <h3 className="text-lg font-bold text-blue-700 mb-5">
                      {language === "ta"
                        ? "தேவையான ஆவணங்கள்"
                        : "Required Documents"}
                    </h3>

                    <div className="space-y-3">
                      {service.documents[language].map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 hover:bg-blue-50 transition"
                        >
                          <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />

                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Common Documents */}

          <div className="bg-white rounded-2xl shadow-lg p-10 mt-20">
            <h2 className="text-3xl font-bold text-blue-700">
              {text.requiredTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {text.requiredDocs.map((doc, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}

          <div className="bg-white rounded-2xl shadow-lg p-10 mt-16">
            <h2 className="text-3xl font-bold text-blue-700">
              {text.processTitle}
            </h2>

            <div className="mt-8 space-y-4">
              {text.process.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-l-4 border-blue-700 pl-5 py-3"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}

          <div className="bg-blue-700 rounded-2xl text-white text-center py-14 mt-16">
            <h2 className="text-3xl font-bold">{text.contact}</h2>

            <Link
              to="/contact"
              className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              {text.button}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ServicesPage;
