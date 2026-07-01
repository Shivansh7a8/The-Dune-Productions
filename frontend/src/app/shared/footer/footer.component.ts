import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container top">
        <div class="col brand-col">
          <img
            src="./assets/D1.png"
            alt="Duneverse logo"
            style="border-radius: 25%;height: 50px;"
          />

          <p class="muted">
            The parent company behind The Dune Productions and Dunova Systems
            &mdash; building brands and building intelligence.
          </p>
        </div>
        <div class="col">
          <h4>The Dune Productions</h4>
          <a routerLink="/dune-productions">Digital Marketing</a>
          <a routerLink="/dune-productions">Video Production</a>
          <a routerLink="/dune-productions">Branding &amp; Advertising</a>
        </div>
        <div class="col">
          <h4>Dunova Systems</h4>
          <a routerLink="/dunova-systems">AI Automation</a>
          <a routerLink="/dunova-systems">Conversational AI</a>
          <a routerLink="/dunova-systems">Data Intelligence</a>
        </div>
        <div class="col">
          <h4>Company</h4>
          <a routerLink="/about">About Us</a>
          <a routerLink="/careers">Careers</a>
          <a routerLink="/contact">Contact Us</a>
        </div>
        </div>
      <div class="container bottom">
        <span class="muted"
          >© 2026 The Dune Productions Pvt. Ltd. All rights reserved.</span
        ><span class="social-icons">
          <a href="https://wa.me/9415399896" target="_blank">
            <i class="bi bi-whatsapp"> <img src="./assets/whatsapp.png" /> </i>
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@duneverse.com"
          target="_blank">
            <i class="bi bi-envelope-fill"><img src="./assets/mail.png" /></i>
          </a>

          <a href="https://www.linkedin.com/company/the-dune-productions-pvt-ltd/" target="_blank">
            <i class="bi bi-linkedin"><img src="./assets/linkedin.png" /></i>
          </a>
        </span>
        <span class="muted">Bengaluru, India</span>
      </div>
    </footer>
  `,
  styles: [
    `
      .site-footer {
        background: grey;
        color: #e9e4da;
        padding: 64px 0 0;
        margin-top: 40px;
      }
      .top {
        display: grid;
        grid-template-columns: 1.4fr 1fr 1fr 1fr;
        gap: 36px;
        padding-bottom: 48px;
      }
      .brand {
        font-family: "Sora";
        font-weight: 800;
        font-size: 1.15rem;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
      }
      .mark {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        background: linear-gradient(135deg, #b5562f, #6a5cff);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
      .col h4 {
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: black;
        margin-bottom: 14px;
      }
      .col h4:hover {
        color: pink;
      }
      .col a {
        display: block;
        color: whitesmoke;
        opacity: 0.9;
        margin-bottom: 10px;
        font-size: 0.92rem;
      }
      .col a:hover {
        opacity: 1;
        text-decoration: underline;
      }
      .muted {
        color: white;
        font-size: 0.88rem;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #2a2620;
        padding: 20px 0;
        flex-wrap: wrap;
        gap: 10px;
      }
      .social-icons {
    display: flex;
    flex-direction: row;   /* Horizontal */
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.social-icons a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 45px;
    height: 45px;

    border-radius: 40%;

    color: white;
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(10px);

    text-decoration: none;
    transition: all 0.3s ease;
}

.social-icons a:hover {
    transform: translateY(-4px);
    background: rgba(131, 134, 140, 0.8);
}

.social-icons i {
    font-size: 22px;
}
      @media (max-width: 900px) {
        .top {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (max-width: 540px) {
        .top {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class FooterComponent {}
