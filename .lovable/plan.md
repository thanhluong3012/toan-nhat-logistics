

## Plan: Fix Contact Form Layout + Redesign Warehouse Banner

### 1. Fix Contact Form Dialog Layout

The current form dialog uses `fixed inset-4` on mobile and manual centering on desktop. Issues to fix:
- Ensure proper vertical/horizontal centering on all screen sizes
- Fix the grid layout (2-col info + 3-col form) so it aligns cleanly
- Add proper max-height with scroll for smaller screens
- Ensure the mobile layout stacks properly (info on top, form below)

Changes to `ContactFormDialog.tsx`:
- Use proper `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` centering consistently
- Add `max-h-[90vh] overflow-y-auto` for all breakpoints
- Tighten padding and spacing for better alignment
- Fix mobile responsive stacking

### 2. Redesign Warehouse Page Banner

Current banner uses a side-by-side grid (content left, image right). Will redesign to a more impactful full-width banner style:
- Full-width hero image as background with dark gradient overlay
- Centered content with warehouse stats displayed as floating glass cards
- Animated badge and CTA button
- Different visual style from other pages (Road = diagonal split, Rail = parallax counter, About = cinematic)

Changes to `Warehouse.tsx`:
- Replace the 2-column grid hero with a full-bleed background image hero
- Add floating stat cards overlapping the bottom of the banner
- Use glassmorphism effect for the stat indicators
- Keep all existing content sections below unchanged

