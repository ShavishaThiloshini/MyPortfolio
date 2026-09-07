# Document 05 — Backend Schema Document

### Shavisha Thiloshini Personal Portfolio Website

**Version:** 1.0
**Status:** Architecture Definition
**Purpose:** Define whether backend infrastructure is required and, if so, the minimal data structures and services needed.

---

## 1. Backend Philosophy

This portfolio is fundamentally a **content-driven frontend application**.

Unlike a system such as Smart Clinic, it does **not** need:

* user accounts
* authentication
* dashboards
* complex CRUD operations
* role management
* payment processing
* large relational datasets

Therefore, the backend should remain **small, secure, and purposeful**.

### Core principle

> **If information does not need to change dynamically, don't put it in a database.**

Projects, skills, education, experience, and portfolio content can initially live inside structured frontend data files.

---

# 2. Backend Requirement Decision

## Required Backend

### ❌ No traditional backend server is required for V1.

The portfolio can operate as a modern static/client-side application.

Recommended architecture:

```text
Visitor
   ↓
React + Vite Application
   ↓
Static Portfolio Data
   ↓
External Services
```

The only feature that may require backend/serverless functionality is the **Contact Form**.

---

# 3. Recommended Architecture

```text
┌─────────────────────────────┐
│          Visitor            │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│     React + Vite Frontend    │
│                             │
│ Hero                        │
│ About                       │
│ Skills                      │
│ Projects                    │
│ Experience                 │
│ Education                   │
│ Contact                     │
└──────────────┬──────────────┘
               │
        ┌──────┴──────┐
        ▼             ▼
 Static Data     Contact Service
        │             │
        ▼             ▼
   JS Modules    Email / Serverless
```

---

# 4. Portfolio Data Strategy

The following information should be stored as structured frontend data:

### Skills

```text
skills.js
```

### Projects

```text
projects.js
```

### Education

```text
education.js
```

### Experience

```text
experience.js
```

### Social Links

```text
socialLinks.js
```

This makes the application easier to maintain.

Instead of hardcoding content inside components:

```text
Component
   ↓
Data file
   ↓
Rendered UI
```

---

# 5. Skills Schema

Suggested structure:

```javascript
{
  id: "frontend",
  title: "Frontend Development",
  skills: [
    {
      name: "HTML",
      level: "Foundational"
    },
    {
      name: "CSS",
      level: "Foundational"
    },
    {
      name: "JavaScript",
      level: "Foundational"
    },
    {
      name: "React",
      level: "Project Experience"
    }
  ]
}
```

### Important

Avoid fake numerical proficiency values such as:

```text
JavaScript — 87%
React — 92%
```

Those numbers do not provide meaningful evidence.

The portfolio should communicate skill level honestly through:

* project usage
* descriptions
* experience
* technologies
* learning progression

---

# 6. Project Schema

Each project should follow a consistent structure.

```javascript
{
  id: "frogfocus",
  title: "FrogFocus",
  category: "Productivity",
  description: "...",
  problem: "...",
  solution: "...",

  technologies: [
    "React",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL"
  ],

  features: [
    "...",
    "...",
    "..."
  ],

  contribution: "...",

  image: "...",

  links: {
    live: "...",
    github: "..."
  },

  featured: true
}
```

---

# 7. Project Content Structure

Every featured project should be able to display:

| Field        | Purpose                |
| ------------ | ---------------------- |
| Title        | Project identity       |
| Category     | Project classification |
| Description  | Quick understanding    |
| Problem      | Why it exists          |
| Solution     | What was built         |
| Technologies | Technical stack        |
| Features     | Main functionality     |
| Contribution | User's role            |
| Image        | Visual presentation    |
| Live URL     | Working application    |
| GitHub URL   | Source code            |
| Featured     | Controls presentation  |

---

# 8. Education Schema

```javascript
{
  id: "bsc-software-engineering",
  institution: "Reading",
  qualification: "BSc in Software Engineering (Top-up)",
  startYear: 2026,
  endYear: 2027,
  status: "In Progress"
}
```

Completed qualifications can use:

```javascript
{
  status: "Completed"
}
```

This allows the UI to visually distinguish current education from completed education.

---

# 9. Experience Schema

```javascript
{
  id: "ai-awareness-seminar",
  title: "AI Awareness Seminar",
  organization: "ESOFT Metro Campus",
  year: 2025,
  type: "Educational Outreach",
  description: "...",
  highlights: [
    "...",
    "...",
    "..."
  ]
}
```

Another example:

```javascript
{
  id: "hackathon",
  title: "Hackathon Participant",
  year: 2025,
  type: "Hackathon",
  description: "...",
  highlights: [
    "Team problem solving",
    "Rapid prototyping",
    "Time management"
  ]
}
```

---

# 10. Social Links Schema

```javascript
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ShavishaThiloshini"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shavisha-thiloshini-16062b3a3"
  },
  {
    name: "Email",
    url: "mailto:shavishathiloshini16@gmail.com"
  }
];
```

These details correspond to the contact and profile information in the provided CV. 

---

# 11. Contact Form

The contact form is the **only major feature that may require external backend/serverless processing**.

### Form fields

```text
Name
Email
Message
```

---

# 12. Contact Message Schema

If messages are persisted, the logical schema should be:

```text
ContactMessage
```

| Field     | Type        | Required |
| --------- | ----------- | -------- |
| id        | UUID/String | Yes      |
| name      | String      | Yes      |
| email     | String      | Yes      |
| message   | Text        | Yes      |
| createdAt | DateTime    | Yes      |
| status    | String      | Yes      |

Possible status values:

```text
new
read
archived
```

---

# 13. Contact Database — Optional

A database is **not required for V1**.

Preferred approach:

```text
Contact Form
      ↓
Serverless Function / Form Service
      ↓
Email Notification
```

This avoids creating an unnecessary database.

### If database storage becomes necessary later:

```text
contact_messages
```

could contain:

```text
id
name
email
message
status
created_at
```

---

# 14. Contact Security

The contact system must protect against:

* spam
* automated submissions
* invalid email addresses
* malicious input
* excessive requests

Recommended protections:

### Frontend

* required fields
* email validation
* character limits
* empty-message prevention

### Server/Service

* server-side validation
* rate limiting
* spam protection
* sanitization
* environment variables for secrets

---

# 15. Environment Variables

Sensitive configuration must **never** be hardcoded.

Example:

```text
VITE_CONTACT_ENDPOINT=
```

or, if using a serverless backend:

```text
CONTACT_SERVICE_KEY=
```

Never expose:

```text
API_SECRET
PRIVATE_KEY
DATABASE_PASSWORD
```

inside frontend source code.

---

# 16. Backend API — Optional

If a serverless contact endpoint is implemented:

### POST

```text
/api/contact
```

Request:

```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Hello Shavisha!"
}
```

Success:

```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

Validation failure:

```json
{
  "success": false,
  "message": "Please provide valid contact information."
}
```

---

# 17. No Authentication

The portfolio does **not** require:

```text
Login
Register
Forgot Password
User Roles
Admin Authentication
```

There is no reason for visitors to create accounts.

---

# 18. No Admin Dashboard in V1

A CMS/admin dashboard is intentionally out of scope.

Content can be updated through:

```text
src/data/
```

For example:

```text
src/data/
├── projects.js
├── skills.js
├── education.js
├── experience.js
└── socialLinks.js
```

If the portfolio later grows significantly, a CMS can be introduced without redesigning the frontend architecture.

---

# 19. Analytics — Optional

Analytics may be added later to understand:

* portfolio visits
* project clicks
* CV downloads
* contact interactions

However, analytics should not be implemented merely for the sake of having analytics.

---

# 20. SEO Data

SEO metadata is not a database responsibility.

It should be defined through application configuration.

Required metadata:

```text
Page Title
Meta Description
Open Graph Title
Open Graph Description
Open Graph Image
Favicon
Canonical URL
```

---

# 21. Data Relationships

Because the portfolio is small, there is no need for complex database relationships.

Logical relationship:

```text
Projects
   └── Technologies

Education
   └── Institution

Experience
   └── Highlights

Skills
   └── Skill Category
```

Everything remains intentionally simple.

---

# 22. Future Backend Expansion

A backend can be introduced later if the portfolio evolves.

Possible V2 features:

### CMS

Allow projects to be added through an admin interface.

### Analytics Dashboard

Track:

* visitors
* project views
* CV downloads
* contact submissions

### Blog

Add:

* articles
* categories
* tags
* publication dates

### Testimonials

Store recruiter/client/team feedback.

### Project Case Studies

Store richer project documentation.

These are **future possibilities**, not V1 requirements.

---

# 23. Backend Technology Recommendation

For V1:

### Primary

**No traditional backend**

### Contact

Choose one lightweight approach:

**Option A — Serverless Function**

Best for control.

**Option B — Form Service**

Best for simplicity.

**Option C — Email API**

Best if direct email integration is preferred.

The final implementation should select **one** approach rather than combining unnecessary services.

---

# 24. Final Backend Architecture

```text
                    PORTFOLIO
                        │
             ┌──────────┴──────────┐
             │                     │
       Static Content        Contact Form
             │                     │
             ▼                     ▼
       React Data Files      Serverless/Form
                                   │
                                   ▼
                              Email Inbox
```

This keeps the project:

* lightweight
* affordable
* secure
* maintainable
* fast
* easy to deploy

---

# 25. Backend V1 Scope

### Included

✅ Structured portfolio data
✅ Project data
✅ Skills data
✅ Education data
✅ Experience data
✅ Social links
✅ Contact form architecture
✅ Form validation
✅ Spam/security considerations
✅ SEO configuration

### Not Included

❌ Authentication
❌ User accounts
❌ Admin dashboard
❌ Complex database
❌ Payment system
❌ Role management
❌ Full CMS
❌ Unnecessary API layer

---

# 26. Final Decision

> **The portfolio will be primarily frontend-driven with structured local data and an optional serverless contact mechanism.**

This is the right architecture because the website's purpose is to **showcase Shavisha's work**, not to become another large software system.

A giant backend for a portfolio would basically be bringing a bulldozer to plant a flower. 😂🌱

---