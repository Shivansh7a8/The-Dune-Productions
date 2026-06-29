# Duneverse Website — Project Documentation

**The Dune Productions (Marketing & Production) + Dunova Systems (AI & Technology)**

---

## 1. Project Overview

Duneverse is a fictional holding company built for this assignment, operating two verticals:

- **The Dune Productions** — digital marketing, branding, content, video, photography and social media management.
- **Dunova Systems** — AI-as-a-Service: automation, conversational AI, custom AI applications, data intelligence, and industry-specific AI solutions.

The website is built as a single corporate site with six pages (Home, Dune Productions, Dunova Systems, About Us, Careers, Contact Us), combining a corporate-site tone with a portfolio-style presentation (case studies, conceptual AI projects, team profiles).

The Careers and Contact pages are functionally wired to a real backend (Spring Boot + PostgreSQL) so form submissions and job listings are persisted, not just static mockups.

---

## 2. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Angular 17 (standalone components, signals, lazy-loaded routes) |
| Styling | Hand-written CSS design system (no UI framework) — Sora + Inter fonts |
| Backend | Spring Boot 3.2 (Java 17), Spring Data JPA, Spring Validation |
| Database | PostgreSQL |
| Build tools | Maven (backend), Angular CLI / npm (frontend) |
| HTTP | Angular HttpClient ↔ Spring REST controllers (CORS-enabled) |

---

## 3. Folder Structure

```
dune-dunova/
├── frontend/
│   ├── package.json, angular.json, tsconfig*.json
│   └── src/
│       ├── index.html, main.ts, styles.css
│       └── app/
│           ├── app.component.ts, app.config.ts, app.routes.ts
│           ├── core/api.service.ts          # HTTP calls to backend
│           ├── shared/header/, shared/footer/
│           └── pages/
│               ├── home/
│               ├── dune-productions/
│               ├── dunova-systems/
│               ├── about/
│               ├── careers/                 # live job list + application form
│               └── contact/                 # contact form
├── backend/
│   ├── pom.xml
│   └── src/main/java/com/duneverse/api/
│       ├── ApiApplication.java
│       ├── config/CorsConfig.java
│       ├── controller/ (ContactController, JobController, HealthController)
│       ├── model/ (ContactMessage, JobOpening, JobApplication)
│       └── repository/ (JPA repositories)
│   └── src/main/resources/ (application.properties, data.sql)
├── database_schema.sql
├── README.md
└── docs/Duneverse_Project_Documentation.pdf
```

---

## 4. Design Decisions & Assumptions

- **Dual-brand, single-company narrative**: Home page positions Duneverse as the parent, with two clearly differentiated visual "modes" — warm sand/rust tones for Dune Productions, blue/violet tones for Dunova Systems — applied consistently across both vertical pages.
- **Standalone Angular components + lazy loading**: each page is its own lazy-loaded route for fast initial load and clean separation of concerns.
- **Case studies are explicitly conceptual**: as permitted by the brief, dummy case studies and AI project concepts are labelled as illustrative rather than presented as real client work.
- **Stock imagery**: royalty-free Unsplash images used for hero art, case studies, and team headshots.
- **Graceful backend degradation**: if the Spring Boot API isn't running, the Careers page falls back to a static job list and the Contact/Careers forms show a friendly error instead of breaking.
- **CORS** is scoped to `http://localhost:4200` for local development; update for production domains.

---

## 5. Features Implemented

- Fully responsive layout (desktop, tablet, mobile) via CSS grid/flexbox with breakpoints at 900px and 640px.
- Sticky, collapsible mobile navigation header shared across all pages.
- Home page: hero, company stats, dual-vertical overview, value propositions, CTA.
- Dune Productions page: 6 service capabilities, 3 conceptual case studies, 4-step process.
- Dunova Systems page: 6 AIaaS offerings, 3 conceptual AI project case studies, 4-step engagement model.
- About Us page: mission/vision, 4 core values, leadership team grid.
- Careers page: culture highlights, **live job listings fetched from PostgreSQL via REST API**, vertical filter, **application form that POSTs to the backend**.
- Contact Us page: **contact form that POSTs to the backend and is persisted in PostgreSQL**, plus office/contact details for both verticals.
- REST API: `/api/contact` (GET/POST), `/api/careers/jobs`, `/api/careers/apply`, `/api/health`.
- Auto-seeded sample job openings on backend startup (`data.sql`).

---

## 6. Setup Instructions

See `README.md` at the project root for full step-by-step instructions. Summary:

```bash
# 1. Database
psql -U postgres -c "CREATE DATABASE duneverse;"

# 2. Backend
cd backend
mvn spring-boot:run        # http://localhost:8080

# 3. Frontend (new terminal)
cd frontend
npm install
ng serve --open             # http://localhost:4200
```

---

## 7. Deployment Details

This package is prepared for local setup and testing. For public deployment:

- **Frontend**: `ng build` → deploy `frontend/dist/duneverse-frontend/browser` to Vercel, Netlify, or any static host.
- **Backend**: `mvn clean package` → deploy the resulting jar to Render, Railway, or any Java-compatible host, pointed at a managed PostgreSQL instance.
- After backend deployment, update `API_BASE` in `frontend/src/app/core/api.service.ts` to the live backend URL, then rebuild and redeploy the frontend.
- Push the project to GitHub using the commands at the bottom of `README.md`.

---

## 8. Challenges Faced

- **Balancing "corporate" and "portfolio" tone**: solved by using a consistent component system (cards, tags, stats) reused across both verticals, differentiated mainly through color identity rather than layout, so the site reads as one company with two specialised teams rather than two unrelated sites.
- **Keeping forms functional without over-engineering auth**: contact and career application forms are intentionally open (no login) since this is a public marketing site, with basic validation handled via Angular's template-driven forms and Spring's `@Valid`.
- **Avoiding backend dependency from breaking the demo**: added fallback job data and friendly error states on the frontend so reviewers can still browse Careers/Contact pages even before starting the backend.
