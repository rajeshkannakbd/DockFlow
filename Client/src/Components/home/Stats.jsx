import { useLanguage } from "../../context/LanguageContext";

function Stats() {
  const { language } = useLanguage();

  const stats = {
    ta: [
      {
        number: "2500+",
        title: "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
      },
      {
        number: "15+",
        title: "ஆண்டுகள் அனுபவம்",
      },
      {
        number: "6000+",
        title: "பதிவு செய்யப்பட்ட ஆவணங்கள்",
      },
      {
        number: "99%",
        title: "வெற்றி விகிதம்",
      },
    ],

    en: [
      {
        number: "2500+",
        title: "Happy Clients",
      },
      {
        number: "15+",
        title: "Years Experience",
      },
      {
        number: "6000+",
        title: "Documents Registered",
      },
      {
        number: "99%",
        title: "Success Rate",
      },
    ],
  };

  return (
    <section className="bg-primary py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats[language].map((item, index) => (
            <div
              key={index}
              className="text-center text-white flex flex-col items-center"
            >
              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p
                className="
                  mt-4
                  text-lg
                  leading-7
                  min-h-[56px]
                  flex
                  items-center
                  justify-center
                  text-center
                  transition-all
                  duration-300
                "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;