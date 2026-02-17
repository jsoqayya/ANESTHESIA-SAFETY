// ==================================================
// نظام التعليقات وشريط التنقل للفصول
// ==================================================

(function() {
    'use strict';

    // الحصول على معرف الفصل الحالي من URL
    const currentPath = window.location.pathname;
    
    // Don't run on special pages that have their own static navigation
    const specialPages = ['0', 'contents', 'min-ramad', 'copyright', 'foreword-ammar', 'foreword-sami'];
    const isSpecialPage = specialPages.some(page => currentPath.includes(`/chapter/${page}`));
    
    if (isSpecialPage) {
        console.log('Special page detected, skipping enhancements');
        return;
    }
    
    // Extract chapter ID (numeric only)
    const chapterMatch = currentPath.match(/\/chapter\/(\d+)/);
    if (!chapterMatch) {
        console.log('Not a numeric chapter page, skipping enhancements');
        return;
    }
    
    const chapterId = parseInt(chapterMatch[1]);
    console.log('Initializing chapter enhancements for chapter:', chapterId);

    // ==================================================
    // 1. إضافة CSS للتصميم
    // ==================================================
    const style = document.createElement('style');
    style.textContent = `
        /* قسم التعليقات */
        .comments-section {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 4rem 2rem;
            margin-top: 4rem;
            border-top: 5px solid #667eea;
        }

        .comments-container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .comments-title {
            font-family: 'Amiri', serif;
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 0.5rem;
            text-align: center;
        }

        .comments-subtitle {
            text-align: center;
            color: #7f8c8d;
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        .comment-form {
            margin-bottom: 3rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-label {
            display: block;
            font-weight: bold;
            color: #34495e;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
        }

        .form-input,
        .form-textarea {
            width: 100%;
            padding: 1rem;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 1rem;
            font-family: 'Tajawal', sans-serif;
            transition: all 0.3s ease;
            box-sizing: border-box;
        }

        .form-input:focus,
        .form-textarea:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-textarea {
            min-height: 150px;
            resize: vertical;
        }

        .submit-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 1rem 3rem;
            font-size: 1.2rem;
            font-weight: bold;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: block;
            margin: 0 auto;
        }

        .submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .comments-list {
            margin-top: 3rem;
        }

        .comment-item {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 15px;
            margin-bottom: 1.5rem;
            border-right: 5px solid #667eea;
            transition: all 0.3s ease;
        }

        .comment-item:hover {
            transform: translateX(-10px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .comment-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        .comment-author {
            font-weight: bold;
            color: #667eea;
            font-size: 1.1rem;
        }

        .comment-date {
            color: #95a5a6;
            font-size: 0.9rem;
        }

        .comment-text {
            color: #2c3e50;
            line-height: 1.8;
            font-size: 1.05rem;
        }

        .no-comments {
            text-align: center;
            color: #95a5a6;
            font-size: 1.2rem;
            padding: 2rem;
        }

        /* شريط التنقل السفلي الثابت */
        .fixed-bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            border-top: 3px solid #667eea;
            box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
            padding: 1rem 2rem;
            z-index: 1000;
        }

        .nav-buttons {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }

        .nav-btn {
            flex: 1;
            padding: 1rem 2rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            text-decoration: none;
            color: white;
        }

        .nav-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .nav-btn:not(:disabled):hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }

        .nav-btn.prev {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
        }

        .nav-btn.home {
            background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%);
        }

        .nav-btn.next {
            background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
        }

        /* تصميم متجاوب */
        @media (max-width: 768px) {
            .comments-container {
                padding: 2rem 1.5rem;
            }

            .comments-title {
                font-size: 2rem;
            }

            .nav-buttons {
                flex-direction: column;
            }

            .nav-btn {
                width: 100%;
            }

            .fixed-bottom-nav {
                padding: 0.5rem 1rem;
            }
        }

        /* تعديل المحتوى لإفساح المجال لشريط التنقل */
        body {
            padding-bottom: 100px;
        }
    `;
    document.head.appendChild(style);

    // ==================================================
    // 2. إنشاء قسم التعليقات
    // ==================================================
    function createCommentsSection() {
        // Don't show comments section for References chapter (34)
        if (parseInt(chapterId) === 34) {
            return '';
        }
        
        const commentsHTML = `
            <div class="comments-section">
                <div class="comments-container">
                    <h2 class="comments-title">
                        <i class="fas fa-comments"></i>
                        أضف قيمة للموضوع بمشاركة رأيك
                    </h2>
                    <p class="comments-subtitle">
                        شاركنا تجربتك أو استفسارك أو فائدة استخلصتها من هذا الفصل
                    </p>

                    <form class="comment-form" id="commentForm">
                        <div class="form-group">
                            <label class="form-label" for="commenterName">
                                <i class="fas fa-user"></i> الاسم (اختياري)
                            </label>
                            <input 
                                type="text" 
                                class="form-input" 
                                id="commenterName" 
                                placeholder="اسمك أو لقبك (سيظهر 'قارئ' إذا لم تدخل اسماً)"
                            >
                        </div>

                        <div class="form-group">
                            <label class="form-label" for="commentText">
                                <i class="fas fa-pen"></i> التعليق *
                            </label>
                            <textarea 
                                class="form-textarea" 
                                id="commentText" 
                                required
                                maxlength="1000"
                                placeholder="شارك رأيك أو تجربتك... (حتى 1000 حرف)"
                            ></textarea>
                        </div>

                        <button type="submit" class="submit-btn">
                            <i class="fas fa-paper-plane"></i> شارك رأيك
                        </button>
                    </form>

                    <div class="comments-list" id="commentsList">
                        <h3 style="text-align: center; color: #34495e; margin-bottom: 2rem;">
                            <i class="fas fa-list"></i> التعليقات السابقة
                        </h3>
                        <div id="commentsContainer"></div>
                    </div>
                </div>
            </div>
        `;

        return commentsHTML;
    }

    // ==================================================
    // 3. إنشاء شريط التنقل السفلي
    // ==================================================
    function createBottomNav() {
        const currentId = parseInt(chapterId);
        const prevId = currentId - 1;
        const nextId = currentId + 1;
        
        const prevDisabled = currentId <= -1 ? 'disabled' : '';
        // Disable next button for References chapter (34)
        const nextDisabled = currentId >= 34 ? 'disabled' : '';
        
        // For References chapter (34), don't show "Next" button at all
        const showNext = currentId < 34;
        
        const navHTML = `
            <div class="fixed-bottom-nav">
                <div class="nav-buttons">
                    <a href="/chapter/${prevId}" class="nav-btn prev" ${prevDisabled}>
                        <i class="fas fa-arrow-right"></i>
                        الفصل السابق
                    </a>
                    
                    <a href="/" class="nav-btn home">
                        <i class="fas fa-home"></i>
                        الرئيسية
                    </a>
                    
                    ${showNext ? `<a href="/chapter/${nextId}" class="nav-btn next" ${nextDisabled}>
                        الفصل التالي
                        <i class="fas fa-arrow-left"></i>
                    </a>` : ''}
                </div>
            </div>
        `;

        return navHTML;
    }

    // ==================================================
    // 4. إدراج العناصر في الصفحة
    // ==================================================
    function insertElements() {
        // البحث عن نهاية المحتوى (قبل </body>)
        const body = document.body;
        
        if (!body) {
            console.error('Body element not found!');
            return;
        }
        
        // إضافة قسم التعليقات في نهاية الصفحة
        const commentsSection = document.createElement('div');
        commentsSection.innerHTML = createCommentsSection().trim();
        const commentsElement = commentsSection.firstElementChild;
        if (commentsElement) {
            body.appendChild(commentsElement);
        }
        
        // إضافة شريط التنقل
        const navSection = document.createElement('div');
        navSection.innerHTML = createBottomNav().trim();
        const navElement = navSection.firstElementChild;
        if (navElement) {
            body.appendChild(navElement);
        }

        console.log('✅ Comments and navigation elements inserted successfully');
    }

    // ==================================================
    // 5. إدارة التعليقات (localStorage)
    // ==================================================
    function initializeComments() {
        const form = document.getElementById('commentForm');
        const commentsContainer = document.getElementById('commentsContainer');
        
        if (!form || !commentsContainer) {
            console.error('Form or container not found');
            return;
        }

        // مفتاح التخزين المحلي لكل فصل
        const storageKey = `comments_chapter_${chapterId}`;

        // تحميل التعليقات المحفوظة
        function loadComments() {
            const comments = JSON.parse(localStorage.getItem(storageKey) || '[]');
            
            if (comments.length === 0) {
                commentsContainer.innerHTML = `
                    <div class="no-comments">
                        <i class="fas fa-inbox"></i><br>
                        لا توجد تعليقات بعد. كن أول من يشارك!
                    </div>
                `;
                return;
            }

            commentsContainer.innerHTML = comments.map(comment => {
                const timeAgo = getTimeAgo(comment.date);
                return `
                    <div class="comment-item">
                        <div class="comment-header">
                            <span class="comment-author">
                                <i class="fas fa-user-circle"></i> ${comment.name || 'قارئ'}
                            </span>
                            <span class="comment-date">
                                <i class="fas fa-clock"></i> ${timeAgo}
                            </span>
                        </div>
                        <div class="comment-text">${escapeHtml(comment.text)}</div>
                    </div>
                `;
            }).reverse().join('');
        }

        // حفظ تعليق جديد
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('commenterName').value.trim();
            const text = document.getElementById('commentText').value.trim();
            
            if (!text) return;

            const comment = {
                name: name || 'قارئ',
                text: text,
                date: new Date().toISOString()
            };

            const comments = JSON.parse(localStorage.getItem(storageKey) || '[]');
            comments.push(comment);
            localStorage.setItem(storageKey, JSON.stringify(comments));

            // إعادة تحميل التعليقات
            loadComments();

            // مسح النموذج
            form.reset();

            // رسالة نجاح
            alert('✅ تم إضافة تعليقك بنجاح!');
        });

        // دالة مساعدة: حساب الوقت المنقضي
        function getTimeAgo(dateString) {
            const now = new Date();
            const date = new Date(dateString);
            const seconds = Math.floor((now - date) / 1000);

            if (seconds < 60) return 'منذ لحظات';
            if (seconds < 3600) return `منذ ${Math.floor(seconds / 60)} دقيقة`;
            if (seconds < 86400) return `منذ ${Math.floor(seconds / 3600)} ساعة`;
            if (seconds < 2592000) return `منذ ${Math.floor(seconds / 86400)} يوم`;
            return date.toLocaleDateString('ar-SA');
        }

        // دالة مساعدة: تنظيف HTML
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // تحميل التعليقات عند البدء
        loadComments();
    }

    // ==================================================
    // 6. تشغيل السكريبت عند تحميل الصفحة
    // ==================================================
    function init() {
        console.log('🚀 Initializing chapter enhancements...');
        insertElements();
        // الانتظار قليلاً لضمان إدراج العناصر
        setTimeout(function() {
            initializeComments();
            console.log('✅ Chapter enhancements initialized successfully!');
        }, 200);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // الصفحة محملة بالفعل، تنفيذ فوري
        init();
    }

    console.log('✅ Chapter enhancements script loaded');
})();
