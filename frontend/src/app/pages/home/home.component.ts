import { Component, AfterViewInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { gsap } from 'gsap';

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- HERO -->
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow1">Duneverse Holdings</span>
          <h1>
            Two crafts. <br />One conviction:
            <span class="grad">build things that compound.</span>
          </h1>
          <p class="lead">
            We are the parent company behind
            <strong>The Dune Productions</strong> &mdash; a marketing &amp;
            media studio &mdash; and <strong>Dunova Systems</strong> &mdash; an
            AI &amp; technology partner. Together, we help brands tell better
            stories and run smarter operations.
          </p>
          <div class="flex gap-16" style="margin-top:32px;">
            <a routerLink="/dune-productions" class="btn btn-dune"
              >Explore The Dune Productions</a
            >
            <a routerLink="/dunova-systems" class="btn btn-nova"
              >Explore Dunova Systems</a
            >
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="orb orb-dune"></div>
          <div class="orb orb-nova"></div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="section-tight stats-strip">
      <div class="container grid grid-4">
        <div class="stat">
          <div class="num">120+</div>
          <div class="label">Campaigns delivered</div>
        </div>
        <div class="stat">
          <div class="num">40+</div>
          <div class="label">AI solutions shipped</div>
        </div>
        <div class="stat">
          <div class="num">35+</div>
          <div class="label">Active clients</div>
        </div>
        <div class="stat">
          <div class="num">8</div>
          <div class="label">Years, combined expertise</div>
        </div>
      </div>
    </section>

    <!-- TWO VERTICALS -->
    <section class="section">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow"
            ><img
              src="./assets/do.png"
              alt="what we Do!"
              style="height: 150px"
              width="800px;"
          /></span>
          <h2>One company, two specialised studios</h2>
          <p class="lead" style="margin:0 auto;">
            Engage us individually for focused expertise, or together for a
            brand-to-backend partnership.
          </p>
        </div>

        <div class="grid grid-2">
          <div class="vertical-card dune-bg">
            <span class="tag">Marketing &amp; Production</span>
            <h3>The Dune Productions</h3>
            <p class="muted">
              Digital marketing, branding, content, video and photography for
              brands who want to be seen and remembered.
            </p>
            <ul class="pill-list">
              <li>Digital Marketing</li>
              <li>Branding &amp; Advertising</li>
              <li>Video Production</li>
              <li>Photography</li>
              <li>Social Media</li>
              <li>Campaigns</li>
            </ul>
            <a routerLink="/dune-productions" class="btn btn-outline"
              >View capabilities →</a
            >
          </div>

          <div class="vertical-card nova-bg">
            <span class="tag nova">AI &amp; Technology</span>
            <h3>Dunova Systems</h3>
            <p class="muted">
              AI-as-a-Service, automation, and intelligent systems for
              businesses who want to operate smarter.
            </p>
            <ul class="pill-list">
              <li>AI Automation</li>
              <li>Conversational AI</li>
              <li>Custom AI Apps</li>
              <li>Data Intelligence</li>
              <li>Industry AI</li>
              <li>Business Systems</li>
            </ul>
            <a routerLink="/dunova-systems" class="btn btn-outline"
              >View capabilities →</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- WHY US -->
    <section class="section alt-bg">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow"
            ><img
              src="./assets/whyus.png"
              alt="why us!"
              style="height: 150px"
              width="350px;"
          /></span>
          <h2>Creative thinking, engineered delivery</h2>
        </div>
        <div class="grid grid-3">
          <div class="card1">
            <h4>Full-stack capability</h4>
            <p class="muted">
              From a brand film to the AI chatbot on your website &mdash; one
              accountable partner, not five vendors.
            </p>
          </div>
          <div class="card1">
            <h4>Built for outcomes</h4>
            <p class="muted">
              Every campaign and every model is tied to a measurable business
              result, not vanity metrics.
            </p>
          </div>
          <div class="card1">
            <h4>Senior-led teams</h4>
            <p class="muted">
              You work directly with strategists, engineers and creatives
              &mdash; not account managers relaying messages.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta">
      <div class="container cta-inner">
        <div>
          <h2>Have a brand or a business problem worth solving?</h2>
          <p class="lead" style="color:rgba(255,255,255,.8);">
            Tell us about it. We'll tell you whether it's a Dune Productions
            job, a Dunova Systems job, or both.
          </p>
        </div>
        <a routerLink="/contact" class="btn btn-light">Get IN Touch!</a>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 90px 0 70px;
        background:
          radial-gradient(
            1200px 500px at 80% -10%,
            #fbe9d6 0%,
            transparent 60%
          ),
          #fffdf9;
      }
      .hero-grid {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 48px;
        align-items: center;
      }
      h1 {
        font-size: 3rem;
      }
      .grad {
        background: linear-gradient(135deg, #b5562f, #6a5cff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .hero-art {
        position: relative;
        height: 320px;
      }
      .orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(2px);
        opacity: 0.85;
      }
      .orb-dune {
        width: 260px;
        height: 260px;
        background: radial-gradient(circle at 30% 30%, #f3c98a, #b5562f);
        top: 10px;
        right: 60px;
      }
      .orb-nova {
        width: 190px;
        height: 190px;
        background: radial-gradient(circle at 30% 30%, #9bdcff, #6a5cff);
        bottom: 0;
        right: 0;
      }
      .section-tight {
        padding: 40px 0;
      }
      .stats-strip {
        border-top: 1px solid #e7e2d8;
        border-bottom: 1px solid #e7e2d8;
        background-image: url(/assets/bg.png);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .vertical-card {
        border-radius: 20px;
        padding: 36px;
        border: 1px solid #e7e2d8;
      }
      .dune-bg {
        background: linear-gradient(160deg, #fff, #fdf3e7);
      }
      .nova-bg {
        background: linear-gradient(160deg, #fff, #eef0ff);
      }
      .pill-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        list-style: none;
        padding: 0;
        margin: 18px 0 26px;
      }
      .pill-list li {
        font-size: 0.82rem;
        font-weight: 600;
        background: #fff;
        border: 1px solid #e7e2d8;
        padding: 6px 12px;
        border-radius: 999px;
      }
      .alt-bg {
        background: #fbf8f2;
      }
      .cta {
        background: #14110d;
        color: #fff;
        border-radius: 0;
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
      .cta h2 {
        margin-bottom: 8px;
      }
      @media (max-width: 992px) {
        .hero-grid {
          grid-template-columns: 1fr;
          text-align: center;
        }
        .hero-art {
          display: none;
        }
        .cta-inner {
          flex-direction: column;
          text-align: center;
        }
      }
      @media (max-width: 768px) {
        .flex {
          flex-direction: column;
        }
        .btn {
          width: 100%;
        }
        .grid-4 {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (max-width: 480px) {
        .grid-4 {
          grid-template-columns: 1fr;
        }
        h1 {
          font-size: 2rem;
        }
      }
    `,
  ],
})
// animation for the home page using GSAP
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    gsap.from(".hero-grid", {
      y: 80,
      opacity: 0,
      duration: 0.5,
      delay: 1
    });
    gsap.from(".section", {
      y: 80,
      opacity: 0,
      duration: 0.5,
      delay: 1
    });

  }

}