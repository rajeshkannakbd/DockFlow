import {
  FaFileContract,
  FaGift,
  FaHome,
  FaFileSignature,
  FaLandmark,
  FaHandshake,
  FaFileAlt,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    titleTa: "விற்பனைப் பத்திரம்",
    titleEn: "Sale Deed",
    icon: FaFileContract,
    description: {
      ta: "சொத்து விற்பனைப் பத்திரம் தயாரித்தல் மற்றும் பதிவு செய்வதில் முழுமையான சேவை.",
      en: "Professional preparation and registration of property sale deeds.",
    },
  },

  {
    id: 2,
    titleTa: "தானப் பத்திரம்",
    titleEn: "Gift Deed",
    icon: FaGift,
    description: {
      ta: "சொத்து உரிமையை தானமாக மாற்றுவதற்கான ஆவணத் தயாரிப்பு மற்றும் பதிவு.",
      en: "Secure transfer of property ownership through gift deeds.",
    },
  },

  {
    id: 3,
    titleTa: "செட்டில்மென்ட் பத்திரம்",
    titleEn: "Settlement Deed",
    icon: FaHome,
    description: {
      ta: "குடும்ப உறுப்பினர்களுக்கிடையிலான சொத்து செட்டில்மென்ட் ஆவண சேவைகள்.",
      en: "Property settlement documentation for family members.",
    },
  },

  {
    id: 4,
    titleTa: "அதிகாரப் பத்திரம்",
    titleEn: "Power of Attorney",
    icon: FaFileSignature,
    description: {
      ta: "பொது மற்றும் சிறப்பு அதிகாரப் பத்திரம் தயாரித்தல் மற்றும் பதிவு.",
      en: "Drafting and registration of General and Special Power of Attorney.",
    },
  },

  {
    id: 5,
    titleTa: "பட்டா பெயர் மாற்றம்",
    titleEn: "Patta Transfer",
    icon: FaLandmark,
    description: {
      ta: "பட்டா பெயர் மாற்றத்திற்கான முழுமையான வழிகாட்டல் மற்றும் சேவை.",
      en: "Complete assistance for Patta name transfer process.",
    },
  },

  {
    id: 6,
    titleTa: "வில்லங்கச் சான்றிதழ் மற்றும் நில ஆவணங்கள்",
    titleEn: "EC & Land Records",
    icon: FaFileAlt,
    description: {
      ta: "வில்லங்கச் சான்றிதழ் (EC), சிட்டா, அடங்கல், FMB மற்றும் தொடர்புடைய நில ஆவண சேவைகள்.",
      en: "Encumbrance Certificate, Chitta, Adangal & FMB services.",
    },
  },

  {
    id: 7,
    titleTa: "அடமானப் பத்திரம்",
    titleEn: "Mortgage Deed",
    icon: FaHandshake,
    description: {
      ta: "அடமானப் பத்திரம் தயாரித்தல் மற்றும் பதிவு சேவைகள்.",
      en: "Mortgage document preparation and registration.",
    },
  },

  {
    id: 8,
    titleTa: "குத்தகை ஒப்பந்தம்",
    titleEn: "Lease Agreement",
    icon: FaBuilding,
    description: {
      ta: "வணிக மற்றும் குடியிருப்பு குத்தகை ஒப்பந்த ஆவண சேவைகள்.",
      en: "Commercial and residential lease documentation.",
    },
  },
];

export default services;