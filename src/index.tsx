import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

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
  }
]

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Serve chapter files directly
app.use('/chapters/*', serveStatic({ root: './public' }))

// Chapters listing page - TEST
app.get('/chapters-test/', (c) => {
  return c.text(`TEST: front-matter has ${bookParts[0].chapters.length} chapters`)
})

// Chapters listing page
app.get('/chapters/', (c) => {
  c.header('Cache-Control', 'no-cache, no-store, must-revalidate')
  c.header('Pragma', 'no-cache')
  c.header('Expires', '0')
  return c.html(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>فهرس الفصول - دليل السلامة والجودة في التخدير</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
          body {
            font-family: 'Cairo', 'Arial', sans-serif;
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
        </style>
    </head>
    <body class="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
        <div class="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-12 shadow-2xl">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl font-bold mb-4">فهرس الفصول</h1>
                <p class="text-xl">دليل السلامة والجودة في التخدير</p>
                <a href="/" class="inline-block mt-6 bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-gray-100">← العودة للصفحة الرئيسية</a>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12">
            ${bookParts.map((part, partIndex) => `
              <div class="mb-12">
                <div class="bg-gradient-to-r from-blue-800 to-purple-800 text-white p-6 rounded-t-2xl shadow-lg">
                  <h2 class="text-3xl font-bold">${part.title}</h2>
                  ${part.subtitle ? `<p class="text-xl mt-2 opacity-90">${part.subtitle}</p>` : ''}
                  ${part.englishTitle ? `<p class="text-sm mt-1 opacity-75">${part.englishTitle}</p>` : ''}
                  <p class="text-sm mt-2 bg-white/20 inline-block px-4 py-1 rounded-full">${part.chapters.length} فصل</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white rounded-b-2xl shadow-lg">
                  ${part.chapters.map(chapter => {
                    const isAvailable = chapter.id !== 4;
                    return `
                    <a href="/chapter/${chapter.id}" class="chapter-card p-6 rounded-xl text-white">
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



// Homepage
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>دليل السلامة والجودة في التخدير</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
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
        </style>
    </head>
    <body class="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
        <!-- Header with Book Cover -->
        <div class="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-16 shadow-2xl">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center justify-center gap-12">
                    <!-- Book Cover Image -->
                    <div class="flex-shrink-0">
                        <img src="https://www.genspark.ai/api/files/s/d85ntRs3" 
                             alt="غلاف كتاب دليل السلامة والجودة في التخدير" 
                             class="cover-image"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="cover-image" style="display:none; background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); justify-content: center; align-items: center; flex-direction: column; padding: 3rem;">
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
            ${bookParts.map((part, partIndex) => `
              <div class="mb-12">
                <!-- Part Header -->
                <div class="bg-gradient-to-r from-blue-800 to-purple-800 text-white p-6 rounded-t-2xl shadow-lg">
                  <h2 class="text-3xl font-bold">${part.title}</h2>
                  ${part.subtitle ? `<p class="text-xl mt-2 opacity-90">${part.subtitle}</p>` : ''}
                  ${part.englishTitle ? `<p class="text-sm mt-1 opacity-75">${part.englishTitle}</p>` : ''}
                </div>

                <!-- Chapters Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white rounded-b-2xl shadow-lg">
                  ${part.chapters.map(chapter => {
                    const isAvailable = chapter.id !== 4;
                    return `
                    <a href="/chapter/${chapter.id}" class="chapter-card ${isAvailable ? 'chapter-available' : 'chapter-unavailable'} p-6 rounded-xl text-white hover-scale">
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
                <p class="text-sm opacity-70">© 2024 جميع الحقوق محفوظة</p>
            </div>
        </footer>
    </body>
    </html>
  `)
})

// Simple chapter viewer - serves HTML files directly using iframe
app.get('/chapter/:id', async (c) => {
  const chapterIdParam = c.req.param('id')
  const chapterId = isNaN(parseInt(chapterIdParam)) ? chapterIdParam : parseInt(chapterIdParam)
  
  // Define which chapters have HTML files
  const availableChapters = [0,1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,'copyright','foreword-ammar','foreword-sami','contents','min-ramad']
  
  // Check if chapter 4 is requested
  if (chapterId === 4) {
    return c.html(`
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>الفصل الرابع - قريباً</title>
          <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-100">
          <div class="container mx-auto px-4 py-12 text-center">
              <div class="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto">
                  <i class="fas fa-clock text-6xl text-gray-400 mb-6"></i>
                  <h1 class="text-3xl font-bold mb-4">الفصل الرابع</h1>
                  <p class="text-xl text-gray-600 mb-8">العمل الجماعي والتواصل وإدارة موارد الأزمات</p>
                  <p class="text-lg text-gray-500">هذا الفصل سيتم إضافته قريباً</p>
                  <a href="/" class="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                      العودة للصفحة الرئيسية
                  </a>
              </div>
          </div>
      </body>
      </html>
    `)
  }
  
  // Check if chapter is available
  if (!availableChapters.includes(chapterId)) {
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
              <h1 class="text-3xl font-bold mb-4">الفصل غير موجود</h1>
              <a href="/" class="text-blue-600 hover:underline">العودة للصفحة الرئيسية</a>
          </div>
      </body>
      </html>
    `)
  }
  
  // Map chapter IDs to filenames
  const chapterFiles: { [key: number | string]: string } = {
    'copyright': 'حقوق_الطبع_والنشر.html',
    'foreword-ammar': 'تقديم_د_عمار_ابو_الصبح.html',
    'foreword-sami': 'تقديم_د_سامي_زايد.html',
    'contents': 'جدول_المحتويات.html',
    0: 'تنسيق مقدمة كتاب السلامة والجودة في التخدير.html',
    'min-ramad': 'من_رماد_الذاكرة.html',
    1: 'الفصل_الأول_السلامة_في_التخدير (1).html',
    2: 'الفصل_الثاني_المفاهيم_والنماذج.html',
    3: 'الفصل_الثالث_العوامل_البشرية.html',
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
    32: 'الفصل 32 - استدامة التميز في سلامة وجودة التخدير.html'
  }
  
  const filename = chapterFiles[chapterId]
  
  // Return iframe viewer - using direct file path
  return c.html(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>دليل السلامة والجودة في التخدير - الفصل ${chapterId}</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          .header {
            background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
            color: white;
            padding: 1rem;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .back-button {
            display: inline-block;
            background: white;
            color: #1e40af;
            padding: 0.5rem 1.5rem;
            border-radius: 25px;
            text-decoration: none;
            margin: 0.5rem;
            font-weight: bold;
          }
          .back-button:hover {
            background: #f0f0f0;
          }
          iframe {
            width: 100%;
            height: calc(100vh - 120px);
            border: none;
          }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>دليل السلامة والجودة في التخدير</h1>
            <a href="/" class="back-button">← العودة للصفحة الرئيسية</a>
        </div>
        <iframe src="/chapters/${encodeURIComponent(filename)}"></iframe>
    </body>
    </html>
  `)
})

export default app
