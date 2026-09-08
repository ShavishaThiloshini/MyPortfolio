# ⚙️ Document 02 — Technical Requirement Document (TRD)

## **Shavisha Thiloshini — Personal Portfolio Website**

**Document Version:** 1.0
**Project Type:** Personal Portfolio / Interactive Web Application
**Status:** Technical Planning
**Related Document:** PRD v1.0

---

# 1. Technical Overview

The portfolio will be developed as a modern, responsive React web application with a strong emphasis on:

* Component-based architecture
* Interactive 3D experiences
* Smooth animation
* UI/UX quality
* Responsive behavior
* Accessibility
* Performance
* SEO
* Maintainability

The application will primarily be a **frontend application**.

A traditional backend/database will **not** be introduced unless a concrete requirement justifies it.

---

# 2. Proposed Technology Stack

| Category             | Technology                          |
| -------------------- | ----------------------------------- |
| Framework            | **React**                           |
| Build Tool           | **Vite**                            |
| Styling              | **Tailwind CSS**                    |
| 3D                   | **Three.js**                        |
| React 3D Integration | **React Three Fiber**               |
| 3D Utilities         | **Drei**                            |
| Animation            | **Motion / Framer Motion**          |
| Advanced Animation   | **GSAP**, where justified           |
| Icons                | **Lucide React**                    |
| Design               | **Figma**                           |
| Version Control      | **Git + GitHub**                    |
| Deployment           | **Netlify / Vercel / GitHub Pages** |
| Language             | **JavaScript / JSX**                |

The exact versions will be locked during project setup.

---

# 3. Architecture

The application will use a **component-based frontend architecture**.

High-level architecture:

```text
                    PORTFOLIO APP
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       UI Layer      3D Layer       Content Layer
          │              │              │
     React Components   R3F          Project Data
          │              │           Skills Data
          │              │           Education Data
          │              │           Experience Data
          │              │
          └──────────────┼──────────────┘
                         │
                   Animation Layer
                         │
                   Motion / GSAP
                         │
                    Deployment
```

---

# 4. Application Structure

The application should be organized into logical sections rather than placing everything inside a single large component.

Suggested structure:

```text
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
│   ├── resume/
│   ├── contact/
│   └── 3d/
│
├── data/
│   ├── projects.js
│   ├── skills.js
│   ├── education.js
│   └── experience.js
│
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── BeyondCode.jsx
│   ├── Resume.jsx
│   └── Contact.jsx
│
├── hooks/
│
├── utils/
│
├── styles/
│
├── App.jsx
└── main.jsx
```

The structure can be refined during implementation.

---

# 5. Component Architecture

Components should follow the **single-responsibility principle**.

For example:

```text
Hero
 ├── HeroText
 ├── HeroCTA
 └── HeroScene
      ├── Camera
      ├── Lighting
      └── MainObject
```

This prevents the 3D scene from becoming tightly coupled with the entire Hero component.

---

# 6. 3D Architecture

The 3D system will be isolated from normal UI components.

Suggested structure:

```text
3d/
│
├── PortfolioScene.jsx
├── MainObject.jsx
├── CameraRig.jsx
├── Lighting.jsx
├── Particles.jsx
└── Environment.jsx
```

### Main 3D Scene

The main scene will contain:

* Canvas
* Camera
* Lighting
* Environment
* Main 3D object
* Optional particles
* Interaction controls

---

# 7. 3D Technology

### React Three Fiber

React Three Fiber will be used to integrate Three.js into React.

Benefits:

* React-friendly 3D architecture
* Component-based scenes
* Easier state integration
* Reusable 3D components

### Drei

Drei can provide useful abstractions for:

* Camera controls
* Environments
* Lighting
* Text
* Loaders
* Helpers

Only required utilities should be used.

---

# 8. Hero 3D Interaction

The hero 3D object should respond subtly to the visitor.

Possible behavior:

```text
Mouse Movement
      ↓
Interaction Handler
      ↓
Normalized Coordinates
      ↓
3D Object / Camera Movement
      ↓
Smooth Interpolation
```

The movement should be damped rather than directly following the cursor.

This avoids an overly sensitive or distracting experience.

---

# 9. Scroll-Based 3D

Scroll position may influence:

* Object rotation
* Camera position
* Object scale
* Scene opacity
* Lighting intensity

Example:

```text
Scroll 0%
   ↓
Hero position

Scroll 30%
   ↓
Object rotates

Scroll 60%
   ↓
Object moves away

Scroll 100%
   ↓
Scene transitions out
```

The exact animation will be determined during UI/UX design and implementation.

---

# 10. Animation Architecture

Animation will be divided into two categories.

### UI Animation

Use:

**Motion / Framer Motion**

For:

* Fade-ins
* Slide-ins
* Hover states
* Section reveals
* Button interactions
* Layout transitions

### Advanced Timeline Animation

Use:

**GSAP**

Only when necessary for:

* Complex scroll timelines
* Coordinated 3D transitions
* Advanced sequencing
* Multi-element timelines

We should avoid using both libraries for the same simple animation.

---

# 11. Animation Principles

Animations should follow:

### Consistency

Similar interactions should behave similarly.

### Smoothness

Avoid abrupt movement unless intentional.

### Restraint

Not every element needs animation.

### Performance

Animations should preferably use GPU-friendly properties such as:

* `transform`
* `opacity`

### Accessibility

Support:

```text
prefers-reduced-motion
```

Users who prefer reduced motion should receive a simplified animation experience.

---

# 12. UI Architecture

The website will use reusable components.

Examples:

```text
Button
SectionHeading
ProjectCard
SkillCard
SocialLink
TimelineItem
GlassPanel
AnimatedText
```

This prevents duplicated UI logic.

---

# 13. Styling Architecture

Tailwind CSS will be the primary styling system.

A custom design system should be established for:

### Colors

* Background
* Surface
* Primary text
* Secondary text
* Accent
* Borders
* 3D glow colors

### Typography

* Display font
* Heading font
* Body font
* Supporting text

### Spacing

A consistent spacing scale should be established rather than manually choosing random values.

---

# 14. Typography

The portfolio should use a distinctive but professional typography combination.

The final fonts will be selected during the **UI/UX Design Brief**.

Requirements:

* Excellent readability
* Strong heading personality
* Good multilingual compatibility if needed
* Proper weight hierarchy
* Optimized loading

We should avoid relying on overly common "default portfolio" typography combinations.

---

# 15. Responsive Architecture

Responsive breakpoints will be designed around actual layout behavior rather than specific devices.

The application should support:

```text
Mobile
   ↓
Tablet
   ↓
Laptop
   ↓
Desktop
   ↓
Large Desktop
```

3D behavior should adapt accordingly.

---

# 16. Mobile 3D Strategy

The mobile version must not simply use the desktop 3D configuration.

Possible adaptations:

* Reduce geometry complexity
* Reduce particle count
* Reduce lighting complexity
* Reduce animation frequency
* Disable expensive effects
* Reduce camera movement
* Provide static fallback when necessary

The goal is to preserve the **visual concept** without sacrificing usability.

---

# 17. Content Architecture

Portfolio information should be separated from UI components.

Example:

```javascript
const projects = [
  {
    title: "FrogFocus",
    description: "...",
    technologies: [],
    image: "...",
    github: "...",
    liveDemo: "..."
  }
];
```

This allows project information to be updated without rewriting components.

---

# 18. Project Data Requirements

Each project may contain:

```text
id
title
shortDescription
fullDescription
category
technologies
features
role
image
gallery
githubUrl
liveUrl
featured
```

Not every field must be populated for every project.

---

# 19. Skills Data

Skills should also be stored as structured data.

Example categories:

```text
Frontend
UI/UX
Backend & Data
Programming
Tools
```

Each skill can include:

```text
name
category
icon
level
description
```

However, **skill levels should only be shown if they can be represented accurately and professionally**.

We should avoid arbitrary percentages such as "JavaScript 87%."

---

# 20. Education Data

Education will be represented chronologically.

Current entries include:

```text
BSc in Software Engineering (Top-up)
Reading
2026 – 2027

HND in Software Engineering
ESOFT Metro Campus
2025 – 2026
Completed

Diploma in Information Technology
ESOFT Metro Campus
2024 – 2025

Diploma in English
ESOFT Metro Campus
2024 – 2025
```

Additional qualifications from the CV can also be displayed. 

---

# 21. Experience Data

Experience entries should include:

```text
title
organization
year
description
skills
```

Current experience includes the AI Awareness Seminar and Hackathon participation. 

---

# 22. Backend Architecture

### Initial Decision

**No traditional backend is required for the core portfolio.**

The portfolio content is primarily static.

Architecture:

```text
React Application
       │
       ├── Static Portfolio Data
       ├── Static Assets
       ├── 3D Assets
       └── CV PDF
```

If a contact form requires external processing:

```text
Contact Form
      ↓
Validation
      ↓
Serverless / External Form Service
      ↓
Email / Notification
```

The exact implementation will be decided later.

---

# 23. Contact Form Requirements

If a contact form is implemented, it must include:

* Name
* Email
* Message
* Validation
* Loading state
* Success state
* Error state
* Spam protection where necessary

The form must never expose private API credentials in frontend code.

---

# 24. Asset Management

Assets should be categorized:

```text
images/
models/
icons/
fonts/
documents/
```

Large assets should be optimized before deployment.

3D models should use optimized formats such as GLTF/GLB where appropriate.

---

# 25. Image Optimization

Project images should be:

* Compressed
* Correctly sized
* Lazy loaded where appropriate
* Served in modern formats where supported

Large original screenshots should not be loaded unnecessarily.

---

# 26. 3D Performance Requirements

The 3D scene should be monitored for:

* Polygon count
* Draw calls
* Texture sizes
* Number of lights
* Particle count
* Animation complexity
* Memory consumption

Avoid unnecessarily complex models.

---

# 27. Loading Strategy

The application should provide an initial loading experience.

However:

### Target

The loading animation should be short.

We should avoid blocking the entire website while unnecessary assets load.

Potential strategy:

```text
Initial HTML/UI
      ↓
Render core interface
      ↓
Load 3D asynchronously
      ↓
Activate 3D experience
```

---

# 28. Error Handling

The application should gracefully handle:

* Failed image loads
* Failed 3D model loads
* Contact submission errors
* Missing project links
* Unsupported WebGL
* Network errors

3D failure should **not break the entire portfolio**.

---

# 29. Accessibility

Technical implementation should include:

* Semantic HTML
* ARIA only when necessary
* Keyboard-accessible controls
* Visible focus states
* Accessible buttons
* Accessible navigation
* Alt text
* Reduced-motion support

3D content should be considered **decorative unless it communicates important information**.

---

# 30. SEO

Technical SEO implementation should include:

```text
<title>
<meta description>
Open Graph metadata
Twitter/X metadata
Canonical URL
Semantic headings
Structured page content
Favicon
```

The portfolio should have a meaningful page title such as:

> **Shavisha Thiloshini | Software Engineering Student & Frontend Developer**

The exact final title will be confirmed during implementation.

---

# 31. Security

Because the portfolio is primarily frontend:

### Requirements

* No secrets inside source code
* No exposed private API keys
* Input validation
* Safe external links
* Secure contact handling
* Dependency updates
* Production build checks

---

# 32. Version Control

GitHub will be used for source control.

Recommended branch strategy:

```text
main
  │
  ├── development
  │
  ├── feature/hero
  ├── feature/projects
  ├── feature/3d
  └── feature/contact
```

For a solo project, a simplified workflow may also be used.

---

# 33. Environment Configuration

If environment variables are needed:

```text
.env
.env.example
```

Sensitive values must never be committed.

Example:

```text
VITE_CONTACT_SERVICE_KEY=
```

Only public frontend-safe variables may use the `VITE_` prefix.

---

# 34. Testing Requirements

Testing will cover:

### Functional

* Navigation
* Buttons
* Links
* CV download
* Contact form
* Project links

### Responsive

* Mobile
* Tablet
* Desktop

### Visual

* Spacing
* Typography
* Animations
* 3D rendering

### Performance

* Initial load
* Scroll performance
* 3D performance
* Asset loading

### Accessibility

* Keyboard navigation
* Focus
* Contrast
* Reduced motion

### Browser

* Chrome
* Edge
* Firefox
* Safari

---

# 35. Deployment Architecture

Initial production architecture:

```text
GitHub Repository
        │
        ▼
   Build Pipeline
        │
        ▼
  Production Build
        │
        ▼
Netlify / Vercel / GitHub Pages
        │
        ▼
Public Portfolio URL
```

The final deployment platform will be selected based on project requirements and deployment reliability.

---

# 36. Performance Targets

The project should aim for:

* Fast first render
* Smooth scrolling
* Stable animations
* Minimal layout shifts
* Optimized images
* Efficient 3D rendering

A performance audit should be performed before final deployment.

---

# 37. Maintainability

The codebase should be:

* Modular
* Readable
* Reusable
* Properly named
* Organized by responsibility
* Free of unnecessary duplication

Avoid creating giant components such as:

```text
App.jsx = 2,500 lines
```

😂

We are not summoning that demon.

---

# 38. Dependency Philosophy

Every dependency should have a clear purpose.

Proposed core dependencies:

```text
react
react-dom
tailwindcss
three
@react-three/fiber
@react-three/drei
motion
lucide-react
```

Additional dependencies should only be introduced when there is a genuine requirement.

---

# 39. Technical Constraints

The application should avoid:

* Excessive JavaScript bundles
* Unoptimized 3D models
* Heavy unnecessary libraries
* Excessive animation
* Unnecessary backend infrastructure
* Hardcoded repeated content
* Poor mobile performance

---

# 40. Technical Success Criteria

The implementation is technically successful when:

### Architecture

* Components are modular.
* Content is data-driven.
* 3D is isolated from standard UI.

### UI

* Responsive across screen sizes.
* Consistent design system.

### 3D

* Interactive.
* Smooth.
* Optimized.
* Gracefully degradable.

### Performance

* Fast initial rendering.
* Smooth scrolling.
* Optimized assets.

### Accessibility

* Keyboard accessible.
* Reduced-motion compatible.
* Good semantic structure.

### Deployment

* Production build succeeds.
* No critical runtime errors.
* Public URL works correctly.

---

# 41. Final Technical Architecture

```text
                         ┌─────────────────────┐
                         │      VISITOR        │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    React + Vite     │
                         └──────────┬──────────┘
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
                ▼                   ▼                   ▼
        ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
        │   UI Layer   │    │   3D Layer   │    │ Data Layer   │
        │ React/Tailwind│   │ R3F/Three.js │    │ Static Data  │
        └──────┬───────┘    └──────┬───────┘    └──────┬───────┘
               │                   │                   │
               └───────────────────┼───────────────────┘
                                   │
                                   ▼
                         ┌─────────────────────┐
                         │ Animation Layer     │
                         │ Motion / GSAP       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ Optimized Production│
                         │       Build         │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │      Hosting        │
                         │ Netlify/Vercel/etc. │
                         └─────────────────────┘
```

---