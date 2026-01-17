# Susan K. Pearson | Elemental Healing

## Project Overview
- **Name**: Elemental Healing LLC
- **Practitioner**: Susan K. Pearson
- **Location**: Dubai | Sharjah-Registered
- **Goal**: Professional website for high-end energy healing practice
- **Features**: 
  - Elegant, sophisticated brand presentation
  - Comprehensive service offerings
  - Brand voice and messaging alignment
  - Contact form for client inquiries
  - Mobile-responsive design

## Brand Identity

### Tone of Voice
1. **Calm & Nurturing** - Soothing, supportive communication
2. **Empowering & Wise** - Knowledgeable yet accessible
3. **Authentic & Grounded** - Genuine, earth-connected energy
4. **Elegant & Professional** - Refined, sophisticated presence

### Language Style
- Use warm, inviting language
- Speak with quiet confidence
- Avoid clinical or harsh terms
- Embrace holistic vocabulary

### Color Palette
- **Sage** (#B8B5A0) - Calming, natural
- **Cream** (#F5F1E8) - Soft, elegant background
- **Charcoal** (#3A3A3A) - Professional text
- **Gold** (#C9A961) - Luxury accents
- **Stone** (#E8DCC8) - Warm neutral
- **Earth** (#8B7355) - Grounded tones

## Core Services

### 1. Deep Alignment Session
Flagship integration of Reiki, energy medicine, and somatic touch. Comprehensive session addressing mind, body, and spirit.

### 2. Clinical Hypnotherapy
Subconscious transformation through accessing and reprogramming limiting beliefs. Powerful work for breaking patterns and creating lasting behavioral change.

### 3. SKP Method
Unique approach combining advanced somatic practices with energy medicine, informed by the Nir Levy Method (Coming February 2026).

## Tech Stack
- **Framework**: Hono (Cloudflare Workers)
- **Frontend**: HTML5, TailwindCSS, Vanilla JavaScript
- **Typography**: Cormorant Garamond (serif), Montserrat (sans-serif)
- **Icons**: Font Awesome
- **Deployment**: Cloudflare Pages

## URLs
- **Development Server**: https://3000-ioqgnm3ppw6cdrd5xnthp-18e660f9.sandbox.novita.ai
- **Local Development**: http://localhost:3000
- **Production**: (Ready to deploy to Cloudflare Pages)
- **Project Backup**: https://www.genspark.ai/api/files/s/S94rVgRn

## Development

### Local Setup
```bash
# Build the project
npm run build

# Start development server with PM2
pm2 start ecosystem.config.cjs

# Test the service
npm test

# Check logs
pm2 logs elemental-healing --nostream
```

### Deployment to Cloudflare Pages
```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
npm run deploy:prod
```

## Project Structure
```
webapp/
├── src/
│   └── index.tsx          # Main Hono application
├── public/
│   └── static/            # Static assets
├── dist/                  # Build output
├── ecosystem.config.cjs   # PM2 configuration
├── wrangler.jsonc        # Cloudflare configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Features Implemented

### ✅ Completed Features
- [x] Professional landing page with hero section
- [x] About Susan section with credentials and profile photo
- [x] Professional profile image with contact details
- [x] Contact email: susankpearson@elementalskp.com
- [x] Phone: +971 55 177 0957
- [x] Tone of Voice presentation (4 brand pillars)
- [x] Core services showcase (3 main offerings)
- [x] Testimonials section with 5 authentic client reviews
  - Featured testimonial from Lisa M. (Ireland/Dubai)
  - 4 additional diverse testimonials
  - 5-star rating system
  - Geographic diversity (UAE, UK, Australia, Ireland)
- [x] Approach and methodology section
- [x] Blog section with 6 articles
  - Energy Medicine
  - Reiki
  - Hypnotherapy
  - Somatic Work
  - Wellness
  - Integration
- [x] Calendly booking integration
  - Inline calendar widget
  - Direct scheduling capability
  - Fallback contact information
- [x] Contact form with service selection
- [x] Mobile-responsive navigation with testimonials link
- [x] Smooth scrolling navigation
- [x] Brand-aligned color scheme (Sage, Cream, Gold, Charcoal)
- [x] Professional typography (Cormorant Garamond + Montserrat)
- [x] Elegant hover effects and animations
- [x] Footer with social media links and contact info
- [x] Professional branding with SKP logo

### 🔄 Recommended Next Steps
1. **Calendly Setup**
   - Update Calendly URL in the code (currently using placeholder)
   - Configure appointment types and durations
   - Set up email notifications

2. **Email Integration**
   - Connect contact form to email service (SendGrid, Mailgun)
   - Set up automated response emails
   - Configure form submission notifications

3. **Content Enhancement**
   - Add full blog post pages with detailed content
   - Include more professional photography
   - Add video introduction or testimonial videos

4. **SEO & Marketing**
   - Add meta tags for SEO optimization
   - Create sitemap.xml
   - Set up Google Analytics (placeholder ready)
   - Add structured data markup for local business
   - Optimize images for web performance

5. **Social Media Integration**
   - Connect actual Instagram profile
   - Connect actual LinkedIn profile
   - Add social sharing buttons for blog posts

6. **Legal & Compliance**
   - Add privacy policy page
   - Add terms of service page
   - Include disclaimer for healing services
   - GDPR compliance for contact form

## Deployment Status
- **Platform**: Cloudflare Pages (Ready to deploy)
- **Status**: ✅ Development Complete
- **Last Updated**: January 2026

## Contact Information
- **Email**: contact@elementalhealing.ae
- **Location**: Dubai, UAE | Sharjah-Registered
- **Practice**: Elemental Healing LLC

## Confidential & Proprietary
© 2026 Elemental Healing LLC. All rights reserved.

This website and its content are confidential and proprietary to Susan K. Pearson and Elemental Healing LLC.
