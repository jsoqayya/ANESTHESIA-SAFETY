// دليل السياسات والإجراءات في التخدير
// Anesthesia Policies & Procedures Guide
// Dr. Jameel Al-Soqayya

import { Hono } from 'hono'
import { apSectionsHtml, apFormsHtml } from './anesthesia-policies-html'

const ap = new Hono()

// ── Book metadata ──────────────────────────────────────────────────────────
const bookTitle    = 'دليل السياسات والإجراءات في التخدير'
const authorName   = 'د. جميل السقيا'

// ── Section order for prev/next navigation ────────────────────────────────
const sectionOrder = ['A','B','C','D','E','F','G','H','I','J','K','L','M']

const sectionTitles: Record<string, string> = {
  A: 'الحوكمة والنطاق',
  B: 'التقييم قبل التخدير',
  C: 'الرعاية أثناء العملية',
  D: 'رعاية ما بعد التخدير',
  E: 'إدارة مجرى الهواء',
  F: 'التخدير خارج غرف العمليات (NORA)',
  G: 'التخدير الإقليمي والنخاعي',
  H: 'المعدات والمراقبة',
  I: 'الطوارئ والأحداث الحرجة',
  J: 'سلامة الأدوية',
  K: 'الجودة والتدقيق',
  L: 'التعليم والكفاءات',
  M: 'النماذج وقوائم التحقق',
}

const formOrder = ['f01','f02','f03','f04','f05','f06','f07','f08','f09','f10',
                   'f11','f12','f13','f14','f15','f16','f17','f18','f19','f20',
                   'f21','f22','f23','f24','f25','f26','f27','f28','f29','f30']

const formTitles: Record<string, string> = {
  f01: 'Pre-Anesthesia Assessment Form',
  f02: 'Day-of-Surgery Update',
  f03: 'Airway Assessment & Plan Form',
  f04: 'Anesthesia Consent Form',
  f05: 'Intraoperative Anesthesia Record',
  f06: 'Airway Management Note',
  f07: 'Post-Anesthesia Note / Transfer Note',
  f08: 'OR Safety Checklist',
  f09: 'OR → PACU Handover Form (SBAR)',
  f10: 'PACU Forms Pack / Recovery & Discharge',
  f11: 'Pain Assessment & APS Daily Rounds Form',
  f12: 'Blood Product / Massive Transfusion Record',
  f13: 'Comprehensive Procedural Sedation Record',
  f14: 'NORA Site Readiness Checklist',
  f15: 'Stop Before You Block',
  f16: 'Neuraxial Block Record',
  f17: 'Peripheral Nerve Block Record',
  f18: 'Continuous Catheter Record',
  f19: 'LAST Event Record',
  f20: 'Anesthesia Machine Checkout',
  f21: 'Difficult Airway Cart Log',
  f22: 'Controlled Drug Register',
  f23: 'Controlled Drug Wastage Witness',
  f24: 'High Alert Medication Double Check',
  f25: 'Syringe & Line Labeling Spot Check',
  f26: 'Between-Case Cleaning Checklist',
  f27: 'Reprocessing Tracking Slip',
  f28: 'Isolation Case Workflow Checklist',
  f29: 'Sharps Waste Check Log',
  f30: 'Critical Incident / Near Miss Report',
}

// ── Navbar HTML ─────────────────────────────────────────────────────────────
// Large, clear navigation buttons for section pages
function navbar(active: string, prevLink?: string, prevLabel?: string, nextLink?: string, nextLabel?: string) {
  const base = `display:inline-flex;align-items:center;gap:8px;text-decoration:none;
    font-family:'Cairo','Noto Kufi Arabic',sans-serif;font-weight:800;
    border-radius:10px;white-space:nowrap;letter-spacing:0.2px;transition:all 0.2s;`
  const btnNav    = base + `font-size:15px;color:white;background:rgba(255,255,255,0.16);
    border:2px solid rgba(255,255,255,0.38);padding:10px 22px;`
  const btnActive = base + `font-size:15px;color:#042f2e;background:white;
    border:2px solid white;box-shadow:0 2px 14px rgba(0,0,0,0.25);padding:10px 22px;`
  const btnPortal = base + `font-size:15px;color:white;background:rgba(255,255,255,0.26);
    border:2px solid rgba(255,255,255,0.55);padding:10px 22px;`
  const btnDir    = base + `font-size:14px;color:#042f2e;background:#34d399;
    border:2px solid #34d399;padding:10px 20px;box-shadow:0 2px 10px rgba(52,211,153,0.4);`

  return `
  <nav style="position:fixed;top:0;left:0;right:0;z-index:9999;
    background:linear-gradient(135deg,#042f2e 0%,#0f766e 55%,#0d9488 100%);
    height:76px;display:flex;align-items:center;justify-content:space-between;
    padding:0 24px;box-shadow:0 4px 28px rgba(0,0,0,0.55);">
    <a href="/anesthesia-policies" style="display:flex;align-items:center;gap:12px;text-decoration:none;flex-shrink:0;min-width:0;">
      <div style="width:46px;height:46px;background:rgba(255,255,255,0.2);border-radius:12px;
        display:flex;align-items:center;justify-content:center;font-size:24px;
        border:2px solid rgba(255,255,255,0.38);flex-shrink:0;">💊</div>
      <span style="color:white;font-size:14px;font-weight:800;
        white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;
        text-shadow:0 1px 4px rgba(0,0,0,0.4);">${bookTitle}</span>
    </a>
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:nowrap;flex-shrink:0;">
      ${prevLink ? `<a href="${prevLink}" style="${btnDir}">&#8594;&nbsp;${prevLabel}</a>` : ''}
      <a href="/portal" style="${btnPortal}">🏠 المنصة</a>
      <a href="/anesthesia-policies" style="${active==='home' ? btnActive : btnNav}">الرئيسية</a>
      <a href="/anesthesia-policies/sections" style="${active==='sections' ? btnActive : btnNav}">📚 الأقسام</a>
      ${nextLink ? `<a href="${nextLink}" style="${btnDir}">${nextLabel}&nbsp;&#8592;</a>` : ''}
    </div>
  </nav>
  <div style="height:76px;"></div>`
}

// ── Comments section ───────────────────────────────────────────────────────
function commentsSection(pageId: string) {
  const safeId = pageId.replace(/[^a-zA-Z0-9]/g, '_')
  return `
  <div style="margin-top:50px;padding:30px 20px;background:#f0fdfa;border-top:2px solid #99f6e4;" dir="rtl">
    <h2 style="font-family:'Cairo',sans-serif;font-size:1.3rem;color:#042f2e;margin-bottom:24px;border-bottom:2px solid #0f766e;padding-bottom:12px;">
      💬 التعليقات والملاحظات
    </h2>
    <div id="commentsContainer_${safeId}" style="margin-bottom:24px;"></div>
    <div style="background:white;border-radius:12px;padding:24px;box-shadow:0 2px 8px rgba(0,0,0,0.07);border:1px solid #ccfbf1;">
      <h3 style="font-family:'Cairo',sans-serif;font-size:1rem;color:#042f2e;margin-bottom:16px;">أضف تعليقك</h3>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
        <input id="commentName_${safeId}" placeholder="الاسم (اختياري)" style="flex:1;min-width:150px;padding:10px 14px;border:1px solid #99f6e4;border-radius:8px;font-family:'Cairo',sans-serif;font-size:14px;outline:none;" />
        <input id="commentRole_${safeId}" placeholder="التخصص (اختياري)" style="flex:1;min-width:150px;padding:10px 14px;border:1px solid #99f6e4;border-radius:8px;font-family:'Cairo',sans-serif;font-size:14px;outline:none;" />
      </div>
      <div style="margin-bottom:10px;">
        <span style="font-family:'Cairo',sans-serif;font-size:13px;color:#6b7280;margin-left:8px;">التقييم:</span>
        <span id="ratingStars_${safeId}" style="font-size:22px;cursor:pointer;letter-spacing:3px;">★★★★★</span>
      </div>
      <textarea id="commentText_${safeId}" placeholder="شاركنا رأيك أو ملاحظاتك..." rows="4"
        style="width:100%;padding:12px 14px;border:1px solid #99f6e4;border-radius:8px;font-family:'Cairo',sans-serif;font-size:14px;resize:vertical;outline:none;margin-bottom:12px;"></textarea>
      <button onclick="submitComment_${safeId}()"
        style="background:linear-gradient(135deg,#042f2e,#0f766e);color:white;border:none;padding:11px 28px;border-radius:9px;font-family:'Cairo',sans-serif;font-size:14px;font-weight:700;cursor:pointer;">
        إرسال التعليق
      </button>
    </div>
  </div>
  <script>
  (function(){
    var sid = '${safeId}';
    var rating = 5;
    var stars = document.getElementById('ratingStars_'+sid);
    if(stars){
      stars.addEventListener('mouseover',function(e){
        var idx = Array.from(stars.children||[]).indexOf(e.target);
      });
      stars.addEventListener('click',function(e){
        var txt = stars.textContent||'';
        var pos = e.offsetX / stars.offsetWidth;
        rating = Math.max(1,Math.ceil(pos*5));
        stars.textContent = '★'.repeat(rating)+'☆'.repeat(5-rating);
      });
    }
    function loadComments(){
      var key='comments_'+sid;
      var data=JSON.parse(localStorage.getItem(key)||'[]');
      var cont=document.getElementById('commentsContainer_'+sid);
      if(!cont)return;
      if(!data.length){cont.innerHTML='<p style="color:#9ca3af;font-family:Cairo,sans-serif;font-size:14px;">لا توجد تعليقات بعد. كن أول من يعلّق!</p>';return;}
      cont.innerHTML=data.map(function(c){
        return '<div style="background:white;border-radius:10px;padding:16px;margin-bottom:12px;border:1px solid #ccfbf1;box-shadow:0 1px 4px rgba(0,0,0,0.05);">'
          +'<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">'
          +'<span style="font-family:Cairo,sans-serif;font-weight:700;color:#042f2e;font-size:14px;">'+(c.name||'مجهول')+'</span>'
          +(c.role?'<span style="background:#f0fdfa;color:#0f766e;padding:2px 8px;border-radius:6px;font-size:12px;">'+c.role+'</span>':'')
          +'<span style="color:#f59e0b;font-size:16px;margin-right:auto;">'+'★'.repeat(c.rating||5)+'</span>'
          +'</div>'
          +'<p style="font-family:Cairo,sans-serif;font-size:14px;color:#374151;line-height:1.7;margin:0 0 6px;">'+c.text+'</p>'
          +'<span style="font-size:11px;color:#9ca3af;">'+c.date+'</span>'
          +'</div>';
      }).join('');
    }
    window['submitComment_'+sid]=function(){
      var name=(document.getElementById('commentName_'+sid)||{value:''}).value;
      var role=(document.getElementById('commentRole_'+sid)||{value:''}).value;
      var text=(document.getElementById('commentText_'+sid)||{value:''}).value;
      if(!text.trim())return alert('الرجاء كتابة تعليق');
      var key='comments_'+sid;
      var data=JSON.parse(localStorage.getItem(key)||'[]');
      data.unshift({name:name,role:role,rating:rating,text:text,date:new Date().toLocaleDateString('ar-SA')});
      localStorage.setItem(key,JSON.stringify(data));
      (document.getElementById('commentText_'+sid)||{value:''}).value='';
      loadComments();
    };
    loadComments();
  })();
  </script>`
}

// ── buildFormPage — forms: full-width, no side padding, no comments ────────
function buildFormPage(
  title: string,
  css: string,
  body: string,
  navHtml: string
): string {
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
    /* Allow form's own CSS to control body layout fully */
    body { padding-top: 0 !important; margin: 0 !important; }
    .max-w-5xl { max-width: 64rem; }
  </style>
</head>
<body>
${navHtml}
${body}
</body>
</html>`
}

// ── buildPage ──────────────────────────────────────────────────────────────
function buildPage(
  title: string,
  css: string,
  body: string,
  navHtml: string,
  extraBottom: string = '',
  sectionId?: string
): string {
  let processedBody = body
  if (sectionId === 'M') {
    processedBody = body.replace(
      /<span class="form-id[^"]*">(F-(\d+))<\/span>/g,
      (match, fullId, num) => {
        const fid = 'f' + num.padStart(2, '0')
        return `<a href="/anesthesia-policies/form/${fid}" class="form-id" style="display:inline-block;cursor:pointer;text-decoration:none;transition:opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">${fullId} 🔗</a>`
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
ap.get('/', (c) => {
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

    /* ── FIXED TOP NAVBAR ── */
    .ap-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
      background: linear-gradient(135deg,#042f2e 0%,#0f766e 55%,#0d9488 100%);
      height: 76px; display: flex; align-items: center;
      justify-content: space-between; padding: 0 28px;
      box-shadow: 0 4px 28px rgba(0,0,0,0.55);
    }
    .ap-nav .brand { display: flex; align-items: center; gap: 12px; text-decoration: none; flex-shrink: 0; }
    .ap-nav .brand-icon {
      width: 46px; height: 46px; background: rgba(255,255,255,0.2); border-radius: 12px;
      border: 2px solid rgba(255,255,255,0.38); display: flex; align-items: center;
      justify-content: center; font-size: 24px; flex-shrink: 0;
    }
    .ap-nav .brand-text {
      color: white; font-size: 14px; font-weight: 800; max-width: 220px;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      text-shadow: 0 1px 4px rgba(0,0,0,0.4);
    }
    .ap-nav .nav-links { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
    .ap-nav .nav-links a {
      display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
      font-family: 'Cairo', sans-serif; font-size: 15px; font-weight: 800;
      padding: 10px 22px; border-radius: 10px; white-space: nowrap; border: 2px solid;
      transition: all 0.2s;
    }
    .ap-nav .btn-portal  { color: white; background: rgba(255,255,255,0.26); border-color: rgba(255,255,255,0.55); }
    .ap-nav .btn-nav     { color: white; background: rgba(255,255,255,0.16); border-color: rgba(255,255,255,0.38); }
    .ap-nav .btn-active  { color: #042f2e; background: white; border-color: white; box-shadow: 0 2px 14px rgba(0,0,0,0.25); }
    .ap-nav .btn-sections {
      color: #042f2e; background: #34d399; border-color: #34d399;
      box-shadow: 0 2px 12px rgba(52,211,153,0.45);
    }
    .ap-nav .btn-sections:hover { background: #2dd4aa; transform: translateY(-1px); }
    .ap-nav .btn-portal:hover, .ap-nav .btn-nav:hover { background: rgba(255,255,255,0.28); }

    /* ── HERO / COVER ── */
    .hero-wrap {
      padding-top: 76px;
      background: linear-gradient(180deg, #041410 0%, #061a17 40%, #082520 80%, #0a2e2a 100%);
      min-height: 100vh; display: flex; flex-direction: column; align-items: center;
    }
    .cover-spotlight {
      width: 100%; display: flex; justify-content: center; align-items: flex-end;
      padding: 60px 24px 0; position: relative;
    }
    .cover-spotlight::before {
      content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
      width: 700px; height: 700px;
      background: radial-gradient(ellipse at center, rgba(52,211,153,0.10) 0%, transparent 70%);
      pointer-events: none;
    }
    .cover-main-img {
      display: block;
      width: min(460px, 78vw);
      height: auto;
      border-radius: 14px;
      box-shadow:
        0 60px 140px rgba(0,0,0,0.9),
        0 24px 60px rgba(0,0,0,0.65),
        10px 0 36px rgba(0,0,0,0.5),
        0 0 0 1px rgba(255,255,255,0.07);
      transform: perspective(1400px) rotateY(-6deg) rotateX(2deg);
      transition: transform 0.5s ease, box-shadow 0.5s ease;
      position: relative; z-index: 1;
    }
    .cover-main-img:hover {
      transform: perspective(1400px) rotateY(-2deg) rotateX(1deg) scale(1.02);
      box-shadow: 0 70px 160px rgba(0,0,0,0.95), 0 28px 70px rgba(16,185,129,0.18);
    }
    @media (max-width: 600px) { .cover-main-img { width: 86vw; } }

    .cover-text-block {
      width: 100%; text-align: center;
      padding: 48px 24px 60px;
      background: linear-gradient(180deg, transparent 0%, rgba(4,20,16,0.7) 30%, #041410 100%);
    }
    .cover-en-tag {
      font-family: 'Segoe UI', sans-serif; font-size: 11px; letter-spacing: 3px;
      text-transform: uppercase; direction: ltr; color: rgba(255,255,255,0.36);
      display: block; margin-bottom: 18px;
    }
    .cover-title-ar {
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: clamp(30px,5vw,54px);
      font-weight: 800; color: white; line-height: 1.35; margin-bottom: 20px;
    }
    .cover-title-ar .green { color: #34d399; }
    .cover-stats-row {
      display: inline-flex; align-items: stretch; gap: 0;
      background: rgba(255,255,255,0.07); border: 1.5px solid rgba(255,255,255,0.14);
      border-radius: 18px; overflow: hidden; margin: 0 auto 36px; max-width: 600px;
    }
    .csr-item { padding: 16px 28px; text-align: center; border-left: 1px solid rgba(255,255,255,0.12); }
    .csr-item:last-child { border-left: none; }
    .csr-num { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 30px; font-weight: 800; color: white; line-height: 1; }
    .csr-lbl { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 11px; color: rgba(255,255,255,0.48); margin-top: 4px; }
    .cover-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .btn-green-lg {
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 17px; font-weight: 800;
      background: linear-gradient(135deg,#059669,#10b981); color: white;
      padding: 16px 40px; border-radius: 12px; display: inline-block;
      box-shadow: 0 4px 24px rgba(16,185,129,0.4); transition: all 0.25s;
    }
    .btn-green-lg:hover { transform: translateY(-3px); box-shadow: 0 10px 36px rgba(16,185,129,0.55); }
    .btn-outline-lg {
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 17px; font-weight: 700;
      background: transparent; color: white; padding: 16px 40px; border-radius: 12px;
      border: 2px solid rgba(255,255,255,0.38); display: inline-block; transition: all 0.25s;
    }
    .btn-outline-lg:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.6); }

    /* ── INTRO SECTION ── */
    .intro-section { background: #f8fffe; padding: 86px 24px; }
    .sec-max { max-width: 1000px; margin: 0 auto; }
    .sec-title { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 34px; font-weight: 800; color: #042f2e; text-align: center; margin-bottom: 6px; }
    .sec-subtitle { font-family: 'Segoe UI', sans-serif; font-size: 12px; color: #9ca3af; text-align: center; direction: ltr; letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 52px; }

    .intro-card {
      background: white; border: 1.5px solid #ccfbf1; border-radius: 28px;
      padding: 58px 64px; box-shadow: 0 8px 40px rgba(15,118,110,0.09);
      position: relative; overflow: hidden;
    }
    .intro-card::before {
      content: ''; position: absolute; top: 0; right: 0; width: 8px; height: 100%;
      background: linear-gradient(180deg, #042f2e 0%, #0f766e 50%, #34d399 100%);
      border-radius: 0 28px 28px 0;
    }
    .intro-head {
      display: flex; align-items: center; gap: 14px;
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 16px; font-weight: 800;
      color: #0f766e; margin-bottom: 36px; padding-bottom: 20px;
      border-bottom: 2px solid #f0fdfa;
    }
    .intro-head-icon { font-size: 30px; }
    .intro-points { list-style: none; padding: 0; margin: 0; }
    .intro-points li {
      font-family: 'Amiri', serif; font-size: 20px; color: #111827;
      line-height: 2; padding: 18px 0; border-bottom: 1px solid #f0fdfa;
      display: flex; gap: 18px; align-items: flex-start;
    }
    .intro-points li:last-child { border-bottom: none; }
    .ip-bullet { color: #0f766e; font-size: 18px; margin-top: 8px; flex-shrink: 0; font-weight: 900; }
    .intro-closing {
      margin-top: 40px; padding: 30px 36px;
      background: linear-gradient(135deg, #042f2e 0%, #0f766e 100%);
      border-radius: 16px; font-family: 'Amiri', serif;
      font-size: 21px; color: white; line-height: 2.1; text-align: center;
    }
    @media (max-width: 700px) {
      .intro-card { padding: 30px 24px; }
      .intro-points li { font-size: 18px; }
      .intro-closing { font-size: 18px; padding: 22px 24px; }
    }

    /* ── AUDIENCE GRID ── */
    .audience-section { background: white; padding: 76px 24px 66px; }
    .audience-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); gap: 18px; }
    .aud-card {
      background: #f0fdfa; border: 1.5px solid #99f6e4; border-radius: 16px;
      padding: 24px 22px; display: flex; gap: 16px; align-items: flex-start;
      transition: all 0.2s;
    }
    .aud-card:hover { border-color: #0f766e; box-shadow: 0 4px 20px rgba(15,118,110,0.13); transform: translateY(-3px); }
    .aud-icon { font-size: 30px; flex-shrink: 0; }
    .aud-title { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 15px; font-weight: 800; color: #042f2e; margin-bottom: 6px; }
    .aud-desc { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 13px; color: #4b5563; line-height: 1.75; }

    /* ── SECTIONS GRID ── */
    .sections-section { background: linear-gradient(135deg,#f0fdfa,#ccfbf1 50%,#f0fdfa); padding: 76px 24px; }
    .sections-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px,1fr)); gap: 18px; }
    .sec-card {
      background: white; border-radius: 16px; padding: 24px;
      border: 1.5px solid #99f6e4; box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: all 0.2s; text-decoration: none; color: inherit; display: block;
    }
    .sec-card:hover { transform: translateY(-5px); box-shadow: 0 12px 32px rgba(15,118,110,0.18); border-color: #0f766e; }
    .sec-badge {
      display: inline-block; background: linear-gradient(135deg,#059669,#0f766e);
      color: white; padding: 4px 14px; border-radius: 8px; font-weight: 800;
      font-size: 13px; margin-bottom: 12px; font-family: 'Segoe UI', sans-serif; letter-spacing: 0.5px;
    }
    .sec-card h3 { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 15px; font-weight: 700; color: #042f2e; line-height: 1.6; }

    /* ── SIBLING / COMPANION ── */
    .dark-section { background: linear-gradient(160deg,#061a18 0%,#082420 50%,#0a2e2a 100%); padding: 76px 24px; }
    .sibling-card {
      background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.14);
      border-radius: 18px; padding: 28px 32px; text-decoration: none; display: block;
      max-width: 640px; margin: 0 auto; transition: all 0.25s;
    }
    .sibling-card:hover { background: rgba(255,255,255,0.1); border-color: rgba(52,211,153,0.5); transform: translateY(-4px); }
    .sibling-tag { font-size: 13px; color: #34d399; font-weight: 700; margin-bottom: 10px; display: block; }
    .sibling-title { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 20px; font-weight: 800; color: white; margin-bottom: 8px; }
    .sibling-desc { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.8; }
    .sibling-arrow { margin-top: 14px; font-size: 14px; color: #34d399; font-weight: 700; }

    .cta-section { background: linear-gradient(135deg,#042f2e,#0f766e); text-align: center; padding: 76px 24px; color: white; }
    .cta-section h2 { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 30px; font-weight: 800; margin-bottom: 16px; }
    .cta-section p { font-family: 'Amiri', serif; font-size: 19px; color: rgba(255,255,255,0.78); max-width: 600px; margin: 0 auto 36px; line-height: 2; }
    .btn-cta-w { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 17px; font-weight: 800; background: white; color: #042f2e; padding: 16px 44px; border-radius: 12px; display: inline-block; transition: all 0.2s; }
    .btn-cta-w:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.25); }

    /* ── AUTHOR ── */
    .author-section { background: #f8fffe; padding: 56px 24px; }
    .author-card { max-width: 520px; margin: 0 auto; background: white; border: 1.5px solid #99f6e4; border-radius: 22px; padding: 40px 44px; text-align: center; box-shadow: 0 4px 24px rgba(15,118,110,0.09); }
    .author-avatar { font-size: 56px; margin-bottom: 14px; }
    .author-name { font-family: 'Amiri', serif; font-size: 1.6rem; font-weight: 700; color: #042f2e; margin-bottom: 4px; }
    .author-name-en { font-size: 14px; color: #6b7280; margin-bottom: 12px; }
    .author-role { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 14px; color: #374151; line-height: 1.8; }
    .author-exp { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 14px; color: #0f766e; margin-top: 10px; font-weight: 700; }

    /* ── FOOTER ── */
    .ap-footer { background: #041410; color: rgba(255,255,255,0.45); text-align: center; padding: 30px 24px; font-family: 'Noto Kufi Arabic', sans-serif; font-size: 13px; line-height: 1.9; }
  </style>
</head>
<body>

  <!-- ① TOP NAVBAR -->
  <nav class="ap-nav">
    <a href="/anesthesia-policies" class="brand">
      <div class="brand-icon">💊</div>
      <span class="brand-text">${bookTitle}</span>
    </a>
    <div class="nav-links">
      <a href="/portal" class="btn-portal">🏠 المنصة</a>
      <a href="/anesthesia-policies" class="btn-active">الرئيسية</a>
      <a href="/anesthesia-policies/sections" class="btn-sections">📚 الأقسام</a>
    </div>
  </nav>

  <!-- ② COVER IMAGE HERO -->
  <div class="hero-wrap">
    <div class="cover-spotlight">
      <img src="/static/anesthesia-policies-cover.png" alt="غلاف دليل السياسات والإجراءات في التخدير" class="cover-main-img" />
    </div>
    <div class="cover-text-block">
      <span class="cover-en-tag">ANESTHESIA POLICIES &amp; PROCEDURES MANUAL — DR. JAMEEL AL-SOQAYYA — 2026</span>
      <div class="cover-title-ar">
        دليل <span class="green">السياسات والإجراءات</span><br>في التخدير
      </div>
      <div class="cover-stats-row">
        <div class="csr-item"><div class="csr-num">${total}</div><div class="csr-lbl">قسماً رئيسياً</div></div>
        <div class="csr-item"><div class="csr-num">${totalForms}</div><div class="csr-lbl">نموذجاً جاهزاً</div></div>
        <div class="csr-item"><div class="csr-num">A – M</div><div class="csr-lbl">تغطية شاملة</div></div>
        <div class="csr-item"><div class="csr-num">2026</div><div class="csr-lbl">إصدار</div></div>
      </div>
      <div class="cover-btns">
        <a href="/anesthesia-policies/sections" class="btn-green-lg">استعرض الأقسام ←</a>
        <a href="/anesthesia-policies/section/A" class="btn-outline-lg">ابدأ من القسم الأول</a>
      </div>
    </div>
  </div>

  <!-- ③ FULL INTRODUCTORY OVERVIEW / نبذة تعريفية شاملة -->
  <section class="intro-section">
    <div class="sec-max">
      <div class="sec-title">نبذة تعريفية عن الدليل</div>
      <div class="sec-subtitle">Introductory Overview</div>

      <div class="intro-card">
        <div class="intro-head">
          <span class="intro-head-icon">📘</span>
          <span>دليل السياسات والإجراءات في التخدير — لمحة تعريفية شاملة</span>
        </div>
        <ul class="intro-points">
          <li>
            <span class="ip-bullet">◆</span>
            <span>
              <strong>دليل السياسات والإجراءات في التخدير</strong> هو مرجع مؤسسي عملي شامل، يُقدّم سياسات وإجراءات واضحة ومفصّلة وقابلة للتطبيق الفوري في أقسام التخدير، مبنيّة على أحدث المعايير الدولية المعتمدة. يختلف هذا الدليل عن الكتب النظرية في أنه أداة عمل يومية جاهزة للتطبيق المباشر داخل المنظومة الصحية.
            </span>
          </li>
          <li>
            <span class="ip-bullet">◆</span>
            <span>
              يتضمن الدليل <strong>نماذج سريرية جاهزة وقوائم تحقق مفصّلة (${totalForms} نموذجاً وقائمة)</strong> تشمل جميع مراحل رعاية المريض: من التقييم قبل التخدير ومرحلة اليقظة حتى الموافقة الطبية المستنيرة، ومرور بإدارة مجرى الهواء، والتوثيق الجراحي، وانتهاءً بعناية ما بعد التخدير في وحدة الإفاقة (PACU). هذه النماذج قابلة للتكيّف مع متطلبات كل مؤسسة صحية.
            </span>
          </li>
          <li>
            <span class="ip-bullet">◆</span>
            <span>
              يعمل هذا الدليل كـ<strong>مرجع مؤسسي تكميلي</strong> لكتاب <em>"دليل السلامة والجودة في التخدير"</em>؛ فبينما يُرسي الكتاب الأول مبادئ السلامة والجودة وفلسفتها، يتولّى هذا الدليل الجانب الإجرائي والسياساتي التطبيقي، مما يحقق التكامل الكامل ويبني منظومة شاملة للجودة والسلامة في قسم التخدير.
            </span>
          </li>
          <li>
            <span class="ip-bullet">◆</span>
            <span>
              هدفه الأساسي <strong>توحيد الممارسة السريرية</strong> داخل المؤسسة الصحية وتقليص التباين غير المبرر بين الممارسين، مما يؤدي مباشرةً إلى تعزيز سلامة المريض ورفع مستوى جودة الخدمة الطبية المقدّمة. الدليل يُجيب على السؤال الجوهري: "كيف نُطبّق ذلك بشكل موحّد وآمن وقابل للقياس؟"
            </span>
          </li>
          <li>
            <span class="ip-bullet">◆</span>
            <span>
              يُغطّي الدليل <strong>${total} قسماً رئيسياً (A حتى M)</strong>: الحوكمة والنطاق (A)، التقييم قبل التخدير (B)، الرعاية أثناء الجراحة (C)، رعاية ما بعد التخدير والإفاقة PACU (D)، إدارة مجرى الهواء (E)، التخدير خارج غرف العمليات NORA (F)، التخدير الإقليمي والنخاعي (G)، المعدات والمراقبة (H)، الطوارئ والأحداث الحرجة (I)، سلامة الأدوية والعقاقير المخدرة (J)، الجودة والتدقيق والمؤشرات (K)، التعليم والكفاءات (L)، والنماذج وقوائم التحقق (M).
            </span>
          </li>
          <li>
            <span class="ip-bullet">◆</span>
            <span>
              <strong>الفئات المستهدفة</strong> من هذا الدليل هي: أطباء التخدير (استشاريون ومقيمون)، ممرضات وممرضو التخدير وغرف العمليات، فنيو التخدير والمعدات الطبية، مديرو ومنسّقو الجودة والسلامة المؤسسية، قيادات أقسام التخدير والجراحة، والمتدربون والطلاب الذين يبنون كفاءتهم السريرية. الدليل مُصمَّم بحيث يُفيد كل مستوى من هذه الفئات بما يتناسب مع احتياجاته.
            </span>
          </li>
          <li>
            <span class="ip-bullet">◆</span>
            <span>
              يمتاز الدليل بأنه متوافقٌ مع متطلبات الاعتماد الدولي من هيئتَي <strong>JCI</strong> و<strong>CBAHI</strong> وغيرهما من هيئات الاعتماد المعتمدة دولياً. كما يلتزم بمعايير منظمتَي <strong>ASA</strong> و<strong>ESAIC</strong> المهنيتين، مما يجعله ملائماً للبيئات الطبية المتنوعة ومتعددة الجنسيات.
            </span>
          </li>
          <li>
            <span class="ip-bullet">◆</span>
            <span>
              يُرسّخ ثقافة <strong>التحسين المستمر والتعلّم من الأحداث</strong> من خلال توحيد آليات البلاغات والتحقيقات وتحليل الأسباب الجذرية، بدلاً من إخفاء الأخطاء أو تكرارها. يُضمّن الدليل نماذج متخصصة للحوادث الحرجة والتقارير السريرية تدعم بناء مؤسسة أكثر أماناً ومرونةً وقدرةً على الاستجابة.
            </span>
          </li>
        </ul>
        <div class="intro-closing">
          دليل يحوّل <strong>السياسات إلى ثقافة</strong> و<strong>الإجراءات إلى عادة يومية</strong>،<br>
          ليكون المريض في مركز كل قرار، وسلامته النتيجةَ الطبيعية لكل إجراء.
        </div>
      </div>
    </div>
  </section>

  <!-- ④ AUDIENCE / الفئات المستهدفة -->
  <section class="audience-section">
    <div class="sec-max">
      <div class="sec-title">الفئات المستهدفة</div>
      <div class="sec-subtitle">Target Audience</div>
      <div class="audience-grid">
        <div class="aud-card">
          <div class="aud-icon">👨‍⚕️</div>
          <div>
            <div class="aud-title">أطباء التخدير</div>
            <div class="aud-desc">استشاريون وأطباء مقيمون يبحثون عن مرجع سياساتي مؤسسي شامل يعزز ممارستهم اليومية ويوحّدها.</div>
          </div>
        </div>
        <div class="aud-card">
          <div class="aud-icon">👩‍⚕️</div>
          <div>
            <div class="aud-title">ممرضات وممرضو التخدير</div>
            <div class="aud-desc">فريق التمريض المتخصص في غرف العمليات ووحدة رعاية ما بعد التخدير (PACU) والعناية المركزة.</div>
          </div>
        </div>
        <div class="aud-card">
          <div class="aud-icon">🔬</div>
          <div>
            <div class="aud-title">الفنيون والتقنيون</div>
            <div class="aud-desc">فنيو التخدير والمعدات الطبية، ومشغّلو أجهزة الدعم الحيوي، والفريق الفني الداعم في الغرفة الجراحية.</div>
          </div>
        </div>
        <div class="aud-card">
          <div class="aud-icon">📊</div>
          <div>
            <div class="aud-title">مديرو الجودة والسلامة</div>
            <div class="aud-desc">المختصون في اعتماد المؤسسات الصحية، وضبط الجودة، وإدارة المخاطر، والامتثال للمعايير الدولية JCI وCBAHI.</div>
          </div>
        </div>
        <div class="aud-card">
          <div class="aud-icon">🏛️</div>
          <div>
            <div class="aud-title">قيادات الأقسام</div>
            <div class="aud-desc">رؤساء أقسام التخدير، ومديرو التمريض، والمشرفون على البرامج الطبية وتطوير الكفاءات المؤسسية.</div>
          </div>
        </div>
        <div class="aud-card">
          <div class="aud-icon">🎓</div>
          <div>
            <div class="aud-title">المتدربون والمقيمون</div>
            <div class="aud-desc">أطباء المقيمون وطلاب التمريض الذين يبنون كفاءتهم السريرية ويحتاجون مرجعاً تطبيقياً يوثّق التعلّم من اليوم الأول.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ⑤ SECTIONS GRID -->
  <section class="sections-section">
    <div class="sec-max">
      <div class="sec-title">📂 أقسام الدليل</div>
      <div class="sec-subtitle">Manual Sections A – M</div>
      <div class="sections-grid">
        ${sectionOrder.map(id => `
          <a href="/anesthesia-policies/section/${id}" class="sec-card">
            <span class="sec-badge">Section ${id}</span>
            <h3>${sectionTitles[id]}</h3>
          </a>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ⑥ COMPANION BOOK -->
  <section class="dark-section">
    <div class="sec-max" style="text-align:center;">
      <div style="font-family:'Noto Kufi Arabic',sans-serif;font-size:30px;font-weight:800;color:white;margin-bottom:8px;">المرجع الشقيق</div>
      <div style="font-family:'Segoe UI',sans-serif;font-size:12px;color:rgba(255,255,255,0.4);letter-spacing:2.5px;text-transform:uppercase;direction:ltr;margin-bottom:44px;">Companion Reference</div>
      <a href="https://www.anesthesiasafetyguideline.com" target="_blank" rel="noopener" class="sibling-card">
        <span class="sibling-tag">📘 يكمل هذا الدليل — Companion Volume</span>
        <div class="sibling-title">دليل السلامة والجودة في التخدير</div>
        <div class="sibling-desc">
          الكتاب المرجعي الذي يتكامل مع هذا الدليل — يغطي مبادئ السلامة والجودة، ومنهجيات التحسين المستمر، وإدارة المخاطر في ممارسة التخدير. يُنصح بقراءة الدليلين معاً لتحقيق التكامل الكامل وبناء منظومة مؤسسية متكاملة.
        </div>
        <div class="sibling-arrow">🔗 زيارة الموقع — anesthesiasafetyguideline.com ←</div>
      </a>
    </div>
  </section>

  <!-- ⑦ AUTHOR -->
  <section class="author-section">
    <div class="sec-max">
      <div class="author-card">
        <div class="author-avatar">👨‍⚕️</div>
        <div class="author-name">${authorName}</div>
        <div class="author-name-en">Dr. Jameel Al-Soqayya</div>
        <div class="author-role">
          استشاري تخدير وعناية مركزة | المملكة العربية السعودية<br>
          Consultant Anesthesiologist &amp; Intensivist
        </div>
        <div class="author-exp">خبرة تزيد على 25 عاماً في الممارسة الطبية والجودة والسلامة</div>
      </div>
    </div>
  </section>

  <!-- ⑧ CTA -->
  <section class="cta-section">
    <h2>ابدأ رحلتك نحو قسم تخدير أكثر أماناً</h2>
    <p>كل قسم خطوة نحو ممارسة موحّدة، ومريض أكثر أماناً، وفريق أكثر ثقةً وكفاءة</p>
    <a href="/anesthesia-policies/sections" class="btn-cta-w">استعرض جميع الأقسام ←</a>
  </section>

  <!-- ⑨ FOOTER -->
  <footer class="ap-footer">
    <div style="color:rgba(255,255,255,0.82);font-weight:800;font-size:14px;margin-bottom:5px;">${authorName} – Dr. Jameel Al-Soqayya</div>
    <div>استشاري تخدير وعناية مركزة | المملكة العربية السعودية</div>
    <div style="margin-top:10px;font-size:12px;">© 2026 جميع الحقوق محفوظة</div>
  </footer>

</body>
</html>`)
})

// ── SECTIONS LIST ──────────────────────────────────────────────────────────
ap.get('/sections', (c) => {
  const total = sectionOrder.length
  const totalForms = formOrder.length
  const navHtml = navbar('sections')
  return c.html(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>الأقسام | ${bookTitle}</title>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@300;400;600;700;900&family=Noto+Kufi+Arabic:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Cairo', 'Noto Kufi Arabic', sans-serif; background: linear-gradient(135deg, #f0fdfa, #ccfbf1); min-height: 100vh; direction: rtl; text-align: right; }
    a { text-decoration: none; color: inherit; }

    .page-header {
      background: linear-gradient(135deg, #042f2e, #0f766e, #0d9488);
      padding: 40px 20px 36px;
      text-align: center;
      color: white;
    }
    .page-header h1 {
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 2.2rem; font-weight: 800; margin-bottom: 8px;
    }
    .page-header p { font-size: 1rem; opacity: 0.78; font-family: 'Cairo', sans-serif; }

    .content { max-width: 960px; margin: 0 auto; padding: 36px 16px 70px; }

    .section-label {
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 1.1rem; font-weight: 800;
      color: #042f2e; margin-bottom: 20px; padding-bottom: 10px;
      border-bottom: 3px solid #0f766e;
    }

    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; margin-bottom: 48px; }
    .card {
      background: white; border-radius: 16px; padding: 24px;
      border: 1.5px solid #99f6e4; box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      text-decoration: none; color: inherit; display: block;
      transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
    }
    .card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(15,118,110,0.17); border-color: #0f766e; }
    .card .badge {
      display: inline-block; background: linear-gradient(135deg, #0d9488, #0f766e);
      color: white; padding: 5px 16px; border-radius: 9px; font-size: 0.88rem;
      font-weight: 800; margin-bottom: 12px; font-family: 'Segoe UI', sans-serif; letter-spacing: 0.5px;
    }
    .card h2 { font-size: 1rem; font-weight: 700; color: #042f2e; line-height: 1.6; font-family: 'Noto Kufi Arabic', sans-serif; }

    .forms-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
    .form-card {
      background: white; border-radius: 12px; padding: 16px 18px;
      border: 1.5px solid #99f6e4; text-decoration: none; color: inherit;
      display: block; transition: all 0.2s;
    }
    .form-card:hover { background: #f0fdfa; border-color: #0f766e; transform: translateY(-2px); }
    .form-card .fid { font-size: 0.78rem; color: #0f766e; font-weight: 800; margin-bottom: 5px; font-family: 'Segoe UI', sans-serif; letter-spacing: 0.5px; }
    .form-card .ftitle { font-size: 0.88rem; color: #374151; line-height: 1.5; }
  </style>
</head>
<body>
  ${navHtml}

  <div class="page-header">
    <h1>📂 أقسام الدليل</h1>
    <p>${total} قسماً رئيسياً · ${totalForms} نموذجاً وقائمة تحقق · الأقسام A – M</p>
  </div>

  <div class="content">
    <div class="section-label">الأقسام الرئيسية</div>
    <div class="grid">
      ${sectionOrder.map(id => `
        <a href="/anesthesia-policies/section/${id}" class="card">
          <span class="badge">Section ${id}</span>
          <h2>${sectionTitles[id]}</h2>
        </a>
      `).join('')}
    </div>

    <div class="section-label">📄 النماذج والاستمارات (Section M)</div>
    <div class="forms-grid">
      ${formOrder.map(id => `
        <a href="/anesthesia-policies/form/${id}" class="form-card">
          <div class="fid">${id.replace('f','F-').replace('F--','F-')}</div>
          <div class="ftitle">${formTitles[id]}</div>
        </a>
      `).join('')}
    </div>
  </div>
</body>
</html>`)
})

// ── SECTION PAGE ───────────────────────────────────────────────────────────
ap.get('/section/:id', (c) => {
  const id = c.req.param('id').toUpperCase()
  const sec = apSectionsHtml[id]
  if (!sec) return c.text('Section not found', 404)

  const idx = sectionOrder.indexOf(id)
  const prevId = idx > 0 ? sectionOrder[idx - 1] : undefined
  const nextId = idx < sectionOrder.length - 1 ? sectionOrder[idx + 1] : undefined

  const navHtml = navbar(
    'sections',
    prevId ? `/anesthesia-policies/section/${prevId}` : undefined,
    prevId,
    nextId ? `/anesthesia-policies/section/${nextId}` : undefined,
    nextId
  )

  const title = `Section ${id}: ${sectionTitles[id] || ''}`
  const page = buildPage(title, sec.css, sec.body, navHtml, commentsSection(id), id)
  return c.html(page)
})

// ── FORM PAGE ──────────────────────────────────────────────────────────────
ap.get('/form/:id', (c) => {
  const id = c.req.param('id').toLowerCase()
  const form = apFormsHtml[id]
  if (!form) return c.text('Form not found', 404)

  const idx = formOrder.indexOf(id)
  const prevId = idx > 0 ? formOrder[idx - 1] : undefined
  const nextId = idx < formOrder.length - 1 ? formOrder[idx + 1] : undefined

  const navHtml = navbar(
    'forms',
    prevId ? `/anesthesia-policies/form/${prevId}` : '/anesthesia-policies/section/M',
    prevId ? prevId.replace('f','F-') : 'Section M',
    nextId ? `/anesthesia-policies/form/${nextId}` : undefined,
    nextId ? nextId.replace('f','F-') : undefined
  )

  const title = `${id.replace('f','F-')}: ${formTitles[id] || ''}`
  const page = buildFormPage(title, form.css, form.body, navHtml)
  return c.html(page)
})

export default ap
