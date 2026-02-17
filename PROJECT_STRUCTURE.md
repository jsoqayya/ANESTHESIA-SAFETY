# 📂 بنية المشروع
## Project Structure

---

## 🗂️ **نظرة عامة على الملفات**

```
webapp/
├── 📁 public/                          # Static files (served directly)
│   ├── 📁 chapters/                    # HTML chapter files (32 chapters)
│   │   ├── chapter-1.html              # الفصل الأول
│   │   ├── chapter-2.html              # الفصل الثاني
│   │   ├── ...                         # الفصول 3-32
│   │   ├── copyright.html              # حقوق النشر
│   │   ├── foreword-ammar.html         # تقديم د. عمار
│   │   ├── foreword-sami.html          # تقديم د. سامي
│   │   ├── contents.html               # جدول المحتويات
│   │   ├── preface.html                # المقدمة
│   │   └── min-ramad.html              # من رماد الذاكرة
│   │
│   ├── 📁 static/                      # CSS & JavaScript
│   │   ├── styles.css                  # Global styles
│   │   └── chapter-enhancements.js     # Navigation enhancements
│   │
│   ├── 📁 images/                      # Images and covers
│   │   ├── cover-book.jpg              # Book cover
│   │   ├── author.jpg                  # Author photo
│   │   └── ...                         # Other images
│   │
│   ├── about.html                      # About page
│   ├── contents.html                   # Main table of contents
│   └── responsive-test.html            # Responsive testing page
│
├── 📁 functions/                       # Cloudflare Pages Functions
│   └── [[path]].js                     # Dynamic routing handler
│
├── 📁 src/                             # Source files (for future builds)
│   ├── index.tsx                       # Main entry point
│   └── renderer.tsx                    # Renderer component
│
├── 📄 server.cjs                       # Express.js server (development)
├── 📄 home-page.html                   # Homepage
├── 📄 ecosystem.config.cjs             # PM2 configuration
│
├── 📄 package.json                     # Node.js dependencies
├── 📄 tsconfig.json                    # TypeScript configuration
├── 📄 vite.config.ts                   # Vite configuration
│
├── 📄 wrangler.toml                    # Cloudflare Pages config
├── 📄 wrangler.jsonc                   # Wrangler JSON config
├── 📄 _headers                         # Custom HTTP headers
│
├── 📄 README.md                        # Main documentation
├── 📄 DEPLOYMENT.md                    # Deployment guide (basic)
├── 📄 PRODUCTION_GUIDE.md              # Complete production guide
├── 📄 QUICKSTART.md                    # 5-minute quick start
├── 📄 ARABIC_GUIDE.md                  # Arabic deployment guide
├── 📄 FINAL_REPORT.md                  # Project final report
│
└── 📄 .gitignore                       # Git ignore rules
```

---

## 📖 **وصف المجلدات الرئيسية**

### **1. public/ - الملفات الثابتة**
هذا المجلد يحتوي على جميع الملفات التي سيتم نشرها مباشرة.

#### **public/chapters/**
- يحتوي على **32 فصل** بصيغة HTML
- 6 صفحات تمهيدية (حقوق النشر، تقديمات، جدول المحتويات، المقدمة، من رماد الذاكرة)
- كل ملف HTML مستقل وكامل

#### **public/static/**
- `styles.css`: التنسيقات العامة للموقع
- `chapter-enhancements.js`: JavaScript لتحسين التنقل

#### **public/images/**
- صور الكتاب والغلاف
- صور المؤلفين
- رسوم توضيحية

### **2. functions/ - Cloudflare Pages Functions**
- `[[path]].js`: معالج الطلبات الديناميكي
- يقوم بـ:
  - توجيه الطلبات إلى الملفات الصحيحة
  - إضافة أزرار التنقل ديناميكياً
  - معالجة الروابط الخاصة

### **3. Documentation Files**
- `README.md`: التوثيق الرئيسي
- `QUICKSTART.md`: دليل البدء السريع
- `PRODUCTION_GUIDE.md`: دليل الإنتاج الكامل
- `ARABIC_GUIDE.md`: دليل بالعربية
- `DEPLOYMENT.md`: تعليمات النشر الأساسية

---

## 🚀 **كيف يعمل المشروع**

### **في بيئة التطوير (Development):**
1. يشغل `server.cjs` باستخدام Express.js
2. يقرأ الملفات من `public/`
3. يضيف أزرار التنقل ديناميكياً
4. يخدم الملفات على المنفذ 3000

```bash
# تشغيل في التطوير
pm2 start ecosystem.config.cjs
```

### **في بيئة الإنتاج (Production - Cloudflare Pages):**
1. يتم نشر مجلد `public/` مباشرة
2. `functions/[[path]].js` يعالج الطلبات
3. Cloudflare CDN يوزع الملفات عالمياً
4. SSL تلقائي من Cloudflare

```bash
# نشر على Cloudflare Pages
wrangler pages deploy public --project-name anesthesia-safety-guideline
```

---

## 🔗 **نظام الروابط (Routing)**

### **الروابط الأساسية:**

| الرابط | الملف | الوصف |
|--------|------|-------|
| `/` | `home-page.html` | الصفحة الرئيسية |
| `/chapters` | `contents.html` | قائمة الفصول |
| `/chapter/1` | `chapters/chapter-1.html` | الفصل الأول |
| `/chapter/contents` | `chapters/contents.html` | جدول المحتويات |
| `/chapter/0` | `chapters/preface.html` | المقدمة |

### **الفصول الخاصة:**

| ID | الملف | الوصف |
|----|------|-------|
| `copyright` | `copyright.html` | حقوق النشر |
| `foreword-ammar` | `foreword-ammar.html` | تقديم د. عمار |
| `foreword-sami` | `foreword-sami.html` | تقديم د. سامي |
| `min-ramad` | `min-ramad.html` | من رماد الذاكرة |

---

## 🎨 **التصميم والواجهة**

### **الخطوط المستخدمة:**
- **Amiri**: للعناوين الرئيسية
- **Cairo**: للنصوص العامة
- **Noto Kufi Arabic**: للنصوص الفرعية

### **الألوان الأساسية:**
- **Primary**: `#1e3c72` (أزرق داكن)
- **Secondary**: `#2a5298` (أزرق متوسط)
- **Accent**: `#667eea` (بنفسجي)

### **Responsive Breakpoints:**
```css
/* Mobile */
@media (max-width: 768px) { ... }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { ... }

/* Desktop */
@media (min-width: 1025px) { ... }
```

---

## 📦 **Dependencies**

### **Production Dependencies:**
```json
{
  "express": "^5.2.1",  // Web server
  "hono": "^4.11.7"     // Alternative framework
}
```

### **Development Dependencies:**
```json
{
  "@hono/vite-build": "^1.2.0",
  "@hono/vite-dev-server": "^0.18.2",
  "vite": "^6.3.5",
  "wrangler": "^4.4.0"  // Cloudflare CLI
}
```

---

## 🔧 **Configuration Files**

### **wrangler.toml**
إعدادات Cloudflare Pages:
- اسم المشروع
- مجلد الإنتاج (`public`)
- إعدادات البيئة

### **ecosystem.config.cjs**
إعدادات PM2 للتطوير المحلي:
- اسم التطبيق: `webapp`
- السكريبت: `server.cjs`
- المنفذ: 3000

### **_headers**
إعدادات HTTP Headers:
- Security headers
- Cache control
- CORS policies

---

## 🎯 **ملفات مهمة للنشر**

### **يجب وجودها:**
✅ `public/` - المجلد الرئيسي  
✅ `functions/` - للتوجيه الديناميكي  
✅ `wrangler.toml` - إعدادات Cloudflare  
✅ `_headers` - إعدادات الأمان  
✅ `package.json` - معلومات المشروع  

### **اختيارية (للتطوير فقط):**
⚪ `server.cjs` - للتطوير المحلي  
⚪ `ecosystem.config.cjs` - لـ PM2  
⚪ `node_modules/` - تُستثنى في `.gitignore`  

---

## 📊 **إحصائيات المشروع**

| المقياس | العدد |
|---------|------|
| إجمالي الملفات | ~95 ملف |
| ملفات HTML | 38 ملف |
| الفصول الرئيسية | 32 فصل |
| الصفحات التمهيدية | 6 صفحات |
| ملفات الصور | ~15 صورة |
| ملفات CSS | 1 ملف رئيسي |
| ملفات JS | 2 ملف |
| حجم المشروع | ~28 MB |

---

## 🔄 **Git Workflow**

### **Branches:**
- `main` - الفرع الرئيسي (للإنتاج)
- `production-deployment` - فرع التجهيز للنشر
- `development` - للتطوير المستقبلي

### **Commit Convention:**
```
feat: إضافة ميزة جديدة
fix: إصلاح خطأ
docs: تحديث التوثيق
style: تنسيق الكود
refactor: إعادة هيكلة
```

---

**آخر تحديث**: 17 فبراير 2026  
**الإصدار**: 2.0.0  
**الحالة**: ✅ موثّق بالكامل
