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
  A: 'Governance & Scope',
  B: 'Pre-Anesthesia Assessment',
  C: 'Intraoperative Care',
  D: 'Post-Anesthesia Care',
  E: 'Airway Management',
  F: 'Non-OR Anesthesia (NORA)',
  G: 'Regional & Neuraxial',
  H: 'Equipment & Monitoring',
  I: 'Emergency & Critical Events',
  J: 'Medication Safety',
  K: 'Quality & Reporting',
  L: 'Education & Competency',
  M: 'Forms & Checklists',
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

// ── Navbar HTML ────────────────────────────────────────────────────────────
function navbar(active: string, prevLink?: string, prevLabel?: string, nextLink?: string, nextLabel?: string) {
  return `
  <nav style="position:fixed;top:0;left:0;right:0;z-index:9999;
    background:linear-gradient(135deg,#042f2e 0%,#0f766e 60%,#0d9488 100%);
    height:56px;display:flex;align-items:center;justify-content:space-between;
    padding:0 16px;box-shadow:0 2px 16px rgba(0,0,0,0.4);font-family:'Inter',sans-serif;">
    <a href="/anesthesia-policies" style="display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0;">
      <div style="width:32px;height:32px;background:rgba(255,255,255,0.2);border-radius:8px;
        display:flex;align-items:center;justify-content:center;font-size:16px;">💊</div>
      <span style="color:white;font-size:12px;font-weight:700;
        white-space:nowrap;max-width:180px;overflow:hidden;text-overflow:ellipsis;
        text-shadow:0 1px 2px rgba(0,0,0,0.3);">${bookTitle}</span>
    </a>
    <div style="display:flex;align-items:center;gap:5px;flex-wrap:nowrap;">
      ${prevLink ? `<a href="${prevLink}" style="color:rgba(255,255,255,0.9);text-decoration:none;font-size:11px;padding:5px 9px;border-radius:6px;background:rgba(255,255,255,0.12);white-space:nowrap;">← ${prevLabel}</a>` : ''}
      <a href="/portal" style="color:rgba(255,255,255,0.9);text-decoration:none;font-size:11px;padding:5px 10px;border-radius:6px;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.4);white-space:nowrap;">🏠 المنصة</a>
      <a href="/anesthesia-policies" style="color:rgba(255,255,255,0.9);text-decoration:none;font-size:11px;padding:5px 9px;border-radius:6px;${active==='home'?'background:rgba(255,255,255,0.3);font-weight:700;':'background:rgba(255,255,255,0.1);'}white-space:nowrap;">الرئيسية</a>
      <a href="/anesthesia-policies/sections" style="color:rgba(255,255,255,0.9);text-decoration:none;font-size:11px;padding:5px 9px;border-radius:6px;${active==='sections'?'background:rgba(255,255,255,0.3);font-weight:700;':'background:rgba(255,255,255,0.1);'}white-space:nowrap;">📚 الأقسام</a>
      ${nextLink ? `<a href="${nextLink}" style="color:rgba(255,255,255,0.9);text-decoration:none;font-size:11px;padding:5px 9px;border-radius:6px;background:rgba(255,255,255,0.12);white-space:nowrap;">${nextLabel} →</a>` : ''}
    </div>
  </nav>
  <div style="height:56px;"></div>`
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
        style="width:100%;padding:12px 14px;border:1px solid #99f6e4;border-radius:8px;
          font-family:'Cairo',sans-serif;font-size:14px;resize:vertical;outline:none;box-sizing:border-box;"></textarea>
      <button onclick="submitComment_${safeId}()"
        style="margin-top:12px;background:linear-gradient(135deg,#042f2e,#0f766e);color:white;border:none;
          padding:12px 30px;border-radius:8px;font-family:'Cairo',sans-serif;
          font-size:14px;font-weight:700;cursor:pointer;">
        إرسال التعليق ✓
      </button>
    </div>
  </div>
  <script>
    let apRating_${safeId} = 5;
    (function() {
      const stars = document.getElementById('ratingStars_${safeId}');
      if (stars) {
        stars.addEventListener('click', function(e) {
          const rect = this.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const w = rect.width / 5;
          apRating_${safeId} = Math.ceil(x / w);
          this.textContent = '★'.repeat(apRating_${safeId}) + '☆'.repeat(5 - apRating_${safeId});
        });
      }
    })();
    function submitComment_${safeId}() {
      const name = document.getElementById('commentName_${safeId}').value || 'زائر';
      const role = document.getElementById('commentRole_${safeId}').value;
      const text = document.getElementById('commentText_${safeId}').value.trim();
      if (!text) { alert('الرجاء كتابة تعليق'); return; }
      const key = 'ap_comments_${safeId}';
      const comments = JSON.parse(localStorage.getItem(key) || '[]');
      comments.unshift({ name, role, text, rating: apRating_${safeId}, date: new Date().toLocaleDateString('ar-SA') });
      localStorage.setItem(key, JSON.stringify(comments));
      loadComments_${safeId}();
      document.getElementById('commentText_${safeId}').value = '';
      document.getElementById('commentName_${safeId}').value = '';
      document.getElementById('commentRole_${safeId}').value = '';
    }
    function loadComments_${safeId}() {
      const key = 'ap_comments_${safeId}';
      const comments = JSON.parse(localStorage.getItem(key) || '[]');
      const container = document.getElementById('commentsContainer_${safeId}');
      if (!container) return;
      container.innerHTML = comments.map(c => \`
        <div style="background:white;border-radius:10px;padding:16px;margin-bottom:12px;border:1px solid #ccfbf1;box-shadow:0 1px 4px rgba(0,0,0,0.05);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:4px;">
            <div>
              <strong style="font-family:'Cairo',sans-serif;color:#042f2e;">\${c.name}</strong>
              \${c.role ? \`<span style="font-size:12px;color:#6b7280;margin-right:8px;">• \${c.role}</span>\` : ''}
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="color:#f59e0b;font-size:14px;">\${'★'.repeat(c.rating)}\${'☆'.repeat(5-c.rating)}</span>
              <span style="font-size:11px;color:#9ca3af;">\${c.date}</span>
            </div>
          </div>
          <p style="font-family:'Cairo',sans-serif;font-size:14px;color:#374151;margin:0;line-height:1.6;">\${c.text}</p>
        </div>
      \`).join('');
    }
    loadComments_${safeId}();
  </script>`
}

// ── Build a full page from original HTML body + CSS ────────────────────────
function buildPage(
  title: string,
  css: string,
  body: string,
  navHtml: string,
  extraBottom: string = '',
  sectionId?: string
): string {
  // In Section M, replace form-id spans with clickable links
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
    /* Override body padding to account for fixed navbar */
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

  const sectionIcons: Record<string,string> = {
    A:'⚖️', B:'🔍', C:'💉', D:'🛏️', E:'😴',
    F:'🏨', G:'🦴', H:'🔧', I:'🚨', J:'🧴',
    K:'📢', L:'📊', M:'📋'
  }

  return c.html(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${bookTitle}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Noto+Kufi+Arabic:wght@300;400;600;800;900&family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Noto Kufi Arabic', sans-serif; color: #f0fdfa; background: #021a18; direction: rtl; text-align: right; }
    a { text-decoration: none; color: inherit; }

    /* ─── TOP NAVBAR ─────────────────────────────────────────── */
    .top-nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
      height: 56px; display: flex; align-items: center; justify-content: space-between;
      padding: 0 20px;
      background: rgba(2,26,24,0.85);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(20,184,166,0.25);
      box-shadow: 0 2px 20px rgba(0,0,0,0.5);
    }
    .top-nav .brand {
      display: flex; align-items: center; gap: 9px;
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 13px; font-weight: 700; color: #ccfbf1;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 220px;
    }
    .top-nav .brand-icon {
      width: 30px; height: 30px; border-radius: 8px;
      background: linear-gradient(135deg, #0d9488, #0f766e);
      display: flex; align-items: center; justify-content: center;
      font-size: 15px; flex-shrink: 0;
    }
    .top-nav .nav-links { display: flex; align-items: center; gap: 6px; }
    .top-nav .nav-links a {
      font-size: 12px; font-weight: 600; padding: 6px 12px; border-radius: 7px;
      color: rgba(255,255,255,0.85); transition: all 0.2s;
    }
    .top-nav .nav-links .btn-portal {
      background: linear-gradient(135deg, #0f766e, #0d9488);
      border: none; color: white;
    }
    .top-nav .nav-links .btn-sections {
      background: rgba(255,255,255,0.1); border: 1px solid rgba(20,184,166,0.35);
    }
    .top-nav .nav-links a:hover { background: rgba(255,255,255,0.18); }

    /* ─── COVER SECTION ──────────────────────────────────────── */
    .cover-page {
      background: #021a18;
      display: flex; flex-direction: column; align-items: center;
    }
    .cover-img-block {
      width: 100%; display: flex; justify-content: center; align-items: flex-start;
      background: #021a18; padding-top: 56px;
    }
    .cover-bg-img {
      display: block; width: 60vw; max-width: 700px; height: auto;
    }
    @media (max-width: 768px) { .cover-bg-img { width: 92vw; } }
    .cover-bottom {
      width: 100%;
      background: linear-gradient(180deg, #021a18 0%, #042f2e 55%, #065f46 100%);
      padding: 40px 32px 50px; text-align: center;
    }
    .cover-en-label {
      font-family: 'Segoe UI', sans-serif; font-size: 11px;
      color: rgba(255,255,255,0.4); letter-spacing: 2.5px;
      text-transform: uppercase; direction: ltr;
      margin-bottom: 14px; display: block;
    }
    .cover-main-title {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: clamp(22px, 4vw, 42px); font-weight: 900;
      color: #fff; line-height: 1.35; margin-bottom: 14px;
    }
    .cover-main-title .accent { color: #2dd4bf; }
    .cover-badge-row {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.07); border: 1px solid rgba(20,184,166,0.3);
      color: rgba(255,255,255,0.75); padding: 7px 20px; border-radius: 22px;
      font-size: 12px; font-weight: 600; margin-bottom: 26px;
    }
    .cover-actions {
      display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
    }
    .btn-teal {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 14px; font-weight: 700; padding: 12px 26px; border-radius: 9px;
      background: linear-gradient(135deg, #0f766e, #0d9488);
      color: white; transition: opacity 0.2s, transform 0.2s;
      box-shadow: 0 4px 14px rgba(13,148,136,0.4);
    }
    .btn-teal:hover { opacity: 0.9; transform: translateY(-1px); }
    .btn-outline-teal {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 14px; font-weight: 700; padding: 12px 26px; border-radius: 9px;
      background: rgba(255,255,255,0.06); border: 1.5px solid rgba(20,184,166,0.45);
      color: #ccfbf1; transition: all 0.2s;
    }
    .btn-outline-teal:hover { background: rgba(20,184,166,0.15); border-color: #2dd4bf; }
    @media (max-width: 600px) {
      .cover-bottom { padding: 28px 16px 40px; }
      .cover-main-title { font-size: 22px; }
    }

    /* ─── HERO (TAGLINE) SECTION ─────────────────────────────── */
    .hero-section {
      background: linear-gradient(160deg, #042f2e 0%, #065f46 40%, #0f766e 80%, #0d9488 100%);
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; padding: 70px 24px 60px;
      text-align: center; position: relative; overflow: hidden;
    }
    .hero-section::before {
      content: ''; position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 40%, rgba(20,184,166,0.18) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-inner { position: relative; z-index: 1; max-width: 820px; width: 100%; }
    .hero-badge {
      display: inline-block;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(20,184,166,0.4);
      color: #ccfbf1; padding: 6px 18px; border-radius: 20px;
      font-size: 12px; font-weight: 600; margin-bottom: 22px;
    }
    .hero-title-en {
      font-family: 'Segoe UI', sans-serif; font-size: 12px;
      color: rgba(255,255,255,0.4); letter-spacing: 2px;
      text-transform: uppercase; direction: ltr; margin-bottom: 14px;
    }
    .hero-title {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: clamp(24px, 4.5vw, 44px); font-weight: 900;
      color: white; line-height: 1.4; margin-bottom: 20px;
    }
    .hero-title .accent { color: #2dd4bf; }
    .hero-desc {
      font-family: 'Cairo', sans-serif;
      font-size: clamp(14px, 2vw, 17px); color: rgba(255,255,255,0.75);
      line-height: 1.85; max-width: 680px; margin: 0 auto;
    }

    /* ─── BOOK INFO SECTION ──────────────────────────────────── */
    .book-info-section {
      background: linear-gradient(160deg, #021a18 0%, #042f2e 50%, #065f46 100%);
      padding: 70px 24px 80px;
    }
    .book-info-inner {
      max-width: 1000px; margin: 0 auto;
      display: flex; align-items: center; gap: 60px;
      flex-wrap: wrap; justify-content: center;
    }
    .book-img-wrap { flex-shrink: 0; perspective: 1000px; }
    .book-img-3d {
      width: 300px; border-radius: 12px;
      box-shadow: 0 30px 80px rgba(0,0,0,0.7), 0 10px 30px rgba(0,0,0,0.5), 6px 0 20px rgba(0,0,0,0.4);
      border: 1px solid rgba(255,255,255,0.1);
      display: block;
      transform: rotateY(-8deg) rotateX(2deg);
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    .book-img-3d:hover {
      transform: rotateY(-3deg) rotateX(1deg) scale(1.03);
      box-shadow: 0 40px 100px rgba(0,0,0,0.8), 0 15px 40px rgba(13,148,136,0.4);
    }
    @media (max-width: 600px) { .book-img-3d { width: 220px; } }
    .book-info-text { flex: 1; min-width: 280px; }
    .book-info-label {
      font-family: 'Segoe UI', sans-serif; font-size: 11px;
      color: rgba(255,255,255,0.4); letter-spacing: 2px;
      text-transform: uppercase; direction: ltr; margin-bottom: 14px;
    }
    .book-info-title {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 28px; font-weight: 900; color: white;
      line-height: 1.4; margin-bottom: 10px;
    }
    .book-info-en {
      font-family: 'Segoe UI', sans-serif; font-size: 13px;
      color: rgba(255,255,255,0.45); direction: ltr; margin-bottom: 22px;
    }
    .book-info-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.07); border: 1px solid rgba(20,184,166,0.3);
      color: rgba(255,255,255,0.75); padding: 6px 16px; border-radius: 20px;
      font-size: 12px; margin-bottom: 28px;
    }
    .stats-strip {
      display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 28px;
    }
    .stat-chip {
      background: rgba(255,255,255,0.07); border: 1px solid rgba(20,184,166,0.25);
      border-radius: 10px; padding: 12px 18px; text-align: center; min-width: 70px;
    }
    .stat-chip .snum {
      font-size: 1.6rem; font-weight: 900; color: #2dd4bf; display: block;
    }
    .stat-chip .slbl {
      font-size: 0.7rem; color: rgba(255,255,255,0.55); display: block; margin-top: 2px;
    }

    /* ─── INTRO SECTION ──────────────────────────────────────── */
    .intro-section {
      background: linear-gradient(180deg, #065f46 0%, #042f2e 100%);
      padding: 70px 24px 80px;
      position: relative; overflow: hidden;
    }
    .intro-section::before {
      content: ''; position: absolute; top: -60px; right: -80px;
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%);
      pointer-events: none;
    }
    .intro-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }
    .section-heading {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: clamp(22px, 3.5vw, 34px); font-weight: 900;
      color: #fff; margin-bottom: 6px;
    }
    .section-heading-en {
      font-family: 'Segoe UI', sans-serif; font-size: 11px;
      color: rgba(255,255,255,0.35); letter-spacing: 2px;
      text-transform: uppercase; direction: ltr; margin-bottom: 30px; display: block;
    }
    .intro-divider {
      width: 60px; height: 3px;
      background: linear-gradient(90deg, #2dd4bf, #0d9488);
      border-radius: 2px; margin-right: 0; margin-bottom: 36px;
    }
    .intro-desc {
      font-family: 'Cairo', sans-serif;
      font-size: clamp(15px, 2vw, 17px); color: rgba(255,255,255,0.82);
      line-height: 2; margin-bottom: 32px;
    }
    .intro-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 18px; margin-bottom: 40px;
    }
    .intro-card {
      background: rgba(255,255,255,0.05); border: 1px solid rgba(20,184,166,0.2);
      border-radius: 14px; padding: 22px 20px;
      transition: background 0.2s, border-color 0.2s;
    }
    .intro-card:hover { background: rgba(20,184,166,0.1); border-color: rgba(20,184,166,0.5); }
    .intro-card .ic-icon { font-size: 1.8rem; margin-bottom: 10px; }
    .intro-card .ic-title {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 15px; font-weight: 800; color: #ccfbf1; margin-bottom: 8px;
    }
    .intro-card .ic-text {
      font-family: 'Cairo', sans-serif;
      font-size: 13px; color: rgba(255,255,255,0.65); line-height: 1.7;
    }
    .audience-list {
      display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;
    }
    .audience-tag {
      background: rgba(20,184,166,0.15); border: 1px solid rgba(20,184,166,0.35);
      color: #ccfbf1; padding: 6px 14px; border-radius: 20px;
      font-family: 'Cairo', sans-serif; font-size: 13px; font-weight: 600;
    }

    /* ─── SECTIONS GRID ──────────────────────────────────────── */
    .sections-section {
      background: #f0fdfa; padding: 70px 24px 80px;
    }
    .sections-heading {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: clamp(20px, 3vw, 30px); font-weight: 900;
      color: #042f2e; margin-bottom: 6px;
    }
    .sections-heading-en {
      font-family: 'Segoe UI', sans-serif; font-size: 11px;
      color: #6b7280; letter-spacing: 2px; text-transform: uppercase;
      direction: ltr; margin-bottom: 30px; display: block;
    }
    .sections-divider {
      width: 60px; height: 3px;
      background: linear-gradient(90deg, #0d9488, #14b8a6);
      border-radius: 2px; margin-right: 0; margin-bottom: 36px;
    }
    .sections-inner { max-width: 1000px; margin: 0 auto; }
    .sections-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 16px;
    }
    .sec-card {
      background: white; border-radius: 14px; padding: 22px 18px;
      border: 1px solid #99f6e4;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      text-decoration: none; color: inherit; display: block;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .sec-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 28px rgba(13,148,136,0.18);
    }
    .sec-card .sc-top {
      display: flex; align-items: center; gap: 10px; margin-bottom: 12px;
    }
    .sec-card .sc-icon {
      width: 38px; height: 38px; border-radius: 10px;
      background: linear-gradient(135deg, #0d9488, #0f766e);
      display: flex; align-items: center; justify-content: center;
      font-size: 18px; flex-shrink: 0;
    }
    .sec-card .sc-id {
      font-size: 11px; font-weight: 800; color: #0f766e; letter-spacing: 0.5px;
      text-transform: uppercase; display: block;
    }
    .sec-card .sc-num { font-size: 11px; color: #9ca3af; }
    .sec-card h3 {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 14px; font-weight: 700; color: #042f2e; margin: 0;
    }

    /* ─── AUTHOR SECTION ─────────────────────────────────────── */
    .author-section {
      background: linear-gradient(160deg, #042f2e 0%, #021a18 100%);
      padding: 60px 24px; text-align: center;
    }
    .author-card {
      max-width: 480px; margin: 0 auto;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(20,184,166,0.25);
      border-radius: 20px; padding: 40px 32px;
    }
    .author-avatar {
      width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 18px;
      background: linear-gradient(135deg, #0d9488, #14b8a6);
      display: flex; align-items: center; justify-content: center;
      font-size: 36px;
    }
    .author-name {
      font-family: 'Amiri', serif; font-size: 1.5rem; font-weight: 700;
      color: #ccfbf1; margin-bottom: 6px;
    }
    .author-name-en {
      font-family: 'Segoe UI', sans-serif; font-size: 13px;
      color: rgba(255,255,255,0.45); direction: ltr; margin-bottom: 14px;
    }
    .author-role {
      font-family: 'Cairo', sans-serif; font-size: 14px;
      color: rgba(255,255,255,0.65); line-height: 1.7;
    }
    .author-exp {
      display: inline-block; margin-top: 14px;
      background: rgba(20,184,166,0.15); border: 1px solid rgba(20,184,166,0.3);
      color: #2dd4bf; padding: 5px 16px; border-radius: 20px;
      font-size: 12px; font-weight: 600;
    }

    /* ─── FOOTER ─────────────────────────────────────────────── */
    .main-footer {
      background: #010e0d; padding: 28px 20px; text-align: center;
      border-top: 1px solid rgba(20,184,166,0.15);
    }
    .main-footer .f-name {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 15px; font-weight: 700; color: #ccfbf1; margin-bottom: 4px;
    }
    .main-footer .f-sub { font-size: 12px; color: rgba(255,255,255,0.4); }
  </style>
</head>
<body>

  <!-- ① TOP NAVBAR -->
  <nav class="top-nav">
    <div class="brand">
      <div class="brand-icon">💊</div>
      <span>${bookTitle}</span>
    </div>
    <div class="nav-links">
      <a href="/portal" class="btn-portal">🏠 منصة الكتب</a>
      <a href="/anesthesia-policies/sections" class="btn-sections">📚 الأقسام</a>
    </div>
  </nav>

  <!-- ② FULL-PAGE COVER IMAGE + TEXT BELOW -->
  <section class="cover-page">
    <div class="cover-img-block">
      <img src="/static/anesthesia-policies-cover.png" alt="غلاف دليل السياسات والإجراءات في التخدير" class="cover-bg-img" />
    </div>
    <div class="cover-bottom">
      <span class="cover-en-label">Anesthesia Policies &amp; Procedures Manual</span>
      <div class="cover-main-title">
        دليل <span class="accent">السياسات والإجراءات</span><br>في التخدير
      </div>
      <div class="cover-badge-row">📋 ${total} قسم &nbsp;•&nbsp; 📄 ${totalForms} نموذج &nbsp;•&nbsp; 🏥 تخدير وعناية مركزة</div>
      <div class="cover-actions">
        <a href="/anesthesia-policies/sections" class="btn-teal">تصفح الأقسام ←</a>
        <a href="/anesthesia-policies/section/A" class="btn-outline-teal">ابدأ من القسم الأول</a>
      </div>
    </div>
  </section>

  <!-- ③ HERO TAGLINE -->
  <section class="hero-section">
    <div class="hero-inner">
      <div class="hero-badge">📖 مرجع مؤسسي متكامل • ${total} قسماً • ${totalForms} نموذجاً</div>
      <div class="hero-title-en">Anesthesia Policies &amp; Procedures Guide</div>
      <h1 class="hero-title">
        دليل <span class="accent">السياسات والإجراءات</span><br>في التخدير
      </h1>
      <p class="hero-desc">
        مرجع مؤسسي عملي يُوفّر سياسات وإجراءات واضحة وقابلة للتطبيق تغطي رعاية التخدير
        قبل العملية وأثناءها وبعدها، مع نماذج وقوائم تدقيق وأدوات توثيق داعمة
        لضمان أعلى مستويات الجودة والسلامة.
      </p>
    </div>
  </section>

  <!-- ④ BOOK INFO WITH 3D COVER -->
  <section class="book-info-section">
    <div class="book-info-inner">
      <div class="book-img-wrap">
        <img src="/static/anesthesia-policies-cover.png" alt="غلاف الدليل" class="book-img-3d" />
      </div>
      <div class="book-info-text">
        <div class="book-info-label">THE GUIDE</div>
        <div class="book-info-title">دليل السياسات والإجراءات<br>في التخدير</div>
        <div class="book-info-en">ANESTHESIA POLICIES &amp; PROCEDURES MANUAL</div>
        <div class="book-info-badge">📚 ${total} قسماً • ${totalForms} نموذجاً ومستماراً</div>
        <div class="stats-strip">
          <div class="stat-chip"><span class="snum">${total}</span><span class="slbl">قسم</span></div>
          <div class="stat-chip"><span class="snum">${totalForms}</span><span class="slbl">نموذج</span></div>
          <div class="stat-chip"><span class="snum">A–M</span><span class="slbl">أقسام</span></div>
        </div>
        <a href="/anesthesia-policies/sections" style="
          display:inline-block; font-family:'Noto Kufi Arabic',sans-serif;
          font-size:14px; font-weight:700; color:white;
          background:rgba(255,255,255,0.12); border:1.5px solid rgba(20,184,166,0.4);
          padding:12px 26px; border-radius:9px; transition:background 0.2s;
        ">استعرض جميع الأقسام ←</a>
      </div>
    </div>
  </section>

  <!-- ⑤ لمحة تعريفية -->
  <section class="intro-section">
    <div class="intro-inner">
      <div class="section-heading">لمحة تعريفية</div>
      <span class="section-heading-en">About This Guide</span>
      <div class="intro-divider"></div>
      <p class="intro-desc">
        يُعدّ <strong style="color:#2dd4bf;">دليل السياسات والإجراءات في التخدير</strong>
        مرجعاً مؤسسياً عملياً يهدف إلى توفير سياسات وإجراءات واضحة وقابلة للتطبيق،
        تغطي رعاية التخدير <strong style="color:#99f6e4;">قبل العملية وأثناءها وبعدها</strong>.
        يضمّ الدليل نماذج وقوائم تدقيق وأدوات توثيق متكاملة تدعم كل مرحلة من مراحل
        التخدير السريري، ويُكمّل دليلَ السلامة والجودة في غرفة العمليات ليشكّلا معاً
        مرجعاً مؤسسياً شاملاً في مجال التخدير وغرفة العمليات.
      </p>
      <div class="intro-cards">
        <div class="intro-card">
          <div class="ic-icon">🎯</div>
          <div class="ic-title">الهدف</div>
          <div class="ic-text">توفير سياسات وإجراءات واضحة وقابلة للتطبيق، تضمن رعاية تخدير آمنة وعالية الجودة في جميع مراحلها.</div>
        </div>
        <div class="intro-card">
          <div class="ic-icon">📋</div>
          <div class="ic-title">المحتوى</div>
          <div class="ic-text">يشمل ${total} قسماً من A إلى M، مع ${totalForms} نموذجاً وقائمة تدقيق وأداة توثيق لكل مرحلة سريرية.</div>
        </div>
        <div class="intro-card">
          <div class="ic-icon">🔗</div>
          <div class="ic-title">الارتباط بالمرجع الأساسي</div>
          <div class="ic-text">يُكمّل دليلَ مبادئ السلامة والجودة في غرفة العمليات، ليشكّلا معاً مرجعاً مؤسسياً شاملاً متكاملاً.</div>
        </div>
      </div>
      <div class="section-heading" style="font-size:20px;margin-bottom:10px;">الفئات المستهدفة</div>
      <span class="section-heading-en" style="margin-bottom:16px;">Target Audience</span>
      <div class="audience-list">
        <span class="audience-tag">👨‍⚕️ أطباء التخدير</span>
        <span class="audience-tag">👩‍⚕️ ممرضو التخدير</span>
        <span class="audience-tag">🔬 فنيو التخدير</span>
        <span class="audience-tag">📊 مديرو الجودة والسلامة</span>
        <span class="audience-tag">🏥 قيادات غرفة العمليات</span>
      </div>
    </div>
  </section>

  <!-- ⑥ SECTIONS GRID -->
  <section class="sections-section">
    <div class="sections-inner">
      <div class="sections-heading">📂 أقسام الدليل</div>
      <span class="sections-heading-en">Guide Sections A – M</span>
      <div class="sections-divider"></div>
      <div class="sections-grid">
        ${sectionOrder.map((id, i) => `
          <a href="/anesthesia-policies/section/${id}" class="sec-card">
            <div class="sc-top">
              <div class="sc-icon">${sectionIcons[id] || '📄'}</div>
              <div>
                <span class="sc-id">Section ${id}</span>
                <span class="sc-num">${String(i+1).padStart(2,'0')} / ${total}</span>
              </div>
            </div>
            <h3>${sectionTitles[id]}</h3>
          </a>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ⑦ AUTHOR -->
  <section class="author-section">
    <div class="author-card">
      <div class="author-avatar">👨‍⚕️</div>
      <div class="author-name">${authorName}</div>
      <div class="author-name-en">Dr. Jameel Al-Soqayya</div>
      <div class="author-role">استشاري تخدير وعناية مركزة<br>المملكة العربية السعودية</div>
      <span class="author-exp">خبرة تزيد على 25 عاماً في الممارسة الطبية</span>
    </div>
  </section>

  <!-- ⑧ FOOTER -->
  <footer class="main-footer">
    <div class="f-name">${authorName} – Dr. Jameel Al-Soqayya</div>
    <div class="f-sub">© 2026 جميع الحقوق محفوظة | دليل السياسات والإجراءات في التخدير</div>
  </footer>

</body>
</html>`)
})

// ── SECTIONS LIST ──────────────────────────────────────────────────────────
ap.get('/sections', (c) => {
  const total = sectionOrder.length
  const totalForms = formOrder.length
  return c.html(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>الأقسام | ${bookTitle}</title>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Cairo', sans-serif; background: linear-gradient(135deg, #f0fdfa, #ccfbf1); min-height: 100vh; }
    .header {
      background: linear-gradient(135deg, #042f2e, #0f766e);
      padding: 30px 20px;
      text-align: center;
      color: white;
    }
    .header h1 { font-family: 'Amiri', serif; font-size: 2rem; margin-bottom: 6px; }
    .header p { font-size: 0.9rem; opacity: 0.8; }
    .nav { background: rgba(255,255,255,0.9); padding: 10px 20px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center; justify-content: space-between; border-bottom: 1px solid #99f6e4; }
    .nav a { text-decoration: none; font-size: 13px; padding: 7px 14px; border-radius: 8px; font-weight: 600; }
    .nav .portal { background: linear-gradient(135deg, #042f2e, #0f766e); color: white; }
    .nav .home { background: #f0fdfa; color: #0f766e; border: 1px solid #99f6e4; }
    .content { max-width: 900px; margin: 0 auto; padding: 30px 16px 60px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
    .card {
      background: white; border-radius: 14px; padding: 24px;
      border: 1px solid #99f6e4; box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      text-decoration: none; color: inherit; display: block;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(15,118,110,0.15); }
    .card .badge { display: inline-block; background: linear-gradient(135deg, #0d9488, #0f766e); color: white; padding: 4px 14px; border-radius: 8px; font-size: 0.85rem; font-weight: 700; margin-bottom: 12px; }
    .card h2 { font-size: 1rem; font-weight: 700; color: #042f2e; }
    .forms-section { margin-top: 40px; }
    .forms-section h2 { font-family: 'Amiri', serif; font-size: 1.4rem; color: #042f2e; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #0f766e; }
    .forms-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; }
    .form-card {
      background: white; border-radius: 10px; padding: 14px 16px;
      border: 1px solid #99f6e4; text-decoration: none; color: inherit;
      display: block; transition: background 0.2s;
    }
    .form-card:hover { background: #f0fdfa; }
    .form-card .fid { font-size: 0.75rem; color: #0f766e; font-weight: 700; margin-bottom: 4px; }
    .form-card .ftitle { font-size: 0.85rem; color: #374151; }
  </style>
</head>
<body>
  <div class="nav">
    <span style="font-weight:700;color:#042f2e;">💊 ${bookTitle}</span>
    <div style="display:flex;gap:8px;">
      <a href="/portal" class="portal">🏠 منصة الكتب</a>
      <a href="/anesthesia-policies" class="home">الرئيسية</a>
    </div>
  </div>
  <div class="header">
    <h1>📂 الأقسام</h1>
    <p>${total} قسماً | ${totalForms} نموذجاً</p>
  </div>
  <div class="content">
    <div class="grid">
      ${sectionOrder.map(id => `
        <a href="/anesthesia-policies/section/${id}" class="card">
          <span class="badge">Section ${id}</span>
          <h2>${sectionTitles[id]}</h2>
        </a>
      `).join('')}
    </div>

    <div class="forms-section">
      <h2>📄 النماذج والاستمارات (Section M)</h2>
      <div class="forms-grid">
        ${formOrder.map(id => `
          <a href="/anesthesia-policies/form/${id}" class="form-card">
            <div class="fid">${id.toUpperCase().replace('F','F-').replace('F--','F-')}</div>
            <div class="ftitle">${formTitles[id]}</div>
          </a>
        `).join('')}
      </div>
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
    prevId ? prevId.toUpperCase() : 'Section M',
    nextId ? `/anesthesia-policies/form/${nextId}` : undefined,
    nextId ? nextId.toUpperCase() : undefined
  )

  const title = `${id.toUpperCase()}: ${formTitles[id] || ''}`
  const page = buildPage(title, form.css, form.body, navHtml, commentsSection(id))
  return c.html(page)
})

export default ap
