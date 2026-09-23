# Sathyamoorthy — Portfolio Website

A single-page personal portfolio website for **Sathyamoorthy**, a Website/UI-UX Designer. Built as a dark-themed, one-page site showcasing services, work samples, clients, and a contact form.

**Live site:** [sathyamoorthy.netlify.app](https://sathyamoorthy.netlify.app)

---

## 🖤 Overview

This site follows a classic one-page designer-portfolio layout with a fixed top navbar and smooth-scrolling sections. It uses a dark background with a bright yellow accent color (`SM` logo) and bold white typography.

## 📑 Sections

| Section | Description |
|---|---|
| **Home** | Hero intro — "Hello, I'm Sathyamoorthy, Website Designer" with profile photo, short bio, and a "Hire Me" CTA button |
| **Nav Menu** | Overlay/dropdown menu with links: Home, About, Portfolio, Clients, Contact |
| **What I Do** | Bio paragraph + 3 service cards: **UI/UX Design**, **Website Design**, **App Design** |
| **My Portfolio** | 2-column grid of 6 project thumbnail images with a "See More" button |
| **My Clients** | Logo grid of companies worked with: Walmart, Adobe, Microsoft, Facebook |
| **Contact Me** | Contact form (Name, Email, Message) with Submit button, plus social icons (Instagram, Facebook, Twitter, YouTube) |
| **Footer** | Copyright notice — "© 2025 sathyamoorthy. All rights received." |

## 🎨 Design

- **Theme:** Dark mode (near-black background)
- **Accent color:** Bright yellow (logo, highlights, underline on active nav item)
- **Typography:** Bold, large sans-serif headings; lighter body text
- **Buttons:** Rounded white pill buttons ("Hire Me", "Submit", "See More")
- **Layout:** Fully responsive, mobile-first (screenshots taken on a mobile browser)

## 🛠️ Suggested Tech Stack

*(Inferred from layout — adjust to match your actual implementation)*

- HTML5, CSS3, JavaScript
- Hosted/deployed via **Netlify**
- Icons: Simple brand icons (Instagram, Facebook, Twitter/X, YouTube)

## 📂 Suggested Project Structure

```
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/        # profile photo, portfolio thumbnails, client logos
│   └── icons/          # social icons
└── README.md
```

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone <repo-url>
   ```
2. Open `index.html` in your browser, or serve locally:
   ```bash
   npx serve .
   ```
3. Deploy changes by pushing to your connected Netlify site (or drag-and-drop the build folder into Netlify).

## ✍️ Notes / Improvements to Consider

- The **What I Do** service cards currently use placeholder text ("This a demo text") — replace with real descriptions.
- Minor copy fixes: *"experience...bussiness"* → "business", *"a Icon style"* → "an eye", *"copyright...All right received"* → "All rights reserved."
- Consider adding real project links/case studies behind "See More."
- Contact form currently has no visible backend — hook it up to a form service (e.g., Netlify Forms, Formspree) if not already done.

## 📧 Contact

Use the **Contact Me** form on the site, or reach out via the linked social profiles (Instagram, Facebook, Twitter, YouTube).

---
*README generated based on site screenshots — update sections above to match the actual source code.*
