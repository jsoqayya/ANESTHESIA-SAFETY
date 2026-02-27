// ==================================================
// نظام التعليقات للفصول - بدون شريط تنقل سفلي
// ==================================================

(function() {
    'use strict';

    const currentPath = window.location.pathname;
    
    const specialPages = ['0', 'contents', 'min-ramad', 'copyright', 'foreword-ammar', 'foreword-sami'];
    const isSpecialPage = specialPages.some(page => currentPath.includes(`/chapter/${page}`));
    
    if (isSpecialPage) {
        console.log('Special page detected, skipping enhancements');
        return;
    }
    
    const chapterMatch = currentPath.match(/\/chapter\/(\d+)/);
    if (!chapterMatch) {
        console.log('Not a numeric chapter page, skipping enhancements');
        return;
    }
    
    const chapterId = parseInt(chapterMatch[1]);
    console.log('Initializing chapter enhancements for chapter:', chapterId);

    // ==================================================
    // 1. CSS للتعليقات فقط - بدون fixed-bottom-nav
    // ==================================================
    const style = document.createElement('style');
    style.textContent = `
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

        .comment-form { margin-bottom: 3rem; }

        .form-group { margin-bottom: 1.5rem; }

        .form-label {
            display: block;
            font-weight: bold;
            color: #34495e;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
        }

        .form-input, .form-textarea {
            width: 100%;
            padding: 1rem;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 1rem;
            font-family: 'Tajawal', sans-serif;
            transition: all 0.3s ease;
            box-sizing: border-box;
        }

        .form-input:focus, .form-textarea:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-textarea { min-height: 150px; resize: vertical; }

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

        .comments-list { margin-top: 3rem; }

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

        .comment-author { font-weight: bold; color: #667eea; font-size: 1.1rem; }
        .comment-date { color: #95a5a6; font-size: 0.9rem; }

        .comment-text { color: #2c3e50; line-height: 1.8; font-size: 1.05rem; }

        .no-comments {
            text-align: center;
            color: #95a5a6;
            font-size: 1.2rem;
            padding: 2rem;
        }

        @media (max-width: 768px) {
            .comments-container { padding: 2rem 1.5rem; }
            .comments-title { font-size: 2rem; }
        }
    `;
    document.head.appendChild(style);

    // ==================================================
    // 2. قسم التعليقات
    // ==================================================
    function createCommentsSection() {
        if (parseInt(chapterId) === 34) return '';
        
        return `
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
                            <input type="text" class="form-input" id="commenterName"
                                placeholder="اسمك أو لقبك (سيظهر 'قارئ' إذا لم تدخل اسماً)">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="commentText">
                                <i class="fas fa-pen"></i> التعليق *
                            </label>
                            <textarea class="form-textarea" id="commentText" required
                                maxlength="1000"
                                placeholder="شارك رأيك أو تجربتك... (حتى 1000 حرف)"></textarea>
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
    }

    // ==================================================
    // 3. إدراج التعليقات فقط في الصفحة
    // ==================================================
    function insertElements() {
        const body = document.body;
        if (!body) return;
        
        const commentsSection = document.createElement('div');
        commentsSection.innerHTML = createCommentsSection().trim();
        const commentsElement = commentsSection.firstElementChild;
        if (commentsElement) body.appendChild(commentsElement);

        console.log('✅ Comments and navigation elements inserted successfully');
    }

    // ==================================================
    // 4. إدارة التعليقات (localStorage)
    // ==================================================
    function initializeComments() {
        const form = document.getElementById('commentForm');
        const commentsContainer = document.getElementById('commentsContainer');
        if (!form || !commentsContainer) return;

        const storageKey = `comments_chapter_${chapterId}`;

        function loadComments() {
            const comments = JSON.parse(localStorage.getItem(storageKey) || '[]');
            if (comments.length === 0) {
                commentsContainer.innerHTML = `
                    <div class="no-comments">
                        <i class="fas fa-inbox"></i><br>
                        لا توجد تعليقات بعد. كن أول من يشارك!
                    </div>`;
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
                    </div>`;
            }).reverse().join('');
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('commenterName').value.trim();
            const text = document.getElementById('commentText').value.trim();
            if (!text) return;

            const comment = { name: name || 'قارئ', text: text, date: new Date().toISOString() };
            const comments = JSON.parse(localStorage.getItem(storageKey) || '[]');
            comments.push(comment);
            localStorage.setItem(storageKey, JSON.stringify(comments));
            loadComments();
            form.reset();
            alert('✅ تم إضافة تعليقك بنجاح!');
        });

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

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        loadComments();
    }

    // ==================================================
    // 5. تشغيل السكريبت
    // ==================================================
    function init() {
        console.log('🚀 Initializing chapter enhancements...');
        insertElements();
        setTimeout(function() {
            initializeComments();
            console.log('✅ Chapter enhancements initialized successfully!');
        }, 200);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    console.log('✅ Chapter enhancements script loaded');
})();
