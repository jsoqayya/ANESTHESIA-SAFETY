# 🚀 دليل النشر على النطاق المخصص
## Deployment Guide for Custom Domain

---

## 🌐 **النطاق المخصص**
**Domain**: www.AnesthesiaSafetyGuideline.com

---

## 📋 **خطوات النشر على Cloudflare Pages**

### **الخطوة 1: إعداد حساب Cloudflare**

1. قم بإنشاء حساب على [Cloudflare](https://dash.cloudflare.com/sign-up)
2. سجل الدخول إلى Dashboard

### **الخطوة 2: رفع المشروع إلى GitHub**

```bash
# إنشاء repository جديد على GitHub
# ثم قم بتنفيذ الأوامر التالية:

cd /home/user/webapp

# إعداد Git
git init
git add .
git commit -m "Initial commit: Anesthesia Safety Guideline"

# ربط مع GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/anesthesia-safety-guideline.git
git branch -M main
git push -u origin main
```

### **الخطوة 3: إنشاء مشروع Cloudflare Pages**

1. اذهب إلى [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. اضغط على "Create a project"
3. اختر "Connect to Git"
4. اختر GitHub repository الذي أنشأته
5. قم بتكوين الإعدادات:
   - **Project name**: `anesthesia-safety-guideline`
   - **Production branch**: `main`
   - **Build command**: اتركه فارغاً (المشروع جاهز بدون build)
   - **Build output directory**: `public`

6. اضغط "Save and Deploy"

### **الخطوة 4: شراء وإعداد النطاق المخصص**

#### **أ. شراء النطاق**
يمكنك شراء النطاق من:
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)

النطاق المقترح: **AnesthesiaSafetyGuideline.com**

#### **ب. ربط النطاق بـ Cloudflare**

إذا اشتريت النطاق من خارج Cloudflare:

1. في Dashboard الخاص بـ Cloudflare، اذهب إلى **Websites**
2. اضغط **Add a Site**
3. أدخل النطاق: `AnesthesiaSafetyGuideline.com`
4. اختر الخطة المجانية (Free Plan)
5. سيعطيك Cloudflare nameservers، مثل:
   ```
   nina.ns.cloudflare.com
   stan.ns.cloudflare.com
   ```
6. اذهب إلى موقع شراء النطاق وقم بتحديث الـ nameservers

#### **ج. ربط النطاق بـ Cloudflare Pages**

1. اذهب إلى مشروع Pages الخاص بك
2. اضغط على تبويب **Custom domains**
3. اضغط **Set up a custom domain**
4. أدخل النطاق: `www.AnesthesiaSafetyGuideline.com`
5. اضغط **Continue**
6. Cloudflare سيقوم تلقائياً بإعداد DNS records
7. أضف أيضاً النطاق الأساسي: `AnesthesiaSafetyGuideline.com`

### **الخطوة 5: التحقق من النشر**

بعد الانتهاء من الإعدادات (قد يستغرق بضع دقائق):

1. افتح المتصفح
2. اذهب إلى: https://www.AnesthesiaSafetyGuideline.com
3. تأكد من:
   - ✅ الصفحة الرئيسية تعمل
   - ✅ روابط الفصول تعمل
   - ✅ التصميم Responsive
   - ✅ الأزرار تعمل بشكل صحيح

---

## 🔧 **الإعدادات الإضافية**

### **SSL/HTTPS**
- Cloudflare يوفر SSL مجاناً تلقائياً
- تأكد من تفعيل "Always Use HTTPS" في إعدادات SSL/TLS

### **Performance**
في إعدادات Cloudflare:
- فعّل **Auto Minify** (HTML, CSS, JS)
- فعّل **Brotli compression**
- ضبط **Caching Level** على Standard

### **Security**
- فعّل **Bot Fight Mode**
- ضبط **Security Level** على Medium
- فعّل **Email Address Obfuscation**

---

## 📱 **اختبار على الأجهزة المختلفة**

تأكد من اختبار الموقع على:
- 💻 Desktop (Chrome, Firefox, Safari, Edge)
- 📱 Mobile (iOS Safari, Android Chrome)
- 📲 Tablet (iPad, Android tablets)

---

## 🔄 **التحديثات المستقبلية**

لتحديث المشروع:

```bash
# إجراء التعديلات المطلوبة
# ثم commit & push

cd /home/user/webapp
git add .
git commit -m "وصف التحديث"
git push origin main
```

Cloudflare Pages سيقوم تلقائياً بإعادة النشر عند push إلى main branch.

---

## 💰 **التكاليف المتوقعة**

- **Cloudflare Pages**: مجاناً (Free Plan كافي)
- **النطاق (Domain)**: ~$10-15 سنوياً
- **SSL Certificate**: مجاناً (يوفره Cloudflare)
- **Bandwidth**: مجاناً (Unlimited على Cloudflare)

**إجمالي التكلفة السنوية**: ~$10-15 فقط لشراء النطاق

---

## 🆘 **المساعدة والدعم**

### **مشاكل شائعة وحلولها**

#### المشكلة: النطاق لا يعمل بعد الربط
**الحل**: انتظر 24-48 ساعة لانتشار DNS عالمياً

#### المشكلة: الصفحات لا تظهر بشكل صحيح
**الحل**: تأكد من أن Build output directory مضبوط على `public`

#### المشكلة: SSL Certificate لا يعمل
**الحل**: 
- انتظر بضع دقائق لإصدار Certificate
- تأكد من SSL Mode: Full أو Full (strict)

---

## 📞 **روابط مفيدة**

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Custom Domains Guide](https://developers.cloudflare.com/pages/platform/custom-domains/)
- [Cloudflare Community](https://community.cloudflare.com/)

---

## ✅ **Checklist قبل النشر**

- [ ] Repository على GitHub جاهز
- [ ] النطاق تم شراؤه
- [ ] Nameservers تم تحديثها
- [ ] Cloudflare Pages project تم إنشاؤه
- [ ] Custom domain تم ربطه
- [ ] SSL Certificate نشط
- [ ] الموقع يعمل على النطاق المخصص
- [ ] تم الاختبار على أجهزة مختلفة

---

**آخر تحديث**: 17 فبراير 2026  
**الإصدار**: 1.0.0  
**الحالة**: ✅ جاهز للنشر

---

🎉 **مبروك! موقعك الآن على نطاق مخصص احترافي!**
