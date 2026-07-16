import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useLanguage } from "../context/LanguageContext";
import {
  FaFileSignature,
  FaHandshake,
  FaUserShield,
  FaClock,
} from "react-icons/fa";

function About() {
  const { language } = useLanguage();

  const t = {
    ta: {
      heroTitle: "எங்களை பற்றி",
      heroSubtitle:
        "செல்வி ஆவண எழுத்தர்கள் - அனைத்து வகையான பதிவு மற்றும் சட்ட ஆவண சேவைகளுக்கான உங்கள் நம்பகமான துணை.",

      whoTitle: "நாங்கள் யார்?",
      whoDesc:
        "செல்வி ஆவண எழுத்தர்கள் பல ஆண்டுகளாக சொத்து பதிவு, விற்பனைப் பத்திரம், தானப் பத்திரம், செட்டில்மென்ட் பத்திரம், பட்டா பெயர் மாற்றம், வில்லங்கச் சான்றிதழ், அடமானம் மற்றும் பிற சட்ட ஆவண சேவைகளை மக்களுக்கு நம்பகத்தன்மையுடன் வழங்கி வருகின்றோம்.",

      missionTitle: "எங்கள் நோக்கம்",
      mission:
        "ஒவ்வொரு வாடிக்கையாளருக்கும் துல்லியமான, வெளிப்படையான மற்றும் விரைவான ஆவண சேவைகளை வழங்குவது எங்கள் நோக்கமாகும்.",

      featureTitle: "ஏன் எங்களை தேர்வு செய்ய வேண்டும்?",

      features: [
        {
          icon: FaUserShield,
          title: "நம்பகமான சேவை",
          desc: "சட்டப்படி சரியான ஆவணங்கள் தயாரிக்கப்படும்.",
        },
        {
          icon: FaClock,
          title: "விரைவான செயல்முறை",
          desc: "குறைந்த நேரத்தில் பதிவு செயல்முறையை முடிக்க உதவுகிறோம்.",
        },
        {
          icon: FaFileSignature,
          title: "அனுபவம் வாய்ந்த ஆவண எழுத்தர்கள்",
          desc: "அனைத்து வகையான சட்ட ஆவணங்களிலும் அனுபவம்.",
        },
        {
          icon: FaHandshake,
          title: "வாடிக்கையாளர் நம்பிக்கை",
          desc: "ஆயிரக்கணக்கான மக்களின் நம்பிக்கையை பெற்றுள்ளோம்.",
        },
      ],

      ctaTitle: "உங்களுக்கு உதவி தேவையா?",
      ctaText:
        "எங்கள் அலுவலகத்தை தொடர்பு கொண்டு உங்கள் ஆவண தேவைகளை எளிதாக நிறைவேற்றுங்கள்.",
      button: "எங்களை தொடர்பு கொள்ளுங்கள்",
    },

    en: {
      heroTitle: "About Us",
      heroSubtitle:
        "Selvi Document Writers – Your trusted partner for property registration and legal documentation.",

      whoTitle: "Who We Are",
      whoDesc:
        "Selvi Document Writers has been providing reliable document writing and registration services including Sale Deed, Gift Deed, Settlement Deed, Patta Transfer, Encumbrance Certificate, Mortgage, Lease Agreement and many other legal documentation services.",

      missionTitle: "Our Mission",
      mission:
        "Our mission is to provide accurate, transparent and fast document services with complete customer satisfaction.",

      featureTitle: "Why Choose Us?",

      features: [
        {
          icon: FaUserShield,
          title: "Trusted Service",
          desc: "Legally accurate documentation with transparency.",
        },
        {
          icon: FaClock,
          title: "Fast Processing",
          desc: "Quick and efficient registration support.",
        },
        {
          icon: FaFileSignature,
          title: "Experienced Writers",
          desc: "Expertise in all types of legal documents.",
        },
        {
          icon: FaHandshake,
          title: "Customer Trust",
          desc: "Thousands of satisfied clients over the years.",
        },
      ],

      ctaTitle: "Need Assistance?",
      ctaText:
        "Contact our office today and let us help with your document registration requirements.",
      button: "Contact Us",
    },
  };

  const text = t[language];

  return (
    <>
      <Navbar />

      <main className="bg-slate-50">

        {/* Hero */}
        <section className="bg-primary text-white py-24">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold">{text.heroTitle}</h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg">
              {text.heroSubtitle}
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-20">
          <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900"
                alt="Office"
                className="rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-primary">
                {text.whoTitle}
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                {text.whoDesc}
              </p>

              <h3 className="text-3xl font-bold mt-10 text-primary">
                {text.missionTitle}
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                {text.mission}
              </p>
            </div>

          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="container-custom">

            <h2 className="text-center text-4xl font-bold text-primary">
              {text.featureTitle}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {text.features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 transition"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto">
                      <Icon className="text-white text-3xl" />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-white">
          <div className="container-custom text-center">

            <h2 className="text-4xl font-bold">
              {text.ctaTitle}
            </h2>

            <p className="mt-6 text-lg max-w-3xl mx-auto">
              {text.ctaText}
            </p>

            <a
              href="/contact"
              className="inline-block mt-10 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              {text.button}
            </a>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;