import { Hono } from 'hono'
import homeHtml from '../public/anesthesia-safety/home.html?raw'
import chaptersHtml from '../public/anesthesia-safety/chapters/index.html?raw'
import aboutHtml from '../public/anesthesia-safety/about.html?raw'

const app = new Hono()

// الصفحة الرئيسية
app.get('/', (c) => {
  return c.html(homeHtml)
})

// صفحة عن المؤلف
app.get('/about', (c) => c.html(aboutHtml))

// فهرس الفصول - يعالج المسارين بنفس الدالة
const chaptersHandler = (c: any) => c.html(chaptersHtml)
app.get('/chapters', chaptersHandler)
app.get('/chapters/', chaptersHandler)

// صفحة الفصل
app.get('/chapter/:id', async (c) => {
  const id = c.req.param('id')
  const env = c.env as any
  if (env?.ASSETS) {
    const url = new URL(c.req.url)
    url.pathname = `/anesthesia-safety/chapters/chapter-${id}.html`
    const res = await env.ASSETS.fetch(url.toString())
    if (res.ok) return new Response(res.body, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
  }
  // fallback: redirect to static file
  return c.redirect(`/anesthesia-safety/chapters/chapter-${id}.html`)
})

export default app
