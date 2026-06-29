import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dune-productions",
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="hero">
      <div class="container">
        <span class="eyebrow"
          ><img src="./assets/DPl.png" alt="Dune-Productions"
        /></span>
        <h1>Stories that move markets.</h1>
        <p class="lead">
          We are the marketing, media and production arm of Duneverse &mdash;
          helping brands plan, create and distribute content that actually
          drives demand.
        </p>
        <a routerLink="/contact" class="btn btn-dune">Start a project</a>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow1">Capabilities</span>
          <h2>Everything between the idea and the impression</h2>
        </div>
        <div class="grid grid-3">
          <div class="card1" *ngFor="let s of services">
            <span class="tag">{{ s.tag }}</span>
            <h4>{{ s.title }}</h4>
            <p class="muted">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt-bg">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow1">Selected work</span>
          <h2>Case studies (illustrative)</h2>
          <p class="lead">
            Conceptual examples of the kind of work and outcomes this vertical
            is built to deliver.
          </p>
        </div>
        <div class="grid grid-3">
          <div class="case" *ngFor="let c of caseStudies">
            <img [src]="c.img" [alt]="c.title" />
            <div class="case-body">
              <span class="badge-pill">{{ c.industry }}</span>
              <h4>{{ c.title }}</h4>
              <p class="muted">{{ c.summary }}</p>
              <div class="result">{{ c.result }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow1">Process</span>
          <h2>How we run a campaign</h2>
        </div>
        <div class="grid grid-4 process">
          <div class="step" *ngFor="let p of process; let i = index">
            <div class="step-num">{{ i + 1 }}</div>
            <h4>{{ p.title }}</h4>
            <h5>-------->>>></h5>
            <p class="muted">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta">
      <div class="container cta-inner">
        <div>
          <h2>Ready to put a face &mdash; or a film &mdash; to your brand?</h2>
          <p class="lead" style="color:rgba(255,255,255,.8);">
            Let's talk about what you're trying to launch, grow, or fix.
          </p>
        </div>
        <a routerLink="/contact" class="btn btn-light">Talk to our team</a>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 80px 0 60px;
        background: linear-gradient(160deg, #fdf3e7, #fffdf9);
      }
      h1 {
        font-size: 2.6rem;
        max-width: 680px;
      }
      .alt-bg {
        background: #fbf8f2;
      }
      .case {
        border: 1px solid #e7e2d8;
        border-radius: 16px;
        overflow: hidden;
        background: #fff;
      }
      .case img {
        width: 100%;
        height: 170px;
        object-fit: cover;
      }
      .case-body {
        padding: 20px;
      }
      .case-body h4 {
        margin: 10px 0 8px;
      }
      .result {
        margin-top: 12px;
        font-weight: 700;
        color: #b5562f;
        font-size: 0.9rem;
      }
      .process {
        margin-top: 8px;
      }
      .step {
        padding: 20px 0;
      }
      .step-num {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #fdf3e7;
        color: #b5562f;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 14px;
      }
      .cta {
        background: #14110d;
        color: #fff;
        background-image: url(/assets/bg.png);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .cta-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        flex-wrap: wrap;
      }
      @media (max-width: 900px) {
        h1 {
          font-size: 2rem;
        }
      }
    `,
  ],
})
export class DuneProductionsComponent {
  services = [
    {
      tag: "Strategy",
      title: "Digital Marketing",
      desc: "Performance, SEO, and growth marketing across search, social, and programmatic channels.",
    },
    {
      tag: "Identity",
      title: "Branding & Advertising",
      desc: "Brand identity systems, positioning, and integrated ad campaigns across media.",
    },
    {
      tag: "Content",
      title: "Content Creation",
      desc: "Copy, design, and editorial content built for every stage of the funnel.",
    },
    {
      tag: "Film",
      title: "Video Production",
      desc: "Ad films, brand documentaries, reels and motion content, shot and edited in-house.",
    },
    {
      tag: "Visual",
      title: "Photography",
      desc: "Product, lifestyle, and editorial photography for catalogues, campaigns and social.",
    },
    {
      tag: "Growth",
      title: "Social Media Management",
      desc: "Always-on content calendars, community management, and channel growth strategy.",
    },
  ];

  caseStudies = [
    {
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
      industry: "D2C Fashion",
      title: "Launch campaign for a homegrown apparel label",
      summary:
        "Integrated brand film, influencer seeding, and paid social launch ahead of a festive-season drop.",
      result: "+3.1x ROAS in 6 weeks",
    },
    {
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
      industry: "FoodTech",
      title: "Always-on social strategy for a QSR chain",
      summary:
        "Monthly content engine across Instagram and YouTube Shorts with localized creative for 12 cities.",
      result: "4.2x follower growth in 9 months",
    },
    {
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
      industry: "Real Estate",
      title: "Rebrand and photography for a premium developer",
      summary:
        "Full identity refresh, architectural photography, and a digital-first sales campaign.",
      result: "38% lift in qualified site visits",
    },
  ];

  process = [
    { title: "Discover", desc: "Audit, audience and competitive research." },
    { title: "Define", desc: "Strategy, messaging and creative direction." },
    {
      title: "Create",
      desc: "Production of content, film and creative assets.",
    },
    { title: "Scale", desc: "Distribution, optimization and reporting." },
  ];
}
