import { Hono } from 'hono'

const app = new Hono()

// Book structure data - نفس البيانات من المشروع الأصلي
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
  }
]

// Route for serving chapter HTML files directly
app.get('/chapters/:filename', async (c) => {
  const filename = c.req.param('filename')
  // Ensure it's a valid chapter filename
  if (!filename.match(/^chapter-[\w-]+$/)) {
    return c.notFound()
  }
  // Try to get the file from ASSETS binding (Cloudflare Pages production)
  try {
    const env = c.env as any
    if (env && env.ASSETS) {
      const url = new URL(c.req.url)
      url.pathname = `/anesthesia-safety/chapters/${filename}.html`
      const response = await env.ASSETS.fetch(url.toString())
      if (response.ok) {
        return new Response(response.body, {
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
          }
        })
      }
    }
  } catch (e) {
    // Fall through
  }
  // Fallback: redirect to .html version (works in wrangler pages dev via static serving)
  return c.redirect(`/anesthesia-safety/chapters/${filename}.html`, 302)
})

// Chapters listing page

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>دليل السلامة والجودة في التخدير - د. جميل السقيا</title>
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@300;400;600;700;800&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          body {
            font-family: 'Cairo', 'Arial', sans-serif;
          }
          .arabic-serif {
            font-family: 'Amiri', 'Times New Roman', serif;
          }
          .hover-scale {
            transition: all 0.3s ease;
          }
          .hover-scale:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }
          .chapter-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .chapter-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(102,126,234,0.4);
          }
          .cover-image {
            max-width: 400px;
            width: 100%;
            height: auto;
            border-radius: 20px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
            transition: transform 0.3s ease;
          }
          .cover-image:hover {
            transform: scale(1.05);
          }
          .chapter-available {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .chapter-unavailable {
            background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
            opacity: 0.7;
          }
          .back-to-portal {
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 1000;
            background: rgba(255,255,255,0.9);
            border-radius: 50px;
            padding: 0.5rem 1rem;
            text-decoration: none;
            color: #1e40af;
            font-weight: bold;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
          }
          .back-to-portal:hover {
            background: white;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
          }
        </style>
    </head>
    <body class="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
        <!-- زر العودة للبوابة -->
        <a href="/portal" class="back-to-portal">
            <i class="fas fa-th-large ml-2"></i>البوابة الرئيسية
        </a>

        <!-- Header with Book Cover -->
        <div class="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-16 shadow-2xl">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center justify-center gap-12">
                    <!-- Book Cover Image -->
                    <div class="flex-shrink-0">
                        <img src="/anesthesia-safety/images/cover-book.jpg" 
                             alt="غلاف كتاب دليل السلامة والجودة في التخدير" 
                             class="cover-image"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="cover-image" style="display:none; background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); justify-content: center; align-items: center; flex-direction: column; padding: 3rem; min-height: 300px;">
                            <i class="fas fa-infinity text-8xl mb-6"></i>
                            <i class="fas fa-heartbeat text-6xl"></i>
                        </div>
                    </div>
                    
                    <!-- Book Title -->
                    <div class="text-center md:text-right">
                        <h1 class="text-5xl font-bold mb-4 arabic-serif">دليل السلامة والجودة في التخدير</h1>
                        <p class="text-xl opacity-90 mb-2">Anesthesia Safety & Quality</p>
                        <p class="text-2xl font-bold mb-4">GUIDELINE</p>
                        <p class="text-lg opacity-80">دليل شامل لممارسة آمنة وعالية الجودة</p>
                        <div class="mt-6 inline-block bg-white/20 px-6 py-3 rounded-full">
                            <p class="text-lg font-bold">31 فصل كامل • 96.9%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="container mx-auto px-4 py-12">
            ${bookParts.map((part) => `
              <div class="mb-12">
                <!-- Part Header -->
                <div class="bg-gradient-to-r from-blue-800 to-purple-800 text-white p-6 rounded-t-2xl shadow-lg">
                  <h2 class="text-3xl font-bold">${part.title}</h2>
                  ${part.subtitle ? `<p class="text-xl mt-2 opacity-90">${part.subtitle}</p>` : ''}
                  ${(part as any).englishTitle ? `<p class="text-sm mt-1 opacity-75">${(part as any).englishTitle}</p>` : ''}
                </div>

                <!-- Chapters Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white rounded-b-2xl shadow-lg">
                  ${part.chapters.map(chapter => {
                    const isAvailable = chapter.id !== 4;
                    return `
                    <a href="/anesthesia-safety/chapter/${chapter.id}" class="chapter-card ${isAvailable ? 'chapter-available' : 'chapter-unavailable'} p-6 rounded-xl text-white hover-scale block">
                      <div class="flex items-center mb-3">
                        <i class="fas ${isAvailable ? 'fa-book-medical' : 'fa-lock'} text-2xl ml-3"></i>
                        <h3 class="text-xl font-bold">${chapter.title}</h3>
                      </div>
                      <p class="text-sm opacity-90">${chapter.subtitle}</p>
                      <div class="mt-4 flex items-center text-sm">
                        <span>${isAvailable ? 'قراءة الفصل' : 'قريباً'}</span>
                        <i class="fas ${isAvailable ? 'fa-arrow-left' : 'fa-clock'} mr-2"></i>
                      </div>
                    </a>
                  `}).join('')}
                </div>
              </div>
            `).join('')}
        </div>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-8 mt-12">
            <div class="container mx-auto px-4 text-center">
                <p class="text-lg mb-2">دليل السلامة والجودة في التخدير</p>
                <p class="text-sm opacity-70">© 2026 جميع الحقوق محفوظة - الدكتور جميل السقيا</p>
            </div>
        </footer>
    </body>
    </html>
  `)
})

// Chapters listing page
app.get('/chapters', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>فهرس الفصول - دليل السلامة والجودة في التخدير</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
          body { font-family: 'Cairo', 'Arial', sans-serif; }
          .chapter-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .chapter-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(102,126,234,0.4);
          }
        </style>
    </head>
    <body class="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
        <div class="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-12 shadow-2xl">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl font-bold mb-4">فهرس الفصول</h1>
                <p class="text-xl">دليل السلامة والجودة في التخدير</p>
                <a href="/anesthesia-safety" class="inline-block mt-6 bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-gray-100">← العودة للصفحة الرئيسية</a>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            ${bookParts.map((part) => `
              <div class="mb-12">
                <div class="bg-gradient-to-r from-blue-800 to-purple-800 text-white p-6 rounded-t-2xl shadow-lg">
                  <h2 class="text-3xl font-bold">${part.title}</h2>
                  ${part.subtitle ? `<p class="text-xl mt-2 opacity-90">${part.subtitle}</p>` : ''}
                  <p class="text-sm mt-2 bg-white/20 inline-block px-4 py-1 rounded-full">${part.chapters.length} فصل</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white rounded-b-2xl shadow-lg">
                  ${part.chapters.map(chapter => {
                    const isAvailable = chapter.id !== 4;
                    return `
                    <a href="/anesthesia-safety/chapter/${chapter.id}" class="chapter-card p-6 rounded-xl text-white block">
                      <div class="flex items-center mb-3">
                        <i class="fas ${isAvailable ? 'fa-book-medical' : 'fa-lock'} text-2xl ml-3"></i>
                        <h3 class="text-xl font-bold">${chapter.title}</h3>
                      </div>
                      <p class="text-sm opacity-90">${chapter.subtitle}</p>
                      <div class="mt-4 flex items-center text-sm">
                        <span>${isAvailable ? 'قراءة الفصل' : 'قريباً'}</span>
                        <i class="fas ${isAvailable ? 'fa-arrow-left' : 'fa-clock'} mr-2"></i>
                      </div>
                    </a>
                  `}).join('')}
                </div>
              </div>
            `).join('')}
        </div>
    </body>
    </html>
  `)
})

// Simple chapter viewer - serves HTML files via iframe (نفس آلية المشروع الأصلي)
app.get('/chapter/:id', async (c) => {
  const chapterIdParam = c.req.param('id')
  const chapterId = isNaN(parseInt(chapterIdParam)) ? chapterIdParam : parseInt(chapterIdParam)
  
  // Available chapters
  const availableChapters = [0,1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,'copyright','foreword-ammar','foreword-sami','contents','min-ramad']
  
  // Chapter 4 - coming soon
  if (chapterId === 4) {
    return c.html(`
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>الفصل الرابع - قريباً</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
      </head>
      <body class="bg-gray-100">
          <div class="container mx-auto px-4 py-12 text-center">
              <div class="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
                  <i class="fas fa-clock text-6xl text-gray-400 mb-6"></i>
                  <h1 class="text-3xl font-bold mb-4">الفصل الرابع</h1>
                  <p class="text-xl text-gray-600 mb-8">العمل الجماعي والتواصل وإدارة موارد الأزمات</p>
                  <p class="text-lg text-gray-500">هذا الفصل سيتم إضافته قريباً</p>
                  <a href="/anesthesia-safety" class="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                      العودة للصفحة الرئيسية
                  </a>
              </div>
          </div>
      </body>
      </html>
    `)
  }
  
  // Check if chapter is available
  if (!availableChapters.includes(chapterId as any)) {
    return c.html(`
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
          <meta charset="UTF-8">
          <title>الفصل غير متوفر</title>
          <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-100">
          <div class="container mx-auto px-4 py-12 text-center">
              <div class="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
                  <h1 class="text-3xl font-bold mb-4">الفصل غير موجود</h1>
                  <a href="/anesthesia-safety" class="text-blue-600 hover:underline">العودة للصفحة الرئيسية</a>
              </div>
          </div>
      </body>
      </html>
    `)
  }
  
  // Map special chapter IDs to clean filenames
  const specialChapterFiles: { [key: string]: string } = {
    'copyright': 'chapter-copyright.html',
    'foreword-ammar': 'chapter-foreword-ammar.html',
    'foreword-sami': 'chapter-foreword-sami.html',
    'contents': 'chapter-contents.html',
    'min-ramad': 'chapter-min-ramad.html'
  }
  
  let filePathForIframe: string
  if (typeof chapterId === 'string' && specialChapterFiles[chapterId]) {
    // للملفات الخاصة: نستخدم الاسم بدون .html (Cloudflare Pages يتعامل معه)
    filePathForIframe = specialChapterFiles[chapterId].replace('.html', '')
  } else {
    filePathForIframe = `chapter-${chapterId}`
  }
  
  // Get chapter title for header
  let chapterTitle = ''
  let chapterSubtitle = ''
  for (const part of bookParts) {
    const ch = part.chapters.find(c => c.id === chapterId)
    if (ch) {
      chapterTitle = ch.title
      chapterSubtitle = ch.subtitle
      break
    }
  }
  
  // Return iframe viewer - نفس تصميم المشروع الأصلي
  return c.html(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${chapterTitle || 'فصل'} - دليل السلامة والجودة في التخدير</title>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: 'Cairo', Arial, sans-serif;
          }
          .header {
            background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
            color: white;
            padding: 1rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          }
          .header-title {
            text-align: center;
            flex: 1;
          }
          .header-title h1 {
            font-size: 1.2rem;
            font-weight: bold;
            margin: 0 0 0.2rem 0;
          }
          .header-title p {
            font-size: 0.85rem;
            opacity: 0.85;
            margin: 0;
          }
          .back-button {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            background: white;
            color: #1e40af;
            padding: 0.5rem 1.2rem;
            border-radius: 25px;
            text-decoration: none;
            font-weight: bold;
            font-size: 0.9rem;
            white-space: nowrap;
            transition: background 0.2s;
          }
          .back-button:hover {
            background: #f0f0f0;
          }
          iframe {
            width: 100%;
            height: calc(100vh - 70px);
            border: none;
            display: block;
          }
          @media (max-width: 640px) {
            .header { padding: 0.7rem 1rem; }
            .header-title h1 { font-size: 1rem; }
            .back-button { font-size: 0.8rem; padding: 0.4rem 0.8rem; }
          }
        </style>
    </head>
    <body>
        <div class="header">
            <a href="/anesthesia-safety" class="back-button">
                <i class="fas fa-arrow-right"></i>رئيسي
            </a>
            <div class="header-title">
                <h1>دليل السلامة والجودة في التخدير</h1>
                ${chapterTitle ? `<p>${chapterTitle}${chapterSubtitle ? ' - ' + chapterSubtitle : ''}</p>` : ''}
            </div>
            <a href="/anesthesia-safety/chapters" class="back-button">
                <i class="fas fa-list"></i>الفهرس
            </a>
        </div>
        <iframe src="/anesthesia-safety/chapters/${filePathForIframe}" title="${chapterTitle || 'فصل'}"></iframe>
    </body>
    </html>
  `)
})

export default app
