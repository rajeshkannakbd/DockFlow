import { useLanguage } from "../../context/LanguageContext";

function Process() {
  const { language } = useLanguage();

  const t = {
    ta: {
      heading: "பதிவு செயல்முறை",
      subtitle:
        "உங்கள் ஆவண பதிவு செயல்முறையின் ஒவ்வொரு நிலையையும் ஆன்லைனில் கண்காணிக்கலாம்.",

      steps: [
        "முன்பதிவு செய்யுங்கள்",
        "ஆவணங்களை சமர்ப்பிக்கவும்",
        "சரிபார்ப்பு",
        "ஆவணம் தயாரித்தல்",
        "பதிவு",
        "ஆவணத்தை பெற்றுக்கொள்ளுங்கள்",
      ],
    },

    en: {
      heading: "Registration Process",
      subtitle:
        "Track every step of your document registration online.",

      steps: [
        "Book Appointment",
        "Submit Documents",
        "Verification",
        "Document Drafting",
        "Registration",
        "Collect Original",
      ],
    },
  };

  const text = t[language];

  return (
    <section className="py-24">
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

        {/* Steps */}

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
          {text.steps.map((step, index) => (
            <div
              key={index}
              className="
                bg-white
                shadow-card
                rounded-2xl
                p-6
                text-center
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                flex-col
                items-center
                h-full
              "
            >
              <div className="w-14 h-14 rounded-full bg-primary text-white flex justify-center items-center text-xl font-bold flex-shrink-0">
                {index + 1}
              </div>

              <h3
                className="
                  mt-6
                  font-semibold
                  text-navy
                  leading-6
                  min-h-[56px]
                  flex
                  items-center
                  justify-center
                  text-center
                "
              >
                {step}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;