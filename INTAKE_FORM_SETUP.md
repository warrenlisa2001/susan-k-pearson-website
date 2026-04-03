# Intake Form Setup Instructions

## Overview
The intake form is now configured to:
1. ✅ Save submissions to Cloudflare D1 database
2. ✅ Send email notifications to: susankatrynpearson@gmail.com
3. ✅ Log all submissions for debugging

## Setup Steps for Production

### 1. Create Cloudflare D1 Database

```bash
# Create the database
npx wrangler d1 create elemental-healing-db

# Copy the database_id from the output
# Update wrangler.jsonc with the real database_id
```

### 2. Run Database Migrations

```bash
# Apply the schema to create tables
npx wrangler d1 migrations apply elemental-healing-db --local

# For production database
npx wrangler d1 migrations apply elemental-healing-db
```

### 3. Set up Resend for Email Notifications

1. Go to: https://resend.com/signup
2. Create a free account (100 emails/day free)
3. Get your API key from dashboard
4. Add domain verification for susankpearson.com (or use resend.dev for testing)

### 4. Add Secrets to Cloudflare

```bash
# Add Resend API key as secret
npx wrangler secret put RESEND_API_KEY

# When prompted, paste your Resend API key
```

### 5. Deploy to Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist --project-name project-99a55ffa
```

## Database Schema

The `intake_forms` table stores:
- id (auto-increment)
- full_name, email, phone (required)
- date_of_birth, location (optional)
- All 8 form sections as TEXT fields
- created_at timestamp

## Email Notifications

Every submission sends an email to: **susankatrynpearson@gmail.com**

Email includes:
- Client name, email, phone
- All form responses
- Timestamp
- Formatted for easy reading

## Local Development

For local testing:
```bash
# Start local dev server with database
npm run dev:d1

# Test the form at:
http://localhost:3000/intake-form
```

## Viewing Submissions

### Option 1: Direct Database Query
```bash
# View all submissions
npx wrangler d1 execute elemental-healing-db --command="SELECT * FROM intake_forms ORDER BY created_at DESC"

# View recent 10
npx wrangler d1 execute elemental-healing-db --command="SELECT full_name, email, created_at FROM intake_forms ORDER BY created_at DESC LIMIT 10"
```

### Option 2: Admin Dashboard (Future Enhancement)
A simple admin page at `/admin/intake-forms` can be built to:
- View all submissions in a table
- Search by name/email
- Export to CSV
- Delete submissions

## Troubleshooting

**No email received?**
- Check RESEND_API_KEY is set: `npx wrangler secret list`
- Verify domain in Resend dashboard
- Check Cloudflare Workers logs

**Database error?**
- Verify database_id in wrangler.jsonc
- Run migrations: `npx wrangler d1 migrations apply elemental-healing-db`
- Check D1 binding is correct

**Form not submitting?**
- Check browser console for errors
- Verify API endpoint is working: curl -X POST https://your-site.pages.dev/api/intake-form
- Check Cloudflare Workers logs

## Support

All form submissions are:
1. ✅ Saved to database permanently
2. ✅ Sent to your email immediately
3. ✅ Logged for debugging

If you need help setting this up, all the code is ready - just need to:
1. Create the D1 database
2. Add Resend API key
3. Deploy!
