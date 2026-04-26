# Portfolio Upgrade Checklist

## What I just added

### ✅ Immediate visual improvements (done)
1. **Magnetic cursor with ring** — cursor now smoothly follows mouse with a trailing ring, magnetically pulls toward interactive elements
2. **Film grain texture** — subtle animated noise overlay for analog warmth
3. **GSAP text animations** — section titles reveal character-by-character on scroll
4. **Contact form** — working form in the contact section (needs backend hookup)
5. **Case study template** — `/work/atelier-norden` page as reference

### 🎯 What you need to do (critical for client trust)

#### 1. Add real project images — **PRIORITY #1**
Current state: Work section shows colored blocks with text
What to do:
```
/public/images/work/
├── 001.png  (Atelier Norden)
├── 002.png  (Loop Finance)
├── 003.png  (Kura Studio)
├── 004.png  (Reach Wellness)
├── 005.png  (Polestar Index)
└── 006.png  (Halcyon Press)
```
- Size: 1400×1000px or 16:9 ratio
- Format: PNG or WebP, optimized (<500KB each)
- Content: Actual project screenshots, redesign concepts, or Dribbble work

Then update Work.tsx line 98:
```tsx
<img 
  src={`/images/work/${projects[hover].num}.png`} 
  alt={projects[hover].name}
  className="w-full h-full object-cover"
/>
```

#### 2. Complete case study pages
I created `/app/work/atelier-norden/page.tsx` as a template.

Copy this 5 more times for the other projects:
- `/app/work/loop-finance/page.tsx`
- `/app/work/kura-studio/page.tsx`
- `/app/work/reach-wellness/page.tsx`
- `/app/work/polestar-index/page.tsx`
- `/app/work/halcyon-press/page.tsx`

For each, replace:
- Project name, description
- Client info
- Tech stack
- Image placeholders with real screenshots

#### 3. Hook up the contact form
Right now it just fakes submission. Connect it to:

**Option A — Formspree (easiest, free tier)**
```bash
npm install @formspree/react
```
Update `/components/ui/ContactForm.tsx`:
```tsx
import { useForm } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");
  
  if (state.succeeded) {
    return <p>Thanks! We'll be in touch within 24 hours.</p>;
  }
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

**Option B — Netlify Forms** (if deploying to Netlify)
Just add `data-netlify="true"` to the form tag

**Option C — Email API** (Resend, SendGrid)
Create `/app/api/contact/route.ts` and handle server-side

#### 4. Add real content
Update these placeholder texts:
- `/components/About.tsx` — your actual story, not generic copy
- `/components/Manifesto.tsx` — your real principles
- `/components/Work.tsx` — replace fake project names with real ones or real redesign concepts

#### 5. Performance optimization
Before deploying:
```bash
npm install sharp  # Image optimization
npm install @next/bundle-analyzer  # Check bundle size
```

Add to `next.config.js`:
```js
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
```

### 🚀 Advanced additions (optional but impressive)

#### A. Scroll-triggered parallax on images
Add to Work section — images move at different speeds on scroll

#### B. Page transition animations
Use Framer Motion for smooth route changes

#### C. 3D hover effects with Three.js
Project cards tilt in 3D based on cursor position

#### D. Custom 404 page
Create `/app/not-found.tsx` with on-brand error message

#### E. Blog/writing section
Add `/app/writing` with MDX support for case studies and thought pieces

#### F. Meta tags and OG images
Update `/app/layout.tsx` with proper SEO metadata
Generate OG images for each case study

## Testing checklist before launch

- [ ] Test on mobile (responsive breakpoints work)
- [ ] Check Lighthouse score (aim for 95+ performance)
- [ ] Verify all links work (no broken hrefs)
- [ ] Test contact form submission
- [ ] Check cross-browser (Chrome, Safari, Firefox)
- [ ] Verify custom cursor works (desktop only)
- [ ] Test smooth scroll on different mice/trackpads
- [ ] Check loading time on slow 3G
- [ ] Validate HTML/CSS (no console errors)
- [ ] Test with screen reader for accessibility

## Deploy when ready

```bash
# Build locally to check for errors
npm run build

# If all green, deploy to Vercel
vercel --prod
```

## What makes this advanced now

✅ Magnetic cursor interaction
✅ Film grain aesthetic
✅ GSAP scroll animations
✅ Smooth scroll with Lenis
✅ Character-by-character text reveals
✅ Case study page structure
✅ Contact form UI
✅ Next.js best practices
✅ TypeScript throughout
✅ Component architecture

## What's still missing (and why clients care)

❌ Real project images (clients judge quality by visuals first)
❌ Complete case studies (proves you can explain your thinking)
❌ Working form backend (friction = lost leads)
❌ Your actual story (generic copy doesn't build trust)
❌ Social proof (testimonials, client logos)

Fix those 5 things and you have a portfolio that wins work.

---

Need help with any of these? I can edit files directly now that we're connected via filesystem MCP.
