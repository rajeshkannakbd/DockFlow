import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function ServicesPage() {
  const { language } = useLanguage();

  const t = {
    ta: {
      title: "எங்கள் ஆவண சேவைகள்",
      subtitle:
        "அனைத்து வகையான பதிவு மற்றும் சட்ட ஆவண சேவைகளும் ஒரே இடத்தில்.",

      processTitle: "ஆவண பதிவு செயல்முறை",

      process: [
        "1. தேவையான ஆவணங்களை கொண்டு வரவும்.",
        "2. ஆவணங்கள் சரிபார்க்கப்படும்.",
        "3. வரைவு ஆவணம் தயாரிக்கப்படும்.",
        "4. வாடிக்கையாளர் ஒப்புதல் பெறப்படும்.",
        "5. சார்பதிவாளர் அலுவலகத்தில் பதிவு செய்யப்படும்.",
        "6. பதிவு செய்யப்பட்ட அசல் ஆவணம் வழங்கப்படும்.",
      ],

      requiredTitle: "பொதுவாக தேவையான ஆவணங்கள்",

      requiredDocs: [
        "ஆதார் அட்டை",
        "பான் அட்டை",
        "பாஸ்போர்ட் அளவு புகைப்படம்",
        "சொத்து தாய் பத்திரம்",
        "பட்டா",
        "சிட்டா / அடங்கல்",
        "வில்லங்கச் சான்றிதழ் (EC)",
        "வரி ரசீது",
        "அடையாளச் சாட்சிகள்",
      ],

      services: [
        {
          title: "விற்பனைப் பத்திரம்",
          en: "Sale Deed",
          description:
            "சொத்து உரிமையை விற்பவரிடமிருந்து வாங்குபவருக்கு சட்டபூர்வமாக மாற்றும் ஆவணம்.",
        },
        {
          title: "தானப் பத்திரம்",
          en: "Gift Deed",
          description:
            "சொத்தை இலவசமாக மற்றொருவருக்கு மாற்றும் சட்ட ஆவணம்.",
        },
        {
          title: "செட்டில்மென்ட் பத்திரம்",
          en: "Settlement Deed",
          description:
            "குடும்ப உறுப்பினர்களுக்கிடையே சொத்து உரிமையை மாற்ற பயன்படும் ஆவணம்.",
        },
        {
          title: "அதிகாரப் பத்திரம்",
          en: "Power of Attorney",
          description:
            "ஒருவரின் சார்பாக மற்றொருவர் செயல்பட அனுமதிக்கும் ஆவணம்.",
        },
        {
          title: "பட்டா பெயர் மாற்றம்",
          en: "Patta Transfer",
          description:
            "சொத்து உரிமை மாற்றத்திற்குப் பிறகு பட்டா பெயரை மாற்றும் சேவை.",
        },
        {
          title: "வில்லங்கச் சான்றிதழ்",
          en: "Encumbrance Certificate",
          description:
            "சொத்தின் சட்ட நிலையை உறுதிப்படுத்தும் அதிகாரப்பூர்வ சான்றிதழ்.",
        },
        {
          title: "அடமானப் பத்திரம்",
          en: "Mortgage Deed",
          description:
            "கடன் பெறுவதற்காக சொத்தை அடமானம் வைக்கும் ஆவணம்.",
        },
        {
          title: "குத்தகை ஒப்பந்தம்",
          en: "Lease Agreement",
          description:
            "வீடு அல்லது வணிக இடங்களை குத்தகைக்கு விடும் சட்ட ஒப்பந்தம்.",
        },
      ],

      contact: "மேலும் தகவலுக்கு தொடர்பு கொள்ளுங்கள்",
      button: "இப்போது தொடர்பு கொள்ளுங்கள்",
    },

    en: {
      title: "Our Document Services",
      subtitle:
        "Complete registration and legal documentation services under one roof.",

      processTitle: "Registration Process",

      process: [
        "1. Bring all required documents.",
        "2. Document verification.",
        "3. Draft preparation.",
        "4. Client approval.",
        "5. Registration at the Sub-Registrar Office.",
        "6. Collect the registered original document.",
      ],

      requiredTitle: "Common Required Documents",

      requiredDocs: [
        "Aadhaar Card",
        "PAN Card",
        "Passport Size Photos",
        "Parent / Previous Deed",
        "Patta",
        "Chitta / Adangal",
        "Encumbrance Certificate (EC)",
        "Property Tax Receipt",
        "Identity Witnesses",
      ],

      services: [
        {
          title: "Sale Deed",
          en: "Sale Deed",
          description:
            "Legal transfer of ownership from seller to buyer.",
        },
        {
          title: "Gift Deed",
          en: "Gift Deed",
          description:
            "Transfer ownership without monetary consideration.",
        },
        {
          title: "Settlement Deed",
          en: "Settlement Deed",
          description:
            "Property settlement among family members.",
        },
        {
          title: "Power of Attorney",
          en: "Power of Attorney",
          description:
            "Authorize another person to act on your behalf.",
        },
        {
          title: "Patta Transfer",
          en: "Patta Transfer",
          description:
            "Transfer Patta ownership after property registration.",
        },
        {
          title: "Encumbrance Certificate",
          en: "Encumbrance Certificate",
          description:
            "Shows the legal history of the property.",
        },
        {
          title: "Mortgage Deed",
          en: "Mortgage Deed",
          description:
            "Legal mortgage document for securing loans.",
        },
        {
          title: "Lease Agreement",
          en: "Lease Agreement",
          description:
            "Agreement for residential or commercial leasing.",
        },
      ],

      contact: "Need more information?",
      button: "Contact Us",
    },
  };

  const text = t[language];

  return (
    <>
    <Navbar />
    <div className="bg-slate-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-navy">{text.title}</h1>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {text.services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-primary">
                {service.title}
              </h2>

              {language === "ta" && (
                <p className="text-sm text-gray-500 mt-1">
                  {service.en}
                </p>
              )}

              <p className="mt-5 text-gray-600 leading-8">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-10 mt-16">
          <h2 className="text-3xl font-bold text-primary">
            {text.requiredTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {text.requiredDocs.map((doc, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <span className="text-green-600 text-xl">✓</span>
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-10 mt-16">
          <h2 className="text-3xl font-bold text-primary">
            {text.processTitle}
          </h2>

          <div className="mt-8 space-y-4">
            {text.process.map((step, index) => (
              <div
                key={index}
                className="border-l-4 border-primary pl-4 py-2"
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-2xl text-white text-center py-14 mt-16">
          <h2 className="text-3xl font-bold">
            {text.contact}
          </h2>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            {text.button}
          </Link>
        </div>
      </div>
    </div>
    <Footer />  
    </>
  );
}

export default ServicesPage;  