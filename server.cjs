const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use('/static', express.static(path.join(__dirname, 'public/static')));
app.use('/chapter-files', express.static(path.join(__dirname, 'public/chapters')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Homepage - New promotional design
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home-page.html'));
});

// About page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Book structure data
const bookParts = [
  {
    id: 'front-matter',
    title: 'المقدمة والمواد الأولية',
    englishTitle: 'Front Matter',
    chapters: [
      { id: 'copyright', title: 'حقوق الطبع والنشر', subtitle: 'Copyright Notice' },
      { id: 'foreword-ammar', title: 'تقديم الدكتور عمار أبو الصبح', subtitle: 'Foreword by Dr. Ammar Abu Al-Sabah' },
      { id: 'foreword-sami', title: 'تقديم الدكتور سامي زايد', subtitle: 'Foreword by Dr. Sami Zayed' },
      { id: 'contents', title: 'جدول المحتويات', subtitle: 'Table of Contents' },
      { id: 0, title: 'المقدمة', subtitle: 'مقدمة الكتاب' },
      { id: 'min-ramad', title: 'من رماد الذاكرة', subtitle: 'From the Ashes of Memory' }
    ]
  },
  {
    id: 'part-1',
    title: 'الجزء الأول',
    subtitle: 'أسس علم السلامة في التخدير',
    chapters: [
      { id: 1, title: 'الفصل الأول', subtitle: 'لماذا تهم السلامة في التخدير' },
      { id: 2, title: 'الفصل الثاني', subtitle: 'ثقافة السلامة والخطأ البشري' },
      { id: 3, title: 'الفصل الثالث', subtitle: 'العوامل البشرية وبيئة العمل' },
      { id: 4, title: 'الفصل الرابع', subtitle: 'العمل الجماعي والتواصل' }
    ]
  },
  {
    id: 'part-2',
    title: 'الجزء الثاني',
    subtitle: 'أساليب تحسين الجودة والقياس',
    chapters: [
      { id: 5, title: 'الفصل الخامس', subtitle: 'إدارة الجودة في الرعاية المحيطة بالجراحة' },
      { id: 6, title: 'الفصل السادس', subtitle: 'التحسين المستمر للجودة' },
      { id: 7, title: 'الفصل السابع', subtitle: 'القياس في التخدير' },
      { id: 8, title: 'الفصل الثامن', subtitle: 'التدقيق والحوكمة السريرية' },
      { id: 9, title: 'الفصل التاسع', subtitle: 'الإبلاغ عن الحوادث وأنظمة التعلم' }
    ]
  },
  {
    id: 'part-3',
    title: 'الجزء الثالث',
    subtitle: 'بناء نظام تخدير آمن',
    chapters: [
      { id: 10, title: 'الفصل العاشر', subtitle: 'تصميم خدمات تخدير موثوقة' },
      { id: 11, title: 'الفصل الحادي عشر', subtitle: 'ثقافة السلامة والثقافة العادلة' },
      { id: 12, title: 'الفصل الثاني عشر', subtitle: 'التعليم والتدريب وأنظمة الكفاءة' },
      { id: 13, title: 'الفصل الثالث عشر', subtitle: 'أدوات تقييم المخاطر' },
      { id: 14, title: 'الفصل الرابع عشر', subtitle: 'قوائم التحقق والمساعدات المعرفية' }
    ]
  },
  {
    id: 'part-4',
    title: 'الجزء الرابع',
    subtitle: 'سلامة المرضى عبر مسار الرعاية',
    chapters: [
      { id: 15, title: 'الفصل الخامس عشر', subtitle: 'السلامة قبل الجراحة' },
      { id: 16, title: 'الفصل السادس عشر', subtitle: 'السلامة أثناء الجراحة' },
      { id: 17, title: 'الفصل السابع عشر', subtitle: 'سلامة الأدوية في التخدير' },
      { id: 18, title: 'الفصل الثامن عشر', subtitle: 'سلامة المعدات والمراقبة' },
      { id: 19, title: 'الفصل التاسع عشر', subtitle: 'منع آليات الضرر الشائعة' },
      { id: 20, title: 'الفصل العشرون', subtitle: 'سلامة التخدير الناحي' },
      { id: 21, title: 'الفصل الحادي والعشرون', subtitle: 'سلامة التهدئة' },
      { id: 22, title: 'الفصل الثاني والعشرون', subtitle: 'التخدير خارج غرفة العمليات' },
      { id: 23, title: 'الفصل الثالث والعشرون', subtitle: 'سلامة وحدة رعاية ما بعد التخدير' },
      { id: 24, title: 'الفصل الرابع والعشرون', subtitle: 'التميز في التسليم' }
    ]
  },
  {
    id: 'part-5',
    title: 'الجزء الخامس',
    subtitle: 'فئات خاصة وسياقات عالية المخاطر',
    chapters: [
      { id: 25, title: 'الفصل الخامس والعشرون', subtitle: 'تخدير التوليد' },
      { id: 26, title: 'الفصل السادس والعشرون', subtitle: 'سلامة تخدير الأطفال' },
      { id: 27, title: 'الفصل السابع والعشرون', subtitle: 'جودة التخدير لكبار السن' },
      { id: 28, title: 'الفصل الثامن والعشرون', subtitle: 'حالات القلب والأوعية الكبرى' },
      { id: 29, title: 'الفصل التاسع والعشرون', subtitle: 'تخدير الصدمات والطوارئ' },
      { id: 30, title: 'الفصل الثلاثون', subtitle: 'واجهات العناية المركزة' }
    ]
  },
  {
    id: 'part-6',
    title: 'الجزء السادس',
    subtitle: 'التنفيذ والتعليم والاستدامة',
    chapters: [
      { id: 31, title: 'الفصل الحادي والثلاثون', subtitle: 'علم التنفيذ لمشاريع السلامة' },
      { id: 32, title: 'الفصل الثاني والثلاثون', subtitle: 'استدامة التميز' }
    ]
  },
  {
    id: 'conclusion',
    title: 'الخاتمة',
    englishTitle: 'Conclusion',
    chapters: [
      { id: 33, title: 'خاتمة الكتاب', subtitle: 'عهدٌ لا ينتهي' }
    ]
  },
  {
    id: 'references',
    title: 'المصادر والمراجع',
    englishTitle: 'References',
    chapters: [
      { id: 34, title: 'المصادر والمراجع', subtitle: 'References - Vancouver Style' }
    ]
  }
];

const chapterFiles = {
  'copyright': 'حقوق_الطبع_والنشر.html',
  'foreword-ammar': 'تقديم_د_عمار_ابو_الصبح.html',
  'foreword-sami': 'تقديم_د_سامي_زايد.html',
  'contents': 'جدول_المحتويات.html',
  0: 'تنسيق مقدمة كتاب السلامة والجودة في التخدير.html',
  'min-ramad': 'من_رماد_الذاكرة.html',
  1: 'الفصل_الأول_السلامة_في_التخدير (1).html',
  2: 'الفصل_الثاني_المفاهيم_والنماذج.html',
  3: 'الفصل_الثالث_العوامل_البشرية.html',
  4: 'الفصل_الرابع_العمل_الجماعي.html',
  5: 'الفصل_الخامس_إدارة_الجودة.html',
  6: 'الفصل_السادس_التحسين_المستمر.html',
  7: 'الفصل_السابع_القياس_في_التخدير.html',
  8: 'الفصل_الثامن_الحوكمة_السريرية.html',
  9: 'الفصل_التاسع_الابلاغ_عن_الحوادث.html',
  10: 'الفصل_العاشر_تصميم_الموثوقية.html',
  11: 'الفصل_الحادي_عشر_ثقافة_السلامة.html',
  12: 'الفصل_الثاني_عشر_التعليم_والكفاءة.html',
  13: 'الفصل_الثالث_عشر_تقييم_المخاطر.html',
  14: 'الفصل_الرابع_عشر_قوائم_التحقق.html',
  15: 'الفصل_الخامس_عشر_السلامة_قبل_العملية (1).html',
  16: 'الفصل 16 - السلامة أثناء العملية المراقبة وأمان مجرى الهواء.html',
  17: 'الفصل 17 - سلامة الأدوية في التخدير.html',
  18: 'الفصل 18 - سلامة المعدات والمراقبة.html',
  19: 'الفصل 19 - السلامة أثناء العمليات الوقاية من آليات الضرر الشائعة.html',
  20: 'الفصل 20 - سلامة التخدير الناحي والاستعداد لـ LAST.html',
  21: 'الفصل 21 - سلامة التهدئة من الخفيفة إلى العميقة.html',
  22: 'الفصل 22 - التخدير خارج غرفة العمليات.html',
  23: 'الفصل 23 - سلامة وحدة الإفاقة والوقاية من مضاعفات ما بعد العملية.html',
  24: 'الفصل 24 - التميز في التسليم نقل المرضى (1).html',
  25: 'الفصل 25 - تخدير الولادة أنظمة أمان للأم والطفل.html',
  26: 'الفصل 26 - سلامة تخدير الأطفال وحديثي الولادة.html',
  27: 'الفصل 27 - جودة التخدير للمرضى المسنين المعتمدة على الهشاشة (1).html',
  28: 'الفصل 28 - حالات القلب والأوعية الكبرى ممارسة الموثوقية العالية.html',
  29: 'الفصل 29 - تخدير الإصابات والطوارئ السلامة الحرجة بالوقت.html',
  30: 'الفصل 30 - واجهات العناية المركزة والرعاية الحرجة.html',
  31: 'الفصل 31 - علم التنفيذ لمشاريع السلامة في التخدير.html',
  32: 'الفصل 32 - استدامة التميز في سلامة وجودة التخدير.html',
  33: 'الخاتمة.html',
  34: 'المصادر_والمراجع.html'
};

// Chapter viewer - serve HTML file directly
// دالة لإنشاء أزرار التنقل الثابتة
function createNavigationButtons(currentId) {
  const numericId = parseInt(currentId);
  
  // الصفحات الخاصة التي لها أزرار ثابتة بالفعل
  const specialPages = ['0', 'contents', 'min-ramad', 'copyright', 'foreword-ammar', 'foreword-sami'];
  if (specialPages.includes(currentId.toString())) {
    return ''; // لا تضيف أزرار لهذه الصفحات
  }
  
  // تحديد الفصل السابق والتالي
  let prevId, prevTitle, nextId, nextTitle;
  
  if (numericId === 1) {
    prevId = 'min-ramad';
    prevTitle = 'من رماد الذاكرة';
    nextId = 2;
    nextTitle = 'الفصل الثاني';
  } else if (numericId === 32) {
    prevId = 31;
    prevTitle = 'الفصل 31';
    nextId = 33;
    nextTitle = 'الخاتمة';
  } else if (numericId === 33) {
    prevId = 32;
    prevTitle = 'الفصل 32';
    nextId = 34;
    nextTitle = 'المصادر والمراجع';
  } else if (numericId === 34) {
    prevId = 33;
    prevTitle = 'الخاتمة';
    nextId = null;
    nextTitle = null;
  } else if (numericId > 1 && numericId < 32) {
    prevId = numericId - 1;
    prevTitle = `الفصل ${numericId - 1}`;
    nextId = numericId + 1;
    nextTitle = `الفصل ${numericId + 1}`;
  } else {
    return ''; // فصل غير معروف
  }
  
  const navigationHTML = `
<style>
    .nav-footer-static {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.98));
        backdrop-filter: blur(10px);
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        z-index: 1000;
        border-top: 2px solid #e5e7eb;
    }
    .nav-btn-static {
        font-family: 'Noto Kufi Arabic', Arial, sans-serif;
        background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
        color: white !important;
        padding: 12px 24px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 15px;
        transition: all 0.3s ease;
        border: none;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        cursor: pointer;
    }
    .nav-btn-static:hover {
        background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    .nav-btn-static.disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }
    .nav-btn-static.prev::before {
        content: '← ';
    }
    .nav-btn-static.next::after {
        content: ' →';
    }
    .nav-center-static {
        font-family: 'Noto Kufi Arabic', Arial, sans-serif;
        font-weight: 600;
        color: #2563eb;
        font-size: 16px;
    }
    .nav-home-btn {
        font-family: 'Noto Kufi Arabic', Arial, sans-serif;
        background: #10b981;
        color: white !important;
        padding: 10px 20px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.3s ease;
    }
    .nav-home-btn:hover {
        background: #059669;
        transform: translateY(-2px);
    }
    @media (max-width: 768px) {
        .nav-footer-static {
            flex-direction: column;
            gap: 10px;
            padding: 12px 15px;
        }
        .nav-btn-static {
            width: 100%;
            text-align: center;
            font-size: 14px;
            padding: 10px 16px;
        }
        .nav-center-static {
            order: -1;
            margin-bottom: 5px;
        }
        .nav-home-btn {
            width: 100%;
            text-align: center;
        }
    }
</style>
<div class="nav-footer-static">
    ${prevId ? `<a href="/chapter/${prevId}" class="nav-btn-static prev">السابق: ${prevTitle}</a>` : '<span class="nav-btn-static disabled">السابق</span>'}
    <div class="nav-center-static">
        <a href="/chapters" class="nav-home-btn">📚 الفصول</a>
    </div>
    ${nextId ? `<a href="/chapter/${nextId}" class="nav-btn-static next">التالي: ${nextTitle}</a>` : '<span class="nav-btn-static disabled">التالي</span>'}
</div>
`;
  
  return navigationHTML;
}

app.get('/chapter/:id', (req, res) => {
  const chapterId = req.params.id;
  const fileName = chapterFiles[chapterId];
  
  if (!fileName) {
    return res.status(404).send('Chapter not found');
  }

  const filePath = path.join(__dirname, 'public/chapters', fileName);
  
  if (fs.existsSync(filePath)) {
    // قراءة محتوى الملف
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // حذف أزرار التنقل القديمة (التي تحتوي على روابط خاطئة)
    content = content.replace(/<div\s+class="bottom-nav"[^>]*>[\s\S]*?<\/div>\s*<style[\s\S]*?\.bottom-nav[\s\S]*?<\/style>/gi, '');
    
    // حذف كل السكريبتات القديمة المزعجة (بما في ذلك سكريبتات التنزيل)
    content = content.replace(/<!-- Download Script -->[\s\S]*?<\/script>/gi, '');
    content = content.replace(/<!-- أزرار التنقل السفلية الثابتة -->/gi, '');
    content = content.replace(/<script>[\s\S]*?function\s+download.*?[\s\S]*?<\/script>/gi, '');
    
    // حذف أي زر تنزيل
    content = content.replace(/<button[^>]*download[^>]*>[\s\S]*?<\/button>/gi, '');
    
    // حذف السكريبت chapter-enhancements.js القديم (إذا كان موجوداً)
    content = content.replace(/<script\s+src="\/static\/chapter-enhancements.js"><\/script>/gi, '');
    
    // حذف أي </body></html> إضافية في منتصف الملف (بعد السطر الأول)
    // نبحث عن جميع </body></html> ونحتفظ فقط بالأخيرة
    const bodyCloseMatches = content.match(/<\/body>\s*<\/html>/gi);
    if (bodyCloseMatches && bodyCloseMatches.length > 1) {
      // احذف جميع </body></html> ما عدا الأخيرة
      for (let i = 0; i < bodyCloseMatches.length - 1; i++) {
        content = content.replace(/<\/body>\s*<\/html>/i, '');
      }
    }
    
    // إضافة CSS responsive مباشرة بعد <head> لإصلاح مشاكل العرض على الموبايل/تابلت
    const responsiveCSS = `
<style>
/* إصلاح responsive لجميع الشاشات */
* {
  box-sizing: border-box;
  max-width: 100%;
}

html, body {
  overflow-x: hidden !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

body {
  max-width: 100vw !important;
  padding: 20px 15px 120px 15px !important;
}

/* إصلاح الصور والجداول */
img, table, pre, code {
  max-width: 100% !important;
  height: auto !important;
  overflow-x: auto !important;
}

/* إصلاح العناصر الكبيرة */
div, p, h1, h2, h3, h4, h5, h6 {
  max-width: 100% !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
}

/* responsive للموبايل */
@media (max-width: 768px) {
  body {
    font-size: 16px !important;
    padding: 15px 10px 120px 10px !important;
  }
  
  h1 { font-size: 1.8rem !important; }
  h2 { font-size: 1.5rem !important; }
  h3 { font-size: 1.3rem !important; }
}
</style>
`;

    // إضافة CSS بعد <head>
    if (content.includes('<head>')) {
      content = content.replace(/<head>/i, `<head>${responsiveCSS}`);
    } else if (content.includes('</head>')) {
      content = content.replace(/<\/head>/i, `${responsiveCSS}</head>`);
    }
    
    // إضافة أزرار التنقل الثابتة والسكريبت قبل نهاية </body>
    const navigationButtons = createNavigationButtons(chapterId);
    const scriptTag = '\n<script src="/static/chapter-enhancements.js"></script>\n';
    
    // دائماً نضيف الأزرار والسكريبت (بعد حذف القديم)
    console.log(`Adding navigation and script to chapter ${chapterId}`);
    
    // محاولة البحث عن </body> بأشكال مختلفة
    if (content.includes('</body>')) {
      // استبدل آخر </body> فقط (في حالة وجود أكثر من واحد)
      const lastBodyIndex = content.lastIndexOf('</body>');
      if (lastBodyIndex !== -1) {
        content = content.substring(0, lastBodyIndex) + 
                 navigationButtons + scriptTag + 
                 content.substring(lastBodyIndex);
        console.log(`Navigation and script added before last </body>`);
      }
    } else if (content.includes('</html>')) {
      // إذا لم يوجد </body> لكن يوجد </html>، أضف قبل </html>
      content = content.replace(/<\/html>/i, `${navigationButtons}${scriptTag}</html>`);
      console.log(`Navigation and script added before </html>`);
    } else {
      // إذا لم يوجد أي منهما، أضف في النهاية
      content += navigationButtons + scriptTag + '</body></html>';
      console.log(`Navigation and script added at end with tags`);
    }
    
    res.send(content);
  } else {
    res.status(404).send('File not found');
  }
});

// View chapter content via iframe
app.get('/view-chapter', (req, res) => {
  const { id } = req.query;
  const fileName = chapterFiles[id];
  
  if (!fileName) {
    return res.status(404).send('Chapter not found');
  }

  const filePath = path.join(__dirname, 'public/chapters', fileName);
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    res.send(content);
  } else {
    res.status(404).send('File not found');
  }
});

// Start server

// Chapters listing page
app.get('/chapters', (req, res) => {
  // Icon mapping for each part
  const partIcons = {
    'front-matter': 'fa-bookmark',
    'part-1': 'fa-shield-alt',
    'part-2': 'fa-chart-line',
    'part-3': 'fa-cogs',
    'part-4': 'fa-procedures',
    'part-5': 'fa-users-cog',
    'part-6': 'fa-rocket'
  };
  
  // Gradient colors for each part
  const partGradients = {
    'front-matter': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'part-1': 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
    'part-2': 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
    'part-3': 'linear-gradient(135deg, #1abc9c 0%, #16a085 100%)',
    'part-4': 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
    'part-5': 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
    'part-6': 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)'
  };
  
  const chaptersHTML = bookParts.map((part, index) => `
    <div class="part-section" data-aos="fade-up" data-aos-delay="${index * 100}">
      <div class="part-header-new">
        <div class="part-icon-container" style="background: ${partGradients[part.id]};">
          <i class="fas ${partIcons[part.id]}"></i>
        </div>
        <div class="part-info">
          <h2>${part.title}</h2>
          ${part.subtitle ? `<p class="part-subtitle">${part.subtitle}</p>` : ''}
          ${part.englishTitle ? `<p class="part-english">${part.englishTitle}</p>` : ''}
        </div>
        <div class="part-badge">${part.chapters.length} فصل</div>
      </div>
      <div class="chapters-grid-new">
        ${part.chapters.map((chapter, chIndex) => `
          <a href="/chapter/${chapter.id}" class="chapter-card-new" data-aos="zoom-in" data-aos-delay="${(index * 100) + (chIndex * 50)}">
            <div class="chapter-number-badge" style="background: ${partGradients[part.id]};">
              ${chapter.id >= 0 ? chapter.id : '★'}
            </div>
            <div class="chapter-content-new">
              <h3 class="chapter-title-new">${chapter.title}</h3>
              <p class="chapter-subtitle-new">${chapter.subtitle}</p>
            </div>
            <div class="chapter-arrow">
              <i class="fas fa-arrow-left"></i>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');

  res.send(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>فصول الكتاب - دليل السلامة والجودة في التخدير</title>
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@300;400;600;700;800&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Cairo', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
          }
          
          .header {
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(10px);
            color: white;
            padding: 3rem 2rem 2rem;
            text-align: center;
            box-shadow: 0 4px 30px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
          }
          
          .header h1 {
            font-family: 'Amiri', serif;
            font-size: 3.5rem;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          }
          
          .header .subtitle {
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
            opacity: 0.95;
          }
          
          .back-button {
            display: inline-block;
            padding: 0.9rem 2.5rem;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          }
          
          .back-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.3);
            background: #f8f9fa;
          }

          .back-button i {
            margin-left: 0.5rem;
          }
          
          .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 3rem 2rem;
          }
          
          .part-section {
            margin-bottom: 3rem;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
          }

          .part-section:hover {
            transform: translateY(-5px);
          }
          
          .part-header-new {
            display: flex;
            align-items: center;
            padding: 2.5rem;
            background: #f8f9fa;
            border-bottom: 3px solid #e0e0e0;
            gap: 2rem;
          }

          .part-icon-container {
            width: 80px;
            height: 80px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          }

          .part-icon-container i {
            color: white;
            font-size: 2.5rem;
          }

          .part-info {
            flex: 1;
          }

          .part-info h2 {
            font-family: 'Amiri', serif;
            font-size: 2.2rem;
            color: #2c3e50;
            margin-bottom: 0.3rem;
          }

          .part-subtitle {
            font-size: 1.2rem;
            color: #7f8c8d;
            margin-bottom: 0.2rem;
          }

          .part-english {
            font-size: 1rem;
            color: #95a5a6;
            font-style: italic;
          }

          .part-badge {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 0.7rem 1.5rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            white-space: nowrap;
            box-shadow: 0 3px 10px rgba(102,126,234,0.3);
          }
          
          .chapters-grid-new {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 1.5rem;
            padding: 2.5rem;
          }
          
          .chapter-card-new {
            background: white;
            border: 2px solid #e9ecef;
            border-radius: 15px;
            padding: 1.8rem;
            text-decoration: none;
            color: inherit;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 1.5rem;
            position: relative;
            overflow: hidden;
          }

          .chapter-card-new::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .chapter-card-new:hover::before {
            opacity: 1;
          }
          
          .chapter-card-new:hover {
            transform: translateX(-10px);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
            border-color: #667eea;
          }

          .chapter-number-badge {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.3rem;
            flex-shrink: 0;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            position: relative;
            z-index: 1;
          }

          .chapter-content-new {
            flex: 1;
            position: relative;
            z-index: 1;
          }

          .chapter-title-new {
            font-size: 1.2rem;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 0.4rem;
          }

          .chapter-subtitle-new {
            font-size: 1rem;
            color: #7f8c8d;
            line-height: 1.5;
          }

          .chapter-arrow {
            color: #667eea;
            font-size: 1.3rem;
            transition: transform 0.3s ease;
            position: relative;
            z-index: 1;
          }

          .chapter-card-new:hover .chapter-arrow {
            transform: translateX(-5px);
          }

          .bottom-nav {
            text-align: center;
            padding: 3rem 2rem;
          }

          .stats-container {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 2rem;
          }

          .stat-item {
            text-align: center;
          }

          .stat-number {
            font-size: 3rem;
            font-weight: bold;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .stat-label {
            font-size: 1.1rem;
            color: #7f8c8d;
            margin-top: 0.5rem;
          }

          @media (max-width: 768px) {
            .header h1 {
              font-size: 2.5rem;
            }
            .chapters-grid-new {
              grid-template-columns: 1fr;
              padding: 1.5rem;
            }
            .part-header-new {
              flex-direction: column;
              text-align: center;
            }
            .chapter-card-new {
              padding: 1.2rem;
            }
          }
        </style>
    </head>
    <body>
        <div class="header">
            <h1><i class="fas fa-book-open"></i> فصول الكتاب</h1>
            <p class="subtitle">33 فصلاً شاملاً • 6 أجزاء رئيسية • 100% متوفر</p>
            <a href="/" class="back-button">
                <i class="fas fa-home"></i> العودة للرئيسية
            </a>
        </div>
        
        <div class="container">
            <div class="stats-container">
              <div class="stat-item">
                <div class="stat-number">33</div>
                <div class="stat-label">فصل كامل</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">6</div>
                <div class="stat-label">أجزاء رئيسية</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">محتوى متوفر</div>
              </div>
            </div>

            ${chaptersHTML}

            <div class="bottom-nav">
              <a href="/" class="back-button">
                <i class="fas fa-arrow-right"></i> العودة للصفحة الرئيسية
              </a>
            </div>
        </div>
    </body>
    </html>
  `);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🚀 Ready to accept connections`);
});
