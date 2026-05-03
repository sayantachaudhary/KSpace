# KSpace 🍜

> a cozy vintage korean restaurant brand concept. with real food, warm vibes, no pretence.

## Brand Concept & Personality

**KSpace** is a small, personal Korean cuisine restaurant located near Gachibowli, Hyderabad — right in the IT hub. The idea is simple: authentic Korean food in a city that deserves more of it.

The brand is warm, casual, and unapologetically personal. It's not a chain. It's not fusion. It's a cozy spot with wooden tables, warm lighting, and food that tastes like someone's halmeoni made it.

**Neighbourhood:** Gachibowli / Nearby areas, Hyderabad, Telangana  
**Vibe:** Vintage Seoul meets Hyderabad warmth  
**Tone:** Casual, personal, lowercase — like texting a friend about where to eat

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties (the same HSL variables), flexbox/grid
- **Vanilla JS** — for mobile menu toggle, form handling
- **GSAP CDN** — same animation logic works without React

## Setup Instructions

```bash
# clone the repo
git clone <repo-url>
cd kspace

open with live server

```

The app runs at `http://localhost:xxxx` by default.

## Design Decisions

### Colour Palette

All colours are defined as HSL CSS variables in `index.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | warm cream `hsl(36, 33%, 95%)` | Page background |
| `--foreground` | deep brown `hsl(20, 25%, 14%)` | Body text |
| `--primary` | terracotta `hsl(12, 55%, 38%)` | CTAs, links, brand accent |
| `--warm-gold` | amber `hsl(35, 75%, 52%)` | Handwritten text, prices |
| `--warm-sage` | sage green `hsl(145, 12%, 85%)` | Dietary tags, subtle accents |
| `--warm-charcoal` | dark brown `hsl(20, 15%, 18%)` | Footer background |
| `--card` | slightly darker cream | Card surfaces |

The palette is intentionally earthy and warm — no cold blues, no tech-y purples. It should feel like a wooden table under pendant lights.

### Typography

Three typefaces, each with a clear role:

1. **Reenie Beanie** (handwritten) — for Korean text, section labels, prices. Adds personality without sacrificing readability.
2. **DM Serif Display** (serif) — all headings. Warm, elegant, with character.
3. **DM Sans** (sans-serif) — body text. Clean, modern, highly readable.

### Animations

Using GSAP with ScrollTrigger for:
- Hero text stagger on page load
- Scroll-reveal for sections (about, featured, hours, find us)
- Menu item entrance animations on category switch
- Hover lifts on food cards (CSS transitions)

All animations are subtle and quick.

### Menu Layout

Tabbed categories with a clean list layout: name + description + price on each line. Dietary tags as small pills. Handwritten-style prices for personality. The goal is scanability — u should be able to pick what u want in 10 seconds.

## Page Sections

| Sections | Purpose |
|------|---------|
| Home | Hero, about snippet, featured items, hours, find us |
| Menu | Full categorized menu with dietary tags |
| About | Brand story, values, team |
| Contact | Address, hours, map placeholder, enquiry form |

## Assumptions

- **Frontend only** — no backend, no database, no auth
- **No reservation system** — this is a brand site, not a booking platform
- **No payment processing** — menu displays prices for reference only
- **Enquiry form** — frontend-only with an alert, no email sending
- **Map placeholder** — ready for Google Maps iframe embed
- **Images** — AI-generated food photography for consistent warm tone
- **Prices** — in INR (₹), approximate for a Hyderabad market

## Known Limitations

- Contact form doesn't actually send emails (frontend only)
- Map section is a placeholder — needs a Google Maps API key for real embed
- No dark mode toggle (site is designed for light/warm mode)
- Team photos are initial placeholders
