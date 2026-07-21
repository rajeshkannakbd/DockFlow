import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { language } = useLanguage();

  const t = {
    ta: {
      copyright:
        "© 2026 செல்வி ஆவண எழுத்தர்கள் | அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
    },

    en: {
      copyright: "© 2026 Selvi Document Writers | All Rights Reserved",
    },
  };

  return (
    <footer className="bg-navy text-white py-8 mt-20">
      <div className="container-custom">
        <p
          className="
    text-center
    text-sm
    md:text-base
    leading-7
    whitespace-normal
    md:whitespace-nowrap
  "
        >
          {t[language].copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
