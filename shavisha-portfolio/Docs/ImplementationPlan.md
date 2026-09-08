# Document 06 — Implementation Plan

### Shavisha Thiloshini Personal Portfolio Website

**Version:** 1.0
**Status:** Final Planning Document
**Development Model:** Frontend-first, component-driven, iterative

---

# 1. Implementation Objective

The goal is to transform the approved PRD, TRD, App Flow, UI/UX Brief, and Backend Schema into a **production-ready personal portfolio website**.

The implementation should prioritize:

1. 🎨 Visual identity
2. 🧩 Clean component architecture
3. 🌀 Tasteful 3D interaction
4. 📱 Responsive behavior
5. ⚡ Performance
6. ♿ Accessibility
7. 💼 Recruiter usability
8. 🔍 SEO
9. 🚀 Deployment readiness

---

# 2. Development Strategy

The website will be built in phases rather than attempting everything simultaneously.

```text id="0v0f9x"
Phase 01
Project Setup
      ↓
Phase 02
Design System
      ↓
Phase 03
Core Layout
      ↓
Phase 04
Hero + 3D
      ↓
Phase 05
Content Sections
      ↓
Phase 06
Projects
      ↓
Phase 07
Experience + Education
      ↓
Phase 08
Contact + CV
      ↓
Phase 09
Responsive + Accessibility
      ↓
Phase 10
Testing + Optimization
      ↓
Phase 11
SEO + Deployment
```

---

# 3. Phase 01 — Project Setup

### Tasks

* Create React + Vite project
* Configure Tailwind CSS
* Configure routing if required
* Install required libraries
* Configure Git
* Create initial repository
* Establish folder structure
* Configure global styles
* Configure fonts

### Initial dependencies

Potential stack:

```text id="sq5o9b"
React
Vite
Tailwind CSS
Three.js
React Three Fiber
Drei
Motion
Lucide React
```

GSAP should only be added if a specific animation actually requires it.

### Deliverable

A clean project that runs successfully with:

```text id="fxg4v0"
npm run dev
```

---

# 4. Phase 02 — Design System

Before creating sections, establish the visual foundation.

### Tasks

Create:

* color variables
* typography system
* spacing system
* border-radius system
* button styles
* card styles
* container system
* responsive breakpoints
* animation utilities

### Required fonts

**Bricolage Grotesque**

for major headings.

**Instrument Sans**

for body/UI text.

### Deliverable

A reusable design system that prevents every component from developing its own visual language.

---

# 5. Phase 03 — Application Structure

Create the main architecture.

Suggested structure:

```text id="7q6h3p"
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── models/
│   └── fonts/
│
├── components/
│   ├── common/
│   ├── navigation/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── experience/
│   ├── education/
│   ├── beyond-code/
│   ├── resume/
│   ├── contact/
│   └── 3d/
│
├── data/
│   ├── projects.js
│   ├── skills.js
│   ├── education.js
│   ├── experience.js
│   └── socialLinks.js
│
├── hooks/
│
├── utils/
│
├── sections/
│
├── styles/
│
├── App.jsx
└── main.jsx
```

---

# 6. Phase 04 — Navigation

Build the navigation before the major sections.

### Desktop

Implement:

* logo/name
* navigation links
* active section indicator
* CV button

### Mobile

Implement:

* compact header
* menu button
* animated mobile menu
* accessible keyboard navigation

### Scroll behavior

Implement:

* transparent initial state
* compact sticky state
* subtle blur
* section highlighting

### Test

Navigation must correctly scroll to every section.

---

# 7. Phase 05 — Hero Section

This is the first major visual implementation.

### Build

* Hero typography
* introduction
* CTA buttons
* social links
* background atmosphere
* 3D canvas
* responsive positioning

### Hero hierarchy

```text id="m4l7o1"
Name
 ↓
Professional Identity
 ↓
Short Introduction
 ↓
CTA
 ↓
Social Links
```

---

# 8. Phase 06 — 3D System

The 3D experience should be developed separately from normal UI components.

Suggested architecture:

```text id="t8i0m4"
3D/
├── PortfolioScene.jsx
├── MainObject.jsx
├── CameraRig.jsx
├── Lighting.jsx
├── Particles.jsx
└── Environment.jsx
```

### Implementation order

**Step 1**

Create canvas.

**Step 2**

Add camera.

**Step 3**

Add lighting.

**Step 4**

Create/import primary object.

**Step 5**

Add materials.

**Step 6**

Add subtle animation.

**Step 7**

Add mouse interaction.

**Step 8**

Add scroll interaction.

**Step 9**

Optimize.

**Step 10**

Create fallback.

---

# 9. 3D Performance Rules

The 3D scene must not become the reason the portfolio loads slowly.

### Desktop

Full 3D experience.

### Tablet

Reduced complexity.

### Mobile

Simplified scene or static fallback where appropriate.

### Avoid

* unnecessarily high-poly models
* huge textures
* excessive particles
* multiple complex animated models
* continuous expensive calculations

---

# 10. Phase 07 — About Section

Build:

* section heading
* introduction
* supporting information
* subtle visual element

The section should deliberately contrast with the hero.

Hero:

**High energy**

About:

**Calm + personal**

---

# 11. Phase 08 — Skills

Implement structured skill categories.

### Required categories

```text id="o3z5g8"
Frontend Development
UI / UX Design
Programming
Tools
```

### UI

Use aligned cards.

Each card contains:

* category
* icon
* skills
* optional experience indicator

### Important

**No floating skill system.**

The final implementation must preserve the structured layout defined in the UI/UX brief.

---

# 12. Phase 09 — Projects

Projects should receive substantial development time.

### Step 1

Create reusable project data schema.

### Step 2

Create featured project component.

### Step 3

Create project visual container.

### Step 4

Add technology tags.

### Step 5

Add project description.

### Step 6

Add contribution information.

### Step 7

Add GitHub/live links.

### Step 8

Add hover animations.

### Step 9

Add scroll reveal.

### Step 10

Optimize project images.

---

# 13. Featured Project Order

The final project order should be determined by:

1. technical depth
2. visual quality
3. relevance
4. completion
5. user's contribution
6. recruiter value

A likely initial set:

```text id="w9h1cc"
01 — FrogFocus
02 — Smart Clinic
03 — ZoneEdan
04 — CosmoKeys
```

Then:

**Additional Projects**

* Penny Forest
* Habity
* other completed work

This should remain data-driven so the order can be changed easily.

---

# 14. Phase 10 — Experience

Create reusable timeline components.

Each entry:

```text id="4v8kpk"
Date
Title
Organization
Description
Highlights
```

Animation:

* timeline line appears
* item fades upward
* content becomes visible

Animation should trigger once as the item enters the viewport.

---

# 15. Phase 11 — Education

Build a chronological education timeline.

Current education should receive stronger emphasis.

```text id="z3l1s6"
2026–2027
BSc Software Engineering (Top-up)
Reading
IN PROGRESS
```

Completed education should have a visually distinct status.

---

# 16. Phase 12 — Beyond Code

Create four focused content blocks:

### Communication

### Teaching

### Continuous Learning

### Teamwork

This section should add personality without becoming another skills grid.

---

# 17. Phase 13 — CV / Resume

Implement:

### Hero CTA

**Download CV**

### Navigation CTA

**Download CV**

### Dedicated section

Brief resume introduction + download action.

The CV PDF should be stored in an appropriate public/static asset location.

Example:

```text id="x7e9v0"
public/
└── Shavisha-Thiloshini-CV.pdf
```

The filename should be professional and stable.

---

# 18. Phase 14 — Contact

Implement:

### Contact CTA

> Let's build something.

### Direct links

* Email
* GitHub
* LinkedIn

### Optional form

Fields:

* Name
* Email
* Message

Implement:

* validation
* loading state
* success state
* error state

---

# 19. Contact Backend Implementation

Start with the simplest solution.

### Preferred sequence

```text id="q5m9dk"
Contact UI
   ↓
Validation
   ↓
Serverless/Form Service
   ↓
Email Notification
```

Do **not** build a complete backend server unless the selected contact solution genuinely requires one.

---

# 20. Phase 15 — Footer

Implement:

* name
* professional identity
* social links
* copyright
* optional back-to-top control

Keep it visually quiet.

---

# 21. Phase 16 — Responsive Development

Responsive work should happen **before** final polish.

Test:

### Desktop

1920px
1440px
1280px

### Tablet

1024px
768px

### Mobile

430px
390px
375px

The exact testing devices can vary, but these viewport ranges should be represented.

---

# 22. Mobile-Specific Work

Check:

* navigation
* hero
* 3D
* typography
* buttons
* project layouts
* timelines
* contact form
* footer

Especially check that:

**No horizontal scrolling exists.**

---

# 23. Phase 17 — Accessibility

Perform a dedicated accessibility pass.

### Check

* keyboard navigation
* focus states
* semantic headings
* labels
* button names
* image alt text
* color contrast
* reduced motion
* mobile touch targets

### Reduced Motion

Respect:

```text id="7d0e9x"
prefers-reduced-motion
```

3D and scroll animations should become significantly calmer when enabled.

---

# 24. Phase 18 — Testing

Testing should happen in multiple layers.

### Functional Testing

Check:

* navigation
* buttons
* CV download
* external links
* contact form
* mobile menu
* project links
* scroll behavior

### Visual Testing

Check:

* spacing
* typography
* alignment
* responsive layout
* hover states
* animations
* 3D positioning

### Browser Testing

At minimum:

* Chrome
* Edge
* Firefox
* mobile browser

---

# 25. Phase 19 — 3D Testing

Specifically test:

### Mouse

Does movement feel natural?

### Scroll

Does camera/object movement remain smooth?

### Performance

Does FPS remain reasonable?

### Mobile

Does the 3D scene remain usable?

### WebGL Failure

Does the fallback appear correctly?

### Reduced Motion

Does the 3D experience reduce appropriately?

---

# 26. Phase 20 — Performance Optimization

Before deployment:

### Images

* compress
* use appropriate formats
* lazy-load where possible

### JavaScript

* remove unused dependencies
* lazy-load heavy components
* split 3D code where appropriate

### 3D

* optimize models
* reduce geometry
* reduce particles
* avoid unnecessary renders

### Fonts

Load only required font weights.

---

# 27. Phase 21 — SEO

Implement:

### Page title

Example concept:

**Shavisha Thiloshini | Software Engineering Student & Frontend Developer**

### Meta description

A concise description of:

* software engineering
* frontend development
* UI/UX
* projects
* portfolio

### Additional

* Open Graph metadata
* social preview image
* favicon
* semantic HTML
* proper heading hierarchy

---

# 28. Phase 22 — Final Content Review

Before deployment, verify every piece of content.

### Personal information

* name
* email
* GitHub
* LinkedIn

### Education

* dates
* institution names
* qualification names
* current status

### Projects

* descriptions
* technologies
* links
* contribution

### Experience

* dates
* descriptions
* organization

### CV

* latest version
* correct download

No placeholder content should remain.

---

# 29. Phase 23 — Git Workflow

Recommended commit structure:

```text id="x7hl3q"
feat: initialize portfolio project
feat: add design system
feat: build navigation
feat: create hero section
feat: add 3d hero scene
feat: add about section
feat: add skills section
feat: add project showcases
feat: add experience and education
feat: add contact section
feat: improve responsive layout
fix: mobile navigation issue
fix: 3d performance issue
perf: optimize portfolio assets
feat: add seo metadata
chore: prepare production deployment
```

Keep commits focused.

---

# 30. Phase 24 — Production Build

Run:

```text id="g7b0qh"
npm run build
```

Then inspect:

* build errors
* warnings
* asset sizes
* missing files
* broken imports
* console errors

Test the production build locally before deployment.

---

# 31. Phase 25 — Deployment

Recommended deployment options:

### Option A

**Vercel**

### Option B

**Netlify**

### Option C

**GitHub Pages**

The final choice can depend on the project's 3D asset handling and the user's preferred deployment workflow.

---

# 32. Post-Deployment Testing

After deployment, test the **actual production URL**.

Check:

* homepage loading
* navigation
* 3D
* animations
* CV download
* project links
* GitHub links
* LinkedIn link
* contact form
* mobile layout
* browser console
* HTTPS
* favicon
* social preview

---

# 33. Recommended Build Order

The actual coding order should be:

```text id="x4o4r7"
01. Project Setup
        ↓
02. Design System
        ↓
03. Global Layout
        ↓
04. Navigation
        ↓
05. Hero
        ↓
06. 3D Hero
        ↓
07. About
        ↓
08. Skills
        ↓
09. Projects
        ↓
10. Experience
        ↓
11. Education
        ↓
12. Beyond Code
        ↓
13. Resume
        ↓
14. Contact
        ↓
15. Footer
        ↓
16. Responsive
        ↓
17. Accessibility
        ↓
18. Testing
        ↓
19. Performance
        ↓
20. SEO
        ↓
21. Deployment
        ↓
22. Final QA
```

---

# 34. Definition of Done

The portfolio is considered complete only when:

### Design

* [ ] Visual system implemented
* [ ] Typography consistent
* [ ] Colors consistent
* [ ] Spacing consistent
* [ ] No unnecessary visual clutter

### Functionality

* [ ] Navigation works
* [ ] Mobile menu works
* [ ] CV downloads correctly
* [ ] Project links work
* [ ] Social links work
* [ ] Contact functionality works

### 3D

* [ ] Hero 3D works
* [ ] Mouse interaction works
* [ ] Scroll interaction works
* [ ] Mobile behavior works
* [ ] Reduced motion supported
* [ ] Fallback implemented

### Responsive

* [ ] Desktop
* [ ] Tablet
* [ ] Mobile
* [ ] No horizontal overflow

### Accessibility

* [ ] Keyboard navigation
* [ ] Focus states
* [ ] Semantic structure
* [ ] Contrast
* [ ] Reduced motion

### Performance

* [ ] Optimized images
* [ ] Optimized 3D
* [ ] No unnecessary dependencies
* [ ] Production build succeeds

### SEO

* [ ] Title
* [ ] Description
* [ ] OG metadata
* [ ] Favicon
* [ ] Semantic headings

### Deployment

* [ ] Production deployment successful
* [ ] Production URL tested
* [ ] All major links verified
* [ ] Final QA completed

---

# 35. Final Six-Document Architecture

We now have the complete planning foundation:

| #  | Document                | Purpose                           | Status |
| -- | ----------------------- | --------------------------------- | ------ |
| 01 | **PRD**                 | What we're building and why       | ✅      |
| 02 | **TRD**                 | How we're technically building it | ✅      |
| 03 | **App Flow**            | How visitors move through it      | ✅      |
| 04 | **UI/UX Design Brief**  | How it looks and behaves          | ✅      |
| 05 | **Backend Schema**      | What data/services are required   | ✅      |
| 06 | **Implementation Plan** | How we'll actually build it       | ✅      |

---

# 🎯 Final Project Blueprint

```text
                    SHAVISHA PORTFOLIO
                           │
                           ▼
                 ┌──────────────────┐
                 │      HERO        │
                 │ Typography + 3D  │
                 └────────┬─────────┘
                          ↓
                 ┌──────────────────┐
                 │      ABOUT       │
                 └────────┬─────────┘
                          ↓
                 ┌──────────────────┐
                 │     SKILLS       │
                 │ Structured Grid  │
                 └────────┬─────────┘
                          ↓
                 ┌──────────────────┐
                 │    PROJECTS      │
                 │  Case Studies    │
                 └────────┬─────────┘
                          ↓
              ┌───────────┴───────────┐
              ↓                       ↓
       ┌──────────────┐        ┌──────────────┐
       │ EXPERIENCE   │        │  EDUCATION   │
       └──────┬───────┘        └──────┬───────┘
              └───────────┬───────────┘
                          ↓
                 ┌──────────────────┐
                 │   BEYOND CODE    │
                 └────────┬─────────┘
                          ↓
                 ┌──────────────────┐
                 │   DOWNLOAD CV    │
                 └────────┬─────────┘
                          ↓
                 ┌──────────────────┐
                 │     CONTACT      │
                 │ Let's build.     │
                 └────────┬─────────┘
                          ↓
                       FOOTER
```
