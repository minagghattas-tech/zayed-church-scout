/* ========================================================================
   ZAYED LEADERS — البيانات الأولية للقادة (Seed)
   مبنية على التوزيعة الرسمية لموسم ٢٠٢٦ + جدول القادة والجوالة
   ------------------------------------------------------------------------
   ملاحظة: دي البيانات الافتتاحية. أي قائد يقدر يعدّل/يضيف/يحذف من صفحة
   القادة، والتعديلات بتتحفظ في المتصفح (LocalStorage). لو حصل Reset،
   النظام بيرجّع القايمة دي تاني.
   ======================================================================== */

const ZAYED_LEADERS_SEED = [
  // ===================== القيادة العليا =====================
  {
    name: "أبونا يوحنا ثروت",
    role: "priest",
    assignment: "leadership",
    position: "راعي الخدمة · كنيسة السيدة العذراء مريم ببيفرلي هيلز",
    notes: "راعي وملاك كنيسة السيدة العذراء مريم ببيفرلي هيلز."
  },
  {
    name: "ماريا فريد",
    role: "leader-general",
    assignment: "leadership",
    position: "قائد المجموعة الكشفية",
    notes: "القائد العام للمجموعة الكشفية لكنائس زايد."
  },
  {
    name: "بسنت هاني",
    role: "deputy",
    assignment: "leadership",
    position: "نائب المجموعة الكشفية · قائد قطاع متقدم",
    notes: "نائب المجموعة + قائدة قطاع المتقدم."
  },

  // ===================== قطاع المتقدم =====================
  // (القائدة: بسنت هاني — مدرجة في القيادة العليا كنائب المجموعة)
  {
    name: "مينا جورج",
    role: "assistant",
    assignment: "advanced",
    position: "مساعد قائد قطاع متقدم · قائد قطاع جوّالة",
    notes: "مساعد قطاع المتقدم + قائد العشيرة (الجوّالة)."
  },
  { name: "جيروم رافله", role: "leader", assignment: "advanced" },
  { name: "رانيا", role: "leader", assignment: "advanced" },
  { name: "سالي عاطف", role: "leader", assignment: "advanced" },
  { name: "ساندرا جميل", role: "leader", assignment: "advanced" },

  // ===================== قطاع المبتدئ =====================
  {
    name: "مريم ثابت",
    role: "sector-female",
    assignment: "junior",
    position: "قائد قطاع مبتدئ",
    notes: "قائدة قطاع المبتدئ."
  },
  {
    name: "سلفانا وليم",
    role: "assistant",
    assignment: "junior",
    position: "مساعد قائد قطاع مبتدئ"
  },
  { name: "بافلي هاني", role: "leader", assignment: "junior" },
  { name: "ساندي جميل", role: "leader", assignment: "junior" },
  { name: "كريم أيمن", role: "leader", assignment: "junior" },
  { name: "مريم بهاء", role: "leader", assignment: "junior" },

  // ===================== قطاع الأشبال =====================
  {
    name: "دينا كرم",
    role: "sector-female",
    assignment: "cubs",
    position: "قائد قطاع أشبال",
    notes: "قائدة قطاع الأشبال."
  },
  {
    name: "مارينا جورج",
    role: "assistant",
    assignment: "cubs",
    position: "مساعد قائد قطاع أشبال"
  },
  { name: "ابتسام", role: "leader", assignment: "cubs" },
  { name: "أمجد نسيم", role: "leader", assignment: "cubs" },
  { name: "فيليب صبحي", role: "leader", assignment: "cubs" },
  { name: "ميراي اشرف", role: "leader", assignment: "cubs" },

  // ===================== قادة بدون توزيع قطاع محدد =====================
  { name: "أبانوب جرجس", role: "leader", assignment: null },
  { name: "هيرين عاطف", role: "leader", assignment: null },
  { name: "كرستين سمير", role: "leader", assignment: null },
  { name: "مارينا وفيق", role: "leader", assignment: null },

  // ===================== العشيرة / الجوّالة =====================
  // (تحت قيادة مينا جورج — قطاع الجوّالة)
  { name: "بافلي سمير", role: "jawal", assignment: "jawal" },
  { name: "بتول سوريال", role: "jawal", assignment: "jawal" },
  { name: "بيتر مجدي", role: "jawal", assignment: "jawal" },
  { name: "جورج ماجد", role: "jawal", assignment: "jawal" },
  { name: "جونير اشرف", role: "jawal", assignment: "jawal" },
  { name: "سامي وائل", role: "jawal", assignment: "jawal" },
  { name: "ساندرا ماجد", role: "jawal", assignment: "jawal" },
  { name: "ساندرا ناجي", role: "jawal", assignment: "jawal" },
  { name: "ساندي اشرف", role: "jawal", assignment: "jawal" },
  { name: "ساندي سعد", role: "jawal", assignment: "jawal" },
  { name: "هيري عادل", role: "jawal", assignment: "jawal" },
  { name: "كاترين محب", role: "jawal", assignment: "jawal" },
  { name: "كارن اسامة", role: "jawal", assignment: "jawal" },
  { name: "كارول باسم", role: "jawal", assignment: "jawal" },
  { name: "لوجي اسامة", role: "jawal", assignment: "jawal" },
  { name: "ليليان عت", role: "jawal", assignment: "jawal" },
  { name: "ماجي كمال", role: "jawal", assignment: "jawal" },
  { name: "مارتن روبير", role: "jawal", assignment: "jawal" },
  { name: "ماريان حنا", role: "jawal", assignment: "jawal" },
  { name: "ماريز اشرف", role: "jawal", assignment: "jawal" },
  { name: "مارينا بنيامين", role: "jawal", assignment: "jawal" },
  { name: "مايا هاني", role: "jawal", assignment: "jawal" },
  { name: "مايكل روماني", role: "jawal", assignment: "jawal" },
  { name: "مريم داود", role: "jawal", assignment: "jawal" },
  { name: "يوستينا اسامة", role: "jawal", assignment: "jawal" },
  { name: "سارة عادل", role: "jawal", assignment: "jawal" },
  { name: "سوما سوريال", role: "jawal", assignment: "jawal" },
  { name: "دولا باسم", role: "jawal", assignment: "jawal" }
];

// تتاح للصفحات اللي محتاجاها
if (typeof window !== 'undefined') { window.ZAYED_LEADERS_SEED = ZAYED_LEADERS_SEED; }
