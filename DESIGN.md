---
name: Nexus Pipeline
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4fdbc8'
  on-secondary: '#003731'
  secondary-container: '#04b4a2'
  on-secondary-container: '#003f38'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
  surface-elevated: '#1E293B'
  data-flow-line: '#334155'
  success-glow: '#10B981'
  code-block-bg: '#020617'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 80px
---

## Brand & Style

The brand identity is engineered for a high-performance Data Engineer portfolio, targeting technical recruiters and engineering managers. It evokes the feeling of a sophisticated command center—precise, powerful, and interconnected.

The design style is **Corporate / Modern** infused with **Glassmorphism** and **High-Contrast** elements. It utilizes deep slate backgrounds to represent the "void" of unorganized data, while vibrant neon accents and thin lines represent the structured flow of data pipelines. The interface must feel like a premium developer tool: functional, fast, and technically superior.

## Colors

The palette is anchored by a deep **Slate (#0F172A)** background to ensure maximum readability for code and data visualizations. 

- **Primary (Electric Blue):** Used for primary actions, active states, and core pipeline nodes.
- **Secondary (Teal):** Used for success indicators, cloud-related tags, and secondary data streams.
- **Surface Tiers:** Use incremental shifts from Slate to Zinc to define depth without losing the dark-mode immersion.
- **Gradients:** Use subtle linear gradients (e.g., `primary` to `secondary` at 45 degrees) exclusively for high-impact areas like hero headlines or primary "Call to Action" buttons.

## Typography

The typography system balances geometric modernity with technical precision.

- **Headlines (Sora):** Wide, geometric apertures provide a tech-forward, high-end feel. Use for section titles and hero statements.
- **Body (Geist):** A high-legibility sans-serif optimized for reading technical documentation and project descriptions.
- **Labels & Code (JetBrains Mono):** Used for metadata, tech stacks, and actual code snippets. The monospaced nature reinforces the "Engineer" persona.
- **Visual Hierarchy:** Use `label-caps` in uppercase for small sub-headers like "TECH STACK" or "DURATION" to create a structured, tabular look.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain a structured, "dashboard" feel, transitioning to a fluid single-column for mobile.

- **Desktop (12-column):** 1200px max-width, 24px gutters. Use asymmetrical layouts (e.g., a 4-column sidebar for project meta and 8-column main for descriptions) to mimic technical IDEs.
- **Sectioning:** Large vertical gaps (80px+) between major sections (Experience, Projects, Skills) to allow the "data flow" line work to breathe.
- **Alignment:** Strict adherence to an 8px baseline grid to ensure the "precise" feel requested in the narrative.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Glassmorphism** rather than traditional heavy shadows.

- **Base Layer:** #0F172A (Background).
- **Secondary Layer:** #1E293B (Card backgrounds) with a 1px border of #334155.
- **Glass Effect:** Use `backdrop-filter: blur(12px)` with a semi-transparent hex (`#FFFFFF05`) and a subtle inner glow for modal overlays or navigation bars.
- **Glows:** Instead of drop shadows, use "Accent Glows." A low-opacity primary color blur (e.g., 20% opacity, 40px blur) placed behind key elements to suggest "power" or "connectivity."

## Shapes

The shape language is **Soft (0.25rem)**. While modern, it avoids being overly "bubbly" to maintain a serious, engineering-focused aesthetic. 

- **Containers:** Small border radii (4px-8px) maintain a sense of precision and modularity.
- **Interactive Elements:** Buttons and tags use the same consistent radius.
- **Connectivity Lines:** Use 1px paths with subtle 45-degree angled corners (rather than curves) to represent data pipelines.

## Components

### Buttons
- **Primary:** Solid Electric Blue with Geist Bold text. Interaction: Scale down slightly (0.98) on click and increase outer glow on hover.
- **Secondary/Ghost:** 1px Teal border, transparent background. Hover fills the background with 10% Teal.

### Cards (Project/Experience)
- Background: #1E293B. 
- Border: 1px solid #334155. 
- Top-left corner: A small "Node" icon or terminal-style dot to suggest a pipeline entry point.

### Tech Chips
- Small, monospaced text.
- Background: #020617 (Code-block-bg).
- Border: 1px solid #3B82F6 (Primary) at 30% opacity.

### Input Fields
- Dark background (#020617), subtle teal bottom-border only. 
- Focus state: Border expands to full container with a soft blue glow.

### Data Pipelines (Visual Component)
- Decorative 1px lines connecting section headers to content blocks. 
- Use an animated "pulse" effect (a small dot moving along the path) to represent active data movement.