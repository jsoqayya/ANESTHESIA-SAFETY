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
  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Kufi+Arabic:wght@300;400;600;700;900&family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Cairo', 'Noto Kufi Arabic', sans-serif;
      background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 30%, #99f6e4 60%, #f0fdfa 100%);
      min-height: 100vh;
      color: #1c1917;
    }
    .hero-header {
      background: linear-gradient(135deg, #042f2e 0%, #0f766e 50%, #0d9488 100%);
      padding: 40px 20px 50px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .hero-header::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%);
    }
    .hero-header h1 {
      font-family: 'Amiri', serif;
      font-size: clamp(1.6rem, 4vw, 2.8rem);
      color: white;
      font-weight: 700;
      line-height: 1.4;
      text-shadow: 0 2px 8px rgba(0,0,0,0.3);
      position: relative;
    }
    .hero-header .subtitle {
      font-size: 0.9rem;
      color: rgba(255,255,255,0.8);
      margin-top: 8px;
      font-weight: 400;
      letter-spacing: 0.05em;
      position: relative;
    }
    .hero-header .badge-row {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 20px;
      flex-wrap: wrap;
      position: relative;
    }
    .hero-header .badge {
      background: rgba(255,255,255,0.15);
      color: white;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 0.8rem;
      border: 1px solid rgba(255,255,255,0.3);
      backdrop-filter: blur(4px);
    }
    .nav-bar {
      background: rgba(255,255,255,0.9);
      backdrop-filter: blur(10px);
      padding: 12px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid #99f6e4;
      position: sticky;
      top: 0;
      z-index: 100;
      flex-wrap: wrap;
    }
    .nav-bar a {
      text-decoration: none;
      font-size: 13px;
      font-weight: 600;
      padding: 7px 14px;
      border-radius: 8px;
      transition: all 0.2s;
    }
    .nav-bar .btn-portal {
      background: linear-gradient(135deg, #042f2e, #0f766e);
      color: white;
    }
    .nav-bar .btn-sections {
      background: #f0fdfa;
      color: #0f766e;
      border: 1px solid #99f6e4;
    }
    .nav-bar .book-name {
      font-weight: 700;
      color: #042f2e;
      font-size: 14px;
    }
    .content-area {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 16px 60px;
    }
    .cover-section {
      display: flex;
      gap: 30px;
      align-items: flex-start;
      margin-bottom: 50px;
      flex-wrap: wrap;
    }
    .cover-img {
      width: 180px;
      height: 240px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.2);
      flex-shrink: 0;
    }
    .cover-info {
      flex: 1;
      min-width: 220px;
    }
    .cover-info h2 {
      font-family: 'Amiri', serif;
      font-size: 1.5rem;
      color: #042f2e;
      font-weight: 700;
      margin-bottom: 12px;
    }
    .cover-info p {
      font-size: 0.95rem;
      color: #374151;
      line-height: 1.7;
      margin-bottom: 10px;
    }
    .stats-row {
      display: flex;
      gap: 12px;
      margin-top: 16px;
      flex-wrap: wrap;
    }
    .stat-box {
      background: white;
      border-radius: 10px;
      padding: 10px 18px;
      text-align: center;
      border: 1px solid #99f6e4;
      box-shadow: 0 2px 6px rgba(0,0,0,0.06);
    }
    .stat-box .num {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f766e;
    }
    .stat-box .lbl {
      font-size: 0.75rem;
      color: #6b7280;
    }
    .btn-primary {
      display: inline-block;
      background: linear-gradient(135deg, #042f2e, #0f766e);
      color: white;
      padding: 12px 28px;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.95rem;
      margin-top: 20px;
      transition: opacity 0.2s;
      box-shadow: 0 4px 12px rgba(15,118,110,0.3);
    }
    .btn-primary:hover { opacity: 0.9; }
    .sections-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    .section-card {
      background: white;
      border-radius: 14px;
      padding: 20px;
      border: 1px solid #99f6e4;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      transition: transform 0.2s, box-shadow 0.2s;
      text-decoration: none;
      color: inherit;
      display: block;
    }
    .section-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(15,118,110,0.15);
    }
    .section-card .sec-id {
      display: inline-block;
      background: linear-gradient(135deg, #0d9488, #0f766e);
      color: white;
      padding: 3px 12px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.85rem;
      margin-bottom: 10px;
    }
    .section-card h3 {
      font-size: 0.95rem;
      font-weight: 700;
      color: #042f2e;
      margin-bottom: 4px;
    }
    .section-card .sec-en {
      font-size: 0.8rem;
      color: #6b7280;
    }
    .section-h2 {
      font-family: 'Amiri', serif;
      font-size: 1.4rem;
      color: #042f2e;
      font-weight: 700;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #0f766e;
    }
    .footer {
      text-align: center;
      padding: 30px 20px;
      background: linear-gradient(135deg, #042f2e, #0f766e);
      color: rgba(255,255,255,0.85);
      font-size: 0.85rem;
    }
    .footer .author {
      font-size: 1rem;
      font-weight: 700;
      color: white;
      margin-bottom: 4px;
    }
  </style>
</head>
<body>
  <!-- Nav Bar -->
  <div class="nav-bar">
    <span class="book-name">💊 ${bookTitle}</span>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <a href="/portal" class="btn-portal">🏠 منصة الكتب</a>
      <a href="/anesthesia-policies/sections" class="btn-sections">📚 تصفح الأقسام</a>
    </div>
  </div>

  <!-- Hero -->
  <div class="hero-header">
    <h1>دليل السياسات والإجراءات في التخدير</h1>
    <p class="subtitle">Anesthesia Policies & Procedures Manual</p>
    <div class="badge-row">
      <span class="badge">📋 ${total} قسم</span>
      <span class="badge">📄 ${totalForms} نموذج</span>
      <span class="badge">🏥 تخدير وعناية مركزة</span>
      <span class="badge">© 2026</span>
    </div>
  </div>

  <div class="content-area">
    <!-- Cover + Info -->
    <div class="cover-section">
      <img src="/static/anesthesia-policies-cover.png" alt="غلاف الدليل" class="cover-img" />
      <div class="cover-info">
        <h2>دليل السياسات والإجراءات في التخدير</h2>
        <p>دليل شامل ومتكامل يغطي جميع سياسات وإجراءات قسم التخدير والعناية المركزة، مُصمَّم وفق أعلى معايير الجودة والسلامة الطبية العالمية.</p>
        <p>يشمل الدليل ${total} قسماً رئيسياً تغطي كافة جوانب الممارسة السريمية للتخدير، من التقييم قبل التخدير إلى نماذج التوثيق والرقابة الجودة.</p>
        <div class="stats-row">
          <div class="stat-box">
            <div class="num">${total}</div>
            <div class="lbl">قسم</div>
          </div>
          <div class="stat-box">
            <div class="num">${totalForms}</div>
            <div class="lbl">نموذج</div>
          </div>
          <div class="stat-box">
            <div class="num">A–M</div>
            <div class="lbl">أقسام</div>
          </div>
        </div>
        <a href="/anesthesia-policies/sections" class="btn-primary">📚 تصفح الأقسام كاملة</a>
      </div>
    </div>

    <!-- Sections Grid -->
    <h2 class="section-h2">📂 أقسام الدليل</h2>
    <div class="sections-grid">
      ${sectionOrder.map(id => `
        <a href="/anesthesia-policies/section/${id}" class="section-card">
          <span class="sec-id">Section ${id}</span>
          <h3>${sectionTitles[id]}</h3>
        </a>
      `).join('')}
    </div>

    <!-- Author -->
    <div style="background:white;border-radius:14px;padding:24px;border:1px solid #99f6e4;text-align:center;box-shadow:0 2px 10px rgba(0,0,0,0.05);">
      <div style="font-size:2rem;margin-bottom:8px;">👨‍⚕️</div>
      <div style="font-family:'Amiri',serif;font-size:1.2rem;font-weight:700;color:#042f2e;margin-bottom:4px;">${authorName}</div>
      <div style="font-size:0.85rem;color:#6b7280;">Dr. Jameel Al-Soqayya</div>
      <div style="font-size:0.85rem;color:#6b7280;margin-top:4px;">استشاري تخدير وعناية مركزة | المملكة العربية السعودية</div>
      <div style="font-size:0.8rem;color:#0f766e;margin-top:4px;">خبرة تزيد على 25 عاماً في الممارسة الطبية</div>
    </div>
  </div>

  <footer class="footer">
    <div class="author">${authorName} – Dr. Jameel Al-Soqayya</div>
    <div>استشاري تخدير وعناية مركزة | المملكة العربية السعودية</div>
    <div style="margin-top:8px;opacity:0.7;">© 2026 جميع الحقوق محفوظة</div>
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
