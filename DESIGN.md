---
name: Gahan Patel Portfolio
description: A warm dark portfolio for a builder who ships — considered, capable, real.
colors:
  ember: "#d4a020"
  ember-dim: "#bf8e1c"
  ember-subtle: "#2d2314"
  forge: "#1c1813"
  coal: "#231f19"
  ash: "#201c17"
  cinder: "#342e28"
  chalk: "#f2ede4"
  dusk: "#9a9086"
  smoke: "#6b6358"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3rem, 10vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.forge}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ember-dim}"
    textColor: "{colors.forge}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-ghost-hover:
    backgroundColor: "{colors.cinder}"
    textColor: "{colors.chalk}"
  chip-skill:
    backgroundColor: "{colors.coal}"
    textColor: "{colors.dusk}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  chip-skill-hover:
    backgroundColor: "{colors.cinder}"
    textColor: "{colors.ember}"
  chip-tech:
    backgroundColor: "{colors.ember-subtle}"
    textColor: "{colors.ember}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
  card-project:
    backgroundColor: "{colors.coal}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-project-hover:
    backgroundColor: "{colors.coal}"
---

# Design System: Gahan Patel Portfolio

## 1. Overview

**Creative North Star: "The Working Engineer"**

This is a portfolio where the work does the talking. The visual system is dark, warm, and uncluttered — not because dark is fashionable, but because it sets conditions for text and work to surface without interference. A near-black with an amber undertone (Forge, `#1c1813`) is heated iron rather than cold slate. The single accent — a muted amber-gold (Ember, `#d4a020`) — functions like a highlighter pen: used rarely, and always with intent.

The typography is confident without being showy. Space Grotesk brings geometric character to headings without tipping into editorial performance; Inter handles body copy with clinical precision. Together they read as someone who chose deliberately, not someone who overthought it. The pairing is uncommon in developer portfolios, which run toward either ultra-minimal system-ui or heavy display serifs.

The design does not beg for attention. A recruiter opening this page should feel: "This person knows what they're doing" — not through visual tricks, but through an absence of them. The design rejects the indigo-on-slate template, neon-on-black cyberpunk, and the cold-precise Linear clone. It lands in a register that is equally distinctive and readable.

**Key Characteristics:**
- Warm dark mode throughout: amber undertones in every neutral, no cold blue-black
- Single accent (Ember) used parsimoniously — it marks load-bearing elements only
- Flat surfaces, border-first depth — no decorative shadows
- Space Grotesk + Inter: geometric confidence at heading scale, functional precision at body scale
- 672px (42rem) reading column: comfortable at any viewport, never stretched

## 2. Colors: The Ember Palette

One warm accent on a dark forge. The palette rejects the indigo-saturated developer portfolio standard and the neon-on-black aesthetic, landing in a register that is equally distinctive and approachable.

### Primary
- **Ember** (`#d4a020` / `oklch(74% 0.16 75)`): The sole accent. Used on section eyebrow labels, company names in experience cards, the primary CTA button, and project title hover states. Nowhere else.
- **Ember Dim** (`#bf8e1c` / `oklch(68% 0.16 75)`): Hover and pressed state for the primary button only.

### Neutral
- **Forge** (`#1c1813` / `oklch(13% 0.008 50)`): Page background. Warm near-black; the amber undertone reads as heated iron rather than cold slate.
- **Coal** (`#231f19` / `oklch(17% 0.008 50)`): Card and surface background. One tonal step above Forge; the separation is deliberate but subtle.
- **Ash** (`#201c17` / `oklch(15% 0.008 50)`): Alternate section background for rhythm breaks (Experience, Skills). Sits between Forge and Coal.
- **Cinder** (`#342e28` / `oklch(26% 0.009 50)`): Border color. Warm and low-contrast — structural, not decorative.
- **Chalk** (`#f2ede4` / `oklch(95% 0.005 75)`): Primary text. Warm off-white; never pure white.
- **Dusk** (`#9a9086` / `oklch(63% 0.007 60)`): Secondary text, card descriptions, body copy.
- **Smoke** (`#6b6358` / `oklch(45% 0.006 55)`): Muted text for dates, captions, footer attribution.
- **Ember Subtle** (`#2d2314` / `oklch(20% 0.04 75)`): Tinted background for tech chip tags. Amber-inflected surface.

### Named Rules
**The One Ember Rule.** Ember (`#d4a020`) appears on at most 15% of any screen. It marks section labels, company names, primary CTAs, and title hover states. If you find yourself adding Ember to a second category, remove it from an existing one first. Its value is in its rarity.

**The Warm Neutrals Rule.** No neutral in this system is a cool gray. Every background, border, and muted tone is tinted toward H=50–75. A neutral like `#6b7280` (Tailwind's gray-500, H≈220) is a contamination of the palette. Test any new neutral: if it reads cooler than Cinder (`#342e28`), it is out of system.

## 3. Typography

**Display Font:** Space Grotesk (Google Fonts; `system-ui, sans-serif` fallback)
**Body Font:** Inter (Google Fonts; `system-ui, sans-serif` fallback)

**Character:** Space Grotesk's geometric lowercase and slightly irregular letterforms give headings personality without decorative excess. Inter's neutral precision makes body text invisible — the reader absorbs content, not letterforms. The pairing signals: confident at scale, invisible at length. Neither font is a default. Both are uncommon enough to signal taste without being obscure.

### Hierarchy

- **Display** (700, `clamp(3rem, 10vw, 4.5rem)`, line-height 1.05, letter-spacing -0.03em): The hero name only. Set tight. Forbidden everywhere else on the page.
- **Headline** (700, 1.875rem / 30px, line-height 1.2, letter-spacing -0.02em): Section anchor headings ("Hey, I'm Gahan.", "Let's work together.").
- **Title** (600, 1rem / 16px, line-height 1.4): Project titles, experience role names.
- **Body** (400, 0.9375rem / 15px, line-height 1.65): All descriptive text. Cap line length at 72ch (`max-width: 72ch`).
- **Label** (600, 0.6875rem / 11px, letter-spacing 0.12em, uppercase): Section eyebrow labels only. Always Ember-colored, always tracked wide.

### Named Rules
**The No-Scale-Collapse Rule.** The step between Label (11px), Body (15px), Title (16px), Headline (30px), and Display (48px+) must always be 1.25 or greater between adjacent levels. Never add an intermediate size that compresses the scale.

**The Label Doctrine.** Section eyebrows are the only uppercase text on the site. No other element uses `text-transform: uppercase`. Uppercase is a limited resource — spend it in one place or it means nothing anywhere.

## 4. Elevation

This system is flat by default. Depth is expressed through background tinting (Forge page, Coal cards, Ash alternating sections) and border separation (Cinder at 1px). Shadows are reserved for two state-driven contexts only.

### Shadow Vocabulary
- **Navbar lock** (`border-bottom: 1px solid #342e28; background: oklch(13% 0.008 50 / 0.9); backdrop-filter: blur(12px)`): Applied when the navbar locks on scroll. This is a tonal border-line, not a drop shadow.
- **No card shadows.** A 1px Cinder border is sufficient separation from the Coal background. Cards are bordered surfaces, not floating panels.

### Named Rules
**The Flat-By-Default Rule.** At rest, every element is flat. Shadows appear only in response to state (locked navbar) or genuine structural hierarchy (future modal overlay). Cards, sections, and content regions are never lifted.

**The Border-Before-Shadow Rule.** Before reaching for a shadow, ask: does a border, background tint, or spacing increase solve the same problem? Use that first. Shadows in this system are structural, not atmospheric.

## 5. Components

### Buttons

Two weights, no more. Primary (Ember fill) vs. ghost (border + Chalk text). No gradients. No scale or translate on hover.

- **Shape:** Gently rounded, 8px radius
- **Primary:** Ember fill (`#d4a020`), Forge text (`#1c1813`), 12px 24px padding, Space Grotesk 600 14px. On hover: Ember Dim (`#bf8e1c`). On focus: `outline: 2px solid #d4a020; outline-offset: 3px`.
- **Ghost:** Transparent background, 1px Cinder border, Chalk text, same radius and padding, Inter 500 14px. On hover: Cinder background fills in. On focus: same Ember outline.

### Chips

Two chip types with distinct visual roles.

**Skill chips** (Skills section)
- Coal background, 1px Cinder border, Dusk text, 6px radius, 8px 16px padding, Inter 500 14px
- Hover: border shifts to Ember, text shifts to Ember. Background unchanged.
- `cursor: default` — these are not interactive links.

**Tech chips** (project and experience tag pills)
- Ember Subtle background (`#2d2314`), Ember text, fully rounded (9999px), 2px 10px padding, Space Grotesk 600 11px
- Read-only. No hover state.

### Cards

One card type. No size variants.

**Project and experience cards**
- Coal background, 1px Cinder border, 12px radius, 24px internal padding
- Hover: border color shifts toward Ember at 45% opacity (`oklch(74% 0.16 75 / 0.45)`). 150ms ease-out-expo.
- No shadow at rest or hover. No scale. No translation.
- Project cards: title transitions from Chalk to Ember on parent-card hover.
- Experience cards: company name is permanently Ember-colored (not a hover state — always on).

### Navigation

Fixed, full-width. Transparent at page top. Locks on scroll past 20px.

- **Logo mark "GP":** Space Grotesk 600, 14px, Chalk. On hover: 70% opacity. No decoration.
- **Nav links:** Inter 400, 14px, Dusk. On hover: Chalk. 28px gap between items. No underline.
- **Lock state:** `border-bottom: 1px solid #342e28; background: oklch(13% 0.008 50 / 0.9); backdrop-filter: blur(12px)`. Transition 300ms ease-out.

### Section Labels (Eyebrow)

The site's visual signature: Space Grotesk 600, 11px, 0.12em letter-spacing, uppercase, Ember (`#d4a020`). Always the first element in a section, with 40px margin below before the following headline or paragraph. Used in six places: About, Experience, Projects, Skills, Contact, and the hero tagline eyebrow.

This is the only element where Ember appears as a text color in running content, with one exception: company names in experience cards use Ember to establish role → company → date hierarchy.

## 6. Do's and Don'ts

### Do:
- **Do** use Ember (`#d4a020`) exclusively for section eyebrow labels, company names in experience cards, the primary CTA button, and project title hover states. These four uses; no others.
- **Do** keep every neutral warm. All background, border, and text tones carry H=50–75 with at least 0.005 chroma. If a new neutral reads cooler than Cinder (`#342e28`), it is out of system.
- **Do** cap all body and description text at 72ch. The reading column already enforces this at the layout level; any overflow or wider content is a layout error.
- **Do** set the hero name in Space Grotesk 700 with -0.03em letter-spacing. Tight tracking at display size separates deliberate from default.
- **Do** use border tinting and background shifts before reaching for shadows. Flat surfaces are a design decision, not a shortcut.
- **Do** keep cards at one visual weight. All project and experience cards are identical in padding, radius, and border treatment. Hierarchy lives in the content, not the containers.

### Don't:
- **Don't** use indigo, violet, or blue-purple as an accent anywhere. The current implementation uses `indigo-600` (`#4f46e5`) throughout — this must be migrated to Ember across all components. Indigo here reads as "I used the Tailwind default."
- **Don't** use neon or glowing accents, frosted glass panels used decoratively, or high-chroma colors on dark backgrounds. PRODUCT.md explicitly names neon/cyberpunk as an anti-reference.
- **Don't** copy the Linear or Vercel palette directly. Warm amber is intentionally distinct from their cold-slate and violet accent. Borrowing their typographic confidence is fine; their color system is not.
- **Don't** let Ember appear on more than 15% of any screen. Rarity is the mechanism. If it appears everywhere, it stops meaning anything.
- **Don't** use pure white (`#ffffff`) or pure black (`#000000`). Chalk (`#f2ede4`) is the lightest value; Forge (`#1c1813`) is the darkest.
- **Don't** add progress bars, skill meters, or percentage counters. PRODUCT.md names the generic dev portfolio template as an anti-reference; these are its most recognizable patterns.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on any card, list item, or callout. Use background tinting or leading labels instead.
- **Don't** add cool grays from Tailwind's default gray or slate palettes without re-tinting them toward the warm range. `slate-500` (`#64748b`, H≈218) is not in this system.
