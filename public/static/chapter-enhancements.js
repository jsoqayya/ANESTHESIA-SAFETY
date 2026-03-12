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
            background: #f9fafb;
            padding: 3rem 2rem;
            margin-top: 3rem;
            border-top: 4px solid #1e3a8a;
        }

        .comments-container {
            max-width: 860px;
            margin: 0 auto;
            background: #ffffff;
            padding: 2.5rem 2.5rem 2rem;
            border-radius: 8px;
            border: 1px solid #bfdbfe;
            box-shadow: 0 4px 15px rgba(30, 58, 138, 0.08);
        }

        .comments-header-bar {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background-color: #1e3a8a;
            color: #ffffff;
            padding: 0.9rem 1.5rem;
            border-radius: 6px;
            margin-bottom: 1.5rem;
        }

        .comments-header-bar i {
            font-size: 1.3rem;
        }

        .comments-title {
            font-family: 'Noto Kufi Arabic', sans-serif;
            font-size: 1.25rem;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
            text-align: right;
        }

        .comments-subtitle {
            text-align: right;
            color: #6b7280;
            font-family: 'Noto Kufi Arabic', sans-serif;
            font-size: 1rem;
            margin-bottom: 1.75rem;
            padding-right: 0.25rem;
            border-right: 4px solid #22c55e;
            padding-right: 0.75rem;
        }

        .comment-form {
            margin-bottom: 2.5rem;
        }

        .form-group {
            margin-bottom: 1.25rem;
        }

        .form-label {
            display: block;
            font-family: 'Noto Kufi Arabic', sans-serif;
            font-weight: 700;
            color: #1e3a8a;
            margin-bottom: 0.4rem;
            font-size: 0.95rem;
        }

        .form-input,
        .form-textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1.5px solid #bfdbfe;
            border-radius: 6px;
            font-size: 1rem;
            font-family: 'Noto Kufi Arabic', sans-serif;
            color: #1f2937;
            background-color: #eff6ff;
            transition: all 0.25s ease;
            box-sizing: border-box;
            direction: rtl;
        }

        .form-input:focus,
        .form-textarea:focus {
            outline: none;
            border-color: #2563eb;
            background-color: #ffffff;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .form-textarea {
            min-height: 130px;
            resize: vertical;
        }

        .submit-btn {
            background-color: #1e3a8a;
            color: white;
            border: none;
            padding: 0.75rem 2.5rem;
            font-size: 1rem;
            font-weight: 700;
            font-family: 'Noto Kufi Arabic', sans-serif;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.25s ease;
            display: block;
            margin: 0 auto;
            letter-spacing: 0.01em;
        }

        .submit-btn:hover {
            background-color: #1e40af;
            transform: translateY(-2px);
            box-shadow: 0 6px 18px rgba(30, 58, 138, 0.25);
        }

        .comments-list {
            margin-top: 2rem;
            border-top: 2px solid #e5e7eb;
            padding-top: 1.5rem;
        }

        .comments-list-title {
            font-family: 'Noto Kufi Arabic', sans-serif;
            font-size: 1rem;
            font-weight: 700;
            color: #374151;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .comment-item {
            background: #f0fdf4;
            padding: 1.25rem 1.25rem 1.25rem 1rem;
            border-radius: 6px;
            margin-bottom: 1rem;
            border-right: 5px solid #22c55e;
            border: 1px solid #bbf7d0;
            border-right: 5px solid #22c55e;
            transition: box-shadow 0.2s ease;
        }

        .comment-item:hover {
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
        }

        .comment-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.6rem;
        }

        .comment-author {
            font-family: 'Noto Kufi Arabic', sans-serif;
            font-weight: 700;
            color: #16a34a;
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }

        .comment-date {
            color: #9ca3af;
            font-family: 'Noto Kufi Arabic', sans-serif;
            font-size: 0.82rem;
        }

        .comment-text {
            color: #1f2937;
            line-height: 1.8;
            font-family: 'Noto Kufi Arabic', sans-serif;
            font-size: 1rem;
        }

        .no-comments {
            text-align: center;
            color: #9ca3af;
            font-family: 'Noto Kufi Arabic', sans-serif;
            font-size: 1rem;
            padding: 1.5rem;
            background: #f9fafb;
            border-radius: 6px;
            border: 1px dashed #d1d5db;
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
                padding: 1.5rem 1.25rem;
            }

            .comments-title {
                font-size: 1.1rem;
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

                    <div class="comments-header-bar">
                        <i class="fas fa-comments"></i>
                        <h2 class="comments-title">شاركنا رأيك</h2>
                    </div>

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
                            <i class="fas fa-paper-plane"></i>&nbsp; شارك رأيك
                        </button>
                    </form>

                    <div class="comments-list" id="commentsList">
                        <p class="comments-list-title">
                            <i class="fas fa-list-ul"></i> التعليقات السابقة
                        </p>
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
