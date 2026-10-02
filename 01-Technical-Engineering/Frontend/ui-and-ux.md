# UI & UX Terminology

---

### RTL (Right-to-Left)
- **Pronunciation**: /ˌɑːr tiː ˈɛl/
- **Arabic**: من اليمين إلى اليسار
- **Definition**: A layout direction where text, UI components, and page flow move from right to left. Required for languages like Arabic and Hebrew. True RTL support means mirroring the entire interface — not just flipping text alignment.
- **Context**: Localization, Arabic-first applications, international products.
- **Usage Examples**:
  - *Formal*: "The storefront is built to be Arabic-first and fully RTL-compliant — the navigation, cards, and form inputs are all mirrored, not just the text."
  - *Casual*: "The padding is wrong in RTL — the icon is on the wrong side."
- **Common Mistake**: Using `text-align: right` and calling it RTL support. True RTL requires `dir="rtl"` on the HTML element, logical CSS properties (`margin-inline-start` instead of `margin-left`), and testing every component in both directions.
- **Related Terms**: LTR, Localization (L10n), Internationalization (i18n), `dir` attribute

---

### Responsive Design
- **Pronunciation**: /rɪˈspɒnsɪv dɪˈzaɪn/
- **Arabic**: التصميم المتجاوب
- **Definition**: A web design approach where the layout adapts fluidly to different screen sizes and devices — from mobile phones to desktop monitors — using flexible grids, media queries, and scalable images.
- **Context**: Frontend development, mobile-first design, cross-device testing.
- **Usage Examples**:
  - *Formal*: "The application uses a mobile-first responsive design, progressively enhancing the layout at tablet and desktop breakpoints."
  - *Casual*: "It looks great on desktop but completely breaks on mobile — the responsive design needs work."
- **Common Mistake**: Designing for desktop first and then trying to squeeze it into mobile. Mobile-first is the industry standard: start with the smallest screen, then add complexity for larger viewports.
- **Related Terms**: Media Queries, Breakpoints, Mobile-first, Viewport, Flexbox, Grid

---

### Accessibility (a11y)
- **Pronunciation**: /ˌæksɛsɪˈbɪlɪti/ (a11y = "a" + 11 letters + "y")
- **Arabic**: إمكانية الوصول
- **Definition**: Designing web applications so that people with disabilities (visual, motor, cognitive, auditory) can use them effectively. Includes proper HTML semantics, keyboard navigation, screen reader support, and sufficient color contrast.
- **Context**: Frontend development, compliance (WCAG), Lighthouse audits, inclusive design.
- **Usage Examples**:
  - *Formal*: "The photographer portfolio scored Lighthouse 100 on accessibility and SEO, with proper ARIA labels, keyboard navigation, and semantic HTML throughout."
  - *Casual*: "The button doesn't have an aria-label — screen readers won't know what it does."
- **Common Mistake**: Treating accessibility as an afterthought or a checkbox exercise. Baking it in from the start (semantic HTML, proper heading hierarchy, keyboard focus management) is far cheaper than retrofitting it later.
- **Related Terms**: WCAG, ARIA, Screen Reader, Lighthouse, Semantic HTML
