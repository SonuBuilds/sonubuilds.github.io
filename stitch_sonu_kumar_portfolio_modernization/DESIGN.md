---
name: Obsidian Void
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#c78dff'
  on-tertiary-container: '#5a009b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '600'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.035em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 38px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an ultra-refined, high-precision engineering portfolio aesthetic tailored for high-end digital craftsmanship. Drawing cues from industry-standard tools like Linear, Raycast, Vercel, and Apple, the emotional tone is disciplined, cerebral, and distinctly premium.

Key design principles:
- **Obsidian Black Depth:** Pure void canvas tones juxtaposed against finely stepped dark slate surfaces to create spatial hierarchy without heavy visual mass.
- **Micro-Precision Engineering:** Crisp 1px translucent borders, tight geometric metrics, and razor-sharp typographic tracking that evoke the feeling of a bespoke native developer instrument.
- **Selective Luminescence:** Controlled atmospheric radial blooms and focal cyan/violet glow accents that draw attention to key interactive states and focal achievements without overwhelming the UI.
- **Tactile Performance:** Subtle scale feedback, specular edge reflections, and tactile spring motion that make software feel solid and reactive.

## Colors

The palette is engineered around pure black absorption, multi-tiered slate containers, and targeted spectral glows.

### Color Tiers
- **Void Canvas (`#050505`):** The primary background absorption layer.
- **Surface Elevation 1 (`#0B0B0B`):** Base container canvas for grouping large sections and nested frames.
- **Surface Elevation 2 (`#121214`):** Cards, popovers, and interactive elements.
- **Surface Elevation 3 (`#18181B`):** Hover states, badges, and elevated modal panels.
- **Primary Electric Cyan (`#06B6D4`):** Real-time activity indicators, primary links, key metrics, and precision glow highlights.
- **Secondary Indigo Violet (`#6366F1`):** Ambient backdrop gradients, featured project tags, and secondary action treatments.
- **Borders & Micro-Dividers:** `rgba(255, 255, 255, 0.08)` for standard structural separation, stepping down to `rgba(255, 255, 255, 0.04)` for nested dividers, and brightening to `rgba(255, 255, 255, 0.18)` on hover.
- **Typography Neutrals:** High-contrast text uses `#F4F4F5` (Zinc 100), secondary body uses `#A1A1AA` (Zinc 400), and tertiary/metadata uses `#71717A` (Zinc 500).

## Typography

The typographic hierarchy balances modern technical precision with editorial tension.

- **Primary Typeface (Geist):** Handles all visual headings, titles, navigation elements, and body copy. Negative letter spacing is applied systematically to larger weights to maintain a compact, high-density look.
- **Auxiliary Monospace Typeface (JetBrains Mono):** Used for technical metadata, commit hashes, statistics, status tags, and inline telemetry indicators.
- **Contrast & Rendering:** All font smoothing must leverage `antialiased` rendering on dark surfaces. Headings use subtle linear gradient fills (from `#FFFFFF` down to `#A1A1AA`) to create soft light-falloff across key project titles.

## Layout & Spacing

The layout is built upon an ultra-clean 12-column grid bound to a maximum content width of 1280px, flanked by generous empty canvas borders on desktop viewports.

- **Desktop (1024px+):** 12 columns, 24px gutters, with outer margins scaling fluidly from 48px to auto centering. Section pacing relies on generous vertical padding (80px to 120px) to give showcase modules museum-grade breathing room.
- **Tablet (768px - 1023px):** 8 columns, 20px gutters, 32px side margins. Double-column showcase cards transition into unified single/dual rows.
- **Mobile (< 768px):** 4 columns, 16px gutters, 20px outer margin. Layout stacks vertically into full-width cards with 16px internal padding.
- **Rhythm Principle:** Internal card padding scales strictly between `space-md` (16px) and `space-xl` (40px). Related metadata stacks tightly via `space-xs` and `space-sm`, maintaining a compact visual cluster before breaking to adjacent modules.

## Elevation & Depth

Depth avoids muddy dropshadows in favor of translucent layering, razor-sharp edge illumination, and ambient back-glows.

- **Surface Tiers & Stacking:**
  - Base level rests on `#050505`.
  - Level 1 cards use `#0B0B0B` with a continuous 1px micro-border of `rgba(255, 255, 255, 0.08)`.
  - Level 2 floating panels (e.g., active work drawers, command palette) use `#121214` backed by a 24px backdrop blur (`backdrop-filter: blur(24px)`).
- **Specular Highlights:** Card tops feature an inner subtle light-catcher: `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`.
- **Atmospheric Glow:** Hover states activate a 120px radial gradient bloom positioned dynamically behind the cursor: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.08), transparent 40%)`.
- **Command Palette & Modal Elevation:** Uses a soft, low-intensity ambient drop shadow: `0 24px 48px -12px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.1)`.

## Shapes

The geometry reflects tight industrial tolerances: structured, functional, and consistent.

- **Containers & Cards:** Default to `0.75rem` (12px) to `1rem` (16px). This prevents cards from appearing overly bubbly while maintaining soft corners that retain light reflections.
- **Micro-Pills & Interactive Controls:** Standard buttons, status chips, and command tags adopt full pill geometry (`9999px`) to create clear differentiation between rectangular spatial containers and interactive trigger targets.
- **Form Inputs & Sub-panels:** Standardized at `0.5rem` (8px) for maximum structural alignment with typography baselines.

## Components

### Buttons
- **Primary Action:** Solid white fill (`#FFFFFF`) with dark void text (`#050505`), semi-bold weight, subtle inset highlight `inset 0 1px 0 rgba(255, 255, 255, 0.4)`. Transitions on hover to `#F4F4F5` with a soft cyan ambient shadow.
- **Secondary Action:** Translucent dark fill (`rgba(255, 255, 255, 0.04)`), 1px micro-border `rgba(255, 255, 255, 0.08)`, text `#F4F4F5`. On hover: border brightens to `rgba(255, 255, 255, 0.2)` and background transitions to `rgba(255, 255, 255, 0.08)`.
- **Ghost/Tertiary:** No border, text `#A1A1AA`, on hover shifts to `#FFFFFF` with `rgba(255, 255, 255, 0.05)` background pill.

### Micro-Pill Badges & Status Indicators
- **Available for Work / Telemetry:** Monospace label (`11px`), pill radius (`9999px`), `4px 10px` padding. Dark green or cyan low-alpha background (`rgba(6, 182, 212, 0.1)`), 1px border (`rgba(6, 182, 212, 0.2)`), containing an active pulsing dot (`6px`) with an outer ripple ring.
- **Tech Stack Tags:** Monospace label (`11px`), `rgba(255, 255, 255, 0.03)` fill, `rgba(255, 255, 255, 0.07)` border, text `#A1A1AA`.

### Project Showcase Cards
- Surface `#0B0B0B`, top highlight `inset 0 1px 0 0 rgba(255, 255, 255, 0.08)`, outer stroke `1px solid rgba(255, 255, 255, 0.06)`.
- Contains integrated interactive media viewport with subtle vignette.
- Mouse movement triggers a smooth radial gradient illumination across the border and background.
- Top-right micro-action button (external link / arrow) transitions from `opacity: 0; transform: translate(-4px, 4px)` to visible on card hover.

### Precision Metrics & Stat Blocks
- Large numerical value in `Geist` semi-bold (`32px` to `40px`) in pure white.
- Metric description in uppercase `JetBrains Mono` (`11px`, tracking `0.08em`) in `#71717A`.
- Paired with micro sparkline or cyan delta indicator (`+14.2%`).

### Inputs & Command Palette
- **Command Bar (Raycast-style):** Centered floating overlay, `rgba(18, 18, 20, 0.85)` with `backdrop-filter: blur(20px)`, border `1px solid rgba(255, 255, 255, 0.12)`.
- **Text Inputs:** Transparent background, bottom border or full 1px border `rgba(255, 255, 255, 0.1)`. Focus state reveals a glowing cyan border ring `0 0 0 1px #06B6D4` with `0 0 16px rgba(6, 182, 212, 0.2)`.

### Lists & Timeline Architecture
- Experience/Career timeline with a continuous vertical guide line (`rgba(255, 255, 255, 0.08)`).
- Chronological nodes marked by tiny diamond or circular ticks that illuminate to cyan on active or hover states.
- Clean two-column alignment: Left column contains monospace date bounds, right column contains company, role, impact bullets, and tagged technologies.