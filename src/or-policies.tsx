// دليل السياسات والإجراءات في غرفة العمليات
// Operating Room Policies & Procedures Guide
// Dr. Jameel Al-Soqayya

import { Hono } from 'hono'
// @ts-ignore - plain JS data file, no TypeScript types needed
import { orSectionsHtml } from './or-policies-sections.js'
// @ts-ignore - plain JS data file, no TypeScript types needed
import { orFormsHtml } from './or-policies-forms.js'

const or = new Hono()

// ── Book metadata ──────────────────────────────────────────────────────────
const bookTitle  = 'دليل السياسات والإجراءات في غرفة العمليات'
const authorName = 'د. جميل السقيا'

// ── Section order ─────────────────────────────────────────────────────────
const sectionOrder = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P']

const sectionTitles: Record<string, { en: string; ar: string }> = {
  A: { en: 'Governance & Structure',         ar: 'الحوكمة والهيكل التنظيمي' },
  B: { en: 'Staff Qualifications & Training',ar: 'مؤهلات الكوادر والتدريب' },
  C: { en: 'Quality & Patient Safety',       ar: 'الجودة وسلامة المريض' },
  D: { en: 'Ethics & Patient Rights',        ar: 'الأخلاقيات وحقوق المريض' },
  E: { en: 'OR Flow & Scheduling',           ar: 'تدفق العمل والجدولة' },
  F: { en: 'IPSG Patient Safety Goals',      ar: 'أهداف سلامة المريض الدولية' },
  G: { en: 'Intraoperative Safety',          ar: 'السلامة داخل العمليات' },
  H: { en: 'Surgical Safety Policies 1–3',   ar: 'سياسات السلامة الجراحية ١–٣' },
  I: { en: 'Surgical Safety Policies 4–7',   ar: 'سياسات السلامة الجراحية ٤–٧' },
  J: { en: 'Surgical Safety Policies 8–13',  ar: 'سياسات السلامة الجراحية ٨–١٣' },
  K: { en: 'Infection Prevention & Control', ar: 'الوقاية من العدوى ومكافحتها' },
  L: { en: 'Medication Management',          ar: 'إدارة الأدوية' },
  M: { en: 'Equipment & Environment',        ar: 'المعدات والبيئة' },
  N: { en: 'Documentation & Records',        ar: 'التوثيق والسجلات' },
  O: { en: 'Emergency & Critical Events',    ar: 'الطوارئ والأحداث الحرجة' },
  P: { en: 'Forms & Checklists',             ar: 'النماذج وقوائم التحقق' },
}

const formOrder = ['f01','f02','f03','f04','f05','f06','f07','f08','f09','f10',
                   'f11','f12','f13','f14','f15','f16','f17','f18','f19','f20',
                   'f21','f22','f23','f24','f25']

const formTitles: Record<string, string> = {
  f01: 'Operation List',
  f02: 'Pre-Operative Checklist',
  f03: 'Safe Surgery Checklist (WHO)',
  f04: 'Surgical Counts Form',
  f05: 'Combined Safety & Counts Form',
  f06: 'Blood Loss Estimation Form',
  f07: 'Histopathology Specimen Form',
  f08: "Doctor's Operative Notes",
  f09: 'Policies Compliance Tracker',
  f10: 'Narcotic Drug Endorsement',
  f11: 'Narcotic Drug Monitoring Log',
  f12: 'Surgery Cancellation Form',
  f13: 'On-Call Activation Log',
  f14: 'OT–PACU Handover Form',
  f15: 'Specimen Chain of Custody',
  f16: 'Implant Traceability Record',
  f17: 'Tourniquet Safety Record',
  f18: 'Diathermy Safety Checklist',
  f19: 'Warming Cabinet Temperature Log',
  f20: 'Temperature & Humidity Log',
  f21: 'OR Cleaning Checklist',
  f22: 'Visitor & Observer Log',
  f23: 'Photography / Video Consent',
  f24: 'Fire Drill Evaluation Form',
  f25: 'Equipment Failure Report',
}

// ── Navbar ─────────────────────────────────────────────────────────────────
function navbar(active: string, prevLink?: string, prevLabel?: string, nextLink?: string, nextLabel?: string) {
  const hasPrevNext = !!(prevLink || nextLink)
  const mobileSpacerH = hasPrevNext ? '138px' : '92px'
  return `
  <style>
    .or-snav {
      position:fixed;top:0;left:0;right:0;z-index:9999;
      width:100vw;direction:ltr;
      background:linear-gradient(135deg,#1e3a5f 0%,#1d4ed8 55%,#2563eb 100%);
      box-shadow:0 4px 28px rgba(0,0,0,0.55);
      font-family:'Cairo','Noto Kufi Arabic',sans-serif;
    }
    .or-snav-r1 {
      display:flex;align-items:center;padding:9px 14px 8px;
    }
    .or-snav-brand {
      display:flex;align-items:center;gap:8px;text-decoration:none;
    }
    .or-snav-icon {
      width:34px;height:34px;background:rgba(255,255,255,0.2);border-radius:8px;
      display:flex;align-items:center;justify-content:center;font-size:18px;
      border:2px solid rgba(255,255,255,0.38);flex-shrink:0;
    }
    .or-snav-title {
      color:white;font-size:12px;font-weight:800;
      white-space:nowrap;text-shadow:0 1px 4px rgba(0,0,0,0.4);
    }
    .or-snav-r2 {
      display:flex;align-items:center;justify-content:center;
      gap:7px;padding:0 10px 9px;
    }
    .or-snav-r2 a {
      display:inline-flex;align-items:center;justify-content:center;gap:5px;
      text-decoration:none;font-weight:800;border-radius:9px;
      white-space:nowrap;border:2px solid;transition:all 0.2s;
      font-size:12px;padding:7px 12px;flex:1;max-width:120px;direction:rtl;
    }
    .or-snav-r3 {
      display:${hasPrevNext ? 'flex' : 'none'};
      align-items:center;justify-content:space-between;
      gap:8px;padding:0 10px 9px;
    }
    .or-snav-r3 a {
      display:inline-flex;align-items:center;justify-content:center;gap:5px;
      text-decoration:none;font-weight:800;border-radius:9px;
      white-space:nowrap;border:2px solid;font-size:12px;padding:7px 12px;flex:1;
      color:#1e3a5f!important;background:#60a5fa!important;border-color:#60a5fa!important;
      box-shadow:0 2px 8px rgba(96,165,250,0.35);
    }
    .or-snav-r3 a.empty { visibility:hidden; }
    .snb-portal   { color:white!important;background:rgba(255,255,255,0.22)!important;border-color:rgba(255,255,255,0.5)!important; }
    .snb-nav      { color:white!important;background:rgba(255,255,255,0.14)!important;border-color:rgba(255,255,255,0.35)!important; }
    .snb-active   { color:#1e3a5f!important;background:white!important;border-color:white!important;box-shadow:0 2px 10px rgba(0,0,0,0.2)!important; }
    .snb-sections { color:#1e3a5f!important;background:#60a5fa!important;border-color:#60a5fa!important;box-shadow:0 2px 10px rgba(96,165,250,0.35)!important; }
    .or-snav-spacer { height:${mobileSpacerH}; }
    @media (min-width:700px) {
      .or-snav-r1 { height:68px;padding:0 22px;justify-content:space-between; }
      .or-snav-r2,.or-snav-r3 { display:none!important; }
      .or-snav-title { font-size:14px; }
      .or-snav-icon { width:40px;height:40px;font-size:20px; }
      .or-snav-spacer { height:68px!important; }
      .or-snav-desk-btns { display:flex!important;align-items:center;gap:9px; }
      .or-snav-desk-btns a {
        display:inline-flex;align-items:center;gap:6px;text-decoration:none;
        font-weight:800;border-radius:9px;white-space:nowrap;border:2px solid;
        transition:all 0.2s;font-size:14px;padding:9px 18px;direction:rtl;
      }
    }
    .or-snav-desk-btns { display:none; }
  </style>
  <nav class="or-snav">
    <div class="or-snav-r1">
      <a href="/or-policies" class="or-snav-brand">
        <div class="or-snav-icon">🏥</div>
        <span class="or-snav-title">${bookTitle}</span>
      </a>
      <div class="or-snav-desk-btns">
        ${prevLink ? `<a href="${prevLink}" class="snb-sections">&#8594; ${prevLabel}</a>` : ''}
        ${nextLink ? `<a href="${nextLink}" class="snb-sections">${nextLabel} &#8592;</a>` : ''}
        <a href="/portal" class="snb-portal">🏠 البوابة</a>
        <a href="/or-policies" class="${active==='home' ? 'snb-active' : 'snb-nav'}">الرئيسية</a>
        <a href="/or-policies/sections" class="${active==='sections' ? 'snb-active' : 'snb-sections'}">📚 الأقسام</a>
      </div>
    </div>
    <div class="or-snav-r2">
      <a href="/portal" class="snb-portal">🏠 البوابة</a>
      <a href="/or-policies" class="${active==='home' ? 'snb-active' : 'snb-nav'}">الرئيسية</a>
      <a href="/or-policies/sections" class="${active==='sections' ? 'snb-active' : 'snb-sections'}">📚 الأقسام</a>
    </div>
    ${hasPrevNext ? `
    <div class="or-snav-r3">
      ${prevLink ? `<a href="${prevLink}">&#8594; ${prevLabel}</a>` : '<a class="empty" href="#">-</a>'}
      ${nextLink ? `<a href="${nextLink}">${nextLabel} &#8592;</a>` : '<a class="empty" href="#">-</a>'}
    </div>` : ''}
  </nav>
  <div class="or-snav-spacer"></div>`
}

// ── Comments section ───────────────────────────────────────────────────────
function commentsSection(pageId: string) {
  const safeId = pageId.replace(/[^a-zA-Z0-9]/g, '_')
  return `
  <div style="margin-top:50px;padding:30px 20px;background:#eff6ff;border-top:2px solid #93c5fd;" dir="rtl">
    <h2 style="font-family:'Cairo',sans-serif;font-size:1.3rem;color:#1e3a5f;margin-bottom:24px;border-bottom:2px solid #1d4ed8;padding-bottom:12px;">
      💬 التعليقات والملاحظات
    </h2>
    <div id="commentsContainer_${safeId}" style="margin-bottom:24px;"></div>
    <div style="background:white;border-radius:12px;padding:24px;box-shadow:0 2px 8px rgba(0,0,0,0.07);border:1px solid #bfdbfe;">
      <h3 style="font-family:'Cairo',sans-serif;font-size:1rem;color:#1e3a5f;margin-bottom:16px;">أضف تعليقك</h3>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
        <input id="commentName_${safeId}" placeholder="الاسم (اختياري)" style="flex:1;min-width:150px;padding:10px 14px;border:1px solid #93c5fd;border-radius:8px;font-family:'Cairo',sans-serif;font-size:14px;outline:none;" />
        <input id="commentRole_${safeId}" placeholder="التخصص (اختياري)" style="flex:1;min-width:150px;padding:10px 14px;border:1px solid #93c5fd;border-radius:8px;font-family:'Cairo',sans-serif;font-size:14px;outline:none;" />
      </div>
      <div style="margin-bottom:10px;">
        <span style="font-family:'Cairo',sans-serif;font-size:13px;color:#6b7280;margin-left:8px;">التقييم:</span>
        <span id="ratingStars_${safeId}" style="font-size:22px;cursor:pointer;letter-spacing:3px;">★★★★★</span>
      </div>
      <textarea id="commentText_${safeId}" placeholder="شاركنا رأيك أو ملاحظاتك..." rows="4"
        style="width:100%;padding:12px 14px;border:1px solid #93c5fd;border-radius:8px;font-family:'Cairo',sans-serif;font-size:14px;resize:vertical;outline:none;margin-bottom:12px;"></textarea>
      <button onclick="submitComment_${safeId}()"
        style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8);color:white;border:none;padding:11px 28px;border-radius:9px;font-family:'Cairo',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">
        إرسال التعليق
      </button>
    </div>
  </div>
  <script>
  (function(){
    var sid = '${safeId}';
    var rating = 5;
    var stars = document.getElementById('ratingStars_' + sid);
    if(stars){ stars.addEventListener('click', function(e){ var r = Math.ceil((e.offsetX / stars.offsetWidth) * 5); rating = r; stars.innerHTML = '★'.repeat(r) + '☆'.repeat(5-r); }); }
    window['submitComment_' + sid] = function(){
      var name = (document.getElementById('commentName_' + sid) as HTMLInputElement)?.value || 'زائر';
      var role = (document.getElementById('commentRole_' + sid) as HTMLInputElement)?.value || '';
      var text = (document.getElementById('commentText_' + sid) as HTMLTextAreaElement)?.value || '';
      if(!text.trim()){ alert('يرجى كتابة تعليق'); return; }
      var cont = document.getElementById('commentsContainer_' + sid);
      if(cont){
        var d = document.createElement('div');
        d.style.cssText = 'background:white;border-radius:10px;padding:16px;margin-bottom:12px;border:1px solid #bfdbfe;';
        d.innerHTML = '<div style="display:flex;justify-content:space-between;margin-bottom:8px;"><span style="font-weight:700;color:#1e3a5f;font-family:Cairo,sans-serif;">' + name + (role?' · '+role:'') + '</span><span style="color:#f59e0b;">' + '★'.repeat(rating) + '☆'.repeat(5-rating) + '</span></div><p style="font-family:Cairo,sans-serif;font-size:14px;color:#374151;margin:0;">' + text + '</p>';
        cont.appendChild(d);
      }
      (document.getElementById('commentText_' + sid) as HTMLTextAreaElement).value = '';
    };
  })();
  </script>`
}

// ── buildFormPage ──────────────────────────────────────────────────────────
function buildFormPage(title: string, css: string, body: string, navHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${bookTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    ${css}
    *, *::before, *::after { box-sizing: border-box; }
    html { overflow-x: hidden; }
    body { margin: 0 !important; padding: 0 !important; overflow-x: hidden; }
    img { max-width: 100%; height: auto; }
    .form-page-wrap {
      max-width: 900px;
      margin: 0 auto;
      padding: 16px 12px 60px;
      overflow-x: auto;
    }
    @media (max-width: 640px) {
      .form-page-wrap { padding: 12px 6px 48px; }
      .form-page-wrap table {
        display: block; overflow-x: auto;
        -webkit-overflow-scrolling: touch; width: 100%;
      }
    }
  </style>
</head>
<body>
${navHtml}
<div class="form-page-wrap">
${body}
</div>
</body>
</html>`
}

// ── buildPage ──────────────────────────────────────────────────────────────
function buildPage(title: string, css: string, body: string, navHtml: string, extraBottom: string = '', sectionId?: string): string {
  let processedBody = body
  if (sectionId === 'P') {
    processedBody = body.replace(
      /<span class="form-id[^"]*">(F-(OT-\d+|\d+))<\/span>/g,
      (match, fullId, num) => {
        const fid = 'f' + num.padStart(2, '0')
        return `<a href="/or-policies/form/${fid}" class="form-id" style="display:inline-block;cursor:pointer;text-decoration:none;transition:opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">${fullId} 🔗</a>`
      }
    )
  }
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${bookTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    ${css}
    body { padding-top: 0 !important; }
    .max-w-5xl { max-width: 64rem; }
  </style>
</head>
<body>
${navHtml}
<div style="padding: 20px 16px 60px;">
${processedBody}
</div>
${extraBottom}
</body>
</html>`
}

// ── HOME PAGE ──────────────────────────────────────────────────────────────
or.get('/', (c) => {
  const total = sectionOrder.length
  const totalForms = formOrder.length
  return c.html(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${bookTitle}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Noto+Kufi+Arabic:wght@300;400;600;800&family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Cairo', 'Noto Kufi Arabic', sans-serif; color: #1f2937; background: #fff; direction: rtl; text-align: right; }
    a { text-decoration: none; color: inherit; }

    /* ── NAVBAR ── */
    .or-nav {
      position: fixed; top: 0; left: 0; right: 0; width: 100vw; z-index: 9999;
      direction: ltr;
      background: linear-gradient(135deg,#1e3a5f 0%,#1d4ed8 55%,#2563eb 100%);
      box-shadow: 0 4px 28px rgba(0,0,0,0.55);
      font-family: 'Cairo', sans-serif;
    }
    .or-nav-inner {
      display: flex; align-items: center; justify-content: space-between;
      width: 100%; height: 56px; padding: 0 12px;
    }
    .or-nav .brand { display: flex; align-items: center; gap: 7px; text-decoration: none; flex-shrink: 1; min-width: 0; }
    .or-nav .brand-icon {
      width: 32px; height: 32px; background: rgba(255,255,255,0.2); border-radius: 7px;
      border: 2px solid rgba(255,255,255,0.38); display: flex; align-items: center;
      justify-content: center; font-size: 16px; flex-shrink: 0;
    }
    .or-nav .brand-text {
      color: white; font-size: 11px; font-weight: 800;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      text-shadow: 0 1px 4px rgba(0,0,0,0.4); max-width: 110px;
    }
    .or-nav .nav-btns { display: flex; align-items: center; gap: 5px; flex-shrink: 0; }
    .or-nav .nav-btns a {
      display: inline-flex; align-items: center; justify-content: center;
      text-decoration: none; font-family: 'Cairo', sans-serif;
      font-size: 11px; font-weight: 800; padding: 5px 9px; border-radius: 7px;
      white-space: nowrap; border: 2px solid; transition: all 0.2s; direction: rtl;
    }
    .or-nav .btn-portal  { color: white; background: rgba(255,255,255,0.22); border-color: rgba(255,255,255,0.5); }
    .or-nav .btn-active  { color: #1e3a5f; background: white; border-color: white; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
    .or-nav .btn-sections{ color: #1e3a5f; background: #60a5fa; border-color: #60a5fa; box-shadow: 0 2px 8px rgba(96,165,250,0.35); }
    @media (min-width: 700px) {
      .or-nav-inner { height: 66px; padding: 0 28px; }
      .or-nav .brand-text { font-size: 14px; max-width: 280px; }
      .or-nav .brand-icon { width: 42px; height: 42px; font-size: 22px; }
      .or-nav .nav-btns a { font-size: 14px; padding: 9px 18px; }
      .or-nav .nav-btns { gap: 9px; }
    }

    /* ── HERO ── */
    .hero-wrap {
      padding-top: 56px;
      background: linear-gradient(180deg, #0a1628 0%, #0f1f40 40%, #122050 80%, #152657 100%);
      min-height: 100vh; display: flex; flex-direction: column; align-items: center;
    }
    @media (min-width:700px) { .hero-wrap { padding-top: 66px; } }
    .cover-spotlight {
      width: 100%; display: flex; justify-content: center; align-items: flex-end;
      padding: 36px 24px 0; position: relative;
    }
    @media (min-width:640px) { .cover-spotlight { padding-top: 56px; } }
    .cover-spotlight::before {
      content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
      width: 600px; height: 600px;
      background: radial-gradient(ellipse at center, rgba(96,165,250,0.12) 0%, transparent 70%);
      pointer-events: none;
    }
    .cover-main-img {
      display: block; width: min(380px, 82vw); height: auto; border-radius: 12px;
      box-shadow: 0 40px 100px rgba(0,0,0,0.85), 0 16px 40px rgba(0,0,0,0.6),
        8px 0 28px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.07);
      transform: perspective(1200px) rotateY(-5deg) rotateX(2deg);
      transition: transform 0.5s ease, box-shadow 0.5s ease; position: relative; z-index: 1;
    }
    @media (min-width:640px) { .cover-main-img { width: min(460px, 78vw); } }
    .cover-text-block {
      width: 100%; text-align: center; padding: 32px 16px 48px;
      background: linear-gradient(180deg, transparent 0%, rgba(10,22,40,0.7) 30%, #0a1628 100%);
    }
    .cover-en-tag {
      font-family: 'Segoe UI', sans-serif; font-size: 10px; letter-spacing: 2px;
      text-transform: uppercase; direction: ltr; color: rgba(255,255,255,0.34);
      display: block; margin-bottom: 14px;
    }
    .cover-title-ar {
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: clamp(24px,6vw,54px);
      font-weight: 800; color: white; line-height: 1.4; margin-bottom: 18px;
    }
    .cover-title-ar .blue { color: #60a5fa; }
    .cover-stats-row {
      display: flex; align-items: stretch;
      background: rgba(255,255,255,0.07); border: 1.5px solid rgba(255,255,255,0.14);
      border-radius: 14px; overflow-x: auto; margin: 0 auto 28px;
      max-width: 560px; -webkit-overflow-scrolling: touch; scrollbar-width: none;
    }
    .cover-stats-row::-webkit-scrollbar { display: none; }
    .csr-item { padding: 12px 18px; text-align: center; border-left: 1px solid rgba(255,255,255,0.12); flex-shrink: 0; }
    .csr-item:last-child { border-left: none; }
    .csr-num { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 24px; font-weight: 800; color: white; }
    .csr-lbl { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 10px; color: rgba(255,255,255,0.48); margin-top: 3px; }
    .cover-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; padding: 0 8px; }
    .btn-blue-lg {
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 15px; font-weight: 800;
      background: linear-gradient(135deg,#1d4ed8,#2563eb); color: white;
      padding: 13px 28px; border-radius: 11px; display: inline-block;
      box-shadow: 0 4px 20px rgba(37,99,235,0.4); transition: all 0.25s;
    }
    .btn-outline-lg {
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 15px; font-weight: 700;
      background: transparent; color: white; padding: 13px 28px; border-radius: 11px;
      border: 2px solid rgba(255,255,255,0.38); display: inline-block; transition: all 0.25s;
    }

    /* ── INTRO ── */
    .intro-section { background: #f0f7ff; padding: 56px 16px; }
    .sec-max { max-width: 1000px; margin: 0 auto; }
    .sec-title { font-family: 'Noto Kufi Arabic', sans-serif; font-size: clamp(22px,5vw,34px); font-weight: 800; color: #1e3a5f; text-align: center; margin-bottom: 6px; }
    .sec-subtitle { font-family: 'Segoe UI', sans-serif; font-size: 11px; color: #9ca3af; text-align: center; direction: ltr; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 36px; }
    .intro-card {
      background: white; border: 1.5px solid #bfdbfe; border-radius: 20px;
      padding: 28px 20px; box-shadow: 0 6px 32px rgba(29,78,216,0.08); position: relative; overflow: hidden;
    }
    @media (min-width:640px) { .intro-card { padding: 52px 60px; border-radius: 28px; } }
    .intro-card::before {
      content: ''; position: absolute; top: 0; right: 0; width: 6px; height: 100%;
      background: linear-gradient(180deg, #1e3a5f 0%, #1d4ed8 50%, #60a5fa 100%);
      border-radius: 0 20px 20px 0;
    }
    .intro-head {
      display: flex; align-items: center; gap: 12px;
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 14px; font-weight: 800;
      color: #1d4ed8; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #eff6ff;
    }
    .intro-head-icon { font-size: 26px; flex-shrink: 0; }
    .intro-points { list-style: none; padding: 0; margin: 0; }
    .intro-points li {
      font-family: 'Amiri', serif; font-size: 17px; color: #111827;
      line-height: 1.9; padding: 14px 0; border-bottom: 1px solid #eff6ff;
      display: flex; gap: 14px; align-items: flex-start;
    }
    @media (min-width:640px) { .intro-points li { font-size: 19px; padding: 18px 0; gap: 18px; } }
    .intro-points li:last-child { border-bottom: none; }
    .ip-bullet { color: #1d4ed8; font-size: 16px; margin-top: 6px; flex-shrink: 0; font-weight: 900; }
    .intro-closing {
      margin-top: 28px; padding: 22px 20px;
      background: linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 100%);
      border-radius: 13px; font-family: 'Amiri', serif;
      font-size: 17px; color: white; line-height: 2; text-align: center;
    }

    /* ── AUDIENCE ── */
    .audience-section { background: white; padding: 52px 16px 48px; }
    .audience-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
    @media (min-width:480px) { .audience-grid { grid-template-columns: repeat(2,1fr); } }
    @media (min-width:900px) { .audience-grid { grid-template-columns: repeat(3,1fr); } }
    .aud-card {
      background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 14px;
      padding: 18px 16px; display: flex; gap: 14px; align-items: flex-start;
    }
    .aud-icon { font-size: 26px; flex-shrink: 0; }
    .aud-title { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 14px; font-weight: 800; color: #1e3a5f; margin-bottom: 5px; }
    .aud-desc { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 12px; color: #4b5563; line-height: 1.7; }

    /* ── SECTIONS GRID ── */
    .sections-section { background: linear-gradient(135deg,#eff6ff,#dbeafe 50%,#eff6ff); padding: 52px 16px; }
    .sections-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
    @media (min-width:480px) { .sections-grid { grid-template-columns: repeat(2,1fr); } }
    @media (min-width:860px) { .sections-grid { grid-template-columns: repeat(3,1fr); } }
    .sec-card {
      background: white; border-radius: 14px; padding: 18px 16px;
      border: 1.5px solid #93c5fd; box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: all 0.2s; text-decoration: none; color: inherit; display: block;
    }
    .sec-badge {
      display: inline-block; background: linear-gradient(135deg,#1d4ed8,#1e3a5f);
      color: white; padding: 3px 12px; border-radius: 7px; font-weight: 800;
      font-size: 12px; margin-bottom: 10px; font-family: 'Segoe UI', sans-serif;
    }
    .sec-card h3 { font-family: 'Segoe UI', sans-serif; font-size: 13px; font-weight: 700; color: #1e3a5f; line-height: 1.5; }

    /* ── COMPANION ── */
    .dark-section { background: linear-gradient(160deg,#0a1628 0%,#0f1f40 50%,#122050 100%); padding: 52px 16px; }
    .sibling-card {
      background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.14);
      border-radius: 16px; padding: 22px 20px; text-decoration: none; display: block;
      max-width: 640px; margin: 0 auto; transition: all 0.25s;
    }
    .sibling-tag { font-size: 12px; color: #60a5fa; font-weight: 700; margin-bottom: 8px; display: block; }
    .sibling-title { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 17px; font-weight: 800; color: white; margin-bottom: 8px; }
    .sibling-desc { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.8; }
    .sibling-arrow { margin-top: 12px; font-size: 13px; color: #60a5fa; font-weight: 700; }

    .cta-section { background: linear-gradient(135deg,#1e3a5f,#1d4ed8); text-align: center; padding: 52px 16px; color: white; }
    .cta-section h2 { font-family: 'Noto Kufi Arabic', sans-serif; font-size: clamp(20px,5vw,30px); font-weight: 800; margin-bottom: 14px; }
    .cta-section p { font-family: 'Amiri', serif; font-size: clamp(16px,4vw,19px); color: rgba(255,255,255,0.78); max-width: 600px; margin: 0 auto 28px; line-height: 1.9; }
    .btn-cta-w { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 15px; font-weight: 800; background: white; color: #1e3a5f; padding: 13px 36px; border-radius: 11px; display: inline-block; }

    /* ── AUTHOR ── */
    .author-section { background: #f0f7ff; padding: 44px 16px; }
    .author-card { max-width: 480px; margin: 0 auto; background: white; border: 1.5px solid #93c5fd; border-radius: 18px; padding: 28px 24px; text-align: center; box-shadow: 0 4px 20px rgba(29,78,216,0.08); }
    .author-avatar { font-size: 48px; margin-bottom: 12px; }
    .author-name { font-family: 'Amiri', serif; font-size: 1.4rem; font-weight: 700; color: #1e3a5f; margin-bottom: 4px; }
    .author-name-en { font-size: 13px; color: #6b7280; margin-bottom: 10px; }
    .author-role { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 13px; color: #374151; line-height: 1.8; }
    .author-exp { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 13px; color: #1d4ed8; margin-top: 8px; font-weight: 700; }

    /* ── FOOTER ── */
    .or-footer { background: #0a1628; color: rgba(255,255,255,0.45); text-align: center; padding: 24px 16px; font-family: 'Noto Kufi Arabic', sans-serif; font-size: 12px; line-height: 1.9; }
  </style>
</head>
<body>

  <!-- NAVBAR -->
  <nav class="or-nav">
    <div class="or-nav-inner">
      <a href="/or-policies" class="brand">
        <div class="brand-icon">🏥</div>
        <span class="brand-text">${bookTitle}</span>
      </a>
      <div class="nav-btns">
        <a href="/portal" class="btn-portal">🏠</a>
        <a href="/or-policies" class="btn-active">الرئيسية</a>
        <a href="/or-policies/sections" class="btn-sections">📚 الأقسام</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <div class="hero-wrap">
    <div class="cover-spotlight">
      <img src="/static/or-policies-cover.png" alt="غلاف دليل السياسات والإجراءات في غرفة العمليات" class="cover-main-img" />
    </div>
    <div class="cover-text-block">
      <span class="cover-en-tag">OPERATING ROOM POLICIES &amp; PROCEDURES GUIDE — DR. JAMEEL AL-SOQAYYA — 2026</span>
      <div class="cover-title-ar">
        دليل <span class="blue">السياسات والإجراءات</span><br>في غرفة العمليات
      </div>
      <div class="cover-stats-row">
        <div class="csr-item"><div class="csr-num">${total}</div><div class="csr-lbl">قسماً رئيسياً</div></div>
        <div class="csr-item"><div class="csr-num">${totalForms}</div><div class="csr-lbl">نموذجاً جاهزاً</div></div>
        <div class="csr-item"><div class="csr-num">A – P</div><div class="csr-lbl">تغطية شاملة</div></div>
        <div class="csr-item"><div class="csr-num">2026</div><div class="csr-lbl">إصدار</div></div>
      </div>
      <div class="cover-btns">
        <a href="/or-policies/sections" class="btn-blue-lg">استعرض الأقسام ←</a>
        <a href="/or-policies/section/A" class="btn-outline-lg">ابدأ من القسم الأول</a>
      </div>
    </div>
  </div>

  <!-- INTRO -->
  <section class="intro-section">
    <div class="sec-max">
      <div class="sec-title">نبذة تعريفية عن الدليل</div>
      <div class="sec-subtitle">Introductory Overview</div>
      <div class="intro-card">
        <div class="intro-head">
          <span class="intro-head-icon">🏥</span>
          <span>دليل السياسات والإجراءات في غرفة العمليات — لمحة تعريفية شاملة</span>
        </div>
        <ul class="intro-points">
          <li><span class="ip-bullet">◆</span><span><strong>دليل السياسات والإجراءات في غرفة العمليات</strong> هو مرجع مؤسسي عملي شامل يُقدّم سياسات وإجراءات واضحة ومفصّلة وقابلة للتطبيق الفوري في أقسام غرفة العمليات، مبنيّة على أحدث المعايير الدولية المعتمدة.</span></li>
          <li><span class="ip-bullet">◆</span><span>يضع الدليل في مقدمة أولوياته <strong>سياسات السلامة الجراحية الأساسية</strong>، وعلى رأسها: سياسة تعريف المريض باستخدام معرفين، والتحقق من الموافقة المستنيرة، وتأكيد وسم موضع الجراحة، وتطبيق <strong>قائمة منظمة الصحة العالمية لسلامة الجراحة (WHO Surgical Safety Checklist)</strong> بمراحلها الثلاث: Sign-In وTime-Out وSign-Out.</span></li>
          <li><span class="ip-bullet">◆</span><span>يتضمن الدليل <strong>${totalForms} نموذجاً وقائمة تحقق جاهزة للتطبيق</strong>، تشمل: نموذج قائمة العمليات، قائمة التحقق قبل الجراحة، نموذج العدّ الجراحي، نموذج الغرسات، سجل تسليم المريض، ونماذج التوثيق والتصعيد.</span></li>
          <li><span class="ip-bullet">◆</span><span>يُغطّي الدليل <strong>${total} قسماً رئيسياً (A حتى P)</strong>: الحوكمة والهيكل التنظيمي، مؤهلات الكوادر والتدريب، الجودة وسلامة المريض، الأخلاقيات وحقوق المريض، تدفق العمل والجدولة، أهداف سلامة المريض الدولية (IPSG)، السلامة داخل العمليات، سياسات السلامة الجراحية المتعددة، الوقاية من العدوى، إدارة الأدوية، المعدات والبيئة، التوثيق والسجلات، الطوارئ والأحداث الحرجة، والنماذج وقوائم التحقق.</span></li>
          <li><span class="ip-bullet">◆</span><span>يستعرض الدليل <strong>السياسات داخل العمليات (Intra-operative Policies)</strong> التي تُمثّل العمود الفقري لسلامة المريض: الانضباط والتحكم بالدخول والخروج، المحافظة على الحقل المعقم، العدّ الجراحي، منع بقاء جسم غريب (RSI Prevention)، التعامل مع العينات، تتبع الغرسات، وسياسات الدياثيرمي والدخان الجراحي.</span></li>
          <li><span class="ip-bullet">◆</span><span><strong>الفئات المستهدفة:</strong> جراحو غرف العمليات، الممرضون والتقنيون، مديرو الجودة والسلامة، قيادات أقسام غرفة العمليات، والمتدربون والطلاب الذين يبنون كفاءتهم السريرية.</span></li>
          <li><span class="ip-bullet">◆</span><span>يمتاز الدليل بتوافقه مع متطلبات الاعتماد من هيئتَي <strong>JCI</strong> و<strong>CBAHI</strong>، مع التركيز على السياسات الأكثر تدقيقاً في معايير CBAHI داخل بيئة العمليات.</span></li>
          <li><span class="ip-bullet">◆</span><span>يُعدّ هذا الدليل <strong>مكمّلاً ورفيقاً</strong> لكتاب <em>"مبادئ السلامة والجودة في غرفة العمليات"</em>؛ فبينما يُرسّخ الكتاب الأول الإطار النظري للسلامة والجودة، يترجم هذا الدليل تلك المبادئ إلى سياسات وإجراءات ونماذج تشغيلية قابلة للتطبيق اليومي.</span></li>
        </ul>
        <div class="intro-closing">
          دليل يحوّل <strong>السياسات إلى ثقافة</strong> و<strong>الإجراءات إلى عادة يومية</strong>،<br>
          ليكون المريض في مركز كل قرار، وسلامته النتيجةَ الطبيعية لكل إجراء.
        </div>
      </div>
    </div>
  </section>

  <!-- AUDIENCE -->
  <section class="audience-section">
    <div class="sec-max">
      <div class="sec-title">الفئات المستهدفة</div>
      <div class="sec-subtitle">Target Audience</div>
      <div class="audience-grid">
        <div class="aud-card"><div class="aud-icon">🔪</div><div><div class="aud-title">الجراحون والأطباء</div><div class="aud-desc">جراحو غرف العمليات، استشاريون وأطباء مقيمون يبحثون عن مرجع سياساتي مؤسسي شامل.</div></div></div>
        <div class="aud-card"><div class="aud-icon">👩‍⚕️</div><div><div class="aud-title">ممرضو غرفة العمليات</div><div class="aud-desc">الممرضون والممرضات المتخصصون في غرف العمليات وغرف الإفاقة (PACU) والعناية المركزة.</div></div></div>
        <div class="aud-card"><div class="aud-icon">🔬</div><div><div class="aud-title">الفنيون والتقنيون</div><div class="aud-desc">فنيو غرفة العمليات ومشغّلو المعدات الجراحية والفريق الفني الداعم.</div></div></div>
        <div class="aud-card"><div class="aud-icon">📊</div><div><div class="aud-title">مديرو الجودة والسلامة</div><div class="aud-desc">المختصون في اعتماد المؤسسات الصحية وضبط الجودة وإدارة المخاطر والامتثال لمعايير JCI وCBAHI.</div></div></div>
        <div class="aud-card"><div class="aud-icon">🏛️</div><div><div class="aud-title">قيادات الأقسام</div><div class="aud-desc">رؤساء أقسام غرفة العمليات ومديرو التمريض والمشرفون على البرامج الطبية.</div></div></div>
        <div class="aud-card"><div class="aud-icon">🎓</div><div><div class="aud-title">المتدربون والطلاب</div><div class="aud-desc">طلاب الطب والتمريض والتقنيون الذين يبنون كفاءتهم السريرية في بيئة غرفة العمليات.</div></div></div>
      </div>
    </div>
  </section>

  <!-- SECTIONS GRID -->
  <section class="sections-section">
    <div class="sec-max">
      <div class="sec-title">أقسام الدليل</div>
      <div class="sec-subtitle">Manual Sections A – P</div>
      <div class="sections-grid">
        ${sectionOrder.map(id => `
          <a href="/or-policies/section/${id}" class="sec-card">
            <span class="sec-badge">Section ${id}</span>
            <h3 style="font-family:'Segoe UI',sans-serif;direction:ltr;text-align:left;margin-bottom:4px;">${sectionTitles[id].en}</h3>
            <p style="font-family:'Noto Kufi Arabic',sans-serif;font-size:12px;color:#6b7280;direction:rtl;text-align:right;margin:0;">${sectionTitles[id].ar}</p>
          </a>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- COMPANION BOOK -->
  <section class="dark-section">
    <div class="sec-max" style="text-align:center;">
      <div class="sec-title" style="color:white;margin-bottom:6px;">الكتاب الرفيق</div>
      <div class="sec-subtitle">Companion Reference</div>
      <a href="/anesthesia-policies" class="sibling-card">
        <span class="sibling-tag">📖 كتاب رفيق مُوصى به</span>
        <div class="sibling-title">دليل السياسات والإجراءات في التخدير</div>
        <div class="sibling-desc">يُكمل هذا الدليل منظومة غرفة العمليات من الجانب التخديري — سياسات وإجراءات ونماذج شاملة لقسم التخدير.</div>
        <div class="sibling-arrow">استعرض الدليل ←</div>
      </a>
      <div style="margin-top:20px;">
        <a href="https://www.anesthesiasafetyguideline.com" target="_blank" class="sibling-card" style="max-width:640px;">
          <span class="sibling-tag">🌐 موقع مرجعي</span>
          <div class="sibling-title">Anesthesia Safety Guideline</div>
          <div class="sibling-desc">الموقع الرسمي لدليل سلامة وجودة التخدير — مرجع دولي للممارسين والمؤسسات الصحية.</div>
          <div class="sibling-arrow">زيارة الموقع ←</div>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="sec-max">
      <h2>ابدأ باستعراض الدليل الآن</h2>
      <p>تصفّح الأقسام ${total} والنماذج ${totalForms} — جميعها جاهزة للتطبيق الفوري في مؤسستك الصحية.</p>
      <a href="/or-policies/sections" class="btn-cta-w">استعرض جميع الأقسام ←</a>
    </div>
  </section>

  <!-- AUTHOR -->
  <section class="author-section">
    <div class="sec-max">
      <div class="sec-title">المؤلف</div>
      <div class="sec-subtitle">Author</div>
      <div class="author-card">
        <div class="author-avatar">👨‍⚕️</div>
        <div class="author-name">الدكتور جميل السقيا</div>
        <div class="author-name-en">Dr. Jameel Al-Soqayya</div>
        <div class="author-role">استشاري التخدير وسلامة المريض<br>متخصص في الجودة والاعتماد المؤسسي<br>مؤلف سلسلة أدلة السلامة والجودة في غرفة العمليات</div>
        <div class="author-exp">خبرة تزيد عن 20 عاماً في التخدير والسلامة الجراحية</div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="or-footer">
    <div>دليل السياسات والإجراءات في غرفة العمليات · د. جميل السقيا · 2026</div>
    <div style="margin-top:4px;">Operating Room Policies &amp; Procedures Guide · Dr. Jameel Al-Soqayya</div>
    <div style="margin-top:8px;font-size:11px;">© 2026 جميع الحقوق محفوظة</div>
  </footer>

</body>
</html>`)
})

// ── SECTIONS LIST PAGE ─────────────────────────────────────────────────────
or.get('/sections', (c) => {
  const total = sectionOrder.length
  const totalForms = formOrder.length
  const navHtml = navbar('sections')
  return c.html(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>الأقسام | ${bookTitle}</title>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Noto+Kufi+Arabic:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Cairo', 'Noto Kufi Arabic', sans-serif; background: linear-gradient(135deg, #eff6ff, #dbeafe); min-height: 100vh; direction: rtl; text-align: right; }
    a { text-decoration: none; color: inherit; }
    .page-header {
      background: linear-gradient(135deg, #1e3a5f, #1d4ed8, #2563eb);
      padding: 28px 16px 26px; text-align: center; color: white;
    }
    .page-header h1 { font-family: 'Noto Kufi Arabic', sans-serif; font-size: clamp(1.4rem,5vw,2.2rem); font-weight: 800; margin-bottom: 8px; }
    .page-header p { font-size: clamp(0.85rem,3vw,1rem); opacity: 0.78; }
    .content { max-width: 960px; margin: 0 auto; padding: 24px 14px 60px; }
    .section-label { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 1rem; font-weight: 800; color: #1e3a5f; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 3px solid #1d4ed8; }
    .grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 40px; }
    @media (min-width:480px) { .grid { grid-template-columns: repeat(2,1fr); } }
    @media (min-width:860px) { .grid { grid-template-columns: repeat(3,1fr); } }
    .card {
      background: white; border-radius: 14px; padding: 18px 16px;
      border: 1.5px solid #93c5fd; box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      text-decoration: none; color: inherit; display: block; transition: all 0.2s;
    }
    .card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(29,78,216,0.15); border-color: #1d4ed8; }
    .card .badge {
      display: inline-block; background: linear-gradient(135deg, #1d4ed8, #1e3a5f);
      color: white; padding: 4px 12px; border-radius: 8px; font-size: 0.82rem;
      font-weight: 800; margin-bottom: 10px; font-family: 'Segoe UI', sans-serif;
    }
    .card h2 { font-size: 0.92rem; font-weight: 700; color: #1e3a5f; line-height: 1.5; font-family: 'Segoe UI', sans-serif; margin-bottom: 3px; direction: ltr; text-align: left; }
    .card p { font-size: 0.82rem; color: #6b7280; font-family: 'Noto Kufi Arabic', sans-serif; margin: 0; }
    .forms-grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
    @media (min-width:400px) { .forms-grid { grid-template-columns: repeat(2,1fr); } }
    @media (min-width:700px) { .forms-grid { grid-template-columns: repeat(3,1fr); } }
    .form-card {
      background: white; border-radius: 11px; padding: 14px;
      border: 1.5px solid #93c5fd; text-decoration: none; color: inherit;
      display: block; transition: all 0.2s;
    }
    .form-card:hover { border-color: #1d4ed8; box-shadow: 0 4px 12px rgba(29,78,216,0.1); }
    .form-card .fid { font-size: 0.75rem; color: #1d4ed8; font-weight: 800; margin-bottom: 4px; font-family: 'Segoe UI', sans-serif; }
    .form-card .ftitle { font-size: 0.82rem; color: #374151; line-height: 1.45; }
  </style>
</head>
<body>
  ${navHtml}
  <div class="page-header">
    <h1>📂 أقسام الدليل</h1>
    <p>${total} قسماً رئيسياً · ${totalForms} نموذجاً وقائمة تحقق · الأقسام A – P</p>
  </div>
  <div class="content">
    <div class="section-label">الأقسام الرئيسية</div>
    <div class="grid">
      ${sectionOrder.map(id => `
        <a href="/or-policies/section/${id}" class="card">
          <span class="badge">Section ${id}</span>
          <h2>${sectionTitles[id].en}</h2>
          <p>${sectionTitles[id].ar}</p>
        </a>
      `).join('')}
    </div>
    <div class="section-label">📄 النماذج والاستمارات</div>
    <div class="forms-grid">
      ${formOrder.map(id => `
        <a href="/or-policies/form/${id}" class="form-card">
          <div class="fid">${id.replace('f','F-OT-').replace('F-OT-0','F-OT-').replace('F-OT-','F-OT-')}</div>
          <div class="ftitle">${formTitles[id]}</div>
        </a>
      `).join('')}
    </div>
  </div>
</body>
</html>`)
})

// ── SECTION PAGE ───────────────────────────────────────────────────────────
or.get('/section/:id', (c) => {
  const id = c.req.param('id').toUpperCase()
  const sec = orSectionsHtml[id]
  if (!sec) return c.text('Section not found', 404)

  const idx = sectionOrder.indexOf(id)
  const prevId = idx > 0 ? sectionOrder[idx - 1] : undefined
  const nextId = idx < sectionOrder.length - 1 ? sectionOrder[idx + 1] : undefined

  const navHtml = navbar(
    'sections',
    prevId ? `/or-policies/section/${prevId}` : undefined,
    prevId,
    nextId ? `/or-policies/section/${nextId}` : undefined,
    nextId
  )

  const title = `Section ${id}: ${sectionTitles[id]?.en || id}`
  const page = buildPage(title, sec.css, sec.body, navHtml, commentsSection(id), id)
  return c.html(page)
})

// ── FORM PAGE ──────────────────────────────────────────────────────────────
or.get('/form/:id', (c) => {
  const id = c.req.param('id').toLowerCase()
  const form = orFormsHtml[id]
  if (!form) return c.text('Form not found', 404)

  const idx = formOrder.indexOf(id)
  const prevId = idx > 0 ? formOrder[idx - 1] : undefined
  const nextId = idx < formOrder.length - 1 ? formOrder[idx + 1] : undefined

  const navHtml = navbar(
    'forms',
    prevId ? `/or-policies/form/${prevId}` : '/or-policies/section/P',
    prevId ? 'F-OT-' + prevId.replace('f','') : 'Section P',
    nextId ? `/or-policies/form/${nextId}` : undefined,
    nextId ? 'F-OT-' + nextId.replace('f','') : undefined
  )

  const title = `F-OT-${id.replace('f','')}: ${formTitles[id] || ''}`
  const page = buildFormPage(title, form.css, form.body, navHtml)
  return c.html(page)
})

export default or
