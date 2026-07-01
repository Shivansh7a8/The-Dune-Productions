import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ApiService, JobOpening } from "../../core/api.service";

@Component({
  selector: "app-careers",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="hero">
      <div class="container">
        <span class="eyebrow"
          ><img src="./assets/careers.png" alt="Careers at Duneverse"
        /></span>
        <h1>Build brands by day, build AI by... also that day.</h1>
        <p class="lead">
          We're a small, senior team across creative and engineering. If you
          like ownership over busywork, this is probably the right place.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow"
            ><img src="./assets/culture.png" alt="cultures@Duneverse"
          /></span>
          <h2>What it's like to work here</h2>
        </div>
        <div class="grid grid-3">
          <div class="card">
            <h4>Flat structure</h4>
            <p class="muted">
              Direct access to founders and decision-makers from day one.
            </p>
          </div>
          <div class="card">
            <h4>Hybrid &amp; remote-friendly</h4>
            <p class="muted">
              Outcomes matter more than hours logged at a desk.
            </p>
          </div>
          <div class="card">
            <h4>Cross-vertical exposure</h4>
            <p class="muted">
              Engineers see real client briefs; creatives see real AI products.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt-bg">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow1">Open roles</span>
          <h2>Current openings</h2>
        </div>

        <div class="filters">
          <button
            class="chip"
            [class.active]="filter() === 'all'"
            (click)="setFilter('all')"
          >
            All
          </button>
          <button
            class="chip"
            [class.active]="filter() === 'The Dune Productions'"
            (click)="setFilter('The Dune Productions')"
          >
            Dune Productions
          </button>
          <button
            class="chip"
            [class.active]="filter() === 'Dunova Systems'"
            (click)="setFilter('Dunova Systems')"
          >
            Dunova Systems
          </button>
        </div>

        <div *ngIf="loading()" class="muted">Loading openings…</div>
        <div *ngIf="!loading() && filteredJobs().length === 0" class="muted">
          No live openings could be loaded from the API right now &mdash;
          showing sample roles below.
        </div>

        <div class="grid grid-2 jobs">
          <div class="job" *ngFor="let j of filteredJobs()">
            <div class="flex justify-between items-center">
              <h4>{{ j.title }}</h4>
              <span class="badge-pill">{{ j.vertical }}</span>
            </div>
            <p class="muted">
              {{ j.department }} · {{ j.location }} · {{ j.employmentType }}
            </p>
            <p class="muted">{{ j.description }}</p>
            <button class="btn btn-outline btn-sm" (click)="selectJob(j)">
              Apply for this role
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="apply">
      <div class="container apply-grid">
        <div>
          <span class="eyebrow1">Application</span>
          <span
            ><img
              src="./assets/app.png"
              alt="Applications"
              style="height:300px"
          /></span>
          <h2>
            {{
              selectedJob()
                ? "Apply for: " + selectedJob()!.title
                : "Submit a general application"
            }}
          </h2>
          <p class="lead">
            Don't see the exact role? Apply anyway &mdash; we create roles
            around great people.
          </p>
        </div>

        <form
          class="card2 form"
          (ngSubmit)="submitApplication()"
          #appForm="ngForm"
        >
          <label
            >Full Name
            <input
              #fullName="ngModel"
              name="fullName"
              type="text"
              [(ngModel)]="application.fullName"
              required
              minlength="3"
              maxlength="50"
              pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
            />
          </label>

          <div
            class="error"
            *ngIf="fullName.invalid && (fullName.dirty || fullName.touched)"
          >
            <small *ngIf="fullName.errors?.['required']">
              Full name is required.
            </small>

            <small *ngIf="fullName.errors?.['minlength']">
              Name must be at least 3 characters long.
            </small>

            <small *ngIf="fullName.errors?.['pattern']">
              Only letters and spaces are allowed.
            </small>
          </div>

          <label
            >Email
            <input
              #email="ngModel"
              type="email"
              name="email"
              [(ngModel)]="application.email"
              email
              required
            />
          </label>

          <div
            class="error"
            *ngIf="email.invalid && (email.dirty || email.touched)"
          >
            <small *ngIf="email.errors?.['required']">Email is required.</small>
            <small *ngIf="email.errors?.['email']"
              >Please enter a valid email address.</small
            >
          </div>
          <label
            >Phone
            <input
              #phone="ngModel"
              name="phone"
              type="tel"
              [(ngModel)]="application.phone"
              required
              pattern="^[6-9][0-9]{9}$"
              maxlength="10"
            />
          </label>

          <div
            class="error"
            *ngIf="phone.invalid && (phone.dirty || phone.touched)"
          >
            <small *ngIf="phone.errors?.['required']">
              Phone number is required.
            </small>

            <small *ngIf="phone.errors?.['pattern']">
              Enter a valid 10-digit mobile number.
            </small>
          </div>
          <label
            >Resume URL
            <input
              #resumeUrl="ngModel"
              type="url"
              name="resumeUrl"
              [(ngModel)]="application.resumeLink"
              required
              pattern="https://.*"
              placeholder="https://example.com/resume.pdf"
            />
          </label>

          <div
            class="error"
            *ngIf="resumeUrl.invalid && (resumeUrl.dirty || resumeUrl.touched)"
          >
            <small *ngIf="resumeUrl.errors?.['required']">
              Resume URL is required.
            </small>

            <small *ngIf="resumeUrl.errors?.['url']">
              Enter a valid URL.
            </small>

            <small *ngIf="resumeUrl.errors?.['pattern']">
              URL must start with https://
            </small>
          </div>
          <label
            >Why you?
            <textarea
              name="coverNote"
              rows="4"
              [(ngModel)]="application.coverNote"
              placeholder="write job profile for which you are applying"
            ></textarea>
          </label>

          <button
            class="btn btn-dune"
            type="submit"
            [disabled]="appForm.invalid || submitting()"
          >
            {{ submitting() ? "Submitting…" : "Submit Application" }}
          </button>
          <p class="success" *ngIf="submitted()">
            Thanks! We've received your application and will reach out if
            there's a fit.
          </p>
          <p class="error" *ngIf="error()">{{ error() }}</p>
        </form>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 80px 0 50px;
        background: linear-gradient(160deg, #fdf3e7, #eef0ff);
      }
      h1 {
        font-size: 2.4rem;
        max-width: 700px;
      }
      .alt-bg {
        background: #fbf8f2;
      }
      .filters {
        display: flex;
        gap: 10px;
        margin-bottom: 28px;
        flex-wrap: wrap;
      }
      .eyebrow1 {
        padding: 0 8px;
        border-radius: 999px;
        border: 1px solid #b5562f;
        display: inline-block;
        margin-bottom: 12px;
        font-size: 0.8rem;
        font-weight: 600;
        color: #b5562f;
      }
      .chip {
        border: 1px solid #e7e2d8;
        background: #fff;
        border-radius: 999px;
        padding: 8px 16px;
        font-weight: 600;
        font-size: 0.85rem;
        cursor: pointer;
      }
      .chip.active {
        background: rgba(3, 92, 246, 0.9);
        color: #fff;
        border-color: #14110d;
      }
      .chip:hover {
        background: linear-gradient(
          135deg,
          var(--nova-violet),
          var(--nova-blue)
        );
        color: #fff;
        box-shadow: 0 8px 20px -8px rgba(106, 92, 255, 0.6);
      }
      .chip-outline {
        background: transparent;
        border: 1.5px solid var(--ink);
        color: var(--ink);
      }
      .jobs {
        margin-top: 8px;
      }
      .job {
        background: #fff;
        border: 1px solid #e7e2d8;
        border-radius: 16px;
        padding: 24px;
        background: linear-gradient(160deg, #fdf3e7, #eef0ff);
        border: 1px solid var(--line);
        border-radius: var(--radius);
        padding: 28px;
        transition:
          box-shadow 0.2s ease,
          transform 0.2s ease;
      }
      .job h4 {
        margin: 0;
      }
      .apply-grid {
        display: grid;
        grid-template-columns: 0.9fr 1.1fr;
        gap: 48px;
        align-items: start;
      }
      .form {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .form label {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 0.88rem;
        font-weight: 600;
        color: #333;
      }
      .form input,
      .form textarea {
        font-family: inherit;
        padding: 11px 14px;
        border-radius: 10px;
        border: 1px solid #d8d3c8;
        font-size: 0.95rem;
      }
      .success {
        color: #1a7f4f;
        font-weight: 600;
      }
      .error {
        color: #b5562f;
        font-weight: 600;
      }
      @media (max-width: 900px) {
        .apply-grid {
          grid-template-columns: 1fr;
        }
        h1 {
          font-size: 1.9rem;
        }
      }
    `,
  ],
})
export class CareersComponent implements OnInit {
  jobs = signal<JobOpening[]>([]);
  loading = signal(true);
  filter = signal<"all" | string>("all");
  selectedJob = signal<JobOpening | null>(null);
  submitting = signal(false);
  submitted = signal(false);
  error = signal("");

  application = {
    fullName: "",
    email: "",
    phone: "",
    resumeLink: "",
    coverNote: "",
    jobId: 0,
  };

  fallbackJobs: JobOpening[] = [
    {
      id: 1,
      title: "Performance Marketing Specialist",
      department: "Marketing",
      location: "Bengaluru (Hybrid)",
      employmentType: "Full-time",
      description:
        "Plan and execute paid campaigns across Meta, Google and programmatic channels.",
      vertical: "The Dune Productions",
    },
    {
      id: 2,
      title: "Video Editor / Motion Designer",
      department: "Production",
      location: "Bengaluru, On-site",
      employmentType: "Full-time",
      description: "Edit branded content, reels and ad films end to end.",
      vertical: "The Dune Productions",
    },
    {
      id: 3,
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Bengaluru (Hybrid)",
      employmentType: "Full-time",
      description: "Design, train and deploy ML/LLM-based client solutions.",
      vertical: "Dunova Systems",
    },
    {
      id: 4,
      title: "Conversational AI Developer",
      department: "Engineering",
      location: "Remote",
      employmentType: "Full-time",
      description: "Build and fine-tune chatbot/voice-bot solutions.",
      vertical: "Dunova Systems",
    },
  ];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getJobs().subscribe({
      next: (data) => {
        this.jobs.set(data?.length ? data : this.fallbackJobs);
        this.loading.set(false);
      },
      error: () => {
        this.jobs.set(this.fallbackJobs);
        this.loading.set(false);
      },
    });
  }

  filteredJobs() {
    const f = this.filter();
    return f === "all"
      ? this.jobs()
      : this.jobs().filter((j) => j.vertical === f);
  }

  setFilter(f: string) {
    this.filter.set(f);
  }

  selectJob(j: JobOpening) {
    this.selectedJob.set(j);
    this.application.jobId = j.id;
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  }

  submitApplication() {
    this.submitting.set(true);
    this.error.set("");
    this.api.applyToJob(this.application as any).subscribe({
      next: () => {
        this.submitting.set(false);
        this.submitted.set(true);
      },
      error: () => {
        this.submitting.set(false);
        this.error.set(
          "Could not reach the server. Please ensure the backend is running, or email us directly at careers@duneverse.com.",
        );
      },
    });
  }
}
