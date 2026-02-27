import { Hono } from 'hono'

const tocApp = new Hono

tocApp.get('/', (c) => {
 return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Table of Contents — Operating Theatre Policies &amp; Procedures Manual</title>
 <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
 <style>
 body { font-family: 'Poppins', sans-serif; background-color: #f4f7f6; }
 .font-beautiful { font-family: 'Playfair Display', serif; }
 
 /* Smooth Scrollbar */
 ::-webkit-scrollbar { width: 8px; }
 ::-webkit-scrollbar-track { background: #e2e8f0; }
 ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 4px; }
 ::-webkit-scrollbar-thumb:hover { background: #64748b; }
 
 /* Premium Hover Effects for Boxes */
 .policy-card { 
 transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
 border: 1px solid rgba(255, 255, 255, 0.4);
 }
 .policy-card:hover { 
 transform: translateY(-6px); 
 box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); 
 }

 /* Beautiful List Bullets */
 .list-bullet {
 display: inline-block;
 width: 6px;
 height: 6px;
 border-radius: 50%;
 margin-top: 8px;
 flex-shrink: 0;
 }
 </style>
 <style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:0px}.left-1\\/2{left:50%}.top-0{top:0px}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.-mt-16{margin-top:-4rem}.mb-5{margin-bottom:1.25rem}.mt-0\\.5{margin-top:0.125rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:0.5rem}.mt-6{margin-top:1.5rem}.mt-auto{margin-top:auto}.flex{display:flex}.grid{display:grid}.h-1\\.5{height:0.375rem}.h-6{height:1.5rem}.h-\\[400px\\]{height:400px}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-10{width:2.5rem}.w-32{width:8rem}.w-6{width:1.5rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[800px\\]{width:800px}.w-\\[80px\\]{width:80px}.w-full{width:100%}.max-w-5xl{max-width:64rem}.max-w-7xl{max-width:80rem}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-10{gap:2.5rem}.gap-3{gap:0.75rem}.gap-4{gap:1rem}.gap-y-5{row-gap:1.25rem}.space-y-10 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2.5rem * var(--tw-space-y-reverse))}.space-y-3 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.75rem * var(--tw-space-y-reverse))}.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-8 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.rounded{border-radius:0.25rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:0.5rem}.rounded-xl{border-radius:0.75rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-t{border-top-width:1px}.border-amber-100{--tw-border-opacity:1;border-color:rgb(254 243 199 / var(--tw-border-opacity, 1))}.border-blue-100{--tw-border-opacity:1;border-color:rgb(219 234 254 / var(--tw-border-opacity, 1))}.border-cyan-100{--tw-border-opacity:1;border-color:rgb(207 250 254 / var(--tw-border-opacity, 1))}.border-orange-100{--tw-border-opacity:1;border-color:rgb(255 237 213 / var(--tw-border-opacity, 1))}.border-purple-100{--tw-border-opacity:1;border-color:rgb(243 232 255 / var(--tw-border-opacity, 1))}.border-red-100{--tw-border-opacity:1;border-color:rgb(254 226 226 / var(--tw-border-opacity, 1))}.border-rose-100{--tw-border-opacity:1;border-color:rgb(255 228 230 / var(--tw-border-opacity, 1))}.border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240 / var(--tw-border-opacity, 1))}.border-slate-800{--tw-border-opacity:1;border-color:rgb(30 41 59 / var(--tw-border-opacity, 1))}.border-teal-100{--tw-border-opacity:1;border-color:rgb(204 251 241 / var(--tw-border-opacity, 1))}.bg-amber-100{--tw-bg-opacity:1;background-color:rgb(254 243 199 / var(--tw-bg-opacity, 1))}.bg-amber-50\\/50{background-color:rgb(255 251 235 / 0.5)}.bg-blue-100{--tw-bg-opacity:1;background-color:rgb(219 234 254 / var(--tw-bg-opacity, 1))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.bg-cyan-100{--tw-bg-opacity:1;background-color:rgb(207 250 254 / var(--tw-bg-opacity, 1))}.bg-emerald-50{--tw-bg-opacity:1;background-color:rgb(236 253 245 / var(--tw-bg-opacity, 1))}.bg-orange-100{--tw-bg-opacity:1;background-color:rgb(255 237 213 / var(--tw-bg-opacity, 1))}.bg-purple-100{--tw-bg-opacity:1;background-color:rgb(243 232 255 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity:1;background-color:rgb(254 226 226 / var(--tw-bg-opacity, 1))}.bg-rose-100{--tw-bg-opacity:1;background-color:rgb(255 228 230 / var(--tw-bg-opacity, 1))}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity, 1))}.bg-slate-400{--tw-bg-opacity:1;background-color:rgb(148 163 184 / var(--tw-bg-opacity, 1))}.bg-slate-900{--tw-bg-opacity:1;background-color:rgb(15 23 42 / var(--tw-bg-opacity, 1))}.bg-teal-100{--tw-bg-opacity:1;background-color:rgb(204 251 241 / var(--tw-bg-opacity, 1))}.bg-teal-50\\/50{background-color:rgb(240 253 250 / 0.5)}.bg-white\\/20{background-color:rgb(255 255 255 / 0.2)}.bg-white\\/80{background-color:rgb(255 255 255 / 0.8)}.bg-white\\/90{background-color:rgb(255 255 255 / 0.9)}.bg-gradient-to-b{background-image:linear-gradient(to bottom, var(--tw-gradient-stops))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right, var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-amber-500{--tw-gradient-from:#f59e0b var(--tw-gradient-from-position);--tw-gradient-to:rgb(245 158 11 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-blue-400{--tw-gradient-from:#60a5fa var(--tw-gradient-from-position);--tw-gradient-to:rgb(96 165 250 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-blue-700{--tw-gradient-from:#1d4ed8 var(--tw-gradient-from-position);--tw-gradient-to:rgb(29 78 216 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-cyan-600{--tw-gradient-from:#0891b2 var(--tw-gradient-from-position);--tw-gradient-to:rgb(8 145 178 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-emerald-600{--tw-gradient-from:#059669 var(--tw-gradient-from-position);--tw-gradient-to:rgb(5 150 105 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-indigo-600{--tw-gradient-from:#4f46e5 var(--tw-gradient-from-position);--tw-gradient-to:rgb(79 70 229 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-indigo-900{--tw-gradient-from:#312e81 var(--tw-gradient-from-position);--tw-gradient-to:rgb(49 46 129 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-orange-600{--tw-gradient-from:#ea580c var(--tw-gradient-from-position);--tw-gradient-to:rgb(234 88 12 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-pink-600{--tw-gradient-from:#db2777 var(--tw-gradient-from-position);--tw-gradient-to:rgb(219 39 119 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-purple-600{--tw-gradient-from:#9333ea var(--tw-gradient-from-position);--tw-gradient-to:rgb(147 51 234 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-rose-600{--tw-gradient-from:#e11d48 var(--tw-gradient-from-position);--tw-gradient-to:rgb(225 29 72 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-rose-700{--tw-gradient-from:#be123c var(--tw-gradient-from-position);--tw-gradient-to:rgb(190 18 60 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-slate-700{--tw-gradient-from:#334155 var(--tw-gradient-from-position);--tw-gradient-to:rgb(51 65 85 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-white{--tw-gradient-from:#fff var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.via-slate-900{--tw-gradient-to:rgb(15 23 42 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), #0f172a var(--tw-gradient-via-position), var(--tw-gradient-to)}.to-blue-200{--tw-gradient-to:#bfdbfe var(--tw-gradient-to-position)}.to-blue-500{--tw-gradient-to:#3b82f6 var(--tw-gradient-to-position)}.to-blue-600{--tw-gradient-to:#2563eb var(--tw-gradient-to-position)}.to-blue-700{--tw-gradient-to:#1d4ed8 var(--tw-gradient-to-position)}.to-blue-900{--tw-gradient-to:#1e3a8a var(--tw-gradient-to-position)}.to-fuchsia-600{--tw-gradient-to:#c026d3 var(--tw-gradient-to-position)}.to-indigo-500{--tw-gradient-to:#6366f1 var(--tw-gradient-to-position)}.to-orange-500{--tw-gradient-to:#f97316 var(--tw-gradient-to-position)}.to-red-500{--tw-gradient-to:#ef4444 var(--tw-gradient-to-position)}.to-red-600{--tw-gradient-to:#dc2626 var(--tw-gradient-to-position)}.to-red-800{--tw-gradient-to:#991b1b var(--tw-gradient-to-position)}.to-rose-500{--tw-gradient-to:#f43f5e var(--tw-gradient-to-position)}.to-slate-800{--tw-gradient-to:#1e293b var(--tw-gradient-to-position)}.to-teal-500{--tw-gradient-to:#14b8a6 var(--tw-gradient-to-position)}.to-teal-600{--tw-gradient-to:#0d9488 var(--tw-gradient-to-position)}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.p-10{padding:2.5rem}.p-2{padding:0.5rem}.p-2\\.5{padding:0.625rem}.p-5{padding:1.25rem}.p-8{padding:2rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-0\\.5{padding-top:0.125rem;padding-bottom:0.125rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-16{padding-top:4rem;padding-bottom:4rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.py-28{padding-top:7rem;padding-bottom:7rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.pb-3{padding-bottom:0.75rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-\\[11px\\]{font-size:11px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-relaxed{line-height:1.625}.leading-snug{line-height:1.375}.leading-tight{line-height:1.25}.tracking-\\[0\\.25em\\]{letter-spacing:0.25em}.tracking-tight{letter-spacing:-0.025em}.tracking-wide{letter-spacing:0.025em}.tracking-wider{letter-spacing:0.05em}.tracking-widest{letter-spacing:0.1em}.text-amber-500{--tw-text-opacity:1;color:rgb(245 158 11 / var(--tw-text-opacity, 1))}.text-amber-600{--tw-text-opacity:1;color:rgb(217 119 6 / var(--tw-text-opacity, 1))}.text-amber-700{--tw-text-opacity:1;color:rgb(180 83 9 / var(--tw-text-opacity, 1))}.text-amber-800{--tw-text-opacity:1;color:rgb(146 64 14 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.text-blue-700{--tw-text-opacity:1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-cyan-600{--tw-text-opacity:1;color:rgb(8 145 178 / var(--tw-text-opacity, 1))}.text-cyan-700{--tw-text-opacity:1;color:rgb(14 116 144 / var(--tw-text-opacity, 1))}.text-emerald-600{--tw-text-opacity:1;color:rgb(5 150 105 / var(--tw-text-opacity, 1))}.text-orange-600{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity, 1))}.text-orange-700{--tw-text-opacity:1;color:rgb(194 65 12 / var(--tw-text-opacity, 1))}.text-pink-600{--tw-text-opacity:1;color:rgb(219 39 119 / var(--tw-text-opacity, 1))}.text-purple-600{--tw-text-opacity:1;color:rgb(147 51 234 / var(--tw-text-opacity, 1))}.text-purple-700{--tw-text-opacity:1;color:rgb(126 34 206 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-700{--tw-text-opacity:1;color:rgb(185 28 28 / var(--tw-text-opacity, 1))}.text-rose-600{--tw-text-opacity:1;color:rgb(225 29 72 / var(--tw-text-opacity, 1))}.text-rose-700{--tw-text-opacity:1;color:rgb(190 18 60 / var(--tw-text-opacity, 1))}.text-slate-400{--tw-text-opacity:1;color:rgb(148 163 184 / var(--tw-text-opacity, 1))}.text-slate-600{--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity, 1))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85 / var(--tw-text-opacity, 1))}.text-slate-800{--tw-text-opacity:1;color:rgb(30 41 59 / var(--tw-text-opacity, 1))}.text-teal-500{--tw-text-opacity:1;color:rgb(20 184 166 / var(--tw-text-opacity, 1))}.text-teal-600{--tw-text-opacity:1;color:rgb(13 148 136 / var(--tw-text-opacity, 1))}.text-teal-700{--tw-text-opacity:1;color:rgb(15 118 110 / var(--tw-text-opacity, 1))}.text-teal-800{--tw-text-opacity:1;color:rgb(17 94 89 / var(--tw-text-opacity, 1))}.text-transparent{color:transparent}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-20{opacity:0.2}.opacity-90{opacity:0.9}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[0_0_15px_rgba\\(59\\2c 130\\2c 246\\2c 0\\.5\\)\\]{--tw-shadow:0 0 15px rgba(59,130,246,0.5);--tw-shadow-colored:0 0 15px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.blur-\\[120px\\]{--tw-blur:blur(120px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow-lg{--tw-drop-shadow:drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-md{--tw-backdrop-blur:blur(12px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.hover\\:bg-slate-200:hover{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity, 1))}.hover\\:from-indigo-700:hover{--tw-gradient-from:#4338ca var(--tw-gradient-from-position);--tw-gradient-to:rgb(67 56 202 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.hover\\:to-blue-700:hover{--tw-gradient-to:#1d4ed8 var(--tw-gradient-to-position)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media (min-width: 640px){.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}@media (min-width: 768px){.md\\:text-5xl{font-size:3rem;line-height:1}}@media (min-width: 1024px){.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:text-6xl{font-size:3.75rem;line-height:1}}</style>
</head>
<body class="text-slate-800 antialiased min-h-screen flex flex-col">

 <!-- Navbar -->
 <header class="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
 <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
 <div class="flex items-center gap-4">
 <div class="bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-2.5 rounded-xl shadow-md">
 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
 </div>
 <a href="/or-policies" class="font-bold text-slate-800 text-2xl tracking-tight font-beautiful hover:text-indigo-700 transition-colors">Governance Portal</a>
 </div>
 </div>
 </header>

 <!-- Stunning Hero Section -->
 <div class="relative overflow-hidden shadow-2xl bg-slate-900">
 <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 opacity-90"></div>
 <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
 
 <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 relative z-10 text-center">
 <h1 class="text-4xl md:text-5xl lg:text-6xl font-beautiful font-extrabold leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 drop-shadow-lg">
 Operating Theatre Policies &amp; Procedures Manual
 </h1>
 <div class="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full mt-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
 </div>
 </div>

 <!-- Main Content -->
 <main class="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-20">
 <div class="grid grid-cols-1 gap-10 items-start">

 <!-- FRONT MATTER -->
 <div class="policy-card bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex flex-col h-full">
 <div class="px-8 py-6 bg-gradient-to-r from-slate-700 to-slate-800 flex items-center gap-4">
 <div class="bg-white/20 p-2 rounded-lg backdrop-blur-md">
 <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
 </div>
 <h2 class="text-2xl font-beautiful font-bold text-white tracking-widest uppercase">Front Matter</h2>
 </div>
 <div class="p-8 flex-grow">
 <ul class="space-y-4 text-[15px] font-medium text-slate-700">
 <li class="flex items-start gap-4"><span class="list-bullet bg-slate-400"></span> <span>Title Page</span></li>
 <li class="flex items-start gap-4"><span class="list-bullet bg-slate-400"></span> <span>Copyright / Disclaimer</span></li>
 <li class="flex items-start gap-4"><span class="list-bullet bg-slate-400"></span> <span>Foreword</span></li>
 <li class="flex items-start gap-4"><span class="list-bullet bg-slate-400"></span> <span>Acknowledgements</span></li>
 <li class="flex items-start gap-4"><span class="list-bullet bg-slate-400"></span> <span class="leading-relaxed">Standard Policy Template (Purpose / Scope / Definitions / Responsibilities / Procedure / Documentation / KPIs / References)</span></li>
 <li class="flex items-start gap-4"><span class="list-bullet bg-slate-400"></span> <span>Master List of Policies (with codes)</span></li>
 <li class="flex items-start gap-4"><span class="list-bullet bg-slate-400"></span> <span>Master List of Forms / Logs / Checklists (one list)</span></li>
 </ul>
 </div>
 </div>

 <!-- PART I -->
 <div class="policy-card bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex flex-col h-full">
 <div class="px-8 py-6 bg-gradient-to-r from-blue-700 to-blue-500">
 <h2 class="text-xl font-beautiful font-bold text-white tracking-wider uppercase leading-snug">PART I — GOVERNANCE, LEADERSHIP, AND PROGRAM MANAGEMENT (GLD / QPS / SQE)</h2>
 </div>
 <div class="p-8 space-y-10 flex-grow">
 
 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-blue-100 flex items-center gap-3">
 <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s01" class="hover:underline">SEC 1</a></span>
 Operating Theatre Governance &amp; Scope of Service
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">1.1</span> <span class="leading-snug">OT Scope of Service (General / Specialty / Day Surgery / Obstetric OR if applicable)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">1.2</span> <span class="leading-snug">OT Organizational Structure &amp; Reporting Lines</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">1.3</span> <span class="leading-snug">OT Committee / Theatre Management Committee (TOR, membership, minutes)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">1.4</span> <span class="leading-snug">OT Policies Governance (create–review–approve–distribute–archive)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">1.5</span> <span class="leading-snug">Document Control &amp; Staff Access</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">1.6</span> <span class="leading-snug">OT Risk Register &amp; Annual Safety Plan</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">1.7</span> <span class="leading-snug">OT Capacity Planning, Case Prioritization, Escalation Pathway</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">1.8</span> <span class="leading-snug">Outsourced Services Governance (CSSD interface, cleaning, vendors)</span></li>
 </ul>
 </div>

 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-blue-100 flex items-center gap-3">
 <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s02" class="hover:underline">SEC 2</a></span>
 Workforce, Privileging Interface, and Competency (SQE)
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">2.1</span> <span class="leading-snug">Credentialing/Privileging Interface (surgeons, OT nursing, OT techs)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">2.2</span> <span class="leading-snug">Scope of Practice: OT Nursing &amp; Surgical Technologists</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">2.3</span> <span class="leading-snug">OT Orientation Program &amp; Departmental Induction</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">2.4</span> <span class="leading-snug">Annual Competency Program (core + specialty)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">2.5</span> <span class="leading-snug">Mandatory Training Matrix (BLS/ACLS, Fire, IPC, Radiation, etc.)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">2.6</span> <span class="leading-snug">Staffing Model, Skill Mix, On-call Coverage</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">2.7</span> <span class="leading-snug">Fatigue Management and Safe Scheduling</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">2.8</span> <span class="leading-snug">Professional Conduct, Speaking-Up, Zero Tolerance</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">2.9</span> <span class="leading-snug">Students/Observers and Supervision Rules</span></li>
 </ul>
 </div>

 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-blue-100 flex items-center gap-3">
 <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s03" class="hover:underline">SEC 3</a></span>
 Quality, Patient Safety, and Audit System (QPS / IPSG)
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">3.1</span> <span class="leading-snug">Patient Safety Program in OT (roles, safety rounds)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">3.2</span> <span class="leading-snug">Incident / Near-Miss / Hazard Reporting (OT responsibilities)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">3.3</span> <span class="leading-snug">Sentinel Event Response (RCA participation, action plans)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">3.4</span> <span class="leading-snug">OT Audit Program (counts, checklist compliance, IPC, meds labeling)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">3.5</span> <span class="leading-snug">OT KPI Dashboard (SSI bundle compliance, cancellation, utilization, etc.)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">3.6</span> <span class="leading-snug">Tracer Readiness &amp; Mock Survey Plan</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">3.7</span> <span class="leading-snug">Patient Feedback / Complaints Handling in OT</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">3.8</span> <span class="leading-snug">Continuous Improvement (PDSA, reliability tools)</span></li>
 </ul>
 </div>

 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-blue-100 flex items-center gap-3">
 <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s04" class="hover:underline">SEC 4</a></span>
 Ethics, Patient Dignity &amp; Privacy in Operating Theatre (Islamic Culture) — ONE POLICY
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">4.1</span> <span class="leading-snug">Privacy &amp; “Awrah” protection during transfer, positioning, draping, recovery</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">4.2</span> <span class="leading-snug">Gender sensitivity (chaperone rules, exposure minimization)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">4.3</span> <span class="leading-snug">Consent for exposure, photography/video, teaching/observers</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">4.4</span> <span class="leading-snug">Confidentiality inside OT, voice/whiteboard/privacy screens</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">4.5</span> <span class="leading-snug">Handling deceased patient in OT (dignity, transport, access control)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">4.6</span> <span class="leading-snug">Visitor limits and professional boundaries in OT</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-blue-600 shrink-0 w-7">4.7</span> <span class="leading-snug">Cultural/religious considerations (family communication, modesty, respect)</span></li>
 </ul>
 </div>

 </div>
 </div>

 <!-- PART II -->
 <div class="policy-card bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex flex-col h-full">
 <div class="px-8 py-6 bg-gradient-to-r from-emerald-600 to-teal-500">
 <h2 class="text-xl font-beautiful font-bold text-white tracking-wider uppercase leading-snug">PART II — PATIENT FLOW: PRE-OP TO POST-OP (COP / IPSG / PCC)</h2>
 </div>
 <div class="p-8 space-y-10 flex-grow">
 
 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-teal-100 flex items-center gap-3">
 <span class="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s05" class="hover:underline">SEC 5</a></span>
 Scheduling, Booking, and Pre-Operative Readiness
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">5.1</span> <span class="leading-snug">Surgical Booking Process &amp; Required Documentation</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">5.2</span> <span class="leading-snug">Surgical Priority / Triage (elective, urgent, emergency)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">5.3</span> <span class="leading-snug">Day-of-Surgery Cancellation Criteria &amp; Escalation</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">5.4</span> <span class="leading-snug">Pre-op Checklist (ward/clinic readiness) (OT responsibilities only)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">5.5</span> <span class="leading-snug">Patient Preparation for OR (fasting verification, jewelry, skin prep confirmation)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">5.6</span> <span class="leading-snug">Blood product readiness &amp; special equipment requests (OT coordination role)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">5.7</span> <span class="leading-snug">Transport to OT (handover, infection status, oxygen need as ordered)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">5.8</span> <span class="leading-snug">Patient Acceptance Criteria for OT</span></li>
 </ul>
 </div>

 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-teal-100 flex items-center gap-3">
 <span class="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s06" class="hover:underline">SEC 6</a></span>
 Patient Identification, Consent, and Procedure Verification (IPSG)
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">6.1</span> <span class="leading-snug">Patient Identification (two identifiers)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">6.2</span> <span class="leading-snug">Informed Consent Verification (surgery, blood, implants — verification step)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">6.3</span> <span class="leading-snug">Site Marking Verification (including exceptions)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">6.4</span> <span class="leading-snug">Safe Surgery Process: Sign-In / Time-Out / Sign-Out (WHO checklist governance)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">6.5</span> <span class="leading-snug">Discrepancy Handling &amp; Stop-the-Line Escalation</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">6.6</span> <span class="leading-snug">Critical Information Communication (allergy alerts, isolation status, implants)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">6.7</span> <span class="leading-snug">Interpreter / Communication Support (workflow)</span></li>
 </ul>
 </div>

 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-teal-100 flex items-center gap-3">
 <span class="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s07" class="hover:underline">SEC 7</a></span>
 Handover and Transfers (OT responsibilities)
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">7.1</span> <span class="leading-snug">Pre-op Handoff to OT (SBAR/I-PASS)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">7.2</span> <span class="leading-snug">Safe Transfer of Patient (trolley ↔ OT table, safe handling)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">7.3</span> <span class="leading-snug">OT On-Call System (activation, response time, responsibilities)</span></li>
 </ul>
 </div>

 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-teal-100 flex items-center gap-3">
 <span class="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s08" class="hover:underline">SEC 8</a></span>
 PACU / Recovery Room Interface — ONE POLICY ONLY
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-teal-600 shrink-0 w-7">8.1</span> <span class="leading-snug">Recovery Room Readiness + OT→PACU Handover (documentation + responsibility)</span></li>
 </ul>
 </div>

 </div>
 </div>

 <!-- PART III -->
 <div class="policy-card bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex flex-col h-full">
 <div class="px-8 py-6 bg-gradient-to-r from-rose-600 to-red-500">
 <h2 class="text-xl font-beautiful font-bold text-white tracking-wider uppercase leading-snug">PART III — INFECTION PREVENTION &amp; ENVIRONMENTAL CONTROL IN OT — ONE POLICY (PCI / FMS)</h2>
 </div>
 <div class="p-8 space-y-8 flex-grow">
 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-rose-100 flex items-center gap-3">
 <span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s09" class="hover:underline">SEC 9</a></span>
 Infection Prevention &amp; Control in Operating Theatre (Comprehensive Policy)
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.1</span> <span class="leading-snug">OT zoning (unrestricted/semi-restricted/restricted)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.2</span> <span class="leading-snug">OT attire &amp; dress code</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.3</span> <span class="leading-snug">Traffic control / door opening discipline</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.4</span> <span class="leading-snug">Hand hygiene + surgical hand scrub</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.5</span> <span class="leading-snug">Sterile gowning</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.6</span> <span class="leading-snug">Sterile gloving</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.7</span> <span class="leading-snug">Surgical skin antisepsis</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.8</span> <span class="leading-snug">Draping</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.9</span> <span class="leading-snug">Maintaining sterile field &amp; contamination response</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.10</span> <span class="leading-snug">Isolation case workflow (PPE, routes, cleaning sign-off)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.11</span> <span class="leading-snug">Between-case cleaning &amp; turnover (roles, agents, contact time)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.12</span> <span class="leading-snug">End-of-day / terminal cleaning</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.13</span> <span class="leading-snug">Blood/body fluid spill management</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.14</span> <span class="leading-snug">Equipment cleaning between patients</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.15</span> <span class="leading-snug">Sterile supplies handling, storage, event-related sterility</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.16</span> <span class="leading-snug">CSSD interface: point-of-use pre-cleaning, transport, loaner trays governance</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-rose-600 shrink-0 w-8">9.17</span> <span class="leading-snug">Linen handling &amp; clean/dirty separation</span></li>
 </ul>
 </div>
 </div>
 </div>

 <!-- PART IV -->
 <div class="policy-card bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex flex-col h-full">
 <div class="px-8 py-6 bg-gradient-to-r from-amber-500 to-orange-500">
 <h2 class="text-xl font-beautiful font-bold text-white tracking-wider uppercase leading-snug">PART IV — MEDICATION MANAGEMENT IN OT — ONE POLICY (MMU / IPSG)</h2>
 </div>
 <div class="p-8 space-y-8 flex-grow">
 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-amber-100 flex items-center gap-3">
 <span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s10" class="hover:underline">SEC 10</a></span>
 Medication Management in Operating Theatre (OT Scope)
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-amber-600 shrink-0 w-9">10.1</span> <span class="leading-snug">Storage, security, temperature monitoring</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-amber-600 shrink-0 w-9">10.2</span> <span class="leading-snug">Labeling of prepared solutions/syringes on the sterile field</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-amber-600 shrink-0 w-9">10.3</span> <span class="leading-snug">LASA controls + segregation</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-amber-600 shrink-0 w-9">10.4</span> <span class="leading-snug">High-alert medication handling (OT double-check where applicable)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-amber-600 shrink-0 w-9">10.5</span> <span class="leading-snug">Controlled medications kept in OT (endorsement, discrepancy escalation)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-amber-600 shrink-0 w-9">10.6</span> <span class="leading-snug">Returns, wastage documentation, expiry checks</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-amber-600 shrink-0 w-9">10.7</span> <span class="leading-snug">Medication error reporting &amp; learning loop</span></li>
 </ul>
 </div>
 </div>
 </div>

 <!-- PART V -->
 <div class="policy-card bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex flex-col h-full">
 <div class="px-8 py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600">
 <h2 class="text-xl font-beautiful font-bold text-white tracking-wider uppercase leading-snug">PART V — INTRA-OPERATIVE POLICIES (Independent Policies for Each Title) (IPSG / COP)</h2>
 </div>
 <div class="p-8 space-y-8 flex-grow">
 <div class="mb-6 p-5 bg-purple-50/80 rounded-2xl text-[14px] text-purple-800 font-medium border border-purple-200 flex gap-3 items-start">
 <svg class="w-6 h-6 text-purple-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
 <span><strong>ملاحظة:</strong> هذه السياسة مقسّمة إلى ثلاثة أجزاء مستقلة:<br/>
 <strong>Part A</strong> — SEC 11 (11.1–11.3) &nbsp;|&nbsp; <strong>Part B</strong> — SEC 11 (11.4–11.7) &nbsp;|&nbsp; <strong>Part C</strong> — SEC 11 (11.8–11.13)</span>
 </div>
 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-purple-100 flex items-center gap-3">
 <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s11" class="hover:underline">SEC 11</a></span>
 Intra-Operative Safety &amp; Conduct
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.1</span> <span class="leading-snug">OT Entry/Exit Control &amp; Theatre Discipline</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.2</span> <span class="leading-snug">Safe Practices in OT / Environmental Hazards / Wrong-Site Prevention</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.3</span> <span class="leading-snug">Surgical Counts (sponges/sharps/instruments)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.4</span> <span class="leading-snug">Retained Surgical Item Prevention (count reliability + discrepancy process)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.5</span> <span class="leading-snug">Patient Positioning &amp; Pressure Injury Prevention</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.6</span> <span class="leading-snug">Specimen Handling, Labeling &amp; Transport</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.7</span> <span class="leading-snug">Implant / Prosthesis Traceability (stickers, logs, patient implant ID)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.8</span> <span class="leading-snug">Surgical Smoke Safety (smoke evacuation use, PPE, maintenance)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.9</span> <span class="leading-snug">Tourniquet Use (documentation, time/pressure recording, escalation) (if used)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.10</span> <span class="leading-snug">Contrast Media / Dyes Handling in OT (labeling, storage, documentation) (OT side)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.11</span> <span class="leading-snug">Clinical Photography/Video in OT (consent, privacy, storage controls)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.12</span> <span class="leading-snug">Perioperative Documentation Standards (OT record completion)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-purple-600 shrink-0 w-10">11.13</span> <span class="leading-snug">Blood Loss Estimation &amp; Documentation (OT documentation tool + escalation trigger)</span></li>
 </ul>
 </div>
 </div>
 </div>

 <!-- PART VII -->
 <div class="policy-card bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex flex-col h-full">
 <div class="px-8 py-6 bg-gradient-to-r from-orange-600 to-red-600">
 <h2 class="text-xl font-beautiful font-bold text-white tracking-wider uppercase leading-snug">PART VII — FACILITY SAFETY, SECURITY, AND STAFF SAFETY (FMS)</h2>
 </div>
 <div class="p-8 space-y-8 flex-grow">
 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-orange-100 flex items-center gap-3">
 <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s15" class="hover:underline">SEC 13</a></span>
 OT Facility Safety
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-orange-600 shrink-0 w-10">13.1</span> <span class="leading-snug">OT Safety Rounds &amp; Hazard Reporting</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-orange-600 shrink-0 w-10">13.2</span> <span class="leading-snug">Fire Safety in OT: Prevention &amp; Response</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-orange-600 shrink-0 w-10">13.3</span> <span class="leading-snug">Medical Gas Safety (pipeline awareness, cylinder handling — OT scope)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-orange-600 shrink-0 w-10">13.4</span> <span class="leading-snug">Electrical Safety &amp; Equipment Plug Rules</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-orange-600 shrink-0 w-10">13.5</span> <span class="leading-snug">Radiation Safety in OT (C-arm workflows, PPE, badges — OT scope)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-orange-600 shrink-0 w-10">13.6</span> <span class="leading-snug">Waste Segregation (sharps, clinical, cytotoxic, general)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-orange-600 shrink-0 w-10">13.7</span> <span class="leading-snug">Sharps Injury Prevention &amp; Exposure Response (OT workflow)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-orange-600 shrink-0 w-10">13.8</span> <span class="leading-snug">Visitors to Operating Room (access, PPE, privacy, documentation)</span></li>
 </ul>
 </div>
 </div>
 </div>

 <!-- PART VIII -->
 <div class="policy-card bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex flex-col h-full">
 <div class="px-8 py-6 bg-gradient-to-r from-rose-700 to-red-800">
 <h2 class="text-xl font-beautiful font-bold text-white tracking-wider uppercase leading-snug">PART VIII — EMERGENCY &amp; BUSINESS CONTINUITY (FMS / IPSG)</h2>
 </div>
 <div class="p-8 space-y-8 flex-grow">
 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-red-100 flex items-center gap-3">
 <span class="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s16" class="hover:underline">SEC 14</a></span>
 OT Emergency Coordination (OT Scope)
 </h3>
 <ul class="space-y-3 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-red-600 shrink-0 w-10">14.1</span> <span class="leading-snug">Code Blue / Rapid Response Activation in OT (roles + access + crowd control)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-red-600 shrink-0 w-10">14.2</span> <span class="leading-snug">Massive Hemorrhage Activation (OT logistics, equipment readiness, documentation)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-red-600 shrink-0 w-10">14.3</span> <span class="leading-snug">OT Evacuation / Shelter-in-Place</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-red-600 shrink-0 w-10">14.4</span> <span class="leading-snug">Utility Failure Contingency (power/medical gases/IT downtime response)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-red-600 shrink-0 w-10">14.5</span> <span class="leading-snug">Infectious Outbreak / Surge OT Workflow (routes, zoning, terminal cleaning)</span></li>
 </ul>
 </div>
 </div>
 </div>

 <!-- PART IX -->
 <div class="policy-card bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex flex-col h-full">
 <div class="px-8 py-6 bg-gradient-to-r from-pink-600 to-rose-500">
 <h2 class="text-xl font-beautiful font-bold text-white tracking-wider uppercase leading-snug">PART IX — SPECIALTY OT WORKFLOWS</h2>
 </div>
 <div class="p-8 flex-grow">
 <div>
 <h3 class="font-bold text-slate-800 text-[16px] mb-5 pb-3 border-b-2 border-pink-100 flex items-center gap-3">
 <span class="bg-pink-100 text-pink-700 px-3 py-1 rounded-lg text-sm tracking-wider"><a href="/or-policies/section/s17" class="hover:underline">SEC 15</a></span>
 Specialty Operating Theatre Workflows
 </h3>
 <ul class="space-y-4 text-[14px] text-slate-600 font-medium">
 <li class="flex items-start gap-3"><span class="font-bold text-pink-600 shrink-0 w-10">15.1</span> <span class="leading-snug">Emergency / Trauma OR Workflow (OT readiness + activation)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-pink-600 shrink-0 w-10">15.2</span> <span class="leading-snug">Obstetric Theatre Workflow (OT side: readiness, instruments, counts, specimens)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-pink-600 shrink-0 w-10">15.3</span> <span class="leading-snug">Pediatric Surgery Workflow (OT side: equipment, warming, counts)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-pink-600 shrink-0 w-10">15.4</span> <span class="leading-snug">Orthopedic Implant Surgery Workflow (traceability, loaner trays, counts)</span></li>
 <li class="flex items-start gap-3"><span class="font-bold text-pink-600 shrink-0 w-10">15.5</span> <span class="leading-snug">ENT / Shared Airway Field (OT side: smoke, sharps, specimen, counts)</span></li>
 </ul>
 </div>
 </div>
 </div>

 <!-- FORMS LIST -->
 <div class="policy-card bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col mt-2">
 <div class="px-8 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center gap-4">
 <div class="bg-white/20 p-2 rounded-lg backdrop-blur-md">
 <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
 </div>
 <h2 class="text-2xl font-beautiful font-bold text-white tracking-widest uppercase">MASTER LIST — FORMS / LOGS / CHECKLISTS</h2>
 </div>
 <div class="p-10">
 <div class="grid grid-cols-1 gap-y-5">
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f01" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-01</a> <span class="leading-snug mt-0.5">Operation Lists / 24-Hour OT List (24 HOURS OT LIST / OPERATION LIST)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f02" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-02</a> <span class="leading-snug mt-0.5">Pre-Operative Checklist (CLUSTER PRE-OPERATIVE CHECKLIST)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f03" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-03</a> <span class="leading-snug mt-0.5">Safe Surgery/Procedure Checklist (WHO) (CLUSTER SURGICAL SAFETY)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f04" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-04</a> <span class="leading-snug mt-0.5">Sponges/Sharps/Instruments Count Form (CLUSTER COUNTS)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f05" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-05</a> <span class="leading-snug mt-0.5">Combined Safe Surgery + Counts (CLUSTER SURGICAL SAFETY AND COUNTS)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f06" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-06</a> <span class="leading-snug mt-0.5">Blood Loss Form (CLUSTER BLOOD LOSS FORM)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f07" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-07</a> <span class="leading-snug mt-0.5">Histopath / Specimen Form (CLUSTER NEW HISTOPATH FORM)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f08" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-08</a> <span class="leading-snug mt-0.5">Doctor’s Notes Form (CLUSTER DOCTORS NOTES)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f09" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-09</a> <span class="leading-snug mt-0.5">Policies/Procedures Tracker Form (TRACKER FORM FOR THE POLICIES AND PROCEDURES)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f10" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-10</a> <span class="leading-snug mt-0.5">Narcotic Drug Endorsement Form (NARCOTIC DRUG ENDORSEMENT FORM)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f11" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-11</a> <span class="leading-snug mt-0.5">Narcotic Monitoring List (NARCOTIC DRUGS – e.g., fentanyl list)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f12" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-12</a> <span class="leading-snug mt-0.5">OT Cancellation Form + Reason Codes</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f13" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-13</a> <span class="leading-snug mt-0.5">OT On-Call Activation Log</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f14" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-14</a> <span class="leading-snug mt-0.5">OT→PACU Handover Checklist</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f15" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-15</a> <span class="leading-snug mt-0.5">Specimen Chain-of-Custody Log</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f16" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-16</a> <span class="leading-snug mt-0.5">Implant Traceability Form / Implant Stickers Log (linked to 11.7)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f17" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-17</a> <span class="leading-snug mt-0.5">Tourniquet Record (time/pressure/limb/signatures) (linked to 11.9)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f18" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-18</a> <span class="leading-snug mt-0.5">Diathermy Safety Checklist</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f19" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-19</a> <span class="leading-snug mt-0.5">Warming Cabinet Temperature Log</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f20" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-20</a> <span class="leading-snug mt-0.5">OR Temperature/Humidity Log (PCI/FMS expectation)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f21" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-21</a> <span class="leading-snug mt-0.5">Between-Case Cleaning Checklist + Terminal Cleaning Sign-off (inside IPC policy)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f22" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-22</a> <span class="leading-snug mt-0.5">Visitor Log (name, reason, PPE, consent/privacy acknowledgement) (linked to &amp; Ethics policy)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f23" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-23</a> <span class="leading-snug mt-0.5">Photography/Video Consent Form (linked to 11.11 &amp; Ethics policy)</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f24" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-24</a> <span class="leading-snug mt-0.5">Fire Drill Evaluation Form</span></div>
 <div class="flex items-start gap-4 text-[14px] text-slate-600 font-medium"><a href="/or-policies/form/f25" class="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded shrink-0 w-[80px] text-center transition-colors">F-OT-25</a> <span class="leading-snug mt-0.5">Equipment “Remove from Service” Tag + Failure Report Slip (linked to Part VI)</span></div>
 </div>
 </div>
 </div>

 </div>
 </main>

 <!-- Footer -->
 <footer class="bg-slate-900 text-center py-10 mt-auto border-t border-slate-800">
 <p class="text-slate-400 text-[11px] uppercase tracking-[0.25em] font-medium">© 2026 Dr. Jameel Al-Soqayya Governance Portal. All Rights Reserved.</p>
 </footer>

</body>
</html>`)
})

export default tocApp
