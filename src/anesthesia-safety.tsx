import { Hono } from 'hono'

const app = new Hono()

// الصفحة الرئيسية - نقدم home.html من الموقع الحقيقي
app.get('/', async (c) => {
  const env = c.env as any
  if (env?.ASSETS) {
    const url = new URL(c.req.url)
    url.pathname = '/anesthesia-safety/home.html'
    const res = await env.ASSETS.fetch(url.toString())
    if (res.ok) return new Response(res.body, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
  }
  return c.redirect('/anesthesia-safety/home.html')
})

// فهرس الفصول
app.get('/chapters', async (c) => {
  const env = c.env as any
  if (env?.ASSETS) {
    const url = new URL(c.req.url)
    url.pathname = '/anesthesia-safety/chapters/index.html'
    const res = await env.ASSETS.fetch(url.toString())
    if (res.ok) return new Response(res.body, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
  }
  return c.redirect('/anesthesia-safety/chapters/index.html')
})

app.get('/chapters/', async (c) => {
  return c.redirect('/anesthesia-safety/chapters')
})

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
  return c.redirect(`/anesthesia-safety/chapters/chapter-${id}.html`)
})

export default app
