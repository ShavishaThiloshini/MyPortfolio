# 🔄 Document 03 — App Flow Document

## **Shavisha Thiloshini — Personal Portfolio Website**

**Document Version:** 1.0
**Project Type:** Interactive Personal Portfolio
**Related Documents:** PRD v1.0, TRD v1.0
**Status:** Planning

---

# 1. Purpose

The App Flow Document defines **how visitors navigate and experience the portfolio** from the moment they enter the website until they leave or contact Shavisha.

The flow is designed around one key principle:

> **A recruiter should never have to search for important information.**

The experience should naturally guide visitors through:

**Introduction → Identity → Skills → Work → Background → CV → Contact**

---

# 2. Overall User Journey

```text
                    VISITOR
                       │
                       ▼
              ┌────────────────┐
              │ Loading / Intro │
              └───────┬────────┘
                      │
                      ▼
              ┌────────────────┐
              │     HERO       │
              │   + 3D Scene   │
              └───────┬────────┘
                      │
             ┌────────┴────────┐
             │                 │
             ▼                 ▼
       View My Work        Download CV
             │
             ▼
        ┌──────────┐
        │  ABOUT   │
        └────┬─────┘
             │
             ▼
        ┌──────────┐
        │  SKILLS  │
        └────┬─────┘
             │
             ▼
       ┌────────────┐
       │  PROJECTS  │
       └─────┬──────┘
             │
             ▼
    ┌───────────────────┐
    │ EXPERIENCE        │
    │ + EDUCATION       │
    └─────────┬─────────┘
              │
              ▼
       ┌────────────┐
       │ BEYOND CODE│
       └─────┬──────┘
             │
             ▼
       ┌────────────┐
       │    CV      │
       └─────┬──────┘
             │
             ▼
       ┌────────────┐
       │  CONTACT   │
       └─────┬──────┘
             │
       ┌─────┴─────┐
       ▼           ▼
    Email       LinkedIn
       │           │
       └─────┬─────┘
             ▼
           EXIT
```

---

# 3. Entry Flow

When a visitor opens the portfolio:

```text
Portfolio URL
      ↓
Application loads
      ↓
Initial loading state
      ↓
Core UI rendered
      ↓
3D scene initialized
      ↓
Hero becomes interactive
```

The 3D scene should load without blocking the entire interface unnecessarily.

---

# 4. Loading Experience

The loading screen should be minimal.

### Concept

A short personal identity animation:

```text
S
SH
SHA
SHAV
SHAVI
SHAVISHA
```

Then:

```text
SHAVISHA THILOSHINI
```

transitions into the Hero.

### Requirements

* Short duration
* No unnecessary waiting
* Smooth transition
* Skip/block-free behavior where possible
* Reduced-motion alternative

---

# 5. Hero Flow

The Hero is the primary entry point.

### Content

```text
SHAVISHA THILOSHINI

Software Engineering Student
Frontend Developer • UI/UX Designer

[ VIEW MY WORK ]
[ DOWNLOAD CV ]
```

Alongside this:

### Interactive 3D Environment

The 3D element:

* Slowly moves/rotates
* Reacts to pointer movement
* Responds subtly to scroll
* Transitions out when leaving Hero

---

# 6. Hero CTA Flow

### CTA 1 — View My Work

```text
VIEW MY WORK
      ↓
Smooth scroll
      ↓
Projects section
```

### CTA 2 — Download CV

```text
DOWNLOAD CV
      ↓
CV file
      ↓
Browser download / document view
```

The CV action should be available immediately without requiring visitors to explore the entire website first.

---

# 7. Navigation Flow

The main navigation should allow direct access to major sections.

```text
HOME
ABOUT
SKILLS
PROJECTS
EXPERIENCE
EDUCATION
CONTACT
```

A visually distinct:

**DOWNLOAD CV**

button may remain available.

---

# 8. Sticky Navigation

The navigation can remain accessible as the user scrolls.

Behavior:

```text
Hero
 ↓
Navigation normal
 ↓
Scroll
 ↓
Navigation becomes compact/sticky
 ↓
Active section highlighted
```

The navigation should not consume excessive screen space.

---

# 9. About Flow

Visitor enters About:

```text
ABOUT
  ↓
Personal introduction
  ↓
Developer identity
  ↓
UI/UX interest
  ↓
Learning / communication
  ↓
Continue
```

The section should feel calmer than the Hero.

The visual intensity should reduce slightly to allow the visitor to focus on the content.

---

# 10. Skills Flow

The Skills section should use a **structured layout**.

### Important rule

❌ No floating technologies.

❌ No randomly positioned skill bubbles.

❌ No chaotic visual arrangement.

Instead:

```text
TECHNICAL SKILLS

┌─────────────┐ ┌─────────────┐
│  FRONTEND   │ │    UI/UX    │
│             │ │             │
│ HTML        │ │ Figma       │
│ CSS         │ │ UI Design   │
│ JavaScript  │ │ Prototyping │
│ React       │ │             │
└─────────────┘ └─────────────┘

┌─────────────┐ ┌─────────────┐
│ BACKEND     │ │    TOOLS    │
│ & DATA      │ │             │
│ Supabase    │ │ GitHub      │
│ PostgreSQL  │ │ MS Office   │
└─────────────┘ └─────────────┘
```

### Interaction

Hovering a skill card:

```text
Hover
 ↓
Subtle elevation
 ↓
Small visual highlight
 ↓
Optional description
```

Everything remains aligned and predictable.

---

# 11. Projects Flow

This is one of the main conversion points.

```text
PROJECTS
    ↓
Featured Projects
    ↓
Project Preview
    ↓
Project Details
    ↓
Technology Stack
    ↓
Key Features
    ↓
Your Contribution
    ↓
GitHub / Live Demo
```

---

# 12. Featured Project Interaction

A visitor encounters a featured project.

Example:

```text
FROGFOCUS

Study Session Timer

React • Tailwind • Supabase • PostgreSQL

[ VIEW PROJECT ]
```

On interaction:

```text
Hover
 ↓
Project visual expands
 ↓
Details become visible
```

On clicking:

```text
VIEW PROJECT
      ↓
Project case-study view
```

Depending on implementation, this can be:

* Dedicated project page
* Modal
* Expanded project section

The final choice will be determined during UI/UX design.

---

# 13. Project External Link Flow

### GitHub

```text
GitHub
 ↓
New browser tab
 ↓
Repository
```

### Live Demo

```text
Live Demo
 ↓
New browser tab
 ↓
Deployed project
```

External links should not unexpectedly remove the visitor from the portfolio.

---

# 14. Experience Flow

After Projects:

```text
EXPERIENCE
    ↓
AI Awareness Seminar
    ↓
Hackathon Participation
```

Each entry can reveal:

* Role/activity
* Organization
* Year
* Description
* Skills demonstrated

The timeline should animate as it enters the viewport.

---

# 15. Education Flow

The Education section follows Experience.

```text
EDUCATION
    ↓
2026–2027
BSc Software Engineering (Top-up)
Reading
    ↓
2025–2026
HND Software Engineering
Completed
    ↓
2024–2025
Diploma in IT
    ↓
2024–2025
Diploma in English
    ↓
Additional Qualifications
```

The timeline should clearly distinguish:

**Current / Reading**

from:

**Completed**

This is especially important because the BSc is currently being read.

---

# 16. Beyond Code Flow

After Education:

```text
BEYOND CODE
      ↓
Communication
      ↓
Presentation
      ↓
Teaching
      ↓
Student Engagement
      ↓
Mentoring / Guidance
```

This section demonstrates that the portfolio owner is more than just a collection of technical skills.

The communication and teaching capabilities are supported by the CV's AI seminar and teaching/communication information.  

---

# 17. Resume Flow

The visitor reaches the Resume section.

```text
READY TO KNOW MORE?

[ DOWNLOAD MY CV ]

[ VIEW CV ]
```

Possible flow:

### Download

```text
Click
 ↓
PDF download
```

### View

```text
Click
 ↓
PDF opens in browser
```

---

# 18. Contact Flow

Final section:

# **Let's Build Something.**

Visitor sees:

```text
Email
LinkedIn
GitHub

[ SEND A MESSAGE ]
```

If a contact form is implemented:

```text
Name
Email
Message
   ↓
Validation
   ↓
Submit
   ↓
Loading
   ↓
Success / Error
```

---

# 19. Contact Form States

### Empty

```text
Name
Email
Message

[ SEND MESSAGE ]
```

### Validation Error

```text
Please enter a valid email address.
```

### Submitting

```text
Sending...
```

### Success

```text
Message sent successfully! ✨
```

### Failure

```text
Something went wrong.
Please try again or contact me directly.
```

---

# 20. Social Link Flow

### GitHub

```text
GitHub button
 ↓
GitHub profile
```

### LinkedIn

```text
LinkedIn button
 ↓
LinkedIn profile
```

### Email

```text
Email button
 ↓
Default mail application
```

The portfolio will use the profile information provided in the CV. 

---

# 21. 3D Interaction Flow

The 3D experience should behave independently from standard content.

```text
Page Load
    ↓
3D Scene Initialize
    ↓
Idle Animation
    ↓
Pointer Movement
    ↓
Subtle Object / Camera Response
    ↓
Scroll
    ↓
Controlled 3D Transition
    ↓
Hero Exit
```

### Important

3D interaction should never prevent:

* Scrolling
* Clicking
* Reading
* Navigation
* Keyboard interaction

---

# 22. Reduced Motion Flow

If the visitor has reduced-motion enabled:

```text
prefers-reduced-motion
       ↓
Detect preference
       ↓
Disable/reduce complex animation
       ↓
Static / simplified 3D
       ↓
Normal content experience
```

The portfolio remains fully usable.

---

# 23. Unsupported 3D Flow

If WebGL or required 3D functionality isn't available:

```text
3D Initialization
      ↓
Failure / Unsupported
      ↓
Fallback detected
      ↓
Static visual displayed
      ↓
Portfolio continues normally
```

The website must **never depend on successful 3D rendering to function**.

---

# 24. Mobile Flow

Mobile users will experience a simplified version.

```text
Mobile URL
    ↓
Mobile Hero
    ↓
Simplified 3D
    ↓
Mobile Navigation
    ↓
About
    ↓
Skills
    ↓
Projects
    ↓
Experience
    ↓
Education
    ↓
Beyond Code
    ↓
CV
    ↓
Contact
```

The content order remains consistent.

---

# 25. Mobile Navigation Flow

```text
☰
 ↓
Navigation Menu
 ↓
ABOUT
SKILLS
PROJECTS
EXPERIENCE
EDUCATION
CONTACT
CV
 ↓
Select section
 ↓
Menu closes
 ↓
Smooth scroll
```

---

# 26. Scroll Behavior

Scrolling should feel continuous.

### Section transition

```text
Current Section
      ↓
Scroll
      ↓
Content begins entering
      ↓
Animation triggered
      ↓
Next section becomes active
```

The active navigation item can update based on the currently visible section.

---

# 27. Project Exploration Flow

A recruiter may not have much time.

Therefore:

```text
Recruiter
   ↓
Hero
   ↓
"View My Work"
   ↓
Featured Project
   ↓
Technology + Contribution
   ↓
GitHub / Demo
```

They should be able to reach the projects within **one or two interactions**.

---

# 28. Recruiter Fast-Path

A special consideration for recruiters:

```text
Landing
   ↓
Hero
   ↓
Projects
   ↓
Skills
   ↓
Experience
   ↓
CV
   ↓
Contact
```

The website should not force recruiters through every section before reaching relevant information.

---

# 29. Navigation Shortcuts

Possible shortcuts:

### Hero

**View My Work**

### Navigation

**Projects**

### Project

**GitHub / Live Demo**

### Resume

**Download CV**

### Footer

**LinkedIn / GitHub / Email**

This creates multiple paths to important information.

---

# 30. Footer Flow

The footer should be simple.

```text
SHAVISHA THILOSHINI

Software Engineering Student
Frontend Developer • UI/UX Designer

GitHub
LinkedIn
Email

© 2026 Shavisha Thiloshini
```

Optional:

```text
Back to top ↑
```

---

# 31. Complete Application Flow

```text id="8d7q3x"
                         START
                           │
                           ▼
                    ┌─────────────┐
                    │   LOADING   │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │    HERO     │
                    │     + 3D    │
                    └──────┬──────┘
                           │
             ┌─────────────┼──────────────┐
             │             │              │
             ▼             ▼              ▼
         VIEW WORK     DOWNLOAD CV    NAVIGATION
             │                            │
             ▼                            ▼
          ABOUT ───────────────────────► SECTION
             │
             ▼
          SKILLS
             │
             ▼
         PROJECTS
             │
             ▼
        EXPERIENCE
             │
             ▼
         EDUCATION
             │
             ▼
       BEYOND CODE
             │
             ▼
            CV
             │
             ▼
          CONTACT
             │
        ┌────┴─────┐
        ▼          ▼
      EMAIL      SOCIAL
        │          │
        └────┬─────┘
             ▼
           FOOTER
             │
             ▼
            END
```

---

# 32. Key User States

The application should account for:

| State             | Expected Behavior           |
| ----------------- | --------------------------- |
| First Visit       | Loading → Hero              |
| Normal Scroll     | Smooth section transitions  |
| Hover             | Subtle interactive feedback |
| Project Click     | Detailed project experience |
| CV Click          | Download / view PDF         |
| Contact Submit    | Loading → success/error     |
| Mobile            | Responsive navigation       |
| Reduced Motion    | Simplified animation        |
| WebGL Unsupported | Static 3D fallback          |
| External Link     | Opens safely in new tab     |

---

# 33. Flow Design Principles

The entire application flow follows six principles:

### 1. **Clarity**

Visitors always know where they are.

### 2. **Freedom**

Visitors can jump directly to important sections.

### 3. **Storytelling**

The default scroll experience tells Shavisha's professional story.

### 4. **Progressive Disclosure**

Information becomes more detailed as visitors explore.

### 5. **Visual Continuity**

3D and animation connect sections rather than randomly decorating them.

### 6. **Recruiter Efficiency**

Important information is reachable quickly.

---

# 34. Final App Flow Philosophy

The portfolio should feel like a **guided experience**, but never like a forced tour.

A visitor who casually scrolls should experience:

> **Who I am → What I know → What I've built → What I've done → What I'm learning → Who I am beyond code → How to reach me.**

A recruiter in a hurry should be able to do:

> **Hero → Projects → CV → Contact.**

And someone interested in your story can explore everything.

That's the sweet spot. 🎯

---