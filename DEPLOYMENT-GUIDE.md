# Premium Editorial Wellness Redesign - Deployment Guide

## 🚀 Quick Start

### File Structure
```
project/
├── index.html              # Main page
├── styles.css              # Design system
├── components.js           # 8 reusable components
├── preview-redesign.html   # Preview version
├── wrangler.toml           # Cloudflare Pages config
└── DEPLOYMENT-GUIDE.md     # This file
```

## 📋 What's Included

### 8 Reusable Components (components.js)
1. **ExpandableSection** - Collapsible content with smooth animations
2. **ServiceCardExpander** - Interactive service cards
3. **HeroAnimation** - Parallax scrolling effects
4. **ScrollAnimations** - Fade-in on scroll
5. **GalleryScroll** - Keyboard/mouse wheel gallery navigation
6. **FormInteraction** - Ripple button effects
7. **MobileMenu** - Responsive hamburger navigation
8. **SmoothScroll** - Anchor link smooth scrolling
9. **Accessibility** - ARIA labels + keyboard support

### Design Elements (styles.css)
- **Color Palette**: Sage, Rose, Taupe, Charcoal, Cream, Gold
- **Spacing System**: 0.5rem to 6rem
- **Animations**: Float, pulse, fade-in effects
- **Typography**: Cormorant Garamond (serif) + Montserrat (sans)
- **Responsive**: Mobile-first, breakpoints at 768px

## 🌐 Deployment Options

### Option 1: Cloudflare Pages (Recommended)

1. Push code to GitHub
```bash
git add .
git commit -m "Deploy premium wellness redesign"
git push origin main
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Select "Pages" → "Create project"
4. Connect your GitHub repo
5. Select branch: `main`
6. Build settings:
   - Build command: (leave empty - static files)
   - Build output directory: `/`
   - Root directory: `/`
7. Deploy!

**Live URL**: `https://susan-k-pearson-wellness.pages.dev`

### Option 2: GitHub Pages

1. Push to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from branch"
4. Branch: `main`, folder: `/ (root)`
5. Save

**Live URL**: `https://warrenlisa2001.github.io/susan-k-pearson-website`

### Option 3: Vercel

1. Connect GitHub repo to [Vercel](https://vercel.com)
2. Framework preset: "Other" (static)
3. Deploy

**Live URL**: `https://susan-k-pearson.vercel.app`

## 🎨 Customization

### Change Colors
Edit `styles.css` CSS variables:

```css
:root {
    --sage: #B8C5B8;      /* Primary brand color */
    --rose: #F4A89B;      /* Accent color */
    --taupe: #9C9A8B;     /* Secondary color */
    --charcoal: #2C2C2C;  /* Dark text */
    --cream: #FAF7F3;     /* Light background */
    --gold: #C8A974;      /* Highlights */
}
```

### Adjust Spacing
Modify spacing variables (0.5rem to 6rem):

```css
--spacing-xs: 0.5rem;    /* Extra small */
--spacing-sm: 1rem;      /* Small */
--spacing-md: 2rem;      /* Medium */
--spacing-lg: 3rem;      /* Large */
--spacing-xl: 4rem;      /* Extra large */
--spacing-2xl: 6rem;     /* Double XL */
```

### Replace Placeholders

#### Hero Image
Find in `index.html`:
```html
<div class="image-placeholder">
    <i class="fas fa-image"></i>
    <span>Hero Image (1200x675px)</span>
</div>
```

Replace with:
```html
<img src="your-image.jpg" alt="Description" class="image-placeholder">
```

#### Gallery Items
```html
<div class="gallery-item">
    <img src="gallery-1.jpg" alt="Gallery item" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### Update Content
Edit `index.html` sections:
- Hero: Line ~25-31
- About: Line ~40-55
- Services: Line ~70-120
- Testimonials: Line ~135-150
- Contact: Line ~170-180

## 🔧 Component Usage

### Expandable Section
```html
<div class="expandable">
    <div class="expandable-header">
        <h3>Title</h3>
        <i class="fas fa-chevron-down expand-icon"></i>
    </div>
    <div class="expandable-content">
        <p>Hidden content here</p>
    </div>
</div>
```

### Service Cards
```html
<div class="card">
    <div class="card-icon"><i class="fas fa-spa"></i></div>
    <span class="card-tag">Tag</span>
    <h3>Title</h3>
    <p>Description</p>
    <div class="card-details">
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
        </ul>
    </div>
</div>
```

### Flower Divider
```html
<div class="flower-divider">✿</div>
```

### Image Placeholder
```html
<div class="image-placeholder">
    <i class="fas fa-image"></i>
    <span>Image description</span>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full grid layout)
- **Tablet**: 768px-1199px (2-column layouts)
- **Mobile**: <768px (single column, hidden nav menu)

## ⚡ Performance Tips

1. **Compress Images**
   - Use 1200x675px for hero images
   - Optimize with TinyPNG or similar
   - Consider WebP format

2. **Lazy Load Images**
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

3. **Minify CSS/JS**
   - Use minifiers before production
   - Or use Cloudflare's automatic optimization

4. **Enable Caching**
   - Cloudflare: Auto-enabled
   - GitHub Pages: Set cache headers in `.htaccess`

## ✅ Testing Checklist

- [ ] Hero section displays correctly on all devices
- [ ] Expandable sections work (click to expand/collapse)
- [ ] Service cards display prices and details
- [ ] Gallery scrolls horizontally
- [ ] Mobile menu hamburger works
- [ ] All links are clickable
- [ ] Forms capture input correctly
- [ ] Images load without errors
- [ ] Animations are smooth (no jank)
- [ ] Buttons have hover effects
- [ ] Text is readable on mobile
- [ ] Page loads in <3 seconds

## 🆘 Troubleshooting

### Images not showing
- Check image paths are relative (`/images/file.jpg`)
- Verify image files exist in repo
- Use Cloudflare Image Optimization

### Styles not loading
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Check CSS file is in same directory
- Verify stylesheet link in `<head>`

### JavaScript not working
- Open browser console (F12)
- Check for errors
- Verify `components.js` is linked in HTML

### Mobile menu not responsive
- Check viewport meta tag is present
- Clear browser cache
- Test on real mobile device

## 📞 Support

For Cloudflare Pages issues:
- [Cloudflare Community](https://community.cloudflare.com)
- [Cloudflare Docs](https://developers.cloudflare.com/pages)

For design questions:
- Review color palette variables
- Check component class names
- Test responsive behavior

## 🎉 You're Live!

Your premium wellness website is now deployed and ready for visitors!

**Next Steps:**
1. Share your live URL
2. Add your photos to replace placeholders
3. Update contact information
4. Set up analytics (Google Analytics)
5. Enable SSL/TLS certificate
