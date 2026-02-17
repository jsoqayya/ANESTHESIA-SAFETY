#!/bin/bash

# سكريبت لإضافة قسم التعليقات وشريط التنقل لجميع الفصول

cd /home/user/webapp/public/chapters

# قائمة الفصول مع أرقامها
declare -A chapter_map=(
    ["من_رماد_الذاكرة.html"]="-1"
    ["تنسيق مقدمة كتاب السلامة والجودة في التخدير.html"]="0"
    ["الفصل_الأول_السلامة_في_التخدير (1).html"]="1"
    ["الفصل_الثاني_المفاهيم_والنماذج.html"]="2"
    ["الفصل_الثالث_العوامل_البشرية.html"]="3"
    ["الفصل_الرابع_العمل_الجماعي.html"]="4"
    ["الفصل_الخامس_إدارة_الجودة.html"]="5"
    ["الفصل_السادس_التحسين_المستمر.html"]="6"
    ["الفصل_السابع_قياس_في_التخدير.html"]="7"
    ["الفصل_الثامن_الحوكمة_السريرية.html"]="8"
    ["الفصل_التاسع_الابلاغ_عن_الحوادث.html"]="9"
    ["الفصل_العاشر_تصميم_الموثوقية.html"]="10"
    ["الفصل 11 - إدارة المخاطر والرعاية ذات الموثوقية.html"]="11"
    ["الفصل 12 - التحضير لحالات الطوارئ.html"]="12"
    ["الفصل 13 - الإجهاد المرضي من المخدر.html"]="13"
    ["الفصل_الرابع_عشر_قوائم_التحقق.html"]="14"
    ["الفصل_الخامس_عشر_السلامة_قبل_العملية (1).html"]="15"
    ["الفصل 16 - السلامة أثناء العملية المراقبة وأمان مجرى الهواء.html"]="16"
    ["الفصل 17 - سلامة الأدوية في التخدير.html"]="17"
    ["الفصل 18 - سلامة المعدات والمراقبة.html"]="18"
    ["الفصل 19 - السلامة أثناء العمليات الوقاية من آليات الضرر الشائعة.html"]="19"
    ["الفصل 20 - سلامة التخدير الناحي والاستعداد لـ LAST.html"]="20"
    ["الفصل 21 - سلامة التهدئة من الخفيفة إلى العميقة.html"]="21"
    ["الفصل 22 - التخدير خارج غرفة العمليات.html"]="22"
    ["الفصل 23 - سلامة وحدة الإفاقة والوقاية من مضاعفات ما بعد العملية.html"]="23"
    ["الفصل 24 - التميز في التسليم نقل المرضى (1).html"]="24"
    ["الفصل 25 - تخدير التوليد واستراتيجيات السلامة للأم والجنين.html"]="25"
    ["الفصل 26 - سلامة تخدير الأطفال وحديثي الولادة.html"]="26"
    ["الفصل 27 - تخدير المرضى كبار السن وضمان جودة الرعاية.html"]="27"
    ["الفصل 28 - السلامة في حالات القلب والأوعية الدموية.html"]="28"
    ["الفصل 29 - سلامة تخدير الصدمات والطوارئ.html"]="29"
    ["الفصل 30 - واجهات العناية المركزة والرعاية الحرجة.html"]="30"
    ["الفصل 31 - علم التنفيذ لمشاريع السلامة.html"]="31"
    ["الفصل 32 - استدامة التميز في سلامة وجودة التخدير.html"]="32"
)

# الكود HTML الذي سيُضاف
read -r -d '' COMMENTS_HTML << 'EOF'

<!-- قسم التعليقات -->
<section style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 4rem 2rem; margin-top: 4rem; border-top: 5px solid #667eea;">
    <div style="max-width: 900px; margin: 0 auto; background: white; padding: 3rem; border-radius: 20px; box-shadow: 0 15px 40px rgba(0,0,0,0.1);">
        <h2 style="font-family: 'Amiri', serif; font-size: 2.5rem; color: #2c3e50; margin-bottom: 0.5rem; text-align: center;">
            <i class="fas fa-comments"></i>
            أضف قيمة للموضوع بمشاركة رأيك 💭
        </h2>
        <p style="text-align: center; color: #7f8c8d; font-size: 1.2rem; margin-bottom: 2rem;">
            شاركنا تجربتك أو استفسارك أو ملاحظتك حول هذا الفصل
        </p>
        
        <form id="commentForm" style="margin-bottom: 3rem;">
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 0.5rem; font-size: 1.1rem;">الاسم (اختياري)</label>
                <input type="text" id="commentName" placeholder="أدخل اسمك (أو اترك الحقل فارغاً)" maxlength="50" style="width: 100%; padding: 1rem; border: 2px solid #e0e0e0; border-radius: 10px; font-family: 'Cairo', sans-serif; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; font-weight: 600; color: #2c3e50; margin-bottom: 0.5rem; font-size: 1.1rem;">
                    التعليق <span style="color: #e74c3c;">*</span>
                </label>
                <textarea id="commentText" placeholder="شاركنا رأيك أو تجربتك أو أي ملاحظات مفيدة..." required maxlength="1000" style="width: 100%; min-height: 150px; padding: 1rem; border: 2px solid #e0e0e0; border-radius: 10px; font-family: 'Cairo', sans-serif; font-size: 1rem; resize: vertical;"></textarea>
            </div>
            
            <button type="submit" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1rem 3rem; border: none; border-radius: 50px; font-size: 1.2rem; font-weight: 600; cursor: pointer; box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4); display: block; margin: 0 auto;">
                <i class="fas fa-paper-plane"></i>
                شارك رأيك
            </button>
        </form>
        
        <div>
            <h3 style="font-size: 1.8rem; color: #2c3e50; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid #e0e0e0;">
                <i class="fas fa-list"></i>
                التعليقات السابقة
            </h3>
            <div id="commentsList"></div>
        </div>
    </div>
</section>

<!-- شريط التنقل السفلي -->
<div style="position: fixed; bottom: 0; left: 0; right: 0; background: white; box-shadow: 0 -5px 20px rgba(0,0,0,0.1); padding: 1rem 2rem; z-index: 1000; border-top: 3px solid #667eea;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
        <a href="/chapter/PREV_ID" id="prevBtn" style="flex: 1; padding: 0.9rem 1.5rem; border: none; border-radius: 10px; font-family: 'Cairo', sans-serif; font-size: 1.1rem; font-weight: 600; cursor: pointer; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); color: white;">
            <i class="fas fa-arrow-right"></i>
            <span>الفصل السابق</span>
        </a>
        
        <a href="/" style="flex: 1; padding: 0.9rem 1.5rem; border: none; border-radius: 10px; font-family: 'Cairo', sans-serif; font-size: 1.1rem; font-weight: 600; cursor: pointer; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%); color: white;">
            <i class="fas fa-home"></i>
            <span>الرئيسية</span>
        </a>
        
        <a href="/chapter/NEXT_ID" id="nextBtn" style="flex: 1; padding: 0.9rem 1.5rem; border: none; border-radius: 10px; font-family: 'Cairo', sans-serif; font-size: 1.1rem; font-weight: 600; cursor: pointer; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%); color: white;">
            <span>الفصل التالي</span>
            <i class="fas fa-arrow-left"></i>
        </a>
    </div>
</div>

<!-- JavaScript للتعليقات -->
<script>
(function() {
    const CHAPTER_ID = 'CURRENT_ID';
    
    // تحميل التعليقات
    function loadComments() {
        const stored = localStorage.getItem('comments_chapter_' + CHAPTER_ID);
        return stored ? JSON.parse(stored) : [];
    }
    
    // حفظ التعليقات
    function saveComments(comments) {
        localStorage.setItem('comments_chapter_' + CHAPTER_ID, JSON.stringify(comments));
    }
    
    // تنسيق التاريخ
    function formatDate(date) {
        const d = new Date(date);
        const now = new Date();
        const diff = Math.floor((now - d) / 1000);
        
        if (diff < 60) return 'منذ لحظات';
        if (diff < 3600) return 'منذ ' + Math.floor(diff / 60) + ' دقيقة';
        if (diff < 86400) return 'منذ ' + Math.floor(diff / 3600) + ' ساعة';
        
        return d.toLocaleDateString('ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    
    // عرض التعليقات
    function renderComments() {
        const comments = loadComments();
        const container = document.getElementById('commentsList');
        
        if (comments.length === 0) {
            container.innerHTML = '<div style="text-align: center; color: #95a5a6; font-size: 1.2rem; padding: 2rem;">لا توجد تعليقات حتى الآن. كن أول من يشارك رأيه! 💭</div>';
            return;
        }
        
        container.innerHTML = comments.map(c => 
            '<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 15px; margin-bottom: 1rem; border-right: 4px solid #667eea;">' +
            '<div style="display: flex; justify-content: space-between; margin-bottom: 0.8rem;">' +
            '<span style="font-weight: 600; color: #667eea; font-size: 1.1rem;">' + c.author + '</span>' +
            '<span style="color: #95a5a6; font-size: 0.9rem;">' + formatDate(c.date) + '</span>' +
            '</div>' +
            '<div style="color: #2c3e50; line-height: 1.8; font-size: 1.05rem;">' + c.text + '</div>' +
            '</div>'
        ).join('');
    }
    
    // إضافة تعليق
    document.getElementById('commentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('commentName').value.trim() || 'قارئ';
        const text = document.getElementById('commentText').value.trim();
        
        if (!text) {
            alert('الرجاء كتابة تعليق قبل الإرسال');
            return;
        }
        
        const comments = loadComments();
        comments.unshift({
            id: Date.now(),
            author: name,
            text: text,
            date: new Date().toISOString()
        });
        
        saveComments(comments);
        
        document.getElementById('commentName').value = '';
        document.getElementById('commentText').value = '';
        
        renderComments();
        alert('✅ تم إضافة تعليقك بنجاح!');
    });
    
    // تعطيل الأزرار حسب الموقع
    const currentId = parseInt(CHAPTER_ID);
    if (currentId <= -1) {
        document.getElementById('prevBtn').style.opacity = '0.4';
        document.getElementById('prevBtn').style.pointerEvents = 'none';
    }
    if (currentId >= 32) {
        document.getElementById('nextBtn').style.opacity = '0.4';
        document.getElementById('nextBtn').style.pointerEvents = 'none';
    }
    
    // عرض التعليقات عند التحميل
    renderComments();
    
    // إضافة مسافة في نهاية الصفحة
    document.body.style.paddingBottom = '100px';
})();
</script>
EOF

echo "🚀 بدء معالجة الملفات..."

# معالجة كل ملف
for file in "${!chapter_map[@]}"; do
    if [ -f "$file" ]; then
        chapter_id="${chapter_map[$file]}"
        prev_id=$((chapter_id - 1))
        next_id=$((chapter_id + 1))
        
        echo "⚙️  معالجة: $file (الفصل $chapter_id)"
        
        # نسخ احتياطية
        cp "$file" "$file.backup"
        
        # استبدال القيم
        modified_html="${COMMENTS_HTML//CURRENT_ID/$chapter_id}"
        modified_html="${modified_html//PREV_ID/$prev_id}"
        modified_html="${modified_html//NEXT_ID/$next_id}"
        
        # التحقق من وجود القسم مسبقاً
        if grep -q "قسم التعليقات" "$file"; then
            echo "   ⏭️  تم تخطي (القسم موجود مسبقاً)"
            continue
        fi
        
        # إضافة القسم قبل </body>
        if grep -q "</body>" "$file"; then
            # استخدام ملف مؤقت
            temp_file=$(mktemp)
            awk -v content="$modified_html" '
                /<\/body>/ { print content }
                { print }
            ' "$file" > "$temp_file"
            mv "$temp_file" "$file"
            echo "   ✅ تمت الإضافة بنجاح"
        else
            echo "   ⚠️  تحذير: لم يتم العثور على </body>"
        fi
    fi
done

echo ""
echo "✅ تمت معالجة جميع الملفات!"
echo "📊 عدد الملفات: ${#chapter_map[@]}"
