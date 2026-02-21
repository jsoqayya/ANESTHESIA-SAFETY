import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { chaptersContent } from './chapters-data'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// ======== DATA ========
const bookTitle = 'مبادئ السلامة والجودة في غرفة العمليات'
const bookTitleEn = 'OPERATING THEATRE SAFETY & QUALITY PRINCIPLES'
const authorName = 'الدكتور جميل السقيا'

const parts = [
  {
    id: 1,
    titleAr: 'الجزء الأول — أسس السلامة والجودة في غرفة العمليات',
    titleEn: 'PART I — Foundations of OR Safety & Quality',
    chapters: [
      { num: 1, ar: 'سلامة غرفة العمليات: لماذا يحدث الضرر في المسرح الجراحي', en: 'OR Safety: Why Harm Happens in the Theatre', sub: 'غرفة العمليات كنظام عالي المخاطر • مصادر الفشل • السلامة بالتصميم مقابل السلامة بالبطولات', subEn: 'OR as a high-risk system • sources of failure • safety-by-design vs safety-by-heroics' },
      { num: 2, ar: 'رحلة المريض في غرفة العمليات: من القرار إلى الخروج', en: 'OR Patient Journey: From Decision to Discharge', sub: 'مسار ما قبل العملية • تدفق يوم الجراحة • مراحل ما داخل العملية • التسليم من الإفاقة إلى الجناح', subEn: 'pre-op pathway • day-of-surgery flow • intra-op phases • recovery-to-ward handoffs' },
      { num: 3, ar: 'خريطة مخاطر غرفة العمليات: السريرية، التشغيلية، البيئية، والقانونية', en: 'OR Risk Map: Clinical, Operational, Environmental, Legal', sub: 'تصنيف المخاطر • مصفوفة المخاطر • المخاطر عالية الشدة • مسارات التصعيد', subEn: 'risk taxonomy • risk matrix • high-severity hazards • escalation pathways' },
      { num: 4, ar: 'حوكمة غرفة العمليات والمساءلة', en: 'OR Governance and Accountability', sub: 'نموذج قيادة غرفة العمليات • قواعد المسرح • هيكل اللجان • المساءلة بلا لوم', subEn: 'OR leadership model • theatre rules • committee structure • accountability without blame' },
    ]
  },
  {
    id: 2,
    titleAr: 'الجزء الثاني — الجاهزية ما قبل العملية وضوابط "البداية الصحيحة"',
    titleEn: 'PART II — Preoperative Readiness and "Start-Right" Controls',
    chapters: [
      { num: 5, ar: 'تعريف المريض وسلامة التوثيق', en: 'Patient Identification and Documentation Integrity', sub: 'ضوابط الهوية • اكتمال الموافقة • تعارض التوثيق • الوقاية من أخطاء المريض الخاطئ', subEn: 'ID controls • consent completeness • documentation conflicts • prevention of wrong-patient errors' },
      { num: 6, ar: 'الموقع الصحيح، الإجراء الصحيح، الغرسة الصحيحة', en: 'Correct Site, Correct Procedure, Correct Implant', sub: 'تحديد الموقع • التحقق من الإجراء • التحقق من الغرسات • الحالات الخاصة', subEn: 'site marking • procedure verification • implant verification • special cases' },
      { num: 7, ar: 'التحسين ما قبل العملية من منظور غرفة العمليات', en: 'Pre-op Optimization from the OR Perspective', sub: 'بوابات الجاهزية • الوقاية من الإلغاءات • معايير التوقف • حلقات التواصل', subEn: 'readiness gates • cancellation prevention • stop criteria • communication loops' },
    ]
  },
  {
    id: 3,
    titleAr: 'الجزء الثالث — الوقاية من العدوى، العقامة، وسلامة الأدوات',
    titleEn: 'PART III — Infection Prevention, Sterility, and Instrument Safety',
    chapters: [
      { num: 8, ar: 'الوقاية بالمضادات الحيوية وبوابة الوقاية من عدوى الموقع الجراحي', en: 'Antibiotic Prophylaxis and SSI Prevention Gate', sub: 'ملكية التوقيت • محفزات إعادة الجرعة • التوثيق • أساسيات التدقيق', subEn: 'timing ownership • redosing triggers • documentation • audit essentials' },
      { num: 9, ar: 'الوقاية من الجلطات وإصابات الضغط وانخفاض الحرارة: حزمة بقيادة غرفة العمليات', en: 'VTE, Pressure Injury, and Hypothermia: OR-Driven Prevention Bundle', sub: 'فحص المخاطر • خطوات وقاية غرفة العمليات • حزمة الوضعيات/الحرارة • التوثيق', subEn: 'risk screening • OR prevention steps • positioning/thermal bundle • documentation' },
      { num: 10, ar: 'تعقيم المسرح الجراحي وموثوقية الحقل المعقم', en: 'Theatre Asepsis and Sterile Field Reliability', sub: 'إخفاقات التقنية المعقمة • حركة المرور/الأبواب • اختراقات الحقل • الإجراءات الفورية', subEn: 'sterile technique failures • traffic/doors • field breaks • immediate corrective actions' },
      { num: 11, ar: 'معالجة الأدوات، ضمان التعقيم، وواجهة OR–CSSD', en: 'Instrument Processing, Sterilization Assurance, and OR–CSSD Interface', sub: 'دورة حياة الأداة • سلامة التغليف • المؤشرات • أساسيات التتبع', subEn: 'instrument lifecycle • packaging integrity • indicators • traceability essentials' },
      { num: 12, ar: 'واجهة قسم التعقيم المركزي: من التطهير إلى نقطة الاستخدام', en: 'CSSD Interface: From Decontamination to Point-of-Use', sub: 'تدفق التطهير • سلامة التغليف • المؤشرات • أساسيات التتبع', subEn: 'decontamination flow • packaging integrity • indicators • traceability essentials' },
      { num: 13, ar: 'الأجهزة عالية الخطورة والأطقم المعارة', en: 'High-Risk Devices and Loaner Sets', sub: 'حوكمة الإعارة • ضوابط الموردين • مخاطر التطهير • الجداول الزمنية للجاهزية', subEn: 'loaner governance • vendor controls • decontamination risk • readiness timelines' },
      { num: 14, ar: 'سلامة الغرسات وإمكانية تتبعها', en: 'Implant Safety and Traceability', sub: 'التحقق من الاختيار • انتهاء الصلاحية والتخزين • سير عمل الباركود/UDI • خطة الاستدعاء', subEn: 'selection verification • expiry & storage • barcode/UDI workflow • recall response plan' },
    ]
  },
  {
    id: 4,
    titleAr: 'الجزء الرابع — السلامة داخل العملية: نظام حواجز "الأحداث التي لا ينبغي أن تحدث"',
    titleEn: 'PART IV — Intraoperative Safety: The "Never Events" Barrier System',
    chapters: [
      { num: 15, ar: 'قائمة التحقق من السلامة الجراحية كأداة للفريق', en: 'Surgical Safety Checklist as a Team Tool (Not a Ritual)', sub: 'تسجيل الدخول/المهلة/تسجيل الخروج • جودة التنفيذ • التوقفات الإلزامية • نقاط التدقيق', subEn: 'sign-in/time-out/sign-out • quality of execution • hard stops • audit scoring' },
      { num: 16, ar: 'العد الجراحي والوقاية من العناصر المتروكة', en: 'Surgical Counts and Prevention of Retained Items', sub: 'عد الإسفنج/الإبر/الأدوات • خوارزمية التباين • قواعد التصوير • التوثيق', subEn: 'sponge/needle/instrument counts • discrepancy algorithm • imaging rules • documentation' },
      { num: 17, ar: 'التعامل مع العينات وتسميتها: أخطاء لا يُتسامح معها', en: 'Specimen Handling and Labelling: Zero-Tolerance Errors', sub: 'سلسلة هوية العينة • انضباط التسمية داخل العملية • التواصل مع علم الأمراض', subEn: 'specimen-ID chain • intra-op labelling discipline • pathology communication' },
      { num: 18, ar: 'سلامة الجراحة الكهربائية، الليزر، وأجهزة الطاقة', en: 'Electrosurgery, Lasers, and Energy Devices Safety', sub: 'خطر الحروق • اللوحة الراجعة • فشل العزل • ضوابط عمود الدخان', subEn: 'burns risk • dispersive pad • insulation failure • smoke plume controls' },
      { num: 19, ar: 'سلامة غرفة العمليات من الحرائق والوقاية من الاشتعال', en: 'OR Fire Safety and Ignition Prevention', sub: 'مثلث الحريق • السيناريوهات عالية الخطورة • قائمة تحقق الوقاية • بروتوكول الاستجابة', subEn: 'fire triangle • high-risk scenarios • prevention checklist • immediate response protocol' },
      { num: 20, ar: 'سلامة الأدوات الحادة والوقاية من تعرض الموظفين', en: 'Sharps Safety and Staff Exposure Prevention', sub: 'المنطقة المحايدة • تمرير الأدوات الحادة • الاستجابة للتعرض • مراقبة الامتثال', subEn: 'neutral zone • sharps passing • exposure response • monitoring compliance' },
      { num: 21, ar: 'التعامل مع الأدوية داخل غرفة العمليات (خارج نطاق التخدير)', en: 'Medication Handling Inside the OR (Non-Anesthesia Scope)', sub: 'الأدوية الموضعية • الأدوية المعقمة في الحقل • التسمية • مخاطر الأدوية المتشابهة', subEn: 'topical/irrigation meds • sterile meds on field • labelling • look-alike/sound-alike risks' },
      { num: 22, ar: 'الدم وحالات الطوارئ المحيطة بالجراحة (جاهزية واستجابة غرفة العمليات)', en: 'Blood and Perioperative Emergencies (OR Readiness and Response)', sub: 'التحقق من طلب/استلام الدم • إمكانية التتبع • جاهزية النزيف • أدوار الطوارئ', subEn: 'blood request/receipt verification • traceability • hemorrhage readiness • emergency roles' },
    ]
  },
  {
    id: 5,
    titleAr: 'الجزء الخامس — عمليات غرفة العمليات، التدفق، والكفاءة دون المساومة على السلامة',
    titleEn: 'PART V — OR Operations, Flow, and Efficiency Without Safety Trade-offs',
    chapters: [
      { num: 23, ar: 'قواعد الجدولة، الحجز، وتخصيص المسرح الجراحي', en: 'Scheduling, Booking, and Theatre Allocation Rules', sub: 'انضباط الحجز • قواعد الأولوية • الحالات الإضافية • مواءمة السعة', subEn: 'booking discipline • priority rules • add-on cases • capacity alignment' },
      { num: 24, ar: 'بدء الحالة الأولى في الوقت المحدد ووقت التبديل', en: 'First Case On-Time Start and Turnover Time', sub: 'جاهزية بداية اليوم • الاعتمادات المبكرة • العمل القياسي • فخاخ مؤشرات الأداء', subEn: 'day-start readiness • upstream dependencies • standard work • KPI pitfalls' },
      { num: 25, ar: 'جاهزية المعدات والصيانة الوقائية', en: 'Equipment Readiness and Preventive Maintenance', sub: 'فحوصات الجاهزية اليومية • الإبلاغ عن الأعطال • حوكمة الصيانة • البدائل', subEn: 'daily readiness checks • failure reporting • maintenance governance • backup' },
      { num: 26, ar: 'سلسلة التوريد، المخزون المعقم، وإدارة انتهاء الصلاحية', en: 'Supply Chain, Sterile Stock, and Expiry Management', sub: 'مستويات المخزون • تدوير المخزون • النواقص العاجلة • تقليل الهدر بأمان', subEn: 'par levels • stock rotation • urgent shortages • waste reduction safely' },
      { num: 27, ar: 'نماذج التوظيف والكفاءة في المسرح الجراحي', en: 'Staffing Models and Competency in the Theatre', sub: 'مزيج المهارات • التوظيف حسب الحدة • التوجيه • منطق الاعتماد', subEn: 'skill mix • staffing to acuity • orientation • credentialing logic' },
    ]
  },
  {
    id: 6,
    titleAr: 'الجزء السادس — نظام الجودة، القياس، التدريب، والاستدامة',
    titleEn: 'PART VI — Quality System, Measurement, Training, and Sustainability',
    chapters: [
      { num: 28, ar: 'مؤشرات جودة غرفة العمليات وتصميم لوحة القيادة', en: 'OR Quality Indicators and Dashboard Design', sub: 'المجموعة الأساسية لمؤشرات الأداء • SSI/الأحداث الحرجة • الإلغاءات • مقاييس الاستخدام', subEn: 'core KPI set • SSI/never events • cancellations • utilization metrics' },
      { num: 29, ar: 'الإبلاغ عن الحوادث، التحقيق، والإجراءات التصحيحية (خاص بغرفة العمليات)', en: 'Incident Reporting, Investigation, and Corrective Actions (OR-specific)', sub: 'ما يجب الإبلاغ عنه • تحليل السبب الجذري • تتبع الإجراءات • حلقات التعلم', subEn: 'what to report • theatre-focused RCA • action tracking • learning loops' },
      { num: 30, ar: 'برامج التدقيق وجاهزية الامتثال', en: 'Audit Programs and Compliance Readiness', sub: 'تقويم التدقيق • طريقة التتبع • جاهزية التوثيق • سد الفجوات', subEn: 'audit calendar • tracer method • documentation readiness • closing gaps' },
      { num: 31, ar: 'المحاكاة، التدريبات، والحفاظ على الكفاءات الحرجة للسلامة', en: 'Simulation, Drills, and Safety-Critical Competency Maintenance', sub: 'تدريبات الحريق • تدريبات تباين العد • تدريبات اختراق العقامة • العمل الجماعي وقت الأزمات', subEn: 'fire drills • count discrepancy drills • sterility breach drills • crisis teamwork in OR' },
      { num: 32, ar: 'العوامل البشرية في غرفة العمليات', en: 'Human Factors in the OR: Interruptions, Cognitive Load, Hierarchy, and Speaking Up', sub: 'المقاطعات • العبء المعرفي • التسلسل الهرمي • التحدث بصوت عالٍ', subEn: 'interruptions • cognitive load • hierarchy • speaking up' },
    ]
  },
]

const allChapters = parts.flatMap(p => p.chapters)
const totalChapters = allChapters.length

// ======== SHARED CSS ========
const sharedFonts = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Noto+Kufi+Arabic:wght@300;400;600;800&display=swap" rel="stylesheet">
`

const navbarCSS = `
  /* NAVBAR */
  .top-nav {
    position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
    background-color: #1e3a8a;
    padding: 12px 20px;
    display: flex; justify-content: space-between; align-items: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.15);
    font-family: 'Noto Kufi Arabic', sans-serif;
    gap: 12px; flex-wrap: wrap;
    box-sizing: border-box;
  }
  .nav-brand {
    color: white; font-size: 15px; font-weight: 700;
    display: flex; align-items: center; gap: 10px;
    text-decoration: none;
  }
  .nav-logo {
    width: 38px; height: 38px; border-radius: 50%;
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.3);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0;
  }
  .nav-brand-text { font-size: 14px; font-weight: 700; }
  .nav-links { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .nav-link {
    background: rgba(255,255,255,0.12); color: white;
    border: 1px solid rgba(255,255,255,0.3);
    padding: 6px 14px; border-radius: 6px;
    font-size: 13px; text-decoration: none;
    transition: background 0.2s; white-space: nowrap;
  }
  .nav-link:hover, .nav-link.active { background: rgba(255,255,255,0.22); }
  @media (max-width: 600px) {
    .top-nav { padding: 8px 12px; }
    .nav-brand-text { display: none; }
    .nav-link { font-size: 12px; padding: 5px 10px; }
  }
`

// ======== CHAPTER PAGE CSS ========
const chapterPageCSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Amiri', 'Times New Roman', serif;
    line-height: 1.9; color: #1f2937;
    background: #ffffff;
    direction: rtl; text-align: right;
    font-size: 19px;
  }
  a { text-decoration: none; color: inherit; }
  ${navbarCSS}

  .chapter-wrapper {
    max-width: 900px; margin: 0 auto;
    padding: 100px 60px 60px;
  }
  @media (max-width: 768px) {
    .chapter-wrapper { padding: 110px 15px 40px; font-size: 17px; }
  }

  /* PART LABELS */
  .part-label { text-align: center; font-size: 15px; color: #6b7280;
    font-family: 'Noto Kufi Arabic', sans-serif; margin-bottom: 4px;
    text-transform: uppercase; letter-spacing: 1px;
  }

  /* CHAPTER HEADER */
  .chapter-header-box {
    border: 2px solid #bfdbfe;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-radius: 12px; padding: 25px 30px; margin: 20px 0 40px 0;
    text-align: center; box-shadow: 0 4px 15px rgba(30,58,138,0.08);
  }
  .ch-en-title {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 17px; font-weight: 700; color: #1e40af;
    direction: ltr; margin-bottom: 10px; letter-spacing: 0.3px;
  }
  .ch-ar-title {
    font-family: 'Noto Kufi Arabic', sans-serif;
    font-size: 22px; font-weight: 800; color: #1e3a8a; margin-bottom: 8px;
  }
  .ch-subtitle {
    font-size: 16px; color: #4b5563; font-family: 'Noto Kufi Arabic', sans-serif;
  }

  /* HEADINGS */
  h1 { font-family: 'Noto Kufi Arabic', sans-serif; font-weight: 800;
    color: #1e3a8a; text-align: center; font-size: 30px;
    margin-bottom: 8px; margin-top: 30px; line-height: 1.4;
  }
  h2 {
    font-family: 'Noto Kufi Arabic', sans-serif; font-weight: 700;
    color: #1e40af; background-color: #dbeafe; padding: 12px 20px;
    margin-top: 50px; margin-bottom: 20px;
    border-right: 6px solid #1e3a8a; border-radius: 6px; font-size: 22px;
    page-break-after: avoid;
  }
  h3 {
    font-family: 'Noto Kufi Arabic', sans-serif; font-weight: 600;
    color: #1e40af; font-size: 19px; margin-top: 30px; margin-bottom: 12px;
    border-bottom: 2px solid #e5e7eb; padding-bottom: 6px;
  }
  h4 { font-family: 'Noto Kufi Arabic', sans-serif; font-weight: 600;
    color: #374151; font-size: 18px; margin-top: 22px; margin-bottom: 10px;
  }
  p { margin-bottom: 16px; }

  /* BOXES */
  .concept-box { background-color: #fefce8; border: 1px solid #fef08a; border-right: 5px solid #eab308; padding: 20px 25px; margin: 25px 0; border-radius: 6px; }
  .alert-box { background-color: #fef2f2; border: 1px solid #fecaca; border-right: 5px solid #ef4444; padding: 20px 25px; margin: 25px 0; border-radius: 6px; }
  .success-box { background-color: #f0fdf4; border: 1px solid #bbf7d0; border-right: 5px solid #22c55e; padding: 20px 25px; margin: 25px 0; border-radius: 6px; }
  .info-box { background-color: #eff6ff; border: 1px solid #bfdbfe; border-right: 5px solid #2563eb; padding: 20px 25px; margin: 25px 0; border-radius: 6px; color: #1e3a8a; }
  .purple-box { background-color: #faf5ff; border: 1px solid #e9d5ff; border-right: 5px solid #7c3aed; padding: 20px 25px; margin: 25px 0; border-radius: 6px; }
  .scenario-box {
    background: linear-gradient(135deg, #f8faff 0%, #eff6ff 100%);
    border: 1px solid #93c5fd; border-right: 6px solid #1d4ed8;
    border-radius: 8px; padding: 25px 30px; margin: 25px 0;
    box-shadow: 0 2px 8px rgba(30,58,138,0.08);
  }
  .key-message-box {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white; padding: 25px 30px; border-radius: 10px;
    margin: 30px 0; box-shadow: 0 4px 15px rgba(30,58,138,0.2);
  }
  .key-message-box h3 { color: #93c5fd; border-bottom-color: rgba(255,255,255,0.2); font-size: 20px; }
  .key-message-box li { color: #e0f2fe; margin-bottom: 10px; }
  .key-message-box strong { color: #fbbf24; }
  .tool-box { background-color: #f0fdf4; border: 2px dashed #22c55e; padding: 20px 25px; margin: 25px 0; border-radius: 8px; }
  .tool-box h4 { color: #15803d; }
  .myth-box { background-color: #fff7ed; border: 1px solid #fed7aa; border-right: 5px solid #ea580c; padding: 18px 22px; margin: 15px 0; border-radius: 6px; }

  /* SUBTITLE BOX */
  .subtitle { text-align: center; font-size: 18px; color: #4b5563;
    font-family: 'Noto Kufi Arabic', sans-serif; margin-bottom: 30px; }
  .part-title { text-align: center; font-size: 15px; color: #6b7280;
    font-family: 'Noto Kufi Arabic', sans-serif; margin-bottom: 4px;
    text-transform: uppercase; letter-spacing: 1px;
  }

  /* TABLE */
  table { width: 100%; border-collapse: collapse; margin: 25px 0;
    font-size: 0.93em; background-color: #fff; border: 1px solid #e5e7eb;
    border-radius: 6px; overflow: hidden;
  }
  thead tr { background-color: #1e3a8a; color: #fff; text-align: right; }
  th, td { padding: 12px 15px; border: 1px solid #e5e7eb; }
  tbody tr:nth-of-type(even) { background-color: #f9fafb; }
  ul, ol { margin-bottom: 18px; padding-right: 28px; }
  li { margin-bottom: 8px; }
  strong { color: #111827; font-weight: bold; }

  /* ENGLISH TERMS */
  .en, .english-term {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600; color: #1d4ed8; direction: ltr;
    display: inline-block; font-size: 0.92em;
  }
  .divider { text-align: center; color: #9ca3af; margin: 45px 0; font-size: 22px; letter-spacing: 6px; }

  /* BOTTOM NAV */
  .chapter-nav {
    display: flex; justify-content: space-between; align-items: center;
    margin-top: 50px; padding: 20px; background-color: #f8faff;
    border-radius: 8px; border: 1px solid #dbeafe;
    font-family: 'Noto Kufi Arabic', sans-serif;
    gap: 10px; flex-wrap: wrap;
  }
  .chapter-nav a { color: #1e40af; text-decoration: none; font-weight: 600;
    padding: 8px 16px; border-radius: 6px; border: 1px solid #bfdbfe; transition: all 0.2s;
    font-size: 14px;
  }
  .chapter-nav a:hover { background-color: #dbeafe; }
  .chapter-nav .nav-center { text-align: center; flex: 1; color: #6b7280; font-size: 13px; }

  /* COMMENTS SECTION */
  .comments-section {
    margin-top: 60px; padding: 30px;
    background: white; border-radius: 14px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 20px rgba(30,58,138,0.06);
  }
  .comments-title {
    font-family: 'Noto Kufi Arabic', sans-serif;
    font-size: 22px; font-weight: 800; color: #1e3a8a;
    margin-bottom: 14px;
    border-bottom: 3px solid #dbeafe; padding-bottom: 14px;
    display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  }
  .comments-title .en-sub {
    font-family: 'Segoe UI', sans-serif;
    font-size: 13px; color: #6b7280; font-weight: 400;
    direction: ltr;
  }
  .comments-desc {
    font-family: 'Noto Kufi Arabic', sans-serif;
    font-size: 14px; color: #6b7280; margin-bottom: 24px; line-height: 1.6;
  }
  .comment-form {
    background: #f8faff; border-radius: 10px; padding: 24px;
    margin-bottom: 28px; border: 1px solid #dbeafe;
  }
  .form-row { display: flex; gap: 16px; margin-bottom: 16px; }
  .form-group { flex: 1; }
  .form-group label {
    font-family: 'Noto Kufi Arabic', sans-serif;
    font-size: 13px; font-weight: 600; color: #374151;
    display: block; margin-bottom: 6px;
  }
  .optional { font-weight: 400; color: #9ca3af; font-size: 11px; }
  .required-mark { color: #ef4444; }
  .form-group input, .form-group textarea {
    width: 100%; padding: 10px 14px;
    border: 1px solid #d1d5db; border-radius: 8px;
    font-family: 'Noto Kufi Arabic', sans-serif;
    font-size: 14px; color: #374151;
    background: white; transition: border-color 0.2s;
    direction: rtl;
  }
  .form-group input:focus, .form-group textarea:focus {
    outline: none; border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
  }
  .form-group textarea { resize: vertical; min-height: 110px; }
  .form-actions { align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
  .rating-group { display: flex; align-items: center; gap: 10px; }
  .rating-group label { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 13px; color: #374151; white-space: nowrap; }
  .stars { display: flex; gap: 4px; direction: ltr; }
  .star { font-size: 24px; color: #d1d5db; cursor: pointer; transition: color 0.1s; line-height: 1; }
  .star.active { color: #f59e0b; }
  .submit-btn {
    font-family: 'Noto Kufi Arabic', sans-serif;
    font-size: 14px; font-weight: 700;
    background: #1e3a8a; color: white;
    border: none; padding: 12px 24px;
    border-radius: 8px; cursor: pointer;
    transition: background 0.2s; white-space: nowrap;
  }
  .submit-btn:hover { background: #1e40af; }
  .comments-list { display: flex; flex-direction: column; gap: 16px; }
  .comment-card {
    background: white; border: 1px solid #e5e7eb;
    border-radius: 10px; padding: 18px 20px;
  }
  .comment-card.new-comment { border-color: #93c5fd; background: #f0f7ff; }
  .comment-header {
    display: flex; align-items: center; gap: 12px;
    margin-bottom: 12px; flex-wrap: wrap;
  }
  .comment-avatar {
    width: 40px; height: 40px; border-radius: 50%;
    background: #1e3a8a; color: white;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Noto Kufi Arabic', sans-serif;
    font-size: 16px; font-weight: 700; flex-shrink: 0;
  }
  .comment-meta { flex: 1; min-width: 100px; }
  .comment-name { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 14px; font-weight: 700; color: #1e3a8a; display: block; }
  .comment-role { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 12px; color: #6b7280; }
  .comment-stars { color: #f59e0b; font-size: 14px; }
  .comment-date { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 12px; color: #9ca3af; }
  .comment-text { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 14px; color: #374151; line-height: 1.7; }

  @media (max-width: 600px) {
    .form-row { flex-direction: column; }
    .form-actions { flex-direction: column; }
    .submit-btn { width: 100%; text-align: center; }
    .chapter-nav { flex-direction: column; }
  }
`

function navbar(active: string, prevNum?: number, nextNum?: number) {
  return `
  <nav class="top-nav">
    <a href="/" class="nav-brand">
      <div class="nav-logo">🏥</div>
      <span class="nav-brand-text">${bookTitle}</span>
    </a>
    <div class="nav-links">
      ${prevNum ? `<a href="/chapter/${prevNum}" class="nav-link">← الفصل ${prevNum}</a>` : ''}
      <a href="/" class="nav-link ${active === 'home' ? 'active' : ''}">الرئيسية</a>
      <a href="/chapters" class="nav-link ${active === 'chapters' ? 'active' : ''}">📚 الفصول</a>
      ${nextNum ? `<a href="/chapter/${nextNum}" class="nav-link">الفصل ${nextNum} ←</a>` : ''}
    </div>
  </nav>`
}

function commentsSection(chapterNum: number) {
  return `
  <div class="comments-section">
    <h2 class="comments-title">
      <span>💬</span> شاركنا رأيك
      <span class="en-sub">Share Your Thoughts</span>
    </h2>
    <div class="comments-desc">هل لديك تعليق أو سؤال أو ملاحظة حول هذا الفصل؟ نرحب بمشاركتك وآرائك</div>

    <form class="comment-form" onsubmit="submitComment(event)">
      <div class="form-row">
        <div class="form-group">
          <label>الاسم <span class="optional">(اختياري)</span></label>
          <input type="text" id="cName" placeholder="اكتب اسمك هنا..." />
        </div>
        <div class="form-group">
          <label>التخصص <span class="optional">(اختياري)</span></label>
          <input type="text" id="cRole" placeholder="طبيب، ممرض، طالب..." />
        </div>
      </div>
      <div class="form-group" style="margin-bottom:16px;">
        <label>تعليقك <span class="required-mark">*</span></label>
        <textarea id="cText" rows="5" placeholder="اكتب تعليقك أو سؤالك هنا..."></textarea>
      </div>
      <div class="form-row form-actions">
        <div class="rating-group">
          <label>تقييم الفصل:</label>
          <div class="stars" id="starRating">
            <span class="star" onclick="setRating(1)">★</span>
            <span class="star" onclick="setRating(2)">★</span>
            <span class="star" onclick="setRating(3)">★</span>
            <span class="star" onclick="setRating(4)">★</span>
            <span class="star" onclick="setRating(5)">★</span>
          </div>
        </div>
        <button type="submit" class="submit-btn">إرسال التعليق ←</button>
      </div>
    </form>

    <div id="commentsContainer" class="comments-list">
      <div class="comment-card">
        <div class="comment-header">
          <div class="comment-avatar">د</div>
          <div class="comment-meta">
            <span class="comment-name">د. محمد الأحمدي</span>
            <span class="comment-role">استشاري جراحة عامة</span>
          </div>
          <div class="comment-stars">★★★★★</div>
          <span class="comment-date">منذ يومين</span>
        </div>
        <p class="comment-text">محتوى رائع ومنظم بشكل احترافي. يغطي جميع جوانب السلامة بطريقة علمية وعملية. أنصح كل فريق طبي بقراءة هذا الكتاب.</p>
      </div>
      <div class="comment-card">
        <div class="comment-header">
          <div class="comment-avatar" style="background:#7c3aed;">ن</div>
          <div class="comment-meta">
            <span class="comment-name">نورة السالم</span>
            <span class="comment-role">ممرضة غرفة عمليات</span>
          </div>
          <div class="comment-stars">★★★★★</div>
          <span class="comment-date">منذ أسبوع</span>
        </div>
        <p class="comment-text">هذا الفصل تحديداً يشرح بدقة ما يحدث في غرفة العمليات يومياً. السيناريوهات الواقعية تجعل المعلومات قابلة للتطبيق فوراً.</p>
      </div>
    </div>
  </div>

  <script>
    let rating = 0;
    function setRating(v) {
      rating = v;
      document.querySelectorAll('.star').forEach((s,i) => s.classList.toggle('active', i < v));
    }
    function submitComment(e) {
      e.preventDefault();
      const text = document.getElementById('cText').value.trim();
      if (!text) { alert('الرجاء كتابة تعليقك أولاً'); return; }
      const name = document.getElementById('cName').value.trim() || 'زائر';
      const role = document.getElementById('cRole').value.trim();
      const stars = rating > 0 ? '★'.repeat(rating) + '☆'.repeat(5-rating) : '★★★★★';
      const colors = ['#1e3a8a','#7c3aed','#059669','#d97706','#dc2626'];
      const color = colors[Math.floor(Math.random()*colors.length)];
      const card = document.createElement('div');
      card.className = 'comment-card new-comment';
      card.innerHTML = \`
        <div class="comment-header">
          <div class="comment-avatar" style="background:\${color}">\${name[0]||'ز'}</div>
          <div class="comment-meta">
            <span class="comment-name">\${name}</span>
            \${role ? '<span class="comment-role">'+role+'</span>' : ''}
          </div>
          <div class="comment-stars">\${stars}</div>
          <span class="comment-date">الآن</span>
        </div>
        <p class="comment-text">\${text}</p>
      \`;
      const container = document.getElementById('commentsContainer');
      container.prepend(card);
      e.target.reset(); rating = 0;
      document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
      card.scrollIntoView({behavior:'smooth', block:'center'});
    }
  </script>`
}

// ======== HOME PAGE ========
app.get('/', (c) => {
  const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${bookTitle}</title>
  ${sharedFonts}
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Amiri', serif;
      color: #1f2937; background: #fff;
      direction: rtl; text-align: right;
    }
    a { text-decoration: none; color: inherit; }
    ${navbarCSS}

    /* HERO */
    .hero {
      min-height: 100vh;
      background: linear-gradient(160deg, #0a1628 0%, #0f2660 35%, #1e3a8a 65%, #1e40af 100%);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      padding: 80px 24px 60px; text-align: center;
      position: relative; overflow: hidden;
    }
    /* BOOK COVER */
    .book-cover-wrap {
      margin: 28px auto 0;
      display: flex; justify-content: center;
    }
    .book-cover-img {
      width: 200px;
      border-radius: 10px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.3);
      border: 3px solid rgba(255,255,255,0.15);
      transition: transform 0.3s;
      display: block;
    }
    .book-cover-img:hover { transform: scale(1.04) translateY(-4px); }
    @media (max-width: 600px) {
      .book-cover-img { width: 150px; }
    }
    .hero::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 60% 40%, rgba(59,130,246,0.15) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-inner { position: relative; z-index: 1; max-width: 820px; width: 100%; }

    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25);
      color: rgba(255,255,255,0.9); padding: 8px 22px;
      border-radius: 30px; margin-bottom: 30px;
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 13px; font-weight: 600;
    }

    .hero-title-en {
      font-family: 'Segoe UI', sans-serif;
      font-size: 13px; color: rgba(255,255,255,0.5);
      letter-spacing: 2.5px; margin-bottom: 16px;
      text-transform: uppercase; direction: ltr;
    }
    .hero-title {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: clamp(26px, 5vw, 46px);
      font-weight: 800; color: white;
      line-height: 1.35; margin-bottom: 22px;
    }
    .hero-title .accent { color: #60a5fa; }

    .hero-desc {
      font-family: 'Amiri', serif;
      font-size: 18px; color: rgba(255,255,255,0.72);
      line-height: 1.8; max-width: 600px; margin: 0 auto 36px;
    }

    .hero-actions {
      display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
      margin-bottom: 50px;
    }
    .btn-white {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 15px; font-weight: 700;
      background: white; color: #1e3a8a;
      padding: 14px 32px; border-radius: 10px;
      transition: all 0.25s; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    }
    .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.25); }
    .btn-outline {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 15px; font-weight: 600;
      background: transparent; color: white;
      padding: 14px 32px; border-radius: 10px;
      border: 2px solid rgba(255,255,255,0.35);
      transition: all 0.25s;
    }
    .btn-outline:hover { background: rgba(255,255,255,0.1); }

    .stats-row {
      display: flex; justify-content: center; gap: 0;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 14px; overflow: hidden;
      max-width: 600px; margin: 0 auto;
    }
    .stat-item {
      flex: 1; padding: 18px 12px; text-align: center;
      border-left: 1px solid rgba(255,255,255,0.12);
    }
    .stat-item:last-child { border-left: none; }
    .stat-num {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 30px; font-weight: 800; color: white; line-height: 1.1;
    }
    .stat-label {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 4px;
    }

    /* SECTIONS */
    .section { padding: 70px 24px; }
    .section-max { max-width: 960px; margin: 0 auto; }
    .section-title {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 28px; font-weight: 800; color: #1e3a8a;
      margin-bottom: 6px; text-align: center;
    }
    .section-en {
      font-family: 'Segoe UI', sans-serif;
      font-size: 12px; color: #9ca3af;
      text-align: center; direction: ltr;
      letter-spacing: 1.5px; margin-bottom: 40px;
      text-transform: uppercase;
    }

    /* FEATURES */
    .features-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }
    .feature-card {
      background: white; border-radius: 14px;
      padding: 26px; border: 1px solid #e2e8f0;
      box-shadow: 0 2px 12px rgba(30,58,138,0.05);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .feature-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(30,58,138,0.1); }
    .feature-icon { font-size: 32px; margin-bottom: 14px; }
    .feature-title {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 16px; font-weight: 700; color: #1e3a8a; margin-bottom: 8px;
    }
    .feature-desc {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 13px; color: #6b7280; line-height: 1.7;
    }

    /* PARTS OVERVIEW */
    .parts-bg { background: linear-gradient(135deg, #f0f7ff, #fff); }
    .parts-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 16px;
    }
    .part-card {
      background: white; border-radius: 12px;
      border: 1px solid #dbeafe; padding: 20px;
      display: flex; gap: 14px; align-items: flex-start;
      transition: all 0.2s; text-decoration: none; color: inherit;
    }
    .part-card:hover { border-color: #93c5fd; box-shadow: 0 4px 16px rgba(30,58,138,0.1); transform: translateY(-2px); }
    .part-num {
      width: 42px; height: 42px; border-radius: 10px;
      background: linear-gradient(135deg, #1e3a8a, #2563eb);
      color: white; display: flex; align-items: center; justify-content: center;
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 17px; font-weight: 800; flex-shrink: 0;
    }
    .part-info .t-ar {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 14px; font-weight: 700; color: #1e3a8a;
      margin-bottom: 4px; line-height: 1.4;
    }
    .part-info .t-en {
      font-family: 'Segoe UI', sans-serif;
      font-size: 11px; color: #6b7280; direction: ltr;
    }
    .part-info .t-count {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 12px; color: #3b82f6; margin-top: 6px;
    }

    /* AUTHOR SECTION */
    .author-section {
      background: white;
    }
    .author-card {
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
      border: 2px solid #bfdbfe;
      border-radius: 16px; padding: 40px;
      display: flex; gap: 30px; align-items: center;
      flex-wrap: wrap;
    }
    .author-avatar {
      width: 100px; height: 100px; border-radius: 50%;
      background: linear-gradient(135deg, #1e3a8a, #2563eb);
      color: white; display: flex; align-items: center; justify-content: center;
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 36px; font-weight: 800; flex-shrink: 0;
      box-shadow: 0 4px 20px rgba(30,58,138,0.2);
    }
    .author-info h3 {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 22px; font-weight: 800; color: #1e3a8a; margin-bottom: 6px;
    }
    .author-title {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 14px; color: #2563eb; font-weight: 600; margin-bottom: 14px;
    }
    .author-desc {
      font-family: 'Amiri', serif;
      font-size: 16px; color: #374151; line-height: 1.8;
    }

    /* CTA */
    .cta-section {
      background: linear-gradient(135deg, #1e3a8a, #1e40af);
      text-align: center; padding: 70px 24px; color: white;
    }
    .cta-section h2 {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 26px; font-weight: 800; margin-bottom: 14px;
    }
    .cta-section p {
      font-family: 'Amiri', serif;
      font-size: 17px; color: rgba(255,255,255,0.8);
      max-width: 540px; margin: 0 auto 30px; line-height: 1.8;
    }
    .btn-cta {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 16px; font-weight: 700;
      background: white; color: #1e3a8a;
      padding: 14px 36px; border-radius: 10px;
      transition: all 0.2s; display: inline-block;
    }
    .btn-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }

    /* FOOTER */
    footer {
      background: #0f172a; color: rgba(255,255,255,0.5);
      text-align: center; padding: 28px 24px;
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 13px; line-height: 1.8;
    }
    footer strong { color: rgba(255,255,255,0.85); }

    @media (max-width: 600px) {
      .stats-row { overflow-x: auto; }
      .stat-item { padding: 14px 8px; min-width: 70px; }
      .stat-num { font-size: 22px; }
      .hero-actions { flex-direction: column; align-items: center; }
      .author-card { flex-direction: column; align-items: center; text-align: center; padding: 24px; }
    }
  </style>
</head>
<body>
  ${navbar('home')}

  <!-- HERO -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-badge">📖 دليل علمي شامل • ${totalChapters} فصلاً</div>
      <div class="hero-title-en">${bookTitleEn}</div>
      <h1 class="hero-title">
        مبادئ <span class="accent">السلامة والجودة</span><br>في غرفة العمليات
      </h1>
      <p class="hero-desc">
        في تلك اللحظات الحرجة حيث لا مجال للخطأ الثاني، يأتي هذا الدليل الشامل ليكون مرجعك الأول في رحلة السلامة الجراحية
      </p>
      <div class="hero-actions">
        <a href="/chapters" class="btn-white">استعرض الفصول ←</a>
        <a href="/chapter/1" class="btn-outline">ابدأ من الفصل الأول</a>
      </div>
      <div class="stats-row">
        <div class="stat-item">
          <div class="stat-num">${totalChapters}</div>
          <div class="stat-label">فصل شامل</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">${parts.length}</div>
          <div class="stat-label">أجزاء رئيسية</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">WHO</div>
          <div class="stat-label">معايير دولية</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">100%</div>
          <div class="stat-label">علمي وعملي</div>
        </div>
      </div>

      <!-- BOOK COVER -->
      <div class="book-cover-wrap">
        <img src="/static/book-cover.png" alt="غلاف كتاب مبادئ السلامة والجودة في غرفة العمليات" class="book-cover-img" />
      </div>
    </div>
  </section>

  <!-- WHY -->
  <section class="section" style="background:#f8faff;">
    <div class="section-max">
      <div class="section-title">لماذا هذا الدليل؟</div>
      <div class="section-en">Why This Guide?</div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <div class="feature-title">منهجية علمية دقيقة</div>
          <div class="feature-desc">مبني على أحدث المعايير الدولية من WHO وJoint Commission وAORN وAHRQ مع تطبيق عملي مباشر.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛡️</div>
          <div class="feature-title">تغطية شاملة للسلامة</div>
          <div class="feature-desc">يغطي كافة جوانب السلامة الجراحية من الجاهزية ما قبل العملية حتى استمرارية الرعاية بعدها.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📋</div>
          <div class="feature-title">أدوات قابلة للتطبيق</div>
          <div class="feature-desc">بروتوكولات وقوائم تحقق وسيناريوهات واقعية قابلة للتطبيق الفوري في بيئة العمل اليومية.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌟</div>
          <div class="feature-title">للفريق الجراحي كاملاً</div>
          <div class="feature-desc">يخدم الجراحين والممرضين والفنيين ومديري الجودة وكل من يعمل في بيئة غرفة العمليات.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📖</div>
          <div class="feature-title">ثنائي اللغة</div>
          <div class="feature-desc">محتوى عربي شامل مع المصطلحات الإنجليزية المعتمدة دولياً لضمان التوافق مع المراجع العالمية.</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <div class="feature-title">التحسين المستمر</div>
          <div class="feature-desc">يرسّخ ثقافة التحسين المستمر وتحليل الأحداث والتعلم من الأخطاء لبناء أنظمة أكثر أماناً.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PARTS OVERVIEW -->
  <section class="section parts-bg">
    <div class="section-max">
      <div class="section-title">أجزاء الكتاب</div>
      <div class="section-en">Book Structure</div>
      <div class="parts-grid">
        ${parts.map(p => `
        <a href="/chapters" class="part-card">
          <div class="part-num">${p.id}</div>
          <div class="part-info">
            <div class="t-ar">${p.titleAr.split('—')[1]?.trim() || p.titleAr}</div>
            <div class="t-en">${p.titleEn.split('—')[1]?.trim() || p.titleEn}</div>
            <div class="t-count">📚 ${p.chapters.length} فصول</div>
          </div>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <!-- AUTHOR -->
  <section class="section author-section">
    <div class="section-max">
      <div class="section-title">عن الكتاب</div>
      <div class="section-en">About This Guide</div>
      <div class="author-card">
        <div class="author-avatar">ج</div>
        <div class="author-info">
          <h3>${authorName}</h3>
          <div class="author-title">مؤلف الكتاب • مختص في سلامة غرفة العمليات والجودة الجراحية</div>
          <p class="author-desc">
            هذا الكتاب هو ثمرة سنوات من البحث والتطبيق الميداني في مجال سلامة غرفة العمليات. يجمع بين النظرية العلمية المبنية على أفضل الممارسات العالمية، والتجربة الحية من على أرض الواقع. هدفه الأسمى: أن تكون غرف العمليات في عالمنا العربي أكثر أماناً وأعلى جودةً لكل مريض.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <h2>ابدأ رحلتك نحو غرفة عمليات أكثر أماناً</h2>
    <p>كل فصل خطوة نحو ممارسة طبية أفضل، ومريض أكثر أماناً، وفريق أكثر ثقة</p>
    <a href="/chapters" class="btn-cta">استعرض جميع الفصول ←</a>
  </section>

  <!-- FOOTER -->
  <footer>
    <p><strong>${bookTitle}</strong></p>
    <p>${bookTitleEn}</p>
    <p style="margin-top:8px;">جميع الحقوق محفوظة • مبني وفق المعايير الدولية لسلامة المرضى</p>
  </footer>
</body>
</html>`
  return c.html(html)
})

// ======== CHAPTERS LISTING PAGE ========
app.get('/chapters', (c) => {
  const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>الفصول — ${bookTitle}</title>
  ${sharedFonts}
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Noto Kufi Arabic', sans-serif;
      color: #1f2937; background: #f1f5f9;
      direction: rtl; text-align: right;
    }
    a { text-decoration: none; color: inherit; }
    ${navbarCSS}

    .page-wrap { padding-top: 60px; min-height: 100vh; }

    /* HERO BANNER */
    .chapters-hero {
      background: linear-gradient(135deg, #0f2660 0%, #1e3a8a 50%, #1e40af 100%);
      padding: 50px 24px 45px; text-align: center; color: white;
    }
    .hero-stats { display: flex; justify-content: center; gap: 40px; margin-bottom: 24px; flex-wrap: wrap; }
    .h-stat { text-align: center; }
    .h-stat-num { font-size: 40px; font-weight: 800; color: white; line-height: 1.1; }
    .h-stat-label { font-size: 12px; color: rgba(255,255,255,0.65); margin-top: 4px; }
    .chapters-hero h1 { font-size: 26px; font-weight: 800; margin-bottom: 6px; }
    .chapters-hero .sub {
      font-family: 'Segoe UI', sans-serif;
      font-size: 13px; color: rgba(255,255,255,0.6);
      letter-spacing: 1px; direction: ltr;
    }

    /* CONTENT */
    .content { max-width: 960px; margin: 0 auto; padding: 36px 20px 80px; }

    /* EXTRA SECTION LINKS (intro, conclusion) */
    .extra-link {
      background: white; border-radius: 10px;
      padding: 16px 22px;
      display: flex; align-items: center; justify-content: space-between;
      border: 1px solid #e2e8f0;
      box-shadow: 0 2px 8px rgba(30,58,138,0.04);
      margin-bottom: 12px;
      transition: all 0.2s;
    }
    .extra-link:hover { box-shadow: 0 4px 16px rgba(30,58,138,0.1); border-color: #bfdbfe; }
    .extra-link .t-ar { font-size: 15px; font-weight: 700; color: #1e3a8a; }
    .extra-link .t-en { font-family: 'Segoe UI', sans-serif; font-size: 12px; color: #3b82f6; direction: ltr; }
    .extra-link .arrow { color: #93c5fd; font-size: 18px; }

    /* PART BLOCK */
    .part-block {
      margin-bottom: 40px;
      background: white;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 2px 12px rgba(30,58,138,0.06);
    }
    .part-header {
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
      padding: 18px 24px;
      display: flex; align-items: center; gap: 14px;
    }
    .part-badge {
      width: 40px; height: 40px; border-radius: 50%;
      background: rgba(255,255,255,0.18);
      border: 2px solid rgba(255,255,255,0.35);
      display: flex; align-items: center; justify-content: center;
      font-size: 15px; font-weight: 800; color: white; flex-shrink: 0;
    }
    .part-titles { flex: 1; }
    .part-ar { font-size: 16px; font-weight: 700; color: white; line-height: 1.4; margin-bottom: 3px; }
    .part-en { font-family: 'Segoe UI', sans-serif; font-size: 11px; color: rgba(255,255,255,0.6); direction: ltr; }

    /* CHAPTER ITEM */
    .chapter-item {
      padding: 18px 24px;
      border-bottom: 1px solid #f1f5f9;
      display: flex; gap: 14px; align-items: flex-start;
      transition: background 0.18s;
      text-decoration: none; color: inherit;
    }
    .chapter-item:last-child { border-bottom: none; }
    .chapter-item:hover { background: #f8faff; }
    .ch-num {
      width: 40px; height: 40px; border-radius: 10px;
      background: #eff6ff; border: 2px solid #bfdbfe;
      display: flex; align-items: center; justify-content: center;
      font-size: 15px; font-weight: 800; color: #1e3a8a;
      flex-shrink: 0; margin-top: 2px;
    }
    .ch-info { flex: 1; min-width: 0; }
    .ch-ar { font-size: 15px; font-weight: 700; color: #1e3a8a; line-height: 1.5; margin-bottom: 4px; }
    .ch-en { font-family: 'Segoe UI', sans-serif; font-size: 11px; color: #3b82f6; direction: ltr; display: block; margin-bottom: 7px; }
    .ch-sub { font-size: 12px; color: #6b7280; line-height: 1.6; }
    .ch-sub .dot { color: #93c5fd; margin: 0 3px; }
    .ch-arrow { color: #93c5fd; font-size: 18px; flex-shrink: 0; margin-top: 8px; transition: transform 0.15s; }
    .chapter-item:hover .ch-arrow { transform: translateX(-3px); }

    @media (max-width: 580px) {
      .chapters-hero { padding: 36px 14px 30px; }
      .h-stat-num { font-size: 30px; }
      .chapters-hero h1 { font-size: 20px; }
      .content { padding: 20px 10px 60px; }
      .chapter-item { padding: 14px 14px; }
      .part-header { padding: 14px 16px; }
    }
  </style>
</head>
<body>
  ${navbar('chapters')}
  <div class="page-wrap">
    <!-- Hero Banner -->
    <div class="chapters-hero">
      <div class="hero-stats">
        <div class="h-stat">
          <div class="h-stat-num">${totalChapters}</div>
          <div class="h-stat-label">فصل كامل</div>
        </div>
        <div class="h-stat">
          <div class="h-stat-num">${parts.length}</div>
          <div class="h-stat-label">أجزاء رئيسية</div>
        </div>
        <div class="h-stat">
          <div class="h-stat-num">100%</div>
          <div class="h-stat-label">محتوى متوفر</div>
        </div>
      </div>
      <h1>${bookTitle}</h1>
      <div class="sub">${bookTitleEn}</div>
    </div>

    <div class="content">
      <!-- Intro Link -->
      <a href="/chapter/intro" class="extra-link">
        <div>
          <div class="t-ar">⭐ المقدمة</div>
          <div class="t-en">Introduction</div>
        </div>
        <span class="arrow">←</span>
      </a>

      <!-- Parts & Chapters -->
      ${parts.map(part => `
      <div class="part-block" id="part${part.id}">
        <div class="part-header">
          <div class="part-badge">${part.id}</div>
          <div class="part-titles">
            <div class="part-ar">${part.titleAr}</div>
            <div class="part-en">${part.titleEn}</div>
          </div>
        </div>
        ${part.chapters.map(ch => `
        <a href="/chapter/${ch.num}" class="chapter-item">
          <div class="ch-num">${ch.num}</div>
          <div class="ch-info">
            <div class="ch-ar">${ch.ar}</div>
            <span class="ch-en">${ch.en}</span>
            <div class="ch-sub">
              ${ch.sub.split('•').map((s, i, arr) => 
                `<span>${s.trim()}</span>${i < arr.length-1 ? '<span class="dot">•</span>' : ''}`
              ).join('')}
            </div>
          </div>
          <div class="ch-arrow">←</div>
        </a>
        `).join('')}
      </div>
      `).join('')}

      <!-- Conclusion & References Links -->
      <a href="/chapter/conclusion" class="extra-link">
        <div>
          <div class="t-ar">⭐ الخاتمة</div>
          <div class="t-en">Conclusion</div>
        </div>
        <span class="arrow">←</span>
      </a>

      <div style="text-align:center;margin-top:36px;">
        <a href="/" style="font-family:'Noto Kufi Arabic',sans-serif;font-size:14px;color:#1e3a8a;border:1px solid #bfdbfe;padding:10px 24px;border-radius:8px;display:inline-block;">← العودة للصفحة الرئيسية</a>
      </div>
    </div>
  </div>
</body>
</html>`
  return c.html(html)
})

// ======== CHAPTER PAGE ========
app.get('/chapter/:id', (c) => {
  const idParam = c.req.param('id')
  const chNum = parseInt(idParam)

  // Special pages
  if (idParam === 'intro' || idParam === 'conclusion') {
    return c.html(renderSpecialPage(idParam))
  }

  if (isNaN(chNum)) {
    return c.redirect('/chapters')
  }

  const chapterIndex = allChapters.findIndex(ch => ch.num === chNum)
  const chapter = allChapters[chapterIndex]

  if (!chapter) {
    return c.html(`<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>غير موجود</title></head><body style="font-family:sans-serif;text-align:center;padding:40px;"><h2>الفصل غير موجود</h2><a href="/chapters">← العودة للفصول</a></body></html>`, 404)
  }

  const prevChapter = chapterIndex > 0 ? allChapters[chapterIndex - 1] : null
  const nextChapter = chapterIndex < allChapters.length - 1 ? allChapters[chapterIndex + 1] : null
  const partInfo = parts.find(p => p.chapters.some(ch => ch.num === chNum))

  // Get real content from chapters data
  const rawContent = chaptersContent[String(chNum)] || chaptersContent[chNum] || ''
  
  // Clean up the raw content — remove existing nav elements, part-title divs at top
  let cleanContent = rawContent
    .replace(/<div class="download-container">[\s\S]*?<\/div>/g, '')
    .replace(/<div class="part-title"[^>]*>[\s\S]*?<\/div>/g, '')
    .replace(/<div class="subtitle"[^>]*>[\s\S]*?<\/div>/g, '')
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/g, '')  // remove the h1 (we have it in header box)
    .trim()

  const partLabelEn = partInfo?.titleEn || ''
  const partLabelAr = partInfo?.titleAr || ''

  const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>الفصل ${chNum} — ${chapter.ar}</title>
  ${sharedFonts}
  <style>
    ${chapterPageCSS}
  </style>
</head>
<body>
  ${navbar('chapter', prevChapter?.num, nextChapter?.num)}

  <div class="chapter-wrapper">
    ${partLabelEn ? `
    <div class="part-label" style="direction:ltr;">${partLabelEn}</div>
    <div class="part-label" style="color:#1e3a8a;font-family:'Noto Kufi Arabic',sans-serif;font-size:14px;margin-bottom:20px;">${partLabelAr}</div>
    ` : ''}

    <div class="chapter-header-box">
      <div class="ch-en-title">CHAPTER ${chNum} — ${chapter.en}</div>
      <div class="ch-ar-title">الفصل ${getArabicOrdinal(chNum)} — ${chapter.ar}</div>
      <div class="ch-subtitle"><em>${chapter.sub}</em></div>
    </div>

    ${cleanContent}

    ${commentsSection(chNum)}

    <!-- Bottom Nav -->
    <div class="chapter-nav">
      ${prevChapter ? `<a href="/chapter/${prevChapter.num}">← الفصل ${prevChapter.num}</a>` : '<span></span>'}
      <div class="nav-center">
        <a href="/chapters" style="color:#1e3a8a;font-weight:600;">📚 جميع الفصول</a>
      </div>
      ${nextChapter ? `<a href="/chapter/${nextChapter.num}">الفصل ${nextChapter.num} →</a>` : '<span></span>'}
    </div>
  </div>
</body>
</html>`

  return c.html(html)
})

// ======== SPECIAL PAGES (intro/conclusion) ========
function renderSpecialPage(type: string): string {
  const data: Record<string, {ar: string, en: string}> = {
    intro: { ar: 'مقدمة المؤلف', en: 'Author\'s Introduction' },
    conclusion: { ar: 'الخاتمة', en: 'Conclusion' },
  }
  const t = data[type] || { ar: 'الصفحة', en: 'Page' }
  const rawContent = chaptersContent[type] || ''

  let cleanContent = rawContent
    .replace(/<div class="download-container">[\s\S]*?<\/div>/g, '')
    .trim()

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.ar} — ${bookTitle}</title>
  ${sharedFonts}
  <style>${chapterPageCSS}</style>
</head>
<body>
  ${navbar('chapters')}
  <div class="chapter-wrapper">
    <div class="chapter-header-box">
      <div class="ch-en-title">${t.en}</div>
      <div class="ch-ar-title">${t.ar}</div>
    </div>
    ${cleanContent || `<div class="info-box"><p>هذا المحتوى قيد الإعداد.</p></div>`}

    ${commentsSection(0)}

    <div class="chapter-nav">
      <a href="/chapters">← جميع الفصول</a>
      <div class="nav-center"></div>
      <a href="/chapter/1">الفصل الأول →</a>
    </div>
  </div>
</body>
</html>`
}

// ======== ARABIC ORDINALS ========
function getArabicOrdinal(n: number): string {
  const ordinals: Record<number, string> = {
    1:'الأول', 2:'الثاني', 3:'الثالث', 4:'الرابع', 5:'الخامس',
    6:'السادس', 7:'السابع', 8:'الثامن', 9:'التاسع', 10:'العاشر',
    11:'الحادي عشر', 12:'الثاني عشر', 13:'الثالث عشر', 14:'الرابع عشر',
    15:'الخامس عشر', 16:'السادس عشر', 17:'السابع عشر', 18:'الثامن عشر',
    19:'التاسع عشر', 20:'العشرون', 21:'الحادي والعشرون', 22:'الثاني والعشرون',
    23:'الثالث والعشرون', 24:'الرابع والعشرون', 25:'الخامس والعشرون',
    26:'السادس والعشرون', 27:'السابع والعشرون', 28:'الثامن والعشرون',
    29:'التاسع والعشرون', 30:'الثلاثون', 31:'الحادي والثلاثون',
    32:'الثاني والثلاثون'
  }
  return ordinals[n] || n.toString()
}

export default app
