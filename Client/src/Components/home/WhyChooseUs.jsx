import {
  FaUserShield,
  FaClock,
  FaFileSignature,
  FaHeadset,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function WhyChooseUs() {
  const { language } = useLanguage();

  const t = {
    ta: {
      heading: "ஏன் எங்களைத் தேர்வு செய்ய வேண்டும்?",
      subtitle:
        "ஆவண எழுத்தாளர்கள், அலுவலக ஊழியர்கள் மற்றும் பொதுமக்களுக்கான நவீன டிஜிட்டல் சேவை.",

      features: [
        {
          icon: FaUserShield,
          title: "நம்பகமான ஆவண சேவை",
          description:
            "சட்டப்பூர்வமான மற்றும் துல்லியமான ஆவணங்களை முழு வெளிப்படைத்தன்மையுடன் தயாரித்து வழங்குகிறோம்.",
        },
        {
          icon: FaClock,
          title: "விரைவான செயல்முறை",
          description:
            "பதிவு செயல்முறையின் ஒவ்வொரு நிலையையும் ஆன்லைனில் எளிதாக கண்காணிக்கலாம்.",
        },
        {
          icon: FaFileSignature,
          title: "டிஜிட்டல் ஆவண அணுகல்",
          description:
            "உங்கள் கணக்கிலிருந்து பதிவு செய்யப்பட்ட ஆவணங்களை எப்போது வேண்டுமானாலும் பதிவிறக்கம் செய்யலாம்.",
        },
        {
          icon: FaHeadset,
          title: "24×7 உதவி",
          description:
            "எப்போது வேண்டுமானாலும் எங்களை தொலைபேசி அல்லது WhatsApp மூலம் தொடர்பு கொள்ளலாம்.",
        },
      ],
    },

    en: {
      heading: "Why Choose Us?",
      subtitle:
        "A modern digital platform for document writers, staff and clients.",

      features: [
        {
          icon: FaUserShield,
          title: "Trusted Documentation",
          description:
            "Accurate legal document preparation with complete transparency.",
        },
        {
          icon: FaClock,
          title: "Fast Processing",
          description:
            "Track every stage of your registration without visiting the office.",
        },
        {
          icon: FaFileSignature,
          title: "Digital Document Access",
          description:
            "Download your completed documents anytime from your account.",
        },
        {
          icon: FaHeadset,
          title: "24/7 Support",
          description:
            "Call or WhatsApp our office whenever you need assistance.",
        },
      ],
    },
  };

  const text = t[language];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container-custom">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2
            className="
              section-title
              min-h-[60px]
              flex
              items-center
              justify-center
              transition-all
              duration-300
            "
          >
            {text.heading}
          </h2>

          <p
            className="
              section-subtitle
              mx-auto
              min-h-[70px]
              flex
              items-center
              justify-center
              transition-all
              duration-300
            "
          >
            {text.subtitle}
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {text.features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-2xl
                  shadow-card
                  p-8
                  flex
                  gap-6
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  h-full
                "
              >
                <div className="w-16 h-16 rounded-xl bg-primary flex justify-center items-center flex-shrink-0">
                  <Icon className="text-white text-3xl" />
                </div>

                <div className="flex-1">

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-navy
                      min-h-[64px]
                      flex
                      items-center
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-gray-600
                      mt-3
                      leading-7
                      transition-all
                      duration-300
                    "
                  >
                    {item.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;