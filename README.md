# Duneverse — The Dune Productions & Dunova Systems

Corporate + portfolio website for **Duneverse**, parent company of:
- **The Dune Productions** — Digital Marketing, Media & Production
- **Dunova Systems** — AI & Technology Solutions

Stack: **Angular 17** (standalone components) · **Spring Boot 3 / Java 17** · **PostgreSQL**

---

## 1. Prerequisites

Install these on your machine first:

| Tool | Version | Check with |
|---|---|---|
| Node.js | 18.x or 20.x | `node -v` |
| npm | comes with Node | `npm -v` |
| Angular CLI | 17.x | `npm install -g @angular/cli` |
| Java JDK | 17 | `java -version` |
| Maven | 3.9+ | `mvn -v` |
| PostgreSQL | 14+ | `psql --version` |

---

## 2. Database setup (PostgreSQL)

```bash
# Open psql (or use pgAdmin / any GUI client)
psql -U postgres

# Inside psql:
CREATE DATABASE duneverse;
\q
```

The backend will auto-create all tables on first run (`spring.jpa.hibernate.ddl-auto=update`)
and auto-seed sample job openings (`data.sql`). `database_schema.sql` is included for reference
if you'd rather create tables manually.

If your local Postgres username/password differs from `postgres` / `postgres`, edit:
`backend/src/main/resources/application.properties`

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/duneverse
spring.datasource.username=postgres
spring.datasource.password=postgres
```

---

## 3. Run the backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

Backend will start at **http://localhost:8080**

Quick check: open `http://localhost:8080/api/health` → should return `Duneverse API is running`

Other endpoints:
- `POST /api/contact` — submit contact form
- `GET  /api/contact` — list submitted messages
- `GET  /api/careers/jobs?vertical=Dunova Systems` — list job openings (vertical param optional)
- `POST /api/careers/apply` — submit a job application

---

## 4. Run the frontend (Angular)

In a **new terminal**:

```bash
cd frontend
npm install
ng serve
```

Frontend will start at **http://localhost:4200** and proxy API calls to `http://localhost:8080`
(the base URL is configured in `src/app/core/api.service.ts`).

Open your browser at:
```
http://localhost:4200
```

---

## 5. One-line summary to run both

```bash
# Terminal 1
cd backend && mvn spring-boot:run

# Terminal 2 (after backend is up)
cd frontend && npm install && ng serve --open
```

---

## 6. Build for production

```bash
# Frontend production build
cd frontend
ng build
# Output: frontend/dist/duneverse-frontend/browser

# Backend production jar
cd backend
mvn clean package
java -jar target/api-1.0.0.jar
```

---

## 7. Folder structure

```
dune-dunova/
├── frontend/                  # Angular 17 app
│   └── src/app/
│       ├── core/               # ApiService (HTTP calls to Spring Boot)
│       ├── shared/              # Header, Footer (used on every page)
│       └── pages/
│           ├── home/
│           ├── dune-productions/
│           ├── dunova-systems/
│           ├── about/
│           ├── careers/
│           └── contact/
|       └──chatbot/               # Chatbot for users
|
├── backend/                   # Spring Boot 3 app
│   └── src/main/java/com/duneverse/api/
│       ├── controller/         # REST endpoints
│       ├── model/              # JPA entities
│       ├── repository/         # Spring Data repositories
│       └── config/             # CORS config
├── database_schema.sql
└── docs/
    └── Duneverse_Project_Documentation.md
```

---

## 8. Notes / assumptions

- Images used across pages are royalty-free Unsplash stock images (placeholder/dummy content as permitted by the brief).
- Case studies on Dune Productions and Dunova Systems pages are clearly conceptual/illustrative, as instructed.
- Contact and Careers forms are fully wired to the Spring Boot + PostgreSQL backend; if the backend isn't running, the frontend degrades gracefully and shows a fallback message instead of crashing.
- CORS is pre-configured for `http://localhost:4200` only — update `CorsConfig.java` if you deploy frontend/backend to different domains.

---

## 9. Deployment (suggested, do this from your machine)

- **Frontend** → Vercel / Netlify (`ng build`, deploy `dist/duneverse-frontend/browser`)
- **Backend** → Render / Railway (Docker or Maven buildpack), with a managed PostgreSQL instance
- After deploying, update `API_BASE` in `frontend/src/app/core/api.service.ts` to the live backend URL and rebuild.

```bash
git init
git add .
git commit -m "Initial commit: Duneverse website (Angular + Spring Boot + PostgreSQL)"
git branch -M main
git remote add origin https://github.com/<your-username>/duneverse-website.git
git push -u origin main
```
