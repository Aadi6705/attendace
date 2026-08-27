# Design.md — Visual Design Guidelines

No specific visual direction was provided, so this sets a clean, simple, professional-looking default suited to a single-page college project demo. Treat these as sensible defaults — adjust freely if you have a preference.

## 1. Design Principles
- Clean and minimal — the data (attendance/marks) should be the focus, not decoration.
- Readable at a glance — clear tables, generous spacing, no clutter.
- No component libraries required (plain CSS is enough for this scope).

## 2. Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary (buttons, headers) | Deep Blue | `#1E3A8A` |
| Primary hover | Slightly lighter blue | `#2547A8` |
| Accent (highlights, good attendance) | Teal Green | `#0F9D58` |
| Warning (low attendance, e.g. <75%) | Amber | `#F59E0B` |
| Background | Off-white | `#F7F8FA` |
| Card / surface background | White | `#FFFFFF` |
| Text — primary | Dark Slate | `#1F2937` |
| Text — secondary | Muted Gray | `#6B7280` |
| Border / divider | Light Gray | `#E5E7EB` |
| Error | Red | `#DC2626` |

## 3. Typography
- **Font family:** `Inter`, falling back to system sans-serif (`-apple-system, Segoe UI, Roboto, sans-serif`).
- **Headings:** Semi-bold (600), Dark Slate color.
  - Page title: 24px
  - Section headings (e.g., "Attendance", "Marks"): 18px
- **Body text:** Regular (400), 14–16px, Dark Slate.
- **Table headers:** Semi-bold, 13px, uppercase, Muted Gray, letter-spacing slightly increased.
- **Table cell text:** Regular, 14px.

## 4. Layout
- Single centered column, max width ~700–800px, on the off-white background.
- A white "card" (rounded corners, subtle shadow) contains the search box.
- A second white card (appears after search) contains the student profile + attendance table + marks table, stacked vertically.
- Generous padding inside cards (24px) and spacing between sections (16–24px).

## 5. Components

**Search bar**
- Rounded input field with light gray border, focus state uses the Primary blue border.
- Search button: solid Primary blue background, white text, rounded corners, hover state uses Primary hover color.

**Student profile block**
- Name as a slightly larger heading, roll number/course/semester as secondary muted text underneath.

**Tables (Attendance / Marks)**
- Simple bordered or striped rows (alternating white / very light gray `#F9FAFB`).
- Right-align numeric columns (percentage / marks).
- Optional: color-code attendance percentage — green text if ≥75%, amber/red if below — to make it visually easy to spot at-risk attendance.

**Empty / error states**
- Centered, muted-gray text with a short friendly message (e.g., "No student found with that roll number.").
- Error messages use the Error red color, not gray.

## 6. Responsiveness
- Should be usable on a laptop screen at minimum (primary use case: demo on a laptop).
- Basic responsiveness (stacking, no horizontal scroll on tables) is a nice-to-have, not a hard requirement for v1.
