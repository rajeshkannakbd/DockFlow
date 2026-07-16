import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { language } = useLanguage();

  const t = {
    ta: {
      copyright: "© 2026 செல்வி ஆவண எழுத்தர்கள் | அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
    },

    en: {
      copyright: "© 2026 Selvi Document Writers | All Rights Reserved",
    },
  };

  return (
    <footer className="bg-navy text-white py-10 mt-20 transition-all duration-300">
      <div className="container-custom flex justify-center items-center">
        <p
          className="
            text-center
            min-h-[28px]
            whitespace-nowrap
            transition-all
            duration-300
            ease-in-out
          "
        >
          {t[language].copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;