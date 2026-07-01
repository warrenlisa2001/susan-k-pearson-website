# Animal Advocate Initiative — Homepage + Cat Rescue (FINAL)

This is one file: `src/index.tsx`. It contains everything from today — the daisy logo references,
the blooming splash gate, AND the new Animal Advocate Initiative content. Production build tested
clean (`npm run build`).

## What's in it

**Cat Rescue page (`/cat-rescue`)** — a full new section right after the hero, before "Meet the
Cats," with an anchor (`#initiative`) so it can be linked to directly:
- A Founder's Vision
- Our Purpose
- Our Guiding Principles (Honor Life, Respect All Creatures, Act With Integrity, Build
  Sustainability, Leave a Legacy)
- Our Commitment
- The values ribbon (Presence · Curiosity · Respect · Attention · Possibility) and "Founded by
  Susan K. Pearson · Version 1.0" line

Same dark/gold/cream palette and daisy motif as the rest of the site, with a small daisy icon
above each guiding principle.

**Homepage (`/`)** — a shorter teaser version (title, tagline, one paragraph, and a "Meet the Cats
We're Rescuing" button linking straight to `/cat-rescue#initiative`). This *replaces* the old
"Anthropic Work" section that was sitting right before the footer — that section had a typo
(should've said "Philanthropic") and only had one sentence, so it's been upgraded rather than
duplicated.

I also added the Cormorant Garamond font to the Cat Rescue page's `<head>`, since it wasn't loaded
there before and the new section depends on it for typography consistency.

## How to apply it

```bash
cp src/index.tsx <path-to-this-folder>/src/index.tsx
npm run build
git add src/index.tsx
git commit -m "Add Animal Advocate Initiative to homepage and Cat Rescue page"
git push
```

## Important — the build settings issue from earlier still needs fixing

Cloudflare's build configuration for this project currently has **no build command set** (it was
blank in your dashboard screenshot). That means none of today's `index.tsx` changes — logo,
splash, and now this Initiative content — will actually take effect on the live site until it's
fixed:

1. Cloudflare dashboard → Workers & Pages → susan-k-pearson-website → **Settings → Build**
2. Edit **Build configuration**:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Save, then go to **Deployments** → **Retry deployment** on the latest one (or push this file,
   which will trigger a fresh one automatically since auto-deploy is on)

Once that's set once, every future GitHub push will build and deploy correctly on its own —
you won't need to touch this setting again.
