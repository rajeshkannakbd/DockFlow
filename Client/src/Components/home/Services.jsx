import services from "../../constants/services";
import { useLanguage } from "../../context/LanguageContext";

function Services() {
  const { language } = useLanguage();

  const t = {
    ta: {
      heading: "எங்கள் சேவைகள்",
      subtitle:
        "அனைத்து வகையான ஆவண எழுத்து மற்றும் பதிவு சேவைகள் ஒரே இடத்தில்.",
    },

    en: {
      heading: "Our Services",
      subtitle:
        "Complete document writing and registration services under one roof.",
    },
  };

  const text = t[language];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2
            className="
              section-title
              transition-all
              duration-300
              min-h-[60px]
              flex
              items-center
              justify-center
            "
          >
            {text.heading}
          </h2>

          <p
            className="
              section-subtitle
              mx-auto
              transition-all
              duration-300
              min-h-[70px]
              flex
              items-center
              justify-center
            "
          >
            {text.subtitle}
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
                  <Icon className="text-white text-3xl" />
                </div>

                {/* Title */}
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-navy leading-tight">
                    {service.titleTa}
                  </h3>

                  <p className="text-base text-gray-500">{service.titleEn}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 mt-5 leading-7 flex-grow transition-all duration-300">
                  {service.description[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
