# Animated Buttons UI

A modern collection of **5 reusable animated buttons** built with pure **HTML, CSS, and JavaScript**.

Designed for developers who want polished, professional, and responsive button interactions without adding a UI framework or animation library.

The collection includes magnetic movement, animated gradients, border tracing, dynamic click ripples, and loading-to-success micro-interactions.

---

## Preview

### Included Buttons

| # | Button | Interaction |
|---|---|---|
| 01 | Magnetic Glow | Cursor-following movement with an interactive glow |
| 02 | Gradient Flow | Smooth animated gradient transition on hover |
| 03 | Border Trace | Rotating luminous border with hover acceleration |
| 04 | Dynamic Ripple | Ripple animation generated from the exact click position |
| 05 | Success Morph | Submit → Loading → Success state animation |

---

## Features

- 5 unique animated button styles
- Modern dark UI design
- Smooth hover and click micro-interactions
- Responsive layout
- Laptop-friendly compact design
- Pure HTML, CSS, and JavaScript
- No frameworks
- No animation libraries
- No JavaScript dependencies
- Reusable button components
- Keyboard focus styles
- Mobile-friendly
- Easy to customize
- Suitable for landing pages, dashboards, SaaS products, portfolios, admin panels, and web applications

---

## Project Structure

```text
animated-buttons/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

### 2. Open the project

```bash
cd YOUR-REPOSITORY
```

### 3. Run it

No build process is required.

Open `index.html` directly in your browser, or use a local development server such as Visual Studio Code Live Server.

---

## Usage

You can use the complete showcase or copy only the button you need.

For an individual button, copy:

1. Its HTML markup from `index.html`
2. Its corresponding CSS section from `style.css`
3. Its JavaScript logic from `script.js` if the button requires JavaScript

Some animations are CSS-only, while interactive effects such as magnetic movement, ripple positioning, and success states use JavaScript.

---

# Button 01 — Magnetic Glow

A modern call-to-action button that subtly follows the cursor while displaying a soft interactive glow.

### HTML

```html
<button class="btn magnetic-btn">
  <span class="magnetic-glow"></span>

  <span class="btn-content">
    Explore

    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </span>
</button>
```

### JavaScript

The magnetic button requires the mouse interaction logic included in `script.js`.

---

# Button 02 — Gradient Flow

A clean CTA button with a gradient layer that smoothly flows into view on hover.

### HTML

```html
<button class="btn gradient-btn">
  <span class="gradient-layer"></span>

  <span class="btn-content">
    Get Started

    <span class="arrow-circle">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  </span>
</button>
```

This button is primarily CSS-driven and does not require custom JavaScript.

---

# Button 03 — Border Trace

A dark button with an animated conic-gradient border and glowing status indicator.

### HTML

```html
<button class="btn border-btn">
  <span class="border-animation"></span>

  <span class="border-inner">
    <span class="status-dot"></span>
    Live Preview
  </span>
</button>
```

This animation is handled entirely with CSS.

---

# Button 04 — Dynamic Ripple

A light-style button that creates a ripple from the exact position where the user clicks.

### HTML

```html
<button class="btn ripple-btn">
  <span class="btn-content">
    <svg class="download-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>

    Download
  </span>
</button>
```

### JavaScript

The ripple origin is calculated dynamically from the user's click position using the JavaScript included in `script.js`.

---

# Button 05 — Success Morph

A button designed for form submissions and asynchronous actions.

It transitions through:

```text
Submit → Loading → Done
```

### HTML

```html
<button class="btn success-btn">
  <span class="default-state">
    Submit

    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  </span>

  <span class="loading-state">
    <span class="loader"></span>
  </span>

  <span class="completed-state">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>

    Done
  </span>
</button>
```

The included demo uses a timeout to simulate an asynchronous operation.

For production applications, replace the simulated timeout with your API request, form submission, upload, or other asynchronous operation.

Example:

```javascript
button.addEventListener("click", async () => {
  if (button.classList.contains("loading")) return;

  button.classList.add("loading");

  try {
    await submitForm();

    button.classList.remove("loading");
    button.classList.add("completed");
  } catch (error) {
    button.classList.remove("loading");

    console.error(error);
  }
});
```

---

## Customization

The project uses CSS custom properties for commonly used colors.

```css
:root {
  --background: #070910;
  --surface: rgba(255, 255, 255, 0.045);
  --surface-border: rgba(255, 255, 255, 0.08);

  --text: #f8f9ff;
  --text-muted: #9298a8;

  --purple: #7c5cff;
  --violet: #a855f7;
  --blue: #4f7cff;
  --cyan: #26d5ff;
  --green: #45e0a8;
}
```

Change these variables to quickly adapt the buttons to your product or brand.

You can also customize:

- Width and height
- Border radius
- Gradient colors
- Glow intensity
- Animation speed
- Hover movement
- Typography
- Icons
- Button labels
- Loading duration
- Success state

---

## Using a Button in an Existing Project

You do not need to copy the entire demo page.

For example, to use only the ripple button:

```html
<button class="btn ripple-btn">
  <span class="btn-content">
    Download
  </span>
</button>
```

Then copy the following CSS sections:

```text
GLOBAL BUTTON
BUTTON 04 — RIPPLE
```

Finally, copy only the ripple JavaScript logic from `script.js`.

This keeps your project lightweight and avoids including styles or scripts that you do not need.

---

## Accessibility

The buttons include visible keyboard focus styling using `:focus-visible`.

When integrating the components into a production application, also ensure that:

- Button labels clearly describe their action
- Icon-only buttons include an accessible name
- Disabled states use the native `disabled` attribute
- Loading buttons prevent duplicate submissions
- Form submission buttons use `type="submit"`
- Non-submit controls use `type="button"`
- Decorative SVG icons use `aria-hidden="true"`

Example:

```html
<button type="button" class="btn magnetic-btn">
  Explore
</button>
```

---

## Reduced Motion

For applications with strict accessibility requirements, you can add reduced-motion support:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This respects users who have requested reduced motion through their operating system or browser settings.

---

## Responsive Design

The showcase layout automatically adapts to different screen sizes.

### Desktop

```text
[ Button 01 ] [ Button 02 ] [ Button 03 ]
      [ Button 04 ] [ Button 05 ]
```

### Tablet

The cards switch to a two-column layout.

### Mobile

All button cards are displayed in a single column.

The project also includes a compact layout for laptops with shorter viewport heights so the full showcase can fit more comfortably without unnecessary scrolling.

---

## Browser Support

The project is designed for modern browsers, including recent versions of:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Opera

Some visual effects such as `backdrop-filter` may appear slightly different depending on browser support.

---

## Dependencies

Runtime dependencies:

```text
None
```

The project uses:

- HTML5
- CSS3
- Vanilla JavaScript

The demo optionally loads the **Inter** font from Google Fonts.

If you prefer a completely self-hosted implementation, remove the Google Fonts links and use a local or system font stack.

Example:

```css
font-family:
  Inter,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

---

## Production Integration Notes

When using these buttons in a production application:

- Connect button actions to real application logic
- Handle API errors and rejected requests
- Disable controls during active submissions where appropriate
- Avoid duplicate event listeners
- Use semantic button types
- Test keyboard navigation
- Test touch interactions
- Respect reduced-motion preferences
- Minify CSS and JavaScript during your production build if required

The provided code is intentionally framework-independent so it can be integrated into almost any frontend stack.

---

## Framework Integration

These components can also be adapted for:

- React
- Next.js
- Vue
- Nuxt
- Angular
- Svelte
- SvelteKit
- Astro
- Laravel Blade
- Django Templates
- WordPress themes
- Static HTML websites

When converting to a component-based framework, move each button's styles and interaction logic into the appropriate component lifecycle or event system.

---

## Contributing

Contributions are welcome.

If you would like to improve the project:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-button-animation
```

3. Make your changes
4. Test the changes on desktop and mobile
5. Commit your changes

```bash
git commit -m "Add new button animation"
```

6. Push your branch

```bash
git push origin feature/new-button-animation
```

7. Open a Pull Request

Please keep contributions focused, reusable, responsive, and dependency-light.

---

## Issues and Feature Requests

If you find a bug or have an idea for another interaction, open a GitHub Issue with:

- A clear description
- Steps to reproduce the problem
- Browser and operating system
- Screenshots or recordings when helpful
- Expected behavior
- Actual behavior

Feature requests for additional button animations are also welcome.

---

## Suggested Repository Topics

You can add these topics to your GitHub repository:

```text
html
css
javascript
animated-buttons
button-animation
css-animation
micro-interactions
ui-components
frontend
web-design
hover-effects
vanilla-javascript
responsive-design
ui-ux
open-source
```

---

## License

This project can be distributed under the **MIT License**, allowing developers to use, modify, and include the components in personal and commercial projects.

Create a `LICENSE` file in the repository containing the official MIT License text and update the copyright holder and year.

---

## Support

If this project is useful to you, consider giving the repository a ⭐ on GitHub.

It helps other developers discover the project and supports continued improvements.

---

## Author

Created and maintained by **Sajid**.

Built with HTML, CSS, and JavaScript.

---

## Acknowledgements

This project focuses on lightweight UI micro-interactions that can be reused without requiring a frontend framework, component library, or third-party animation dependency.

---

<p align="center">
  <strong>Modern interactions. Zero dependencies.</strong>
</p>

<p align="center">
  Made with HTML, CSS & JavaScript.
</p>
