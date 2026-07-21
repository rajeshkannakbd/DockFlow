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
      en: "Professional preparation and registration of property Sale Deeds.",
    },

    documents: {
      ta: [
        "ஆதார் அட்டை",
        "பான் அட்டை",
        "பாஸ்போர்ட் அளவு புகைப்படம்",
        "தாய் பத்திரம்",
        "பட்டா",
        "சிட்டா / அடங்கல்",
        "வில்லங்கச் சான்றிதழ் (EC)",
        "சொத்து வரி ரசீது",
        "விற்பவர் மற்றும் வாங்குபவர் அடையாள ஆவணங்கள்",
        "சாட்சியாளர்களின் ஆதார் அட்டை",
      ],

      en: [
        "Aadhaar Card",
        "PAN Card",
        "Passport Size Photo",
        "Parent Deed",
        "Patta",
        "Chitta / Adangal",
        "Encumbrance Certificate (EC)",
        "Property Tax Receipt",
        "Buyer & Seller Identity Proof",
        "Witness Aadhaar Cards",
      ],
    },
  },

  {
    id: 2,
    titleTa: "தானப் பத்திரம்",
    titleEn: "Gift Deed",
    icon: FaGift,

    description: {
      ta: "சொத்து உரிமையை தானமாக மாற்றுவதற்கான ஆவணத் தயாரிப்பு மற்றும் பதிவு.",
      en: "Transfer ownership through a legally registered Gift Deed.",
    },

    documents: {
      ta: [
        "ஆதார் அட்டை",
        "பான் அட்டை",
        "தாய் பத்திரம்",
        "பட்டா",
        "EC",
        "புகைப்படம்",
        "வரி ரசீது",
        "தானம் வழங்குபவர் மற்றும் பெறுபவர் அடையாள ஆவணங்கள்",
      ],

      en: [
        "Aadhaar Card",
        "PAN Card",
        "Parent Deed",
        "Patta",
        "Encumbrance Certificate",
        "Passport Size Photo",
        "Tax Receipt",
        "Donor & Donee Identity Proof",
      ],
    },
  },

  {
    id: 3,
    titleTa: "செட்டில்மென்ட் பத்திரம்",
    titleEn: "Settlement Deed",
    icon: FaHome,

    description: {
      ta: "குடும்ப உறுப்பினர்களுக்கிடையிலான சொத்து செட்டில்மென்ட் ஆவண சேவைகள்.",
      en: "Property settlement documentation among family members.",
    },

    documents: {
      ta: [
        "ஆதார் அட்டை",
        "பான் அட்டை",
        "தாய் பத்திரம்",
        "பட்டா",
        "EC",
        "குடும்ப உறவு சான்று",
        "வரி ரசீது",
      ],

      en: [
        "Aadhaar Card",
        "PAN Card",
        "Parent Deed",
        "Patta",
        "Encumbrance Certificate",
        "Family Relationship Proof",
        "Property Tax Receipt",
      ],
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

    documents: {
      ta: [
        "ஆதார் அட்டை",
        "பான் அட்டை",
        "புகைப்படம்",
        "அதிகாரம் வழங்குபவர் மற்றும் பெறுபவர் விவரங்கள்",
        "சொத்து ஆவணங்கள் (தேவைப்பட்டால்)",
      ],

      en: [
        "Aadhaar Card",
        "PAN Card",
        "Passport Size Photo",
        "Principal & Agent Details",
        "Property Documents (if applicable)",
      ],
    },
  },

  {
    id: 5,
    titleTa: "பட்டா பெயர் மாற்றம்",
    titleEn: "Patta Transfer",
    icon: FaLandmark,

    description: {
      ta: "பட்டா பெயர் மாற்றத்திற்கான முழுமையான வழிகாட்டல் மற்றும் சேவை.",
      en: "Complete assistance for Patta transfer after registration.",
    },

    documents: {
      ta: [
        "புதிய பதிவு பத்திரம்",
        "ஆதார் அட்டை",
        "பட்டா",
        "வரி ரசீது",
        "EC",
        "விண்ணப்ப படிவம்",
      ],

      en: [
        "Registered Sale Deed",
        "Aadhaar Card",
        "Patta",
        "Property Tax Receipt",
        "Encumbrance Certificate",
        "Application Form",
      ],
    },
  },

  {
    id: 6,
    titleTa: "வில்லங்கச் சான்றிதழ் மற்றும் நில ஆவணங்கள்",
    titleEn: "EC & Land Records",
    icon: FaFileAlt,

    description: {
      ta: "வில்லங்கச் சான்றிதழ் (EC), சிட்டா, அடங்கல், FMB உள்ளிட்ட நில ஆவண சேவைகள்.",
      en: "EC, Chitta, Adangal, FMB Sketch and Land Record services.",
    },

    documents: {
      ta: [
        "சொத்து விவரங்கள்",
        "சர்வே எண்",
        "பட்டா",
        "பழைய பத்திரம்",
        "ஆதார் அட்டை",
      ],

      en: [
        "Property Details",
        "Survey Number",
        "Patta",
        "Previous Deed",
        "Aadhaar Card",
      ],
    },
  },

  {
    id: 7,
    titleTa: "அடமானப் பத்திரம்",
    titleEn: "Mortgage Deed",
    icon: FaHandshake,

    description: {
      ta: "அடமானப் பத்திரம் தயாரித்தல் மற்றும் பதிவு சேவைகள்.",
      en: "Preparation and registration of Mortgage documents.",
    },

    documents: {
      ta: [
        "ஆதார் அட்டை",
        "பான் அட்டை",
        "தாய் பத்திரம்",
        "பட்டா",
        "EC",
        "வங்கி அனுமதி கடிதம்",
      ],

      en: [
        "Aadhaar Card",
        "PAN Card",
        "Parent Deed",
        "Patta",
        "Encumbrance Certificate",
        "Bank Approval Letter",
      ],
    },
  },

  {
    id: 8,
    titleTa: "குத்தகை ஒப்பந்தம்",
    titleEn: "Lease Agreement",
    icon: FaBuilding,

    description: {
      ta: "வணிக மற்றும் குடியிருப்பு குத்தகை ஒப்பந்த ஆவண சேவைகள்.",
      en: "Commercial and Residential Lease Agreement documentation.",
    },

    documents: {
      ta: [
        "வீட்டு உரிமையாளர் ஆதார்",
        "குத்தகையாளர் ஆதார்",
        "புகைப்படங்கள்",
        "சொத்து ஆவணங்கள்",
        "முகவரி சான்று",
      ],

      en: [
        "Owner Aadhaar Card",
        "Tenant Aadhaar Card",
        "Passport Size Photos",
        "Property Documents",
        "Address Proof",
      ],
    },
  },
];

export default services;