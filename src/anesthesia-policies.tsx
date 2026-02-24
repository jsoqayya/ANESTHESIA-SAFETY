// دليل السياسات والإجراءات في التخدير
// Anesthesia Policies & Procedures Guide
// Dr. Jameel Al-Soqayya

import { Hono } from 'hono'
import { sections, forms } from './anesthesia-policies-data'

const ap = new Hono()

// ── Book metadata ──────────────────────────────────────────────────────────
const bookTitle    = 'دليل السياسات والإجراءات في التخدير'
const bookTitleEn  = 'Anesthesia Policies & Procedures Guide'
const authorName   = 'د. جميل السقيا'
const authorNameEn = 'Dr. Jameel Al-Soqayya'
const totalSections = sections.length
const totalForms    = forms.length

// ── Section icons ──────────────────────────────────────────────────────────
const sectionIcons: Record<string, string> = {
  A: '⚖️', B: '🔍', C: '💉', D: '🛏️', E: '😴', F: '🏨',
  G: '🦴', H: '🔧', I: '🚨', J: '🧴', K: '📢', L: '📊', M: '📋',
}

// ── Shared fonts & CSS vars ────────────────────────────────────────────────
const sharedFonts = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Kufi+Arabic:wght@300;400;600;700;900&family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet">
`

// ── Teal colour scheme (distinct from OR book's blue) ─────────────────────
const cssVars = `
  :root {
    --primary:   #0f766e;
    --primary2:  #0d9488;
    --primary3:  #14b8a6;
    --dark:      #042f2e;
    --light-bg:  #f0fdfa;
    --border:    #99f6e4;
    --text:      #1c1917;
    --muted:     #6b7280;
  }
`

// ── Navbar ─────────────────────────────────────────────────────────────────
function navbar(active: string, prevId?: string, nextId?: string) {
  return `
  <nav style="position:fixed;top:0;left:0;right:0;z-index:999;
    background:linear-gradient(135deg,#042f2e,#0f766e);
    height:56px;display:flex;align-items:center;justify-content:space-between;
    padding:0 20px;box-shadow:0 2px 12px rgba(0,0,0,0.35);">
    <a href="/anesthesia-policies" style="display:flex;align-items:center;gap:10px;text-decoration:none;">
      <div style="width:34px;height:34px;background:rgba(255,255,255,0.18);border-radius:8px;
        display:flex;align-items:center;justify-content:center;font-size:18px;">💊</div>
      <span style="color:white;font-family:'Noto Kufi Arabic',sans-serif;font-size:13px;font-weight:700;
        white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis;">${bookTitle}</span>
    </a>
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
      ${prevId ? `<a href="/anesthesia-policies/section/${prevId}" style="color:rgba(255,255,255,0.85);text-decoration:none;font-size:12px;padding:5px 10px;border-radius:6px;background:rgba(255,255,255,0.12);font-family:'Cairo',sans-serif;">← ${prevId}</a>` : ''}
      <a href="/portal" style="color:rgba(255,255,255,0.85);text-decoration:none;font-size:12px;padding:5px 12px;border-radius:6px;background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.35);font-family:'Cairo',sans-serif;">🏠 منصة الكتب</a>
      <a href="/anesthesia-policies" style="color:rgba(255,255,255,0.85);text-decoration:none;font-size:12px;padding:5px 10px;border-radius:6px;${active==='home'?'background:rgba(255,255,255,0.28);':'background:rgba(255,255,255,0.1);'}font-family:'Cairo',sans-serif;">الرئيسية</a>
      <a href="/anesthesia-policies/sections" style="color:rgba(255,255,255,0.85);text-decoration:none;font-size:12px;padding:5px 10px;border-radius:6px;${active==='sections'?'background:rgba(255,255,255,0.28);':'background:rgba(255,255,255,0.1);'}font-family:'Cairo',sans-serif;">📚 الأقسام</a>
      ${nextId ? `<a href="/anesthesia-policies/section/${nextId}" style="color:rgba(255,255,255,0.85);text-decoration:none;font-size:12px;padding:5px 10px;border-radius:6px;background:rgba(255,255,255,0.12);font-family:'Cairo',sans-serif;">${nextId} →</a>` : ''}
    </div>
  </nav>`
}

// ── Comments section ───────────────────────────────────────────────────────
function commentsSection(sectionId: string) {
  return `
  <div style="margin-top:50px;padding:30px 20px;background:#f0fdfa;border-top:2px solid #99f6e4;border-radius:0 0 12px 12px;" dir="rtl">
    <h2 style="font-family:'Noto Kufi Arabic',sans-serif;font-size:1.3rem;color:#042f2e;margin-bottom:24px;border-bottom:2px solid #0f766e;padding-bottom:12px;">
      💬 التعليقات والملاحظات
    </h2>
    <div id="commentsContainer" class="comments-list"></div>
    <div style="background:white;border-radius:12px;padding:24px;box-shadow:0 2px 8px rgba(0,0,0,0.07);border:1px solid #ccfbf1;">
      <h3 style="font-family:'Noto Kufi Arabic',sans-serif;font-size:1rem;color:#042f2e;margin-bottom:16px;">أضف تعليقك</h3>
      <div style="margin-bottom:14px;">
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
          <input id="commentName_${sectionId}" placeholder="الاسم (اختياري)" style="flex:1;min-width:150px;padding:10px 14px;border:1px solid #99f6e4;border-radius:8px;font-family:'Cairo',sans-serif;font-size:14px;outline:none;" />
          <input id="commentRole_${sectionId}" placeholder="التخصص (اختياري)" style="flex:1;min-width:150px;padding:10px 14px;border:1px solid #99f6e4;border-radius:8px;font-family:'Cairo',sans-serif;font-size:14px;outline:none;" />
        </div>
        <div style="margin-bottom:10px;">
          <span style="font-family:'Cairo',sans-serif;font-size:13px;color:#6b7280;margin-left:8px;">التقييم:</span>
          <span id="ratingStars_${sectionId}" style="font-size:22px;cursor:pointer;letter-spacing:3px;">★★★★★</span>
        </div>
        <textarea id="commentText_${sectionId}" placeholder="شاركنا رأيك أو ملاحظاتك على هذا القسم..." rows="4"
          style="width:100%;padding:12px 14px;border:1px solid #99f6e4;border-radius:8px;
            font-family:'Cairo',sans-serif;font-size:14px;resize:vertical;outline:none;box-sizing:border-box;"></textarea>
      </div>
      <button onclick="submitComment('${sectionId}')"
        style="background:linear-gradient(135deg,#042f2e,#0f766e);color:white;border:none;
          padding:12px 30px;border-radius:8px;font-family:'Noto Kufi Arabic',sans-serif;
          font-size:14px;font-weight:700;cursor:pointer;">
        إرسال التعليق ✓
      </button>
    </div>
  </div>
  <script>
    let rating_${sectionId.replace(/-/g,'_')} = 5;
    const starsEl_${sectionId.replace(/-/g,'_')} = document.getElementById('ratingStars_${sectionId}');
    if(starsEl_${sectionId.replace(/-/g,'_')}) {
      starsEl_${sectionId.replace(/-/g,'_')}.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const w = rect.width;
        rating_${sectionId.replace(/-/g,'_')} = Math.ceil((x / w) * 5);
        this.textContent = '★'.repeat(rating_${sectionId.replace(/-/g,'_')}) + '☆'.repeat(5 - rating_${sectionId.replace(/-/g,'_')});
      });
    }
    function submitComment(sid) {
      const name = document.getElementById('commentName_' + sid)?.value.trim() || 'مجهول';
      const role = document.getElementById('commentRole_' + sid)?.value.trim() || '';
      const text = document.getElementById('commentText_' + sid)?.value.trim();
      if (!text) { alert('الرجاء كتابة تعليق'); return; }
      const container = document.getElementById('commentsContainer');
      const card = document.createElement('div');
      card.className = 'comment-card new-comment';
      card.style.cssText = 'background:#f0fdfa;border:1px solid #0f766e;border-radius:10px;padding:18px 20px;margin-bottom:14px;';
      const stars = '★'.repeat(rating_${sectionId.replace(/-/g,'_')}) + '☆'.repeat(5 - rating_${sectionId.replace(/-/g,'_')});
      card.innerHTML = \`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:36px;height:36px;background:linear-gradient(135deg,#042f2e,#0f766e);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-family:'Cairo',sans-serif;font-weight:700;font-size:14px;">\${name.charAt(0)}</div>
          <div><div style="font-family:'Noto Kufi Arabic',sans-serif;font-size:14px;font-weight:700;color:#042f2e;">\${name}</div>\${role?'<div style="font-size:12px;color:#6b7280;font-family:Cairo,sans-serif;">\${role}</div>':''}</div>
        </div>
        <div style="color:#0f766e;font-size:16px;">\${stars}</div></div>
        <p style="font-family:'Cairo',sans-serif;font-size:14px;color:#1c1917;line-height:1.7;margin:0;">\${text}</p>\`;
      container.appendChild(card);
      document.getElementById('commentText_' + sid).value = '';
      document.getElementById('commentName_' + sid).value = '';
      document.getElementById('commentRole_' + sid).value = '';
    }
  </script>`
}

// ── Content renderer ───────────────────────────────────────────────────────
function renderContent(text: string): string {
  const lines = text.split('\n')
  let html = ''
  for (const line of lines) {
    const t = line.trim()
    if (!t) { html += '<br>'; continue }
    // Detect headings by all-caps short lines or numbered sections
    if (/^[0-9]+\.\s+[A-Z]/.test(t) && t.length < 80) {
      html += `<h2 style="font-family:'Cairo',sans-serif;font-size:1.15rem;font-weight:700;color:#042f2e;margin:22px 0 10px;padding:10px 16px;background:#f0fdfa;border-right:4px solid #0f766e;border-radius:0 8px 8px 0;">${t}</h2>`
    } else if (/^[0-9]+\.[0-9]+\s/.test(t) && t.length < 100) {
      html += `<h3 style="font-family:'Cairo',sans-serif;font-size:1rem;font-weight:700;color:#0f766e;margin:16px 0 8px;padding-right:12px;border-right:3px solid #14b8a6;">${t}</h3>`
    } else if (/^[A-Z][A-Z\s\/&:,\-()0-9]{5,60}$/.test(t) && t.length < 80) {
      html += `<h3 style="font-family:'Cairo',sans-serif;font-size:1rem;font-weight:700;color:#0f766e;margin:16px 0 8px;">${t}</h3>`
    } else if (t.startsWith('•') || t.startsWith('-') || t.startsWith('·')) {
      html += `<p style="font-family:'Cairo',sans-serif;font-size:0.95rem;color:#374151;line-height:1.8;margin:4px 0 4px 20px;">${t}</p>`
    } else if (t.length < 80 && /^[A-Z]/.test(t) && !t.includes('.') && !t.endsWith(':')) {
      html += `<p style="font-family:'Cairo',sans-serif;font-size:0.98rem;font-weight:600;color:#1c1917;line-height:1.7;margin:6px 0;">${t}</p>`
    } else {
      html += `<p style="font-family:'Cairo',sans-serif;font-size:0.95rem;color:#374151;line-height:1.8;margin:5px 0;">${t}</p>`
    }
  }
  return html
}

// ══════════════════════════════════════════════════════════════════════════
// HOME PAGE  /anesthesia-policies
// ══════════════════════════════════════════════════════════════════════════
ap.get('/', (c) => {
  const html = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${bookTitle}</title>
  ${sharedFonts}
  <style>
    ${cssVars}
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Cairo',sans-serif; background:#fff; color:var(--text); }

    /* ── COVER ── */
    .cover-page {
      min-height: 100vh;
      background: var(--dark);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .cover-img-block {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      background: var(--dark);
      padding-top: 56px;
    }
    .cover-bg-img {
      display: block;
      width: 60vw;
      max-width: 480px;
      height: auto;
      object-fit: contain;
      object-position: center top;
    }
    .cover-bottom {
      width: 100%;
      background: linear-gradient(to bottom, var(--dark) 0%, #042f2e 100%);
      padding: 30px 24px 60px;
      text-align: center;
    }
    .cover-en-label {
      font-size: 11px; letter-spacing: 3px; color: rgba(255,255,255,0.45);
      text-transform: uppercase; margin-bottom: 12px; display: block;
    }
    .cover-main-title {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: clamp(1.6rem, 4vw, 2.6rem);
      color: white; line-height: 1.4; margin-bottom: 16px;
      text-shadow: 0 2px 12px rgba(0,0,0,0.5);
    }
    .cover-main-title span { color: var(--primary3); }
    .cover-badge-row {
      display: flex; justify-content: center; gap: 16px;
      flex-wrap: wrap; margin-bottom: 28px;
    }
    .cover-badge {
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25);
      color: rgba(255,255,255,0.9); padding: 7px 18px; border-radius: 24px;
      font-size: 13px; font-family: 'Cairo', sans-serif;
    }
    .cover-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .btn-teal {
      background: linear-gradient(135deg, var(--primary), var(--primary2));
      color: white; text-decoration: none; padding: 13px 28px;
      border-radius: 10px; font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: 15px; font-weight: 700;
      box-shadow: 0 4px 16px rgba(15,118,110,0.4);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .btn-teal:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(15,118,110,0.5); }
    .btn-outline-teal {
      background: transparent; color: white; text-decoration: none;
      padding: 13px 28px; border-radius: 10px;
      border: 2px solid rgba(255,255,255,0.4);
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 15px; font-weight: 700;
      transition: background 0.2s;
    }
    .btn-outline-teal:hover { background: rgba(255,255,255,0.1); }
    .scroll-hint {
      margin-top: 30px; color: rgba(255,255,255,0.45); font-size: 22px;
      animation: bounce 2s infinite;
    }
    @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }

    /* ── WHY SECTION ── */
    .why-section {
      background: var(--light-bg); padding: 70px 24px;
    }
    .why-section h2 {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: clamp(1.4rem,3vw,2rem); color: var(--dark);
      text-align: center; margin-bottom: 48px;
    }
    .features-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px; max-width: 1000px; margin: 0 auto;
    }
    .feature-card {
      background: white; border-radius: 16px; padding: 28px 24px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      border-top: 4px solid var(--primary); text-align: center;
    }
    .feature-icon { font-size: 36px; margin-bottom: 14px; }
    .feature-title {
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 1.05rem;
      font-weight: 700; color: var(--dark); margin-bottom: 10px;
    }
    .feature-desc { font-size: 0.9rem; color: var(--muted); line-height: 1.7; }

    /* ── SECTIONS OVERVIEW ── */
    .sections-overview { padding: 70px 24px; background: white; }
    .sections-overview h2 {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: clamp(1.4rem,3vw,2rem); color: var(--dark);
      text-align: center; margin-bottom: 48px;
    }
    .sections-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px; max-width: 1100px; margin: 0 auto 36px;
    }
    .section-card {
      background: linear-gradient(135deg, var(--light-bg), white);
      border: 1px solid var(--border); border-radius: 14px;
      padding: 20px 18px; text-decoration: none; color: inherit;
      transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
      display: block;
    }
    .section-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(15,118,110,0.15);
      border-color: var(--primary);
    }
    .sec-icon { font-size: 28px; margin-bottom: 10px; }
    .sec-id {
      font-size: 11px; letter-spacing: 2px; color: var(--primary);
      font-weight: 700; margin-bottom: 6px; text-transform: uppercase;
    }
    .sec-title {
      font-family: 'Cairo', sans-serif; font-size: 0.95rem;
      font-weight: 700; color: var(--dark); margin-bottom: 6px; line-height: 1.4;
    }
    .sec-codes {
      font-size: 11px; color: var(--muted); font-family: monospace;
    }
    .view-all-btn {
      display: block; text-align: center; margin: 0 auto;
      width: fit-content; padding: 14px 36px; border-radius: 10px;
      background: linear-gradient(135deg, var(--primary), var(--primary2));
      color: white; text-decoration: none;
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 15px; font-weight: 700;
    }

    /* ── AUTHOR ── */
    .author-section {
      background: linear-gradient(135deg, #042f2e 0%, #0f766e 100%);
      padding: 70px 24px; text-align: center; color: white;
    }
    .author-avatar {
      width: 90px; height: 90px; border-radius: 50%;
      background: rgba(255,255,255,0.15); border: 3px solid rgba(255,255,255,0.4);
      display: flex; align-items: center; justify-content: center;
      font-family: 'Amiri', serif; font-size: 32px; font-weight: 700;
      margin: 0 auto 20px; color: white;
    }
    .author-name {
      font-family: 'Amiri', serif; font-size: 1.8rem; margin-bottom: 6px;
    }
    .author-name-en {
      font-size: 0.95rem; color: rgba(255,255,255,0.65); margin-bottom: 14px;
      letter-spacing: 1px;
    }
    .author-bio {
      font-family: 'Cairo', sans-serif; font-size: 0.95rem;
      color: rgba(255,255,255,0.75); line-height: 1.7; max-width: 560px; margin: 0 auto;
    }

    /* ── FOOTER ── */
    footer {
      background: #021e1d; color: rgba(255,255,255,0.5);
      padding: 28px 24px; text-align: center; font-size: 0.85rem;
    }

    @media(max-width:600px) {
      .cover-bg-img { width: 100%; }
      .cover-actions { flex-direction: column; align-items: center; }
      .sections-grid { grid-template-columns: 1fr 1fr; }
    }
  </style>
</head>
<body>

${navbar('home')}

<!-- COVER -->
<div class="cover-page">
  <div class="cover-img-block">
    <img src="/static/anesthesia-policies-cover.png"
         alt="غلاف دليل السياسات والإجراءات في التخدير"
         class="cover-bg-img" />
  </div>
  <div class="cover-bottom">
    <span class="cover-en-label">${bookTitleEn}</span>
    <h1 class="cover-main-title">
      دليل <span>السياسات والإجراءات</span><br>في التخدير
    </h1>
    <div class="cover-badge-row">
      <span class="cover-badge">📋 ${totalSections} أقسام رئيسية</span>
      <span class="cover-badge">📄 ${totalForms} نموذج وقائمة</span>
      <span class="cover-badge">🏥 معايير JCI & AORN</span>
      <span class="cover-badge">✅ سياسات قابلة للتطبيق</span>
    </div>
    <div class="cover-actions">
      <a href="/anesthesia-policies/sections" class="btn-teal">استعرض الأقسام</a>
      <a href="/anesthesia-policies/section/A" class="btn-outline-teal">ابدأ من القسم A</a>
    </div>
    <div class="scroll-hint">↓</div>
  </div>
</div>

<!-- WHY -->
<section class="why-section" dir="rtl">
  <h2>لماذا هذا الدليل؟<br><small style="font-size:0.6em;color:var(--muted);font-family:'Cairo',sans-serif;">Why This Manual?</small></h2>
  <div class="features-grid">
    <div class="feature-card">
      <div class="feature-icon">⚖️</div>
      <div class="feature-title">سياسات معتمدة ومنظمة</div>
      <div class="feature-desc">سياسات وإجراءات مبنية على معايير JCI وASA وAORN القابلة للتطبيق المباشر في أي مؤسسة صحية.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">📋</div>
      <div class="feature-title">نماذج جاهزة للاستخدام</div>
      <div class="feature-desc">${totalForms} نموذجاً وقائمة تدقيق جاهزة من الفحص ما قبل التخدير حتى التقارير.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🔒</div>
      <div class="feature-title">تغطية شاملة للسلامة</div>
      <div class="feature-desc">يغطي جميع مراحل التخدير: ما قبل، وأثناء، وما بعد الجراحة، وحالات الطوارئ.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">👥</div>
      <div class="feature-title">للفريق الجراحي بالكامل</div>
      <div class="feature-desc">يخدم أطباء التخدير والممرضين والفنيين وإدارة الجودة في المنشآت الصحية.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">📊</div>
      <div class="feature-title">مؤشرات الجودة والأداء</div>
      <div class="feature-desc">يتضمن قسم كامل لمؤشرات الأداء والتدقيق والتحسين المستمر لقسم التخدير.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🚨</div>
      <div class="feature-title">بروتوكولات الطوارئ</div>
      <div class="feature-desc">بروتوكولات الأزمات والطوارئ مع وسائل مساعدة إدراكية وجداول استجابة فورية.</div>
    </div>
  </div>
</section>

<!-- SECTIONS OVERVIEW -->
<section class="sections-overview" dir="rtl">
  <h2>محتوى الدليل<br><small style="font-size:0.6em;color:var(--muted);font-family:'Cairo',sans-serif;">Manual Contents</small></h2>
  <div class="sections-grid">
    ${sections.map(s => `
    <a href="/anesthesia-policies/section/${s.id}" class="section-card">
      <div class="sec-icon">${sectionIcons[s.id] || '📄'}</div>
      <div class="sec-id">Section ${s.id}</div>
      <div class="sec-title">${s.short}</div>
      <div class="sec-codes">${s.codes}</div>
    </a>`).join('')}
  </div>
  <a href="/anesthesia-policies/sections" class="view-all-btn">عرض جميع الأقسام كاملاً</a>
</section>

<!-- AUTHOR -->
<section class="author-section" dir="rtl">
  <div class="author-avatar">ج</div>
  <div class="author-name">${authorName}</div>
  <div class="author-name-en">${authorNameEn}</div>
  <div class="author-bio">
    استشاري تخدير وعناية مركزة | المملكة العربية السعودية<br>
    خبرة تمتد لأكثر من 25 سنة في التخدير والجودة والسلامة<br>
    مؤلف سلسلة دلائل السلامة والجودة في التخدير وغرفة العمليات
  </div>
</section>

<footer>
  <p>${bookTitle}</p>
  <p style="margin-top:6px;">© 2026 ${authorNameEn} — All Rights Reserved</p>
</footer>

</body>
</html>`
  return c.html(html)
})

// ══════════════════════════════════════════════════════════════════════════
// SECTIONS LIST PAGE  /anesthesia-policies/sections
// ══════════════════════════════════════════════════════════════════════════
ap.get('/sections', (c) => {
  // Group sections for display
  const sectionGroups = [
    { label: 'الحوكمة والتقييم', ids: ['A','B','C','D'] },
    { label: 'الخدمات المتخصصة', ids: ['E','F','G'] },
    { label: 'المعدات والسلامة', ids: ['H','I','J'] },
    { label: 'الجودة والنماذج', ids: ['K','L','M'] },
  ]

  const html = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>الأقسام — ${bookTitle}</title>
  ${sharedFonts}
  <style>
    ${cssVars}
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Cairo',sans-serif; background:#f8fafc; color:var(--text); }
    .page-wrap { padding-top: 56px; min-height: 100vh; }

    .page-hero {
      background: linear-gradient(135deg,#042f2e,#0f766e);
      padding: 50px 24px 40px; text-align: center; color: white;
    }
    .page-hero h1 {
      font-family: 'Noto Kufi Arabic', sans-serif;
      font-size: clamp(1.6rem,4vw,2.4rem); margin-bottom: 10px;
    }
    .page-hero p { color: rgba(255,255,255,0.7); font-size: 0.95rem; }
    .stats-row {
      display: flex; justify-content: center; gap: 30px;
      flex-wrap: wrap; margin-top: 24px;
    }
    .stat-item { text-align: center; }
    .stat-num { font-size: 2rem; font-weight: 900; color: var(--primary3); }
    .stat-lbl { font-size: 12px; color: rgba(255,255,255,0.6); }

    .sections-container { max-width: 1100px; margin: 0 auto; padding: 40px 24px; }

    .group-label {
      font-family: 'Noto Kufi Arabic', sans-serif; font-size: 1rem;
      font-weight: 700; color: var(--primary); margin: 36px 0 16px;
      padding-bottom: 8px; border-bottom: 2px solid var(--border);
    }
    .sections-list { display: flex; flex-direction: column; gap: 14px; }
    .section-row {
      background: white; border-radius: 14px; border: 1px solid var(--border);
      padding: 20px 24px; display: flex; align-items: center; gap: 18px;
      text-decoration: none; color: inherit;
      transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
    }
    .section-row:hover {
      transform: translateX(-4px);
      box-shadow: 0 6px 20px rgba(15,118,110,0.12);
      border-color: var(--primary);
    }
    .sec-num-badge {
      width: 48px; height: 48px; border-radius: 12px; flex-shrink: 0;
      background: linear-gradient(135deg, var(--primary), var(--primary2));
      display: flex; align-items: center; justify-content: center;
      font-size: 20px;
    }
    .sec-info { flex: 1; }
    .sec-info-title {
      font-family: 'Cairo', sans-serif; font-size: 1rem;
      font-weight: 700; color: var(--dark); margin-bottom: 4px;
    }
    .sec-info-sub {
      font-size: 0.82rem; color: var(--muted); font-family: monospace;
    }
    .sec-arrow { color: var(--primary); font-size: 20px; flex-shrink: 0; }

    /* Forms section */
    .forms-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
      gap: 12px; margin-top: 16px;
    }
    .form-card {
      background: white; border: 1px solid var(--border); border-radius: 10px;
      padding: 14px 16px; text-decoration: none; color: inherit;
      transition: border-color 0.2s, box-shadow 0.2s;
      display: block;
    }
    .form-card:hover { border-color: var(--primary); box-shadow: 0 4px 12px rgba(15,118,110,0.1); }
    .form-code { font-size: 11px; font-weight: 700; color: var(--primary); margin-bottom: 5px; font-family: monospace; }
    .form-title-text { font-family: 'Cairo', sans-serif; font-size: 0.85rem; color: var(--dark); line-height: 1.4; }

    @media(max-width:600px) {
      .section-row { flex-wrap: wrap; }
    }
  </style>
</head>
<body>
${navbar('sections')}

<div class="page-wrap">
  <div class="page-hero" dir="rtl">
    <h1>📚 الأقسام والسياسات</h1>
    <p>${bookTitle}</p>
    <div class="stats-row">
      <div class="stat-item"><div class="stat-num">${totalSections}</div><div class="stat-lbl">قسم رئيسي</div></div>
      <div class="stat-item"><div class="stat-num">${totalForms}</div><div class="stat-lbl">نموذج وقائمة</div></div>
      <div class="stat-item"><div class="stat-num">30+</div><div class="stat-lbl">سياسة معتمدة</div></div>
    </div>
  </div>

  <div class="sections-container" dir="rtl">
    ${sectionGroups.map(group => `
    <div class="group-label">${group.label}</div>
    <div class="sections-list">
      ${group.ids.map(id => {
        const s = sections.find(x => x.id === id)!
        return `
        <a href="/anesthesia-policies/section/${id}" class="section-row">
          <div class="sec-num-badge">${sectionIcons[id] || '📄'}</div>
          <div class="sec-info">
            <div class="sec-info-title">Section ${id}: ${s.short}</div>
            <div class="sec-info-sub">${s.codes}</div>
          </div>
          <div class="sec-arrow">←</div>
        </a>`
      }).join('')}
    </div>`).join('')}

    <!-- Forms directory -->
    <div class="group-label" style="margin-top:40px;">📋 النماذج وقوائم التدقيق (Section M)</div>
    <div class="forms-grid">
      ${forms.map(f => `
      <a href="/anesthesia-policies/form/${f.code.replace('-','').toLowerCase()}" class="form-card">
        <div class="form-code">${f.code}</div>
        <div class="form-title-text">${f.title}</div>
      </a>`).join('')}
    </div>
  </div>
</div>

<footer style="background:#021e1d;color:rgba(255,255,255,0.5);padding:24px;text-align:center;font-size:0.85rem;">
  <p>${bookTitle} — © 2026 ${authorNameEn}</p>
</footer>
</body>
</html>`
  return c.html(html)
})

// ══════════════════════════════════════════════════════════════════════════
// SECTION DETAIL PAGE  /anesthesia-policies/section/:id
// ══════════════════════════════════════════════════════════════════════════
ap.get('/section/:id', (c) => {
  const id = c.req.param('id').toUpperCase()
  const sectionIndex = sections.findIndex(s => s.id === id)

  if (sectionIndex === -1) {
    return c.html(`<!DOCTYPE html><html><body style="font-family:sans-serif;padding:40px;text-align:center;">
      <h2>Section not found: ${id}</h2>
      <a href="/anesthesia-policies/sections">← Back to sections</a>
    </body></html>`, 404)
  }

  const section = sections[sectionIndex]
  const prevSection = sectionIndex > 0 ? sections[sectionIndex - 1] : null
  const nextSection = sectionIndex < sections.length - 1 ? sections[sectionIndex + 1] : null
  const contentHtml = renderContent(section.content)
  const isFormSection = id === 'M'

  const html = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${section.title} — ${bookTitle}</title>
  ${sharedFonts}
  <style>
    ${cssVars}
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Cairo',sans-serif; background:#f8fafc; color:var(--text); }
    .page-wrap { padding-top: 56px; min-height: 100vh; }

    .chapter-header {
      background: linear-gradient(135deg,#042f2e,#0f766e);
      padding: 36px 24px 30px; color: white;
    }
    .chapter-header-inner { max-width: 900px; margin: 0 auto; }
    .ch-section-label {
      font-size: 11px; letter-spacing: 3px; color: rgba(255,255,255,0.5);
      text-transform: uppercase; margin-bottom: 10px;
      font-family: 'Cairo', sans-serif;
    }
    .ch-title {
      font-family: 'Cairo', sans-serif; font-size: clamp(1.3rem,3vw,2rem);
      font-weight: 700; color: white; line-height: 1.4; margin-bottom: 12px;
    }
    .ch-meta {
      display: flex; gap: 14px; flex-wrap: wrap; align-items: center;
    }
    .ch-badge {
      background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
      color: rgba(255,255,255,0.85); padding: 5px 14px; border-radius: 20px;
      font-size: 12px; font-family: 'Cairo', sans-serif;
    }

    .content-area {
      max-width: 900px; margin: 0 auto; padding: 36px 24px;
      background: white; border-radius: 0 0 16px 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }
    .content-area h2 {
      font-family: 'Cairo', sans-serif; font-size: 1.15rem; font-weight: 700;
      color: var(--dark); margin: 22px 0 10px; padding: 10px 16px;
      background: var(--light-bg); border-right: 4px solid var(--primary);
      border-radius: 0 8px 8px 0;
    }
    .content-area h3 {
      font-family: 'Cairo', sans-serif; font-size: 1rem; font-weight: 700;
      color: var(--primary); margin: 16px 0 8px; padding-right: 12px;
      border-right: 3px solid var(--primary3);
    }
    .content-area p { font-size: 0.95rem; color: #374151; line-height: 1.8; margin: 5px 0; }

    /* Forms grid inside Section M */
    .forms-directory-grid {
      display: grid; grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
      gap: 14px; margin: 24px 0;
    }
    .form-dir-card {
      background: var(--light-bg); border: 1px solid var(--border);
      border-radius: 12px; padding: 18px 16px;
      text-decoration: none; color: inherit;
      transition: border-color 0.2s, box-shadow 0.2s;
      display: block;
    }
    .form-dir-card:hover { border-color: var(--primary); box-shadow: 0 4px 14px rgba(15,118,110,0.12); }
    .form-dir-code { font-size: 12px; font-weight: 700; color: var(--primary); margin-bottom: 6px; font-family: monospace; }
    .form-dir-title { font-family: 'Cairo', sans-serif; font-size: 0.9rem; color: var(--dark); line-height: 1.4; }

    /* Navigation */
    .chapter-nav {
      display: flex; justify-content: space-between; align-items: center;
      max-width: 900px; margin: 24px auto; padding: 0 24px;
      gap: 12px; flex-wrap: wrap;
    }
    .chapter-nav a {
      padding: 10px 20px; border-radius: 8px;
      background: var(--light-bg); border: 1px solid var(--border);
      color: var(--primary); text-decoration: none; font-size: 14px;
      font-family: 'Cairo', sans-serif; font-weight: 600;
      transition: background 0.2s;
    }
    .chapter-nav a:hover { background: #ccfbf1; }
    .chapter-nav a.disabled { opacity: 0.4; pointer-events: none; }

    @media(max-width:600px) {
      .content-area { padding: 24px 16px; }
      .chapter-nav { flex-direction: column; }
    }
  </style>
</head>
<body>
${navbar('section', prevSection?.id, nextSection?.id)}

<div class="page-wrap">
  <div class="chapter-header" dir="rtl">
    <div class="chapter-header-inner">
      <div class="ch-section-label">SECTION ${id} — ${bookTitleEn}</div>
      <h1 class="ch-title">${sectionIcons[id] || '📄'} ${section.short}</h1>
      <div class="ch-meta">
        <span class="ch-badge">${section.codes}</span>
        <span class="ch-badge">${bookTitle}</span>
      </div>
    </div>
  </div>

  <div class="content-area" dir="ltr">
    ${isFormSection ? `
    <div dir="rtl" style="margin-bottom:24px;">
      <h2 style="font-family:'Noto Kufi Arabic',sans-serif;font-size:1.2rem;color:var(--dark);margin-bottom:8px;">
        📋 النماذج وقوائم التدقيق — F-01 إلى F-30
      </h2>
      <p style="font-family:'Cairo',sans-serif;font-size:0.9rem;color:var(--muted);margin-bottom:20px;">
        اضغط على أي نموذج لفتحه كاملاً
      </p>
      <div class="forms-directory-grid">
        ${forms.map(f => `
        <a href="/anesthesia-policies/form/${f.code.replace('-','').toLowerCase()}" class="form-dir-card">
          <div class="form-dir-code">${f.code}</div>
          <div class="form-dir-title">${f.title}</div>
        </a>`).join('')}
      </div>
    </div>
    ` : contentHtml}
  </div>

  <!-- Navigation -->
  <div class="chapter-nav" dir="rtl">
    <a href="${prevSection ? `/anesthesia-policies/section/${prevSection.id}` : '#'}" 
       class="${prevSection ? '' : 'disabled'}">
      ← القسم ${prevSection ? prevSection.id : '—'}
    </a>
    <a href="/anesthesia-policies/sections">📚 جميع الأقسام</a>
    <a href="${nextSection ? `/anesthesia-policies/section/${nextSection.id}` : '#'}"
       class="${nextSection ? '' : 'disabled'}">
      القسم ${nextSection ? nextSection.id : '—'} →
    </a>
  </div>

  ${commentsSection(id)}
</div>

<footer style="background:#021e1d;color:rgba(255,255,255,0.5);padding:24px;text-align:center;font-size:0.85rem;margin-top:40px;">
  <p>${bookTitle} — Section ${id}</p>
  <p style="margin-top:6px;">© 2026 ${authorNameEn}</p>
</footer>
</body>
</html>`
  return c.html(html)
})

// ══════════════════════════════════════════════════════════════════════════
// FORM DETAIL PAGE  /anesthesia-policies/form/:code
// ══════════════════════════════════════════════════════════════════════════
ap.get('/form/:code', (c) => {
  const rawCode = c.req.param('code').toLowerCase().replace(/[^a-z0-9]/g,'')
  
  // Normalize: f01 → F-01
  const normalized = rawCode.replace(/^f0*(\d+)$/, (_, n) => `F-${n.padStart(2,'0')}`)
  const form = forms.find(f => f.code.toLowerCase().replace(/[^a-z0-9]/g,'') === rawCode)

  if (!form) {
    return c.html(`<!DOCTYPE html><html><body style="font-family:sans-serif;padding:40px;text-align:center;">
      <h2>Form not found: ${rawCode}</h2>
      <a href="/anesthesia-policies/section/M">← Back to Section M</a>
    </body></html>`, 404)
  }

  const formIndex = forms.findIndex(f => f.code === form.code)
  const prevForm = formIndex > 0 ? forms[formIndex - 1] : null
  const nextForm = formIndex < forms.length - 1 ? forms[formIndex + 1] : null
  const contentHtml = renderContent(form.content)

  const html = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${form.code}: ${form.title} — ${bookTitle}</title>
  ${sharedFonts}
  <style>
    ${cssVars}
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Cairo',sans-serif; background:#f8fafc; color:var(--text); }
    .page-wrap { padding-top: 56px; min-height: 100vh; }
    .form-header {
      background: linear-gradient(135deg,#042f2e,#0f766e);
      padding: 36px 24px 30px; color: white;
    }
    .form-header-inner { max-width: 900px; margin: 0 auto; }
    .form-code-label {
      font-family: monospace; font-size: 13px; color: var(--primary3);
      letter-spacing: 2px; margin-bottom: 8px;
    }
    .form-title-h {
      font-family: 'Cairo', sans-serif; font-size: clamp(1.2rem,3vw,1.8rem);
      font-weight: 700; color: white; line-height: 1.4;
    }
    .content-area {
      max-width: 900px; margin: 0 auto; padding: 36px 24px;
      background: white; border-radius: 0 0 16px 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }
    .content-area h2 {
      font-size: 1.1rem; font-weight: 700; color: var(--dark);
      margin: 20px 0 10px; padding: 8px 14px;
      background: var(--light-bg); border-right: 4px solid var(--primary);
      border-radius: 0 8px 8px 0; font-family: 'Cairo', sans-serif;
    }
    .content-area h3 {
      font-size: 0.97rem; font-weight: 700; color: var(--primary);
      margin: 14px 0 8px; padding-right: 10px;
      border-right: 3px solid var(--primary3); font-family: 'Cairo', sans-serif;
    }
    .content-area p { font-size: 0.93rem; color: #374151; line-height: 1.8; margin: 4px 0; }
    .form-nav {
      display: flex; justify-content: space-between; align-items: center;
      max-width: 900px; margin: 24px auto; padding: 0 24px;
      gap: 12px; flex-wrap: wrap;
    }
    .form-nav a {
      padding: 10px 18px; border-radius: 8px;
      background: var(--light-bg); border: 1px solid var(--border);
      color: var(--primary); text-decoration: none; font-size: 13px;
      font-family: 'Cairo', sans-serif; font-weight: 600;
    }
    .form-nav a:hover { background: #ccfbf1; }
    .form-nav a.disabled { opacity: 0.4; pointer-events: none; }
  </style>
</head>
<body>
${navbar('sections')}

<div class="page-wrap">
  <div class="form-header">
    <div class="form-header-inner">
      <div class="form-code-label">${form.code} — ${bookTitleEn}</div>
      <h1 class="form-title-h">📋 ${form.title}</h1>
    </div>
  </div>

  <div class="content-area" dir="ltr">
    ${contentHtml}
  </div>

  <div class="form-nav" dir="rtl">
    <a href="${prevForm ? `/anesthesia-policies/form/${prevForm.code.replace('-','').toLowerCase()}` : '#'}"
       class="${prevForm ? '' : 'disabled'}">
      ← ${prevForm ? prevForm.code : '—'}
    </a>
    <a href="/anesthesia-policies/section/M">📋 قائمة النماذج</a>
    <a href="${nextForm ? `/anesthesia-policies/form/${nextForm.code.replace('-','').toLowerCase()}` : '#'}"
       class="${nextForm ? '' : 'disabled'}">
      ${nextForm ? nextForm.code : '—'} →
    </a>
  </div>

  ${commentsSection('form-' + rawCode)}
</div>

<footer style="background:#021e1d;color:rgba(255,255,255,0.5);padding:24px;text-align:center;font-size:0.85rem;margin-top:40px;">
  <p>${form.code}: ${form.title}</p>
  <p style="margin-top:6px;">© 2026 ${authorNameEn}</p>
</footer>
</body>
</html>`
  return c.html(html)
})

export default ap
