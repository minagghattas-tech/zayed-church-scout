/* ========================================================================
   SEASON CALENDAR 2026 — التقويم الزمني الموحّد للموسم
   يجمع: اجتماعات القطاعات الثلاثة + المعسكرات + الحفلات + المحطات الكبرى
   ------------------------------------------------------------------------
   مصادر التواريخ:
   - اجتماعات الأشبال: من season_cubs_2026 (تبدأ ٦ يونيو، كل سبت)
   - المعسكرات والحفلات: من توزيعة اللوجيستيك ٢٠٢٦
   التواريخ قابلة للتعديل من القائد العام حسب الواقع.
   ======================================================================== */

const SEASON_CALENDAR_2026 = {
  season: "٢٠٢٦",
  theme: "اغلب الشر بالخير",
  verse: "لاَ يَغْلِبَنَّكَ الشَّرُّ، بَلِ اغْلِبِ الشَّرَّ بِالخَيْرِ",
  verseRef: "رومية ١٢ : ٢١",
  meetingDay: "السبت",
  meetingTime: "١١ ص → ٢ م (٣ ساعات)",
  venue: "كنيسة العذراء والأنبا صموئيل · زايد",

  // الأنواع وألوانها للعرض
  types: {
    ceremony:  { label: "قداس / روحي",   color: "#8b5cf6", emoji: "✝️" },
    meeting:   { label: "اجتماع أسبوعي", color: "var(--teal)", emoji: "📅" },
    big:       { label: "محطة كبرى",     color: "var(--coral)", emoji: "⭐" },
    camp:      { label: "معسكر",         color: "var(--indigo)", emoji: "⛺" },
    party:     { label: "حفلة",          color: "var(--gold)", emoji: "🎉" },
    finale:    { label: "ختام",          color: "#3fa66e", emoji: "🏁" }
  },

  // المحطات (مرتبة زمنياً)
  events: [
    { date: "٦ يونيو",   greg: "2026-06-06", type: "ceremony", title: "قداس بداية النشاط", sectors: ["cubs","junior","advanced"], note: "افتتاح روحي للموسم + مباركة القطاعات + لقاء عائلي." },
    { date: "١٣ يونيو",  greg: "2026-06-13", type: "meeting",  title: "الاجتماع ١ — البداية والتعارف", sectors: ["cubs","junior","advanced"], note: "افتتاح الموسم · تقسيم الطلائع · فتح ملف التقييم الشخصي." },
    { date: "٢٠ يونيو",  greg: "2026-06-20", type: "meeting",  title: "الاجتماع ٢ — فهم الشر / المحور الأول", sectors: ["cubs","junior","advanced"] },
    { date: "٢٧ يونيو",  greg: "2026-06-27", type: "big",      title: "الاجتماع ٣ — مسابقة / نشاط كبير", sectors: ["cubs","junior","advanced"], note: "أول محطة كبرى — برزنتيشن ومسابقات الطلائع." },
    { date: "٤ يوليو",   greg: "2026-07-04", type: "meeting",  title: "إجازة / تجهيز (حسب الجدول)", sectors: [], note: "أسبوع مرونة — يُستخدم للتعويض أو التجهيز للمعسكر." },
    { date: "١١ يوليو",  greg: "2026-07-11", type: "meeting",  title: "الاجتماع ٤ — المحور الثاني + إعادة التقييم", sectors: ["cubs","junior","advanced"], note: "إعادة التقييم الشخصي (شهر ١) للمتقدم." },
    { date: "١٨ يوليو",  greg: "2026-07-18", type: "meeting",  title: "الاجتماع ٥ — تطبيقات المحور الثاني", sectors: ["cubs","junior","advanced"] },
    { date: "٢٥ يوليو",  greg: "2026-07-25", type: "big",      title: "الاجتماع ٦ — المحور الثالث (الأهم)", sectors: ["cubs","junior","advanced"], note: "أهم محور في الموسم — مسابقة كبرى." },
    { date: "١ أغسطس",   greg: "2026-08-01", type: "meeting",  title: "الاجتماع ٧ — تعميق المحور الثالث", sectors: ["cubs","junior","advanced"] },
    { date: "٨ أغسطس",   greg: "2026-08-08", type: "meeting",  title: "الاجتماع ٨ — المحور الرابع + إعادة التقييم (شهر ٢)", sectors: ["cubs","junior","advanced"] },
    { date: "١٥ أغسطس",  greg: "2026-08-15", type: "big",      title: "الاجتماع ٩ — يوم بحري / Outdoor", sectors: ["cubs","junior","advanced"], note: "يوم خارجي بحري — تطبيق كل المهارات." },
    { date: "٢٥ أغسطس → ٢٠ سبتمبر", greg: "2026-08-25", type: "camp", title: "معسكرات الفرق والقطاعات", sectors: ["cubs","junior","advanced"], note: "معسكرات على مستوى كل فريق/قطاع (ولاد وبنات). يحدد قائد المعسكر بالتشاور بين قادة القطاع والفرق." },
    { date: "٢٢ أغسطس",  greg: "2026-08-22", type: "meeting",  title: "الاجتماع ١٠ — الختام والتكريم", sectors: ["cubs","junior"], note: "ختام منهج المبتدئ والأشبال + تكريم." },
    { date: "خلال سبتمبر", greg: "2026-09-12", type: "camp",    title: "المعسكر الكبير", sectors: ["advanced","junior","cubs"], note: "معسكر المجموعة الكبير — قطاع المعسكرات." },
    { date: "٢٠ سبتمبر", greg: "2026-09-20", type: "party",    title: "حفلة الختام", sectors: ["cubs","junior","advanced"], note: "حفلة ختام الموسم." },
    { date: "ختام الموسم", greg: "2026-09-26", type: "finale",  title: "الاجتماع ١٢ — قداس ختامي + تكريم نهائي", sectors: ["advanced"], note: "ختام المتقدم: افتتاح الظرف الكامل + رجل الموسم + شارة الأمثال." }
  ]
};

if (typeof window !== 'undefined') { window.SEASON_CALENDAR_2026 = SEASON_CALENDAR_2026; }
