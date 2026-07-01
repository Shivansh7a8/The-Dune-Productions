import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="container">
        <span class="eyebrow"
          ><img src="./assets/aboutus.png" alt="About Duneverse"
        /></span>
        <h1>We started as a creative studio. We became a systems company.</h1>
        <p class="lead">
          Duneverse is the holding company behind The Dune Productions and
          Dunova Systems. We believe brand and technology are no longer separate
          disciplines &mdash; the best businesses tell a great story and run on
          great systems.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container grid grid-2 mvv">
        <div class="card1">
          <h4>Mission</h4>
          <p class="muted">
            To give growing businesses access to senior-level creative and AI
            capability that was previously reserved for large enterprises.
          </p>
        </div>
        <div class="card1">
          <h4>Vision</h4>
          <p class="muted">
            A world where every brand has both a compelling story and an
            intelligent, automated backbone to run it.
          </p>
        </div>
      </div>
    </section>

    <section class="section alt-bg">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow"
            ><img src="./assets/corevalues.png" alt="Our Values"
          /></span>
          <h2>What we hold ourselves to</h2>
        </div>
        <div class="grid grid-4">
          <div class="card1" *ngFor="let v of values">
            <h4>{{ v.title }}</h4>
            <p class="muted">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow"
            ><img src="./assets/leader.png" alt="leaders"
          /></span>
          <h2>The team behind both verticals</h2>
        </div>
        <div class="grid grid-4">
          <div class="person" *ngFor="let p of team">
            <img [src]="p.img" [alt]="p.name" />
            <h4>{{ p.name }}</h4>
            <div class="role muted">{{ p.role }}</div>
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
      h1 {
        font-size: 2.5rem;
        max-width: 760px;
      }
      .mvv {
        margin-top: 0;
      }
      .alt-bg {
        background: #fbf8f2;
      }
      .person {
        text-align: center;
      }
      .person img {
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: 16px;
        margin-bottom: 14px;
      }
      .role {
        font-size: 0.88rem;
      }
      @media (max-width: 900px) {
        h1 {
          font-size: 2rem;
        }
      }
    `,
  ],
})
export class AboutComponent {
  values = [
    { title: "Craft", desc: "We obsess over the details others skip." },
    {
      title: "Candor",
      desc: "We tell clients the truth, not what is easy to hear.",
    },
    { title: "Ownership", desc: "We treat client outcomes as our own KPIs." },
    {
      title: "Curiosity",
      desc: "We adopt new tools and models before they are mainstream.",
    },
  ];

  team = [
    {
      name: "Charvik Maguluri",
      role: "Co-Founder & CEO",
      alt: "photo",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Akshita Khanna",
      role: "Co-Founder, Dune Productions",
      alt: "photo",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Abhishek B",
      role: "Co-Founder, Dunova Systems",
      alt: "photo",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Ishita Iyer",
      role: "Head of People & Operations",
      alt: "photo",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    },
  ];
}
