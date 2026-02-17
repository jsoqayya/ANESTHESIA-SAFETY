# ⚡ دليل البدء السريع
## Quick Start Guide - 5 Minutes Setup

---

## 🎯 **الهدف**
نشر موقع "دليل السلامة في التخدير" على النطاق المخصص:  
**www.AnesthesiaSafetyGuideline.com**

---

## ⏱️ **3 خطوات فقط للنشر**

### **1️⃣ رفع المشروع إلى GitHub** (دقيقة واحدة)

```bash
# في مجلد المشروع
git remote add origin https://github.com/YOUR_USERNAME/anesthesia-safety-guideline.git
git push -u origin main
```

### **2️⃣ ربط مع Cloudflare Pages** (دقيقتان)

1. اذهب إلى: https://dash.cloudflare.com
2. اختر: **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. اختر repository: `anesthesia-safety-guideline`
4. إعدادات:
   - Build output directory: `public`
   - اترك Build command فارغاً
5. اضغط **Save and Deploy**

✅ موقعك الآن متاح على: `https://anesthesia-safety-guideline.pages.dev`

### **3️⃣ ربط النطاق المخصص** (دقيقتان)

**بعد شراء النطاق:**

1. في Cloudflare: **Add a Site** → أدخل النطاق
2. غيّر Nameservers في موقع شراء النطاق إلى:
   ```
   nina.ns.cloudflare.com
   stan.ns.cloudflare.com
   ```
3. في مشروع Pages: **Custom domains** → أضف `www.anesthesiasafetyguideline.com`

✅ انتظر 24 ساعة لانتشار DNS

---

## 🛒 **شراء النطاق**

| الموقع | السعر | الوقت |
|--------|------|------|
| [Namecheap](https://www.namecheap.com) | $8-12/سنة | 5 دقائق |
| [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) | ~$8.57/سنة | 5 دقائق |

---

## ✅ **اختبار سريع**

بعد النشر، اختبر:
- ✅ الصفحة الرئيسية: `/`
- ✅ صفحة الفصول: `/chapters`
- ✅ فصل تجريبي: `/chapter/1`

---

## 📱 **الأوامر المفيدة**

```bash
# تحديث المشروع
git add .
git commit -m "تحديث"
git push

# Cloudflare سيقوم بالنشر تلقائياً خلال دقائق
```

---

## 🆘 **مشاكل؟**

| المشكلة | الحل |
|---------|------|
| 404 Error | تأكد من Build output = `public` |
| DNS لا يعمل | انتظر 24 ساعة |
| SSL خطأ | انتظر 15 دقيقة |

**للتفاصيل الكاملة**: راجع `PRODUCTION_GUIDE.md`

---

**🎉 موقعك جاهز في أقل من 5 دقائق!**
