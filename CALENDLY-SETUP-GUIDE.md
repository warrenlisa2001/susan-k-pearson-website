# Calendly + Stripe Setup Guide for Susan K Pearson

## ✅ What's Already Done

Your website now has **Calendly booking integration** installed and configured:
- ✅ Calendly widget script loaded on every page
- ✅ All booking buttons trigger Calendly popup
- ✅ Calendly URL configured: **https://calendly.com/susankatrynpearson**
- ✅ Navigation buttons open Calendly
- ✅ Mobile menu booking button works
- ✅ Service page CTAs all connected to Calendly

**Your Calendly booking page:** https://calendly.com/susankatrynpearson

---

## 📋 Complete Setup Checklist

### **STEP 1: Create Calendly Account** (15 minutes)

1. **Go to:** https://calendly.com/signup
2. **Sign up with:** susan@susankpearson.com
3. **Choose plan:** Professional ($16/month) - required for payments
4. **Connect calendar:** Link your Google Calendar or Outlook
5. **Set timezone:** Asia/Dubai (Gulf Standard Time)

---

### **STEP 2: Create Stripe Account** (20 minutes)

1. **Go to:** https://stripe.com
2. **Sign up with:** susan@susankpearson.com
3. **Select country:** United Arab Emirates
4. **Business type:** Individual / Sole Proprietorship
5. **Complete verification:**
   - Business details
   - Bank account (for payouts)
   - Identity verification (Emirates ID)
6. **Activate account** (may take 1-2 business days)

---

### **STEP 3: Connect Stripe to Calendly** (5 minutes)

1. Log into Calendly
2. Go to **Account → Integrations**
3. Find **Stripe** in the payment section
4. Click **Connect**
5. Log into Stripe when prompted
6. **Authorize** the connection
7. Set currency to **AED**
8. Enable "Require payment at booking"

---

### **STEP 4: Create Event Types in Calendly**

#### **Event 1: Deep Alignment Therapy**
- **Name:** Deep Alignment Therapy
- **Duration:** 90 minutes
- **Price:** AED 950
- **Location:** Ask invitee (remote/in-person)
- **Description:**
  ```
  Full-spectrum support for hara alignment, energetic clearing, and somatic integration.
  
  This 90-minute session includes:
  • Master-level Reiki
  • Somatic alignment & bodywork
  • Energy medicine protocols
  • Chakra balancing
  • Integration guidance
  
  Available remotely (via Zoom) or in-person (Abu Dhabi).
  ```
- **Booking questions:**
  - What brings you to this work right now? (required)
  - Have you experienced bodywork or energy work before? (optional)
  - Are there any physical considerations I should be aware of? (optional)
  - Preferred contact method (email/WhatsApp)? (optional)
- **Custom URL:** `susankpearson/deep-alignment-therapy`

---

#### **Event 2: Hypnotherapy Session**
- **Name:** Hypnotherapy Session
- **Duration:** 75 minutes
- **Price:** AED 850
- **Location:** Ask invitee
- **Description:**
  ```
  Subconscious repatterning with nervous system regulation.
  
  This 75-minute session includes:
  • Subconscious repatterning
  • Nervous system regulation
  • Belief system restructuring
  • Audio recording of your session
  
  Remote sessions via Zoom.
  ```
- **Booking questions:** (same as above)
- **Custom URL:** `susankpearson/hypnotherapy`

---

#### **Event 3: Integrated Session**
- **Name:** Integrated Session (120 min)
- **Duration:** 120 minutes (2 hours)
- **Price:** AED 1,200
- **Location:** Ask invitee
- **Description:**
  ```
  Comprehensive integration of multiple healing modalities.
  
  This 2-hour session includes:
  • Full-spectrum integration
  • Reiki & energy medicine
  • Somatic bodywork
  • Consciousness-based practices
  • Personalized integration plan
  
  For clients seeking deep, comprehensive work.
  ```
- **Booking questions:** (same as above)
- **Custom URL:** `susankpearson/integrated-session`

---

### **STEP 5: Create Stripe Payment Links for Packages**

Calendly doesn't support package pricing natively, so we'll use Stripe Payment Links:

#### **Foundation Package (3 sessions - AED 2,550)**

1. Log into Stripe Dashboard
2. Go to **Products → Add product**
3. **Product name:** Foundation Package (3 Sessions)
4. **Price:** AED 2,550 (one-time payment)
5. **Description:**
   ```
   Foundation Package - 3 Sessions
   
   • Any modality combination
   • Email support between sessions
   • Valid for 3 months
   • Saves AED 300
   
   After payment, Susan will contact you within 24 hours to schedule your first session.
   ```
6. Create **Payment Link**
7. Copy the link (e.g., `https://buy.stripe.com/XXXXX`)
8. **Add this link to your website pricing section**

---

#### **Transformation Package (6 sessions - AED 5,100)**

1. Create another product in Stripe
2. **Product name:** Transformation Package (6 Sessions)
3. **Price:** AED 5,100 (one-time payment)
4. **Description:**
   ```
   Transformation Package - 6 Sessions
   
   • Flexible modality integration
   • Priority scheduling
   • Ongoing email & WhatsApp support
   • Valid for 6 months
   • Saves AED 600
   
   After payment, Susan will contact you within 24 hours to schedule your sessions.
   ```
5. Create **Payment Link**
6. Copy the link
7. **Add to pricing section**

---

### **STEP 6: Update Your Website URLs**

Once your Calendly account is created, **send me your Calendly username** and I'll update all the booking buttons.

Current placeholder URL: `https://calendly.com/susankpearson`

Your actual URL will be something like:
- `https://calendly.com/susan-kpearson`
- `https://calendly.com/susan-pearson`
- `https://calendly.com/skpearson`

**I'll update the site with your real URL once you have it.**

---

### **STEP 7: Customize Calendly Appearance**

Make Calendly match your website:

1. Go to **Account → Branding**
2. **Brand color:** `#C8A974` (gold)
3. **Accent color:** `#D4AF37` (champagne gold)
4. **Upload logo:** Use `skp-logo-complete.png`
5. **Custom domain** (optional upgrade): `booking.susankpearson.com`

---

### **STEP 8: Set Your Availability**

1. Go to **Account → Availability**
2. Set your working hours (e.g., Sun-Thu 9am-7pm GST)
3. Add buffer time between meetings (15-30 minutes recommended)
4. Set minimum scheduling notice (24-48 hours recommended)
5. Block off personal time

---

### **STEP 9: Email Notifications & Reminders**

Calendly automatically sends:
- ✅ Booking confirmation (instant)
- ✅ Reminder 24 hours before
- ✅ Reminder 1 hour before
- ✅ Follow-up email (optional)

**Customize these:**
1. Go to **Event Type → Edit → Notifications**
2. Add your branding
3. Include session preparation instructions
4. Add WhatsApp contact info

---

### **STEP 10: Add Intake Form (Recommended)**

For each event type:

1. Edit the event
2. Go to **Invitee Questions**
3. Add these questions:
   - What brings you to this work right now? (Required, long answer)
   - Have you experienced bodywork or energy work before? (Optional)
   - Are there any physical considerations I should be aware of? (Optional)
   - How did you hear about Susan's practice? (Optional, multiple choice)
   - Preferred contact method? (Optional: Email / WhatsApp)

---

## 💳 Stripe Fee Structure

**In UAE:**
- 2.9% + AED 1 per successful transaction
- No setup fees
- No monthly fees
- Payouts to UAE bank account: 2 business days

**Example:**
- AED 950 session → You receive AED 921.55 (after fees)
- AED 1,200 session → You receive AED 1,165.20

---

## 📱 Calendly Mobile App

Download for on-the-go management:
- iOS: App Store
- Android: Google Play

**Features:**
- View upcoming bookings
- Reschedule/cancel
- Update availability
- Check earnings (with Stripe connected)

---

## 🎯 Next Steps After Setup

Once everything is configured:

1. **Test booking:** Book a test session yourself to see the client experience
2. **Share your link:** 
   - `https://calendly.com/[your-username]`
   - Or use the website buttons (already integrated!)
3. **Update email signature** with your booking link
4. **Add to social media bios**
5. **Send to existing clients**

---

## 🚀 Your Booking URLs

After setup, clients can book via:

✅ **Website buttons** → Opens Calendly popup (already working!)
✅ **Direct link** → `https://calendly.com/susankpearson`
✅ **Email signature** → Include your Calendly link
✅ **Social media** → Add link to Instagram/Facebook bio

---

## 💡 Pro Tips

1. **Set realistic buffers:** 30 minutes between sessions for integration notes
2. **Limit daily bookings:** Avoid burnout - cap at 3-4 sessions per day
3. **Use calendar blocks:** Block lunch, personal time, admin time
4. **Enable SMS reminders:** Reduces no-shows (upgrade feature)
5. **Create team event types:** For different session lengths/prices
6. **Add video preview:** Short intro video in Calendly booking page

---

## 🆘 Support Resources

**Calendly:**
- Help Center: https://help.calendly.com
- Live chat support (Professional plan)
- Email: support@calendly.com

**Stripe:**
- Help Center: https://support.stripe.com
- Email: support@stripe.com
- Phone: Available in dashboard

---

## 📧 What to Send Me After Setup

Once you've completed the setup, send me:

1. ✅ Your actual Calendly username (e.g., `susan-kpearson`)
2. ✅ Stripe payment links for the packages
3. ✅ Any custom booking page text you want

I'll then update the website with:
- Correct Calendly URLs
- Package payment links in the pricing section
- Any custom messaging

---

## ⏱️ Estimated Setup Time

- Calendly account: 15 minutes
- Stripe account: 20 minutes (+ 1-2 days for verification)
- Connect Stripe to Calendly: 5 minutes
- Create 3 event types: 30 minutes
- Create 2 package payment links: 15 minutes
- Customize branding: 10 minutes
- Set availability: 10 minutes

**Total: ~2 hours spread over 1-2 days**

---

## ✅ Current Status

**Already completed:**
- ✅ Calendly widget installed on website
- ✅ All booking buttons connected
- ✅ Popup widget configured
- ✅ Mobile-responsive integration

**You need to do:**
1. Create Calendly account
2. Create Stripe account
3. Connect them
4. Create event types
5. Set availability
6. Share your Calendly username with me

---

**Questions? I'm here to help with any step of the process!** 🚀
