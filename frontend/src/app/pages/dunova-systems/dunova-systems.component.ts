import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-dunova-systems",
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="hero">
      <div class="container">
        <span class="eyebrow nova"
          ><img src="./assets/DS2l.png" alt="Dunova-Systems"
        /></span>
        <h1>AI, delivered as a service &mdash; not a science project.</h1>
        <p class="lead">
          We design, build and operate AI systems that plug into how your
          business already runs: automations, copilots, and data platforms
          grounded in real workflows.
        </p>
        <a routerLink="/contact" class="btn btn-nova"
          >Talk to an AI consultant</a
        >
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow nova"
            ><img
              src="./assets/ai.png"
              alt="AI AS A SERVICE"
              style="border-radius:20px;"
          /></span>
          <h2>Our core offerings</h2>
        </div>
        <div class="grid grid-3">
          <div class="card1" *ngFor="let s of services">
            <span class="tag nova">{{ s.tag }}</span>
            <h4>{{ s.title }}</h4>
            <p class="muted">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt-bg">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow nova"
            ><img src="./assets/project.png" alt="Projects"
          /></span>
          <h2>How these solutions translate into real systems</h2>
          <p class="lead">
            Illustrative project concepts showing the kind of applied AI work
            this vertical is built for.
          </p>
        </div>
        <div class="grid grid-3">
          <div class="case" *ngFor="let c of caseStudies">
            <span class="badge-pill">{{ c.industry }}</span>
            <h4>{{ c.title }}</h4>
            <p class="muted">{{ c.summary }}</p>
            <ul class="stack">
              <li *ngFor="let t of c.stack">{{ t }}</li>
            </ul>
            <div class="result">{{ c.result }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow nova"
            ><img
              src="./assets/em.png"
              alt="Projects"
              style="height:100px"
              ;width="200px"
          /></span>
          <h2>How we deliver</h2>
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
          <h2>Have a manual process that should be automated by now?</h2>
          <p class="lead" style="color:rgba(255,255,255,.8);">
            Let's scope an AI solution built around your actual data and
            workflows.
          </p>
        </div>
        <a routerLink="/contact" class="btn btn-light">Book a discovery call</a>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 80px 0 60px;
        background: linear-gradient(160deg, #eef0ff, #fffdf9);
      }
      h1 {
        font-size: 2.6rem;
        max-width: 720px;
      }
      .alt-bg {
        background: #f7f7fc;
      }
      .case {
        border: 1px solid #e7e2d8;
        border-radius: 16px;
        background: #fff;
        padding: 24px;
      }
      .case h4 {
        margin: 10px 0 8px;
      }
      .stack {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 0;
        margin: 14px 0;
      }
      .stack li {
        font-size: 0.78rem;
        font-weight: 600;
        background: #eef0ff;
        color: #6a5cff;
        padding: 4px 10px;
        border-radius: 999px;
      }
      .result {
        margin-top: 8px;
        font-weight: 700;
        color: #6a5cff;
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
        background: #eef0ff;
        color: #6a5cff;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 14px;
      }
      .cta {
        background: #0b0e1a;
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
export class DunovaSystemsComponent {
  services = [
    {
      tag: "Automation",
      title: "AI Automation Solutions",
      desc: "Replace repetitive manual workflows with AI agents and rule-based automation pipelines.",
    },
    {
      tag: "Operations",
      title: "Intelligent Business Systems",
      desc: "AI-augmented ERP, CRM and ops dashboards that recommend and act, not just report.",
    },
    {
      tag: "Engineering",
      title: "Custom AI Applications",
      desc: "Bespoke AI products and internal tools, built on your data and proprietary workflows.",
    },
    {
      tag: "Conversation",
      title: "Conversational AI",
      desc: "Chatbots, voice-bots and copilots for support, sales and internal knowledge access.",
    },
    {
      tag: "Data",
      title: "Data Intelligence Platforms",
      desc: "Pipelines and dashboards that turn scattered business data into decision-ready insight.",
    },
    {
      tag: "Vertical AI",
      title: "Industry-Specific AI Solutions",
      desc: "Purpose-built AI for retail, healthcare, BFSI, logistics and manufacturing use cases.",
    },
  ];

  caseStudies = [
    {
      industry: "Retail / E-commerce",
      title: "AI demand-forecasting & inventory copilot",
      summary:
        "A conceptual platform predicting SKU-level demand and auto-generating restock recommendations for store managers.",
      stack: ["Forecasting models", "Inventory API", "Manager dashboard"],
      result: "Modeled to cut stockouts by ~25%",
    },
    {
      industry: "BFSI",
      title: "Conversational AI for loan-query support",
      summary:
        "A concept chatbot that resolves loan and EMI queries, escalating only edge cases to human agents.",
      stack: ["LLM + RAG", "CRM integration", "Multilingual support"],
      result: "Modeled to deflect ~60% of L1 queries",
    },
    {
      industry: "Healthcare",
      title: "Clinic operations intelligence dashboard",
      summary:
        "A concept system unifying appointment, billing and patient-flow data into one predictive ops view.",
      stack: ["Data pipeline", "Predictive analytics", "Ops dashboard"],
      result: "Modeled to reduce patient wait time by ~18%",
    },
  ];

  process = [
    {
      title: "Assess",
      desc: "Workflow and data audit to find high-leverage AI use cases.",
    },
    {
      title: "Design",
      desc: "Solution architecture, model selection and integration plan.",
    },
    {
      title: "Build",
      desc: "Development, fine-tuning and integration with your systems.",
    },
    {
      title: "Operate",
      desc: "Monitoring, retraining and continuous improvement post-launch.",
    },
  ];
}
