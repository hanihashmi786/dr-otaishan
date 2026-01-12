export interface TimelineItem {
  year: string
  hijriYear?: string
  title: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  category: "education" | "military" | "business" | "government"
  certificateUrl?: string
  websiteUrl?: string
}

export interface LeadershipRole {
  title: {
    en: string
    ar: string
  }
  organization: {
    en: string
    ar: string
  }
  period: string
  description?: {
    en: string
    ar: string
  }
  websiteUrl?: string
}

export interface Membership {
  title: {
    en: string
    ar: string
  }
  organization: {
    en: string
    ar: string
  }
  role?: {
    en: string
    ar: string
  }
}

export interface Award {
  title: {
    en: string
    ar: string
  }
  description?: {
    en: string
    ar: string
  }
  certificateUrl?: string
}

export interface Publication {
  title: {
    en: string
    ar: string
  }
  parts: Array<{
    en: string
    ar: string
    fileUrl?: string
  }>
}

export const profileInfo = {
  name: {
    en: "Dr. Abdulaziz Turki Abdullah Turki Al-Otaishan",
    ar: "د. عبد العزيز بن تركي عبد الله تركي العطيشان",
  },
  title: {
    en: "Civil Engineer | Retired Brigadier General | Business Leader",
    ar: "مهندس مدني | عميد متقاعد | قائد أعمال",
  },
  summary: {
    en: "Distinguished Saudi civil engineer with a PhD in Project Management, former Director General of Military Works, and accomplished business executive with extensive experience in construction management and government advisory roles.",
    ar: "مهندس مدني سعودي متميز حاصل على درجة الدكتوراه في إدارة المشاريع، مدير عام الأشغال العسكرية السابق، ومدير تنفيذي للأعمال ذو خبرة واسعة في إدارة الإنشاءات والأدوار الاستشارية الحكومية.",
  },
  tribe: {
    en: "Tameem",
    ar: "تميم",
  },
  birthDate: {
    en: "9/9/1367 H",
    ar: "9/9/1367 هـ",
  },
  birthPlace: {
    en: "Dammam, Saudi Arabia",
    ar: "الدمام، المملكة العربية السعودية",
  },
}

export const timeline: TimelineItem[] = [
  {
    year: "1960",
    hijriYear: "1380",
    title: {
      en: "Elementary Education",
      ar: "التعليم الابتدائي",
    },
    description: {
      en: "Completed elementary stage at 2nd Elementary School, Dammam",
      ar: "إنهاء المرحلة الابتدائية من المدرسة الابتدائية الثانية بالدمام",
    },
    category: "education",
  },
  {
    year: "1966",
    hijriYear: "1386",
    title: {
      en: "Secondary Education",
      ar: "التعليم الثانوي",
    },
    description: {
      en: "Completed secondary stage at Intermediate and Secondary School, Dammam - Scientific Section. Ranked 26th among all scientific section graduates in KSA",
      ar: "إنهاء المرحلة الثانوية من المدرسة المتوسطة والثانوية بالدمام قسم علمي وكان الترتيب السادس والعشرون من جميع خريجي القسم العلمي بالمملكة",
    },
    category: "education",
  },
  {
    year: "1970",
    hijriYear: "1390",
    title: {
      en: "Bachelor of Civil Engineering",
      ar: "بكالوريوس الهندسة المدنية",
    },
    description: {
      en: "Obtained Bachelor degree in Civil Engineering from College of Saint Martin, Olympia City, Washington State, USA",
      ar: "الحصول على درجة البكالوريوس في الهندسة المدنية من كلية سانت مارتن بمدينة أولمبيا بولاية واشنطن بالولايات المتحدة الأمريكية",
    },
    category: "education",
    certificateUrl: "/certificates/All-Certificates.pdf",
  },
  {
    year: "1970",
    hijriYear: "1390",
    title: {
      en: "Joined Ministry of Defense",
      ar: "الالتحاق بوزارة الدفاع",
    },
    description: {
      en: "Joined Ministry of Defense and Aviation as First Lieutenant Engineer - Supervising Engineer at Engineering Department, Saudi Engineers Corps",
      ar: "التحقت بالعمل بوزارة الدفاع والطيران بمرتبة ملازم أول مهندس بوظيفة مهندس مشرف بالإدارة الهندسية بسلاح المهندسين السعودي",
    },
    category: "military",
  },
  {
    year: "1971-1972",
    hijriYear: "1391-1392",
    title: {
      en: "US Corps of Engineers Training",
      ar: "التدريب مع سلاح المهندسين الأمريكي",
    },
    description: {
      en: "Trainee with American Engineers Corps during construction of King Abdulaziz Military City, Tabouk, specializing in Project Management",
      ar: "متدرب مع سلاح المهندسين الأمريكي خلال إنشاء مدينة الملك عبد العزيز العسكرية بتبوك والتخصص في إدارة المشاريع",
    },
    category: "military",
  },
  {
    year: "1972",
    hijriYear: "1392",
    title: {
      en: "Diploma in Construction Management",
      ar: "دبلوم إدارة الإنشاء",
    },
    description: {
      en: "Obtained Diploma of Construction Management from American Engineers School at Fort Belvoir Base, Virginia",
      ar: "الحصول على دبلوم إدارة إنشاء من مدرسة المهندسين الأمريكي بقاعدة فورت بلفوار بولاية فرجينيا",
    },
    category: "education",
    certificateUrl: "/certificates/US-Army-Diploma.pdf",
  },
  {
    year: "1974",
    hijriYear: "1394",
    title: {
      en: "Director of Supervision Section",
      ar: "مدير قسم الإشراف",
    },
    description: {
      en: "Appointed Director of Supervision Section - Engineering Department at Saudi Engineers Corps",
      ar: "مدير قسم الإشراف - الإدارة الهندسية بسلاح المهندسين السعودي",
    },
    category: "military",
  },
  {
    year: "Aug 1975",
    title: {
      en: "High Diploma in Public Administration",
      ar: "دبلوم عالي في الإدارة العامة",
    },
    description: {
      en: "Obtained High Diploma in Public Administration from Washington University, Seattle",
      ar: "دبلوم عالي في الإدارة العامة من جامعة واشنطن بمدينة سياتل",
    },
    category: "education",
    certificateUrl: "/certificates/All-Certificates.pdf",
  },
  {
    year: "Dec 1975",
    title: {
      en: "Master of Science - First Honor",
      ar: "ماجستير العلوم - بدرجة الشرف الأولى",
    },
    description: {
      en: "Obtained Master degree in Civil Engineering, majoring in Project Management from Washington University, Seattle with First Honor degree",
      ar: "الحصول على درجة الماجستير بالهندسة المدنية تخصص إدارة مشاريع من جامعة واشنطن بمدينة سياتل بمرتبة الشرف الأولى",
    },
    category: "education",
    certificateUrl: "/certificates/MSc-Certificate.pdf",
  },
  {
    year: "1978",
    hijriYear: "1398",
    title: {
      en: "PhD Candidate",
      ar: "مرشح دكتوراه",
    },
    description: {
      en: "Nominated to PhD degree - Washington University, Seattle",
      ar: "مرشح دكتوراه - جامعة واشنطن - سياتل",
    },
    category: "education",
    certificateUrl: "/certificates/Candidate-in-Philosophy.pdf",
  },
  {
    year: "1979",
    hijriYear: "1399",
    title: {
      en: "PhD with Distinction",
      ar: "دكتوراه بدرجة امتياز",
    },
    description: {
      en: "Obtained PhD degree in Civil Engineering majoring in Project Management and Public Administration from Washington University, Seattle with distinction (First Honor). Thesis: Construction Analysis of paved roads using sulfate as basic or additive substance to asphalt",
      ar: "الحصول على درجة الدكتوراه في الهندسة المدنية تخصص إدارة مشاريع وإدارة عامة من جامعة واشنطن بدرجة امتياز. موضوع البحث: التحليل الإنشائي للطرق المعبدة التي يستخدم فيها الكبريت كمادة أساسية أو مادة مضافة للاسفلت",
    },
    category: "education",
    certificateUrl: "/certificates/PhD-Certificate.pdf",
  },
  {
    year: "1979-1981",
    hijriYear: "1399-1401",
    title: {
      en: "Director of Construction & Maintenance",
      ar: "مدير الإنشاء والصيانة",
    },
    description: {
      en: "Director of Construction and Maintenance Department - Royal Saudi Forces, Ministry of Defense & Aviation",
      ar: "مدير إدارة الإنشاء والصيانة بالقوات الملكية السعودية - وزارة الدفاع والطيران",
    },
    category: "military",
  },
  {
    year: "1981-1983",
    hijriYear: "1401-1403",
    title: {
      en: "Assistant General Manager",
      ar: "مساعد مدير عام",
    },
    description: {
      en: "Assistant General Manager of Military Works - Ministry of Defense and Aviation",
      ar: "مساعد مدير عام الأشغال العسكرية - وزارة الدفاع والطيران",
    },
    category: "military",
  },
  {
    year: "1983-1992",
    hijriYear: "1403-1412",
    title: {
      en: "Director General of Military Works",
      ar: "مدير عام الأشغال العسكرية",
    },
    description: {
      en: "Director General of Military Works - Ministry of Defense and Aviation. Liaison Officer between Saudi Government and American Government for engineering cooperation agreement",
      ar: "مدير عام الأشغال العسكرية - وزارة الدفاع والطيران. ضابط الاتصال ما بين الحكومة السعودية والحكومة الأمريكية لتطبيق اتفاقية التعاون الهندسية",
    },
    category: "military",
  },
  {
    year: "1992",
    hijriYear: "1412",
    title: {
      en: "Retired as Brigadier General",
      ar: "التقاعد برتبة عميد مهندس",
    },
    description: {
      en: "Retired from military service upon request with the rank of Brigadier General",
      ar: "احلت إلى التقاعد بناءً على طلبي برتبة عميد مهندس",
    },
    category: "military",
  },
  {
    year: "1992-present",
    hijriYear: "1412-الآن",
    title: {
      en: "Abdulaziz T. Al-Otaishan Engineering Consutling Co.",
      ar: "مكتب العطيشان مهندسون استشاريون",
    },
    description: {
      en: "Chairman of Board of Directors and Owner of Abdulaziz T. Al-Otaishan Engineering Consutling Co.",
      ar: "رئيس مجلس إدارة وصاحب مكتب العطيشان مهندسون استشاريون",
    },
    category: "business",
    websiteUrl: "https://www.otaishan.com.sa/",
  },
  {
    year: "2006-present",
    title: {
      en: "Saudi-Lebanese Modern Construction",
      ar: "الشركة السعودية اللبنانية للإنشاءات الحديثة",
    },
    description: {
      en: "Chairman of Saudi-Lebanese Modern Construction Company's Board of Directors",
      ar: "رئيس مجلس إدارة الشركة السعودية اللبنانية للإنشاءات الحديثة",
    },
    category: "business",
  },
  {
    year: "2013-2017",
    hijriYear: "1434-1438",
    title: {
      en: "Shura Council Member",
      ar: "عضو مجلس الشورى",
    },
    description: {
      en: "Member of the Consultative Council (Shura Council) - Sixth Session",
      ar: "عضو مجلس الشورى - الدورة السادسة",
    },
    category: "government",
  },
]

export const leadershipRoles: LeadershipRole[] = [
  {
    title: {
      en: "Member of Shura Council",
      ar: "عضو مجلس الشورى",
    },
    organization: {
      en: "Consultative Council of Saudi Arabia",
      ar: "مجلس الشورى",
    },
    period: "1434 - 1438 H (2013-2017)",
  },
  {
    title: {
      en: "Chairman & Owner",
      ar: "رئيس مجلس الإدارة وصاحب",
    },
    organization: {
      en: "Abdulaziz T. Al-Otaisahan Engineering Consutling Co.",
      ar: "مكتب العطيشان مهندسون استشاريون",
    },
    period: "1992 - Present",
    websiteUrl: "https://www.otaishan.com.sa/",
  },
  {
    title: {
      en: "Chairman of Board of Directors",
      ar: "رئيس مجلس الإدارة",
    },
    organization: {
      en: "Saudi-Lebanese Modern Construction Company",
      ar: "الشركة السعودية اللبنانية للإنشاءات الحديثة",
    },
    period: "2006 - Present",
  },
  {
    title: {
      en: "Chairman of Board of Directors",
      ar: "رئيس مجلس الإدارة",
    },
    organization: {
      en: "Construction Works Company (Saudi Projects)",
      ar: "شركة الأشغال الإنشائية المحدودة (سعودي بروجاكس)",
    },
    period: "1412 - 1418 H",
  },
  {
    title: {
      en: "Chairman of Board of Directors",
      ar: "رئيس مجلس الإدارة",
    },
    organization: {
      en: "Modern Industries Development Company, Qassim",
      ar: "شركة تطوير الصناعات الحديثة بالقصيم",
    },
    period: "1412 - 1416 H",
  },
  {
    title: {
      en: "Deputy Chairman",
      ar: "نائب رئيس",
    },
    organization: {
      en: "National Contractors Committee at Chamber of Commerce",
      ar: "اللجنة الوطنية للمقاولين بالغرفة التجارية",
    },
    period: "1414 - 1416 H",
  },
]

export const memberships: Membership[] = [
  {
    title: {
      en: "THAU BETA PI",
      ar: "جمعية ثاو بيتا باي",
    },
    organization: {
      en: "American Association for Engineers with Honor Degrees",
      ar: "الجمعية الأمريكية للمهندسين الحاصلين على درجات الشرف",
    },
    role: {
      en: "Member",
      ar: "عضو",
    },
  },
  {
    title: {
      en: "Asphalt Paving Technologists",
      ar: "جمعية الاسفلت",
    },
    organization: {
      en: "American Asphalt Paving Association",
      ar: "الجمعية الأمريكية للاسفلت",
    },
    role: {
      en: "Member",
      ar: "عضو",
    },
  },
  {
    title: {
      en: "Lawrence D. Miles Value Foundation",
      ar: "مؤسسة لورنس دي مايلز للهندسة القيمية",
    },
    organization: {
      en: "Value Engineering Foundation",
      ar: "مؤسسة الهندسة القيمية",
    },
    role: {
      en: "Trustee",
      ar: "عضو مجلس أمناء",
    },
  },
  {
    title: {
      en: "US Corps of Engineers Regiment",
      ar: "سلاح المهندسين الأمريكي",
    },
    organization: {
      en: "United States Army Corps of Engineers",
      ar: "فوج المهندسين بالجيش الأمريكي",
    },
    role: {
      en: "First Honorary Non-American Member",
      ar: "أول عضو شرف غير أمريكي",
    },
  },
  {
    title: {
      en: "American Value Engineering Association",
      ar: "الجمعية الأمريكية للهندسة القيمية",
    },
    organization: {
      en: "Society of American Value Engineers",
      ar: "جمعية المهندسين الأمريكيين للهندسة القيمية",
    },
    role: {
      en: "Member",
      ar: "عضو",
    },
  },
  {
    title: {
      en: "Value Engineering Branch - KSA & Gulf",
      ar: "فرع الهندسة القيمية - المملكة والخليج",
    },
    organization: {
      en: "American Association for Value Engineering",
      ar: "الجمعية الأمريكية للهندسة القيمية",
    },
    role: {
      en: "Chief / President",
      ar: "رئيس",
    },
  },
  {
    title: {
      en: "Project Management Institute",
      ar: "معهد إدارة المشاريع",
    },
    organization: {
      en: "PMI",
      ar: "معهد إدارة المشاريع",
    },
    role: {
      en: "Member",
      ar: "عضو",
    },
  },
  {
    title: {
      en: "Construction Management Association",
      ar: "جمعية إدارة الإنشاءات",
    },
    organization: {
      en: "Construction Management Association of America",
      ar: "جمعية إدارة الإنشاءات الأمريكية",
    },
    role: {
      en: "Member",
      ar: "عضو",
    },
  },
]

export const awards: Award[] = [
  {
    title: {
      en: "Military Appreciation Medal",
      ar: "ميدالية التقدير العسكرية",
    },
    certificateUrl: "/certificates/King-Award.pdf",
  },
  {
    title: {
      en: "Perfection Medal",
      ar: "ميدالية الإتقان",
    },
  },
  {
    title: {
      en: "Management Medal",
      ar: "ميدالية الإدارة",
    },
  },
  {
    title: {
      en: "Innovation Medal",
      ar: "ميدالية الإبداع",
    },
  },
  {
    title: {
      en: "Leadership Medal",
      ar: "ميدالية القيادة",
    },
  },
  {
    title: {
      en: "King Abdulaziz Badge - Second Class",
      ar: "وسام الملك عبد العزيز من الدرجة الثانية",
    },
  },
]

export const publications: Publication = {
  title: {
    en: "Hot Press Issues - Eight-Part Book Series",
    ar: "قضايا صحفية ساخنة - سلسلة كتب من ثمانية أجزاء",
  },
  parts: [
    {
      en: "Part One: Concerns and Issues of Engineering Profession",
      ar: "الجزء الأول: هموم وقضايا المهنة الهندسية",
      fileUrl: "/books/part-1.pdf",
    },
    {
      en: "Part Two: Management & Economics Issues",
      ar: "الجزء الثاني: قضايا الإدارة والاقتصاد",
      fileUrl: "/books/part-2.pdf",
    },
    {
      en: "Part Three: Media & Public Relations Issues",
      ar: "الجزء الثالث: قضايا الإعلام والعلاقات العامة",
      fileUrl: "/books/part-3.pdf",
    },
    {
      en: "Part Four: Issues of Policy and International Relations",
      ar: "الجزء الرابع: قضايا السياسة والعلاقات الدولية",
      fileUrl: "/books/part-4.pdf",
    },
    {
      en: "Part Five: Education and Scientific Research Issues",
      ar: "الجزء الخامس: قضايا التعليم والبحث العلمي",
      fileUrl: "/books/part-5.pdf",
    },
    {
      en: "Part Six: Local Issues",
      ar: "الجزء السادس: قضايا داخلية",
      fileUrl: "/books/part-6.pdf",
    },
    {
      en: "Part Seven: Issues of Social Solidarity",
      ar: "الجزء السابع: قضايا التكافل الاجتماعي",
      fileUrl: "/books/part-7.pdf",
    },
    {
      en: "Part Eight: Religious Issues",
      ar: "الجزء الثامن: قضايا دينية",
      fileUrl: "/books/part-8.pdf",
    },
  ],
}

export const academicExperience = {
  title: {
    en: "Academic Experience",
    ar: "الخبرة الأكاديمية",
  },
  positions: [
    {
      title: {
        en: "Lecturer in Project Management (Part-time)",
        ar: "أستاذ مادة إدارة المشاريع (غير متفرغ)",
      },
      institution: {
        en: "King Saud University, Riyadh",
        ar: "جامعة الملك سعود بالرياض",
      },
    },
    {
      title: {
        en: "Lecturer in Project Management (Part-time)",
        ar: "أستاذ مادة إدارة المشاريع (غير متفرغ)",
      },
      institution: {
        en: "King Faisal University, Dammam",
        ar: "جامعة الملك فيصل بالدمام",
      },
    },
  ],
}

export const stats = [
  {
    label: { en: "Years of Leadership", ar: "سنوات القيادة" },
    value: "50+",
  },
  {
    label: { en: "Professional Roles", ar: "الأدوار المهنية" },
    value: "15+",
  },
  {
    label: { en: "Advanced Degrees", ar: "الدرجات المتقدمة" },
    value: "3",
  },
]
