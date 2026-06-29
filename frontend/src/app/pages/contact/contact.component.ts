import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ApiService } from "../../core/api.service";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="hero">
      <div class="container">
        <span class="eyebrow1">Contact Us</span>
        <h1>Let's figure out what you actually need.</h1>
        <p class="lead">
          Tell us a bit about your goal. We'll route it to the right team
          &mdash; Dune Productions, Dunova Systems, or both.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">
        <form class="card form" (ngSubmit)="submit()" #f="ngForm">
          <div class="row2">
            <label
              >Full Name
              <input
                #fullName="ngModel"
                name="fullName"
                type="text"
                [(ngModel)]="model.fullName"
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
                [(ngModel)]="model.email"
                email
                required
              />
            </label>

            <div
              class="error"
              *ngIf="email.invalid && (email.dirty || email.touched)"
            >
              <small *ngIf="email.errors?.['required']"
                >Email is required.</small
              >
              <small *ngIf="email.errors?.['email']"
                >Please enter a valid email address.</small
              >
            </div>
          </div>
          <div class="row2">
            <label
              >Phone
              <input
                #phone="ngModel"
                name="phone"
                type="tel"
                [(ngModel)]="model.phone"
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
              >I'm interested in
              <select
                name="serviceInterest"
                [(ngModel)]="model.serviceInterest"
              >
                <option>The Dune Productions</option>
                <option>Dunova Systems</option>
                <option>Both / Not sure yet</option>
              </select>
            </label>
          </div>
          <label
            >Subject
            <input name="subject" [(ngModel)]="model.subject" required />
          </label>
          <label
            >Message
            <textarea
              name="message"
              rows="5"
              [(ngModel)]="model.message"
              required
            ></textarea>
          </label>
          <button
            class="btn btn-dune"
            type="submit"
            [disabled]="f.invalid || submitting()"
          >
            {{ submitting() ? "Sending…" : "Send Message" }}
          </button>
          <p class="success" *ngIf="submitted()">
            Thanks &mdash; your message has been received. We'll get back within
            1–2 business days.
          </p>
          <p class="error" *ngIf="error()">{{ error() }}</p>
        </form>

        <div class="info">
          <div class="card1">
            <h4>The Dune Productions</h4>
            <p class="muted">
              <a href="mailto:theduneproduction@gmail.com"
                >theduneproduction&#64;gmail.com</a
              ><br />+91 80000 11111
            </p>
          </div>
          <div class="card1">
            <h4>Dunova Systems</h4>
            <p class="muted">
              <a href="mailto:dunovasystems@gmail.com"
                >dunovasystems&#64;gmail.com</a
              ><br />+91 80000 22222
            </p>
          </div>
          <div class="card1">
            <h4>Head Office</h4>
            <p class="muted">
              <a href="mailto:hello@duneverse.com">hello&#64;duneverse.com</a
              ><br />4th Floor, Indiranagar<br />Bengaluru, Karnataka, India
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 80px 0 50px;
        background: linear-gradient(160deg, #fdf3e7, #eef0ff);
      }
      .section {
        padding: 88px 0;
        background: linear-gradient(160deg, #eef0ff, #fdf3e7);
      }
      h1 {
        font-size: 2.4rem;
        max-width: 680px;
      }
      .contact-grid {
        display: grid;
        grid-template-columns: 1.3fr 0.9fr;
        gap: 40px;
        align-items: start;
      }
      .form {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .row2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
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
      .form select,
      .form textarea {
        font-family: inherit;
        padding: 11px 14px;
        border-radius: 10px;
        border: 1px solid #d8d3c8;
        font-size: 0.95rem;
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: 18px;
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
        .contact-grid {
          grid-template-columns: 1fr;
        }
        .row2 {
          grid-template-columns: 1fr;
        }
        h1 {
          font-size: 1.9rem;
        }
      }
    `,
  ],
})
export class ContactComponent {
  model = {
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceInterest: "Both / Not sure yet",
  };
  submitting = signal(false);
  submitted = signal(false);
  error = signal("");

  constructor(private api: ApiService) {}

  submit() {
    this.submitting.set(true);
    this.error.set("");
    this.api.submitContact(this.model).subscribe({
      next: () => {
        this.submitting.set(false);
        this.submitted.set(true);
      },
      error: () => {
        this.submitting.set(false);
        this.error.set(
          "Could not reach the server. Please ensure the backend is running, or email us directly at hello@duneverse.com.",
        );
      },
    });
  }
}
