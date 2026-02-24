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
  return c.html(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${bookTitle}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Noto+Kufi+Arabic:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: "Amiri", serif;
      color: #1f2937; background: #fff;
      direction: rtl; text-align: right;
    }
    a { text-decoration: none; color: inherit; }

    /* ── NAVBAR (fixed) ── */
    .ap-navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
      background: linear-gradient(135deg, #042f2e 0%, #0f766e 60%, #0d9488 100%);
      height: 56px; display: flex; align-items: center;
      justify-content: space-between; padding: 0 20px;
      box-shadow: 0 2px 16px rgba(0,0,0,0.35);
      font-family: "Noto Kufi Arabic", sans-serif;
    }
    .ap-navbar .brand {
      display: flex; align-items: center; gap: 8px;
      text-decoration: none; flex-shrink: 0;
    }
    .brand-icon {
      width: 32px; height: 32px;
      background: rgba(255,255,255,0.2); border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px;
    }
    .brand-text {
      color: white; font-size: 12px; font-weight: 700;
      white-space: nowrap; max-width: 200px;
      overflow: hidden; text-overflow: ellipsis;
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }
    .ap-navbar .nav-links {
      display: flex; align-items: center; gap: 6px; flex-wrap: nowrap;
    }
    .ap-navbar .nav-links a {
      color: rgba(255,255,255,0.9); text-decoration: none;
      font-size: 12px; padding: 6px 11px; border-radius: 7px;
      white-space: nowrap; font-weight: 600; transition: background 0.2s;
      background: rgba(255,255,255,0.1);
    }
    .ap-navbar .nav-links a.active { background: rgba(255,255,255,0.25); font-weight: 700; }
    .ap-navbar .nav-links a:hover { background: rgba(255,255,255,0.2); }
    .nav-spacer { height: 56px; }

    /* ── COVER PAGE (dark, full image) ── */
    .cover-page {
      background: #03201f;
      display: flex; flex-direction: column; align-items: center;
    }
    .cover-img-block {
      width: 100%; display: flex;
      justify-content: center; align-items: flex-start;
      background: #03201f;
    }
    .cover-bg-img {
      display: block; width: 58vw; max-width: 780px; height: auto;
    }
    @media (max-width: 768px) { .cover-bg-img { width: 92vw; } }
    .cover-bottom {
      width: 100%;
      background: linear-gradient(180deg, #03201f 0%, #042f2e 55%, #064e3b 100%);
      padding: 36px 32px 50px; text-align: center;
    }
    .cover-en-label {
      font-family: "Segoe UI", sans-serif;
      font-size: 11px; color: rgba(255,255,255,0.4);
      letter-spacing: 2.5px; text-transform: uppercase;
      direction: ltr; margin-bottom: 12px; display: block;
    }
    .cover-main-title {
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: clamp(20px, 3.8vw, 38px);
      font-weight: 800; color: #fff; line-height: 1.45; margin-bottom: 12px;
    }
    .cover-main-title .accent { color: #34d399; }
    .cover-badge-row {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.18);
      color: rgba(255,255,255,0.8); padding: 6px 20px; border-radius: 20px;
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 12px; font-weight: 600; margin-bottom: 26px;
    }
    .cover-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .btn-white {
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 15px; font-weight: 700; background: white; color: #042f2e;
      padding: 13px 30px; border-radius: 10px; transition: all 0.25s;
      box-shadow: 0 4px 20px rgba(0,0,0,0.25); display: inline-block;
    }
    .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.3); }
    .btn-outline-w {
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 15px; font-weight: 600; background: transparent; color: white;
      padding: 13px 30px; border-radius: 10px;
      border: 2px solid rgba(255,255,255,0.35); transition: all 0.25s; display: inline-block;
    }
    .btn-outline-w:hover { background: rgba(255,255,255,0.1); }
    @media (max-width: 600px) {
      .cover-bottom { padding: 26px 16px 38px; }
      .cover-main-title { font-size: 20px; }
    }

    /* ── HERO SECTION ── */
    .ap-hero {
      background: linear-gradient(160deg, #042f2e 0%, #065f46 40%, #0f766e 70%, #0d9488 100%);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      padding: 70px 24px 60px; text-align: center;
      position: relative; overflow: hidden;
    }
    .ap-hero::before {
      content: ""; position: absolute; inset: 0;
      background: radial-gradient(ellipse at 60% 40%, rgba(52,211,153,0.12) 0%, transparent 70%);
      pointer-events: none;
    }
    .ap-hero-inner { position: relative; z-index: 1; max-width: 820px; width: 100%; }
    .ap-hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25);
      color: rgba(255,255,255,0.9); padding: 8px 22px; border-radius: 30px; margin-bottom: 28px;
      font-family: "Noto Kufi Arabic", sans-serif; font-size: 13px; font-weight: 600;
    }
    .ap-hero-en {
      font-family: "Segoe UI", sans-serif; font-size: 12px; color: rgba(255,255,255,0.45);
      letter-spacing: 2.5px; margin-bottom: 14px;
      text-transform: uppercase; direction: ltr;
    }
    .ap-hero-title {
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: clamp(24px, 4.5vw, 44px);
      font-weight: 800; color: white; line-height: 1.35; margin-bottom: 22px;
    }
    .ap-hero-title .accent { color: #34d399; }
    .ap-hero-desc {
      font-family: "Amiri", serif; font-size: 18px; color: rgba(255,255,255,0.72);
      line-height: 1.8; max-width: 620px; margin: 0 auto 36px;
    }
    .ap-stats-row {
      display: flex; justify-content: center; gap: 0;
      background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15);
      border-radius: 14px; overflow: hidden; max-width: 500px; margin: 0 auto;
    }
    .ap-stat-item {
      flex: 1; padding: 18px 12px; text-align: center;
      border-left: 1px solid rgba(255,255,255,0.12);
    }
    .ap-stat-item:last-child { border-left: none; }
    .ap-stat-num {
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 28px; font-weight: 800; color: white; line-height: 1.1;
    }
    .ap-stat-label {
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 4px;
    }

    /* ── BOOK INFO SECTION (dark 3D book) ── */
    .ap-book-section {
      background: linear-gradient(160deg, #03201f 0%, #042f2e 50%, #053d30 100%);
      padding: 70px 24px 80px;
    }
    .ap-book-inner {
      max-width: 1000px; margin: 0 auto;
      display: flex; align-items: center; gap: 60px;
      flex-wrap: wrap; justify-content: center;
    }
    .ap-book-img-wrap { flex-shrink: 0; perspective: 1000px; }
    .ap-book-img {
      width: 300px; border-radius: 12px;
      box-shadow: 0 30px 80px rgba(0,0,0,0.7), 0 10px 30px rgba(0,0,0,0.5), 6px 0 20px rgba(0,0,0,0.4);
      border: 1px solid rgba(255,255,255,0.1); display: block;
      transform: rotateY(-8deg) rotateX(2deg);
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    .ap-book-img:hover {
      transform: rotateY(-3deg) rotateX(1deg) scale(1.03);
      box-shadow: 0 40px 100px rgba(0,0,0,0.8), 0 15px 40px rgba(15,118,110,0.4);
    }
    @media (max-width: 700px) { .ap-book-img { width: 200px; } .ap-book-inner { gap: 36px; } }
    .ap-book-info { flex: 1; min-width: 280px; }
    .ap-book-label {
      font-family: "Segoe UI", sans-serif; font-size: 11px; color: rgba(255,255,255,0.4);
      letter-spacing: 2px; text-transform: uppercase; direction: ltr; margin-bottom: 14px;
    }
    .ap-book-title {
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 26px; font-weight: 800; color: white; line-height: 1.4; margin-bottom: 10px;
    }
    .ap-book-en {
      font-family: "Segoe UI", sans-serif; font-size: 12px; color: rgba(255,255,255,0.45);
      direction: ltr; margin-bottom: 20px;
    }
    .ap-book-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.18);
      color: rgba(255,255,255,0.75); padding: 6px 16px; border-radius: 20px;
      font-family: "Noto Kufi Arabic", sans-serif; font-size: 12px; margin-bottom: 26px;
    }
    .ap-book-cta {
      display: inline-block; font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 14px; font-weight: 700; color: white;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3);
      padding: 11px 26px; border-radius: 9px; transition: background 0.2s;
    }
    .ap-book-cta:hover { background: rgba(255,255,255,0.18); }

    /* ── ABOUT / INTRO OVERVIEW ── */
    .ap-about { background: #f8fffe; padding: 70px 24px; }
    .ap-about-max { max-width: 920px; margin: 0 auto; }
    .ap-section-title {
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 28px; font-weight: 800; color: #042f2e;
      margin-bottom: 6px; text-align: center;
    }
    .ap-section-en {
      font-family: "Segoe UI", sans-serif; font-size: 12px; color: #9ca3af;
      text-align: center; direction: ltr; letter-spacing: 1.5px;
      margin-bottom: 40px; text-transform: uppercase;
    }
    .ap-about-card {
      background: white; border: 1px solid #d1fae5; border-radius: 20px;
      padding: 46px 50px;
      box-shadow: 0 4px 24px rgba(15,118,110,0.07);
      position: relative; overflow: hidden;
    }
    .ap-about-card::before {
      content: ""; position: absolute; top: 0; right: 0;
      width: 6px; height: 100%;
      background: linear-gradient(180deg, #042f2e, #0f766e, #34d399);
      border-radius: 0 20px 20px 0;
    }
    @media (max-width: 600px) { .ap-about-card { padding: 28px 22px; } }
    .ap-about-intro {
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 13px; font-weight: 700; color: #0f766e;
      letter-spacing: 0.5px; margin-bottom: 20px;
      display: flex; align-items: center; gap: 8px;
    }
    .ap-about-lines { list-style: none; padding: 0; margin: 0; }
    .ap-about-lines li {
      font-family: "Amiri", serif; font-size: 18px; color: #1f2937; line-height: 1.9;
      padding: 12px 0; border-bottom: 1px solid #f0fdf4;
      display: flex; gap: 14px; align-items: flex-start;
    }
    .ap-about-lines li:last-child { border-bottom: none; }
    .li-icon { font-size: 15px; margin-top: 6px; flex-shrink: 0; color: #0f766e; }
    @media (max-width: 600px) { .ap-about-lines li { font-size: 16px; } }
    .ap-about-final {
      margin-top: 28px; padding: 22px 26px;
      background: linear-gradient(135deg, #042f2e 0%, #0f766e 100%);
      border-radius: 12px; font-family: "Amiri", serif;
      font-size: 18px; color: white; line-height: 1.9; text-align: center;
    }
    @media (max-width: 600px) { .ap-about-final { font-size: 16px; } }

    /* ── SECTIONS GRID ── */
    .ap-sections-sec { background: #f0fdf4; padding: 70px 24px; }
    .ap-sections-max { max-width: 960px; margin: 0 auto; }
    .ap-sections-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 16px;
    }
    .ap-sec-card {
      background: white; border-radius: 14px; padding: 20px;
      border: 1px solid #a7f3d0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
      transition: transform 0.2s, box-shadow 0.2s;
      text-decoration: none; color: inherit; display: block;
    }
    .ap-sec-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(15,118,110,0.15); }
    .ap-sec-id {
      display: inline-block;
      background: linear-gradient(135deg, #0d9488, #0f766e);
      color: white; padding: 3px 12px; border-radius: 6px;
      font-weight: 700; font-size: 0.85rem; margin-bottom: 10px;
      font-family: "Noto Kufi Arabic", sans-serif;
    }
    .ap-sec-card h3 {
      font-size: 0.95rem; font-weight: 700; color: #042f2e; margin-bottom: 4px;
      font-family: "Noto Kufi Arabic", sans-serif;
    }

    /* ── CTA ── */
    .ap-cta {
      background: linear-gradient(135deg, #042f2e, #065f46, #0f766e);
      text-align: center; padding: 70px 24px; color: white;
    }
    .ap-cta h2 {
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 26px; font-weight: 800; margin-bottom: 14px;
    }
    .ap-cta p {
      font-family: "Amiri", serif; font-size: 17px; color: rgba(255,255,255,0.75);
      max-width: 520px; margin: 0 auto 28px; line-height: 1.8;
    }
    .ap-cta-btn {
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 16px; font-weight: 700; background: white; color: #042f2e;
      padding: 14px 36px; border-radius: 10px; transition: all 0.2s;
      display: inline-block; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    }
    .ap-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.25); }

    /* ── FOOTER ── */
    .ap-footer {
      background: #01130f; color: rgba(255,255,255,0.45);
      text-align: center; padding: 28px 24px;
      font-family: "Noto Kufi Arabic", sans-serif;
      font-size: 13px; line-height: 1.8;
    }
    .ap-footer strong { color: rgba(255,255,255,0.8); }
  </style>
</head>
<body>

  <!-- ① NAVBAR (fixed) -->
  <nav class="ap-navbar">
    <a href="/anesthesia-policies" class="brand">
      <div class="brand-icon">💊</div>
      <span class="brand-text">${bookTitle}</span>
    </a>
    <div class="nav-links">
      <a href="/portal">🏠 المنصة</a>
      <a href="/anesthesia-policies" class="active">الرئيسية</a>
      <a href="/anesthesia-policies/sections">📚 الأقسام</a>
    </div>
  </nav>
  <div class="nav-spacer"></div>

  <!-- ② COVER — full image, text block below -->
  <section class="cover-page">
    <div class="cover-img-block">
      <img src="/static/anesthesia-policies-cover.png" alt="غلاف دليل السياسات والإجراءات في التخدير" class="cover-bg-img" />
    </div>
    <div class="cover-bottom">
      <span class="cover-en-label">Anesthesia Policies &amp; Procedures Manual</span>
      <div class="cover-main-title">
        دليل <span class="accent">السياسات والإجراءات</span><br>في التخدير
      </div>
      <div class="cover-badge-row">📋 ${total} قسماً &nbsp;•&nbsp; 📄 ${totalForms} نموذجاً &nbsp;•&nbsp; 🏥 مرجع مؤسسي شامل</div>
      <div class="cover-actions">
        <a href="/anesthesia-policies/sections" class="btn-white">تصفح الأقسام ←</a>
        <a href="/anesthesia-policies/section/A" class="btn-outline-w">ابدأ من القسم الأول</a>
      </div>
    </div>
  </section>

  <!-- ③ HERO — title + stats -->
  <section class="ap-hero">
    <div class="ap-hero-inner">
      <div class="ap-hero-badge">📖 مرجع مؤسسي شامل • ${total} قسماً • ${totalForms} نموذجاً</div>
      <div class="ap-hero-en">ANESTHESIA POLICIES &amp; PROCEDURES GUIDE</div>
      <h1 class="ap-hero-title">
        دليل <span class="accent">السياسات والإجراءات</span><br>في التخدير
      </h1>
      <p class="ap-hero-desc">
        سياسات وإجراءات واضحة وقابلة للتطبيق الفوري لأقسام التخدير، مُصمَّمة لتوحيد الممارسة السريرية وتعزيز سلامة المريض
      </p>
      <div class="ap-stats-row">
        <div class="ap-stat-item">
          <div class="ap-stat-num">${total}</div>
          <div class="ap-stat-label">قسم</div>
        </div>
        <div class="ap-stat-item">
          <div class="ap-stat-num">${totalForms}</div>
          <div class="ap-stat-label">نموذج</div>
        </div>
        <div class="ap-stat-item">
          <div class="ap-stat-num">A–M</div>
          <div class="ap-stat-label">أقسام</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ④ BOOK INFO (dark + 3D book image) -->
  <section class="ap-book-section">
    <div class="ap-book-inner">
      <div class="ap-book-img-wrap">
        <img src="/static/anesthesia-policies-cover.png" alt="غلاف الدليل" class="ap-book-img" />
      </div>
      <div class="ap-book-info">
        <div class="ap-book-label">THE GUIDE</div>
        <div class="ap-book-title">دليل السياسات والإجراءات<br>في التخدير</div>
        <div class="ap-book-en">ANESTHESIA POLICIES &amp; PROCEDURES MANUAL</div>
        <div class="ap-book-badge">📚 ${total} قسماً • ${totalForms} نموذجاً جاهزاً للاستخدام</div>
        <a href="/anesthesia-policies/sections" class="ap-book-cta">استعرض جميع الأقسام ←</a>
      </div>
    </div>
  </section>

  <!-- ⑤ ABOUT / INTRO OVERVIEW -->
  <section class="ap-about">
    <div class="ap-about-max">
      <div class="ap-section-title">عن الدليل</div>
      <div class="ap-section-en">About This Guide</div>
      <div class="ap-about-card">
        <div class="ap-about-intro">
          <span>📘</span> لمحة تعريفية — دليل السياسات والإجراءات في التخدير
        </div>
        <ul class="ap-about-lines">
          <li>
            <span class="li-icon">◆</span>
            <span>هذا الدليل يُقدّم <strong>سياسات وإجراءات واضحة وقابلة للتطبيق المباشر</strong> لأقسام التخدير، مُصمَّمة لتحويل الممارسة السريرية من اجتهادات فردية إلى <strong>منظومة مؤسسية موحّدة ومقننة.</strong></span>
          </li>
          <li>
            <span class="li-icon">◆</span>
            <span>يضمّ الدليل <strong>نماذج جاهزة وقوائم تحقق ومسارات سريرية</strong> تُغطي كامل دورة رعاية المريض؛ من التقييم قبل التخدير، عبر التخدير الجراحي، وحتى التعافي والخروج الآمن.</span>
          </li>
          <li>
            <span class="li-icon">◆</span>
            <span>يعمل هذا الدليل <strong>مرجعاً مؤسسياً تطبيقياً</strong> مكمّلاً لـ "دليل السلامة والجودة في التخدير"، إذ يُترجم مبادئ السلامة إلى إجراءات يومية قابلة للتوثيق والرقابة والتحسين.</span>
          </li>
          <li>
            <span class="li-icon">◆</span>
            <span>يستهدف الدليل <strong>أطباء التخدير، والممرضين المختصين، والفنيين، ومديري الجودة والسلامة</strong> في المنشآت الصحية الراغبة في توحيد ممارساتها وفق المعايير الدولية.</span>
          </li>
          <li>
            <span class="li-icon">◆</span>
            <span>يسعى الدليل إلى <strong>توحيد الممارسة السريرية وتعزيز سلامة المريض</strong> من خلال تحديد مسؤوليات واضحة، وبروتوكولات موثّقة، وأدوات مراجعة قابلة للقياس والتدقيق.</span>
          </li>
        </ul>
        <div class="ap-about-final">
          الهدف النهائي: <strong>أن تكون كل إجراءات التخدير موحّدة، موثّقة، وآمنة</strong> —<br>
          لأن سلامة المريض تبدأ قبل التخدير وتنتهي بعد الإفاقة الآمنة.
        </div>
      </div>
    </div>
  </section>

  <!-- ⑥ SECTIONS GRID -->
  <section class="ap-sections-sec">
    <div class="ap-sections-max">
      <div class="ap-section-title" style="color:#042f2e;">📂 أقسام الدليل</div>
      <div class="ap-section-en">Guide Sections</div>
      <div class="ap-sections-grid">
        ${sectionOrder.map(id => `
          <a href="/anesthesia-policies/section/${id}" class="ap-sec-card">
            <span class="ap-sec-id">Section ${id}</span>
            <h3>${sectionTitles[id]}</h3>
          </a>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ⑦ CTA -->
  <section class="ap-cta">
    <h2>ابدأ رحلتك نحو قسم تخدير أكثر أماناً وكفاءة</h2>
    <p>كل قسم خطوة نحو ممارسة مؤسسية أفضل، وسياسات أوضح، ومريض أكثر أماناً</p>
    <a href="/anesthesia-policies/sections" class="ap-cta-btn">استعرض جميع الأقسام ←</a>
  </section>

  <!-- ⑧ FOOTER -->
  <footer class="ap-footer">
    <strong>${authorName} — Dr. Jameel Al-Soqayya</strong><br>
    استشاري تخدير وعناية مركزة | المملكة العربية السعودية<br>
    <span style="margin-top:6px;display:inline-block;font-size:12px;opacity:0.6;">© 2026 جميع الحقوق محفوظة</span>
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
