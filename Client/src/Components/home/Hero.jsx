import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function Hero() {
  const { language } = useLanguage();

  const t = {
    ta: {
      title1: "ஸ்மார்ட் ஆவண",
      title2: "எழுத்தர் ",
      description:
        "சொத்து பதிவு, விற்பனைப் பத்திரம், செட்டில்மென்ட், பட்டா பெயர் மாற்றம், வில்லங்கச் சான்றிதழ் மற்றும் அனைத்து சட்ட ஆவண சேவைகளும் ஒரே இடத்தில்.",
      book: "முன்பதிவு செய்யுங்கள்",
      learn: "மேலும் அறிய",
    },

    en: {
      title1: "Smart Document",
      title2: "Writer ",
      description:
        "Property Registration, Sale Deed, Settlement, Patta Transfer, Encumbrance Certificate and complete legal documentation.",
      book: "Book Appointment",
      learn: "Learn More",
    },
  };

  const text = t[language];

  return (
    <section className="bg-gradient-to-br from-primary to-accent text-white overflow-hidden">
      <div className="container-custom min-h-[85vh] flex items-center">
        <div className="max-w-3xl">

          {/* Heading */}
          <motion.h1
            key={language}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              min-h-[170px]
              md:min-h-[210px]
              flex
              flex-col
              justify-center
            "
          >
            {text.title1}
            <span>{text.title2}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            key={`${language}-desc`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="
              mt-8
              text-xl
              text-blue-100
              leading-8
              min-h-[110px]
              md:min-h-[90px]
            "
          >
            {text.description}
          </motion.p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              {text.book}
            </button>

            <button className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-primary transition">
              {text.learn}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;