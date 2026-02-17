// Cloudflare Pages Function for handling chapter routes
// This mimics the behavior of server.cjs for Cloudflare Pages environment

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Helper function to read file
  async function readFile(path) {
    try {
      const response = await env.ASSETS.fetch(new URL(path, url.origin));
      if (response.ok) {
        return await response.text();
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  // Helper function to inject navigation buttons
  function injectNavigationButtons(html, chapterId) {
    const isSpecialChapter = ['copyright', 'foreword-ammar', 'foreword-sami', 'contents', 'min-ramad'].includes(chapterId);
    
    const navButtons = `
      <style>
        .navigation-buttons {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
          z-index: 9999;
          direction: rtl;
        }
        .nav-btn {
          background: rgba(255,255,255,0.95);
          color: #1e3c72;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .nav-btn:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .nav-btn.chapters-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .nav-btn.chapters-btn:hover {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .navigation-buttons {
            padding: 8px 10px;
          }
          .nav-btn {
            padding: 8px 12px;
            font-size: 12px;
          }
        }
      </style>
      <div class="navigation-buttons">
        <a href="/chapters" class="nav-btn chapters-btn">
          <i class="fas fa-list"></i>
          <span>الفصول</span>
        </a>
        <div style="display: flex; gap: 10px;">
          ${!isSpecialChapter && chapterId > 1 ? `<a href="/chapter/${parseInt(chapterId) - 1}" class="nav-btn"><i class="fas fa-arrow-right"></i> السابق</a>` : ''}
          ${!isSpecialChapter && chapterId < 32 ? `<a href="/chapter/${parseInt(chapterId) + 1}" class="nav-btn">التالي <i class="fas fa-arrow-left"></i></a>` : ''}
        </div>
      </div>
    `;

    // Remove old navigation elements
    html = html.replace(/<div class="chapter-navigation">[\s\S]*?<\/div>/g, '');
    html = html.replace(/<script>[\s\S]*?enhanceChapterNavigation[\s\S]*?<\/script>/g, '');
    
    // Inject new navigation before closing body tag
    if (html.includes('</body>')) {
      html = html.replace('</body>', navButtons + '</body>');
    } else {
      html += navButtons;
    }

    return html;
  }

  // Route: Homepage
  if (pathname === '/') {
    const html = await readFile('/home-page.html');
    if (html) {
      return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
  }

  // Route: Chapters list
  if (pathname === '/chapters') {
    const html = await readFile('/contents.html');
    if (html) {
      return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
  }

  // Route: Individual chapters
  if (pathname.startsWith('/chapter/')) {
    const chapterId = pathname.split('/chapter/')[1];
    let htmlContent = null;

    // Special chapters mapping
    const specialChapters = {
      'copyright': 'copyright.html',
      'foreword-ammar': 'foreword-ammar.html',
      'foreword-sami': 'foreword-sami.html',
      'contents': 'contents.html',
      '0': 'preface.html',
      'min-ramad': 'min-ramad.html'
    };

    if (specialChapters[chapterId]) {
      htmlContent = await readFile(`/chapters/${specialChapters[chapterId]}`);
    } else if (!isNaN(chapterId) && chapterId >= 1 && chapterId <= 32) {
      htmlContent = await readFile(`/chapters/chapter-${chapterId}.html`);
    }

    if (htmlContent) {
      // Inject navigation buttons
      htmlContent = injectNavigationButtons(htmlContent, chapterId);
      
      return new Response(htmlContent, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
  }

  // Default: Pass through to static assets
  return env.ASSETS.fetch(request);
}
