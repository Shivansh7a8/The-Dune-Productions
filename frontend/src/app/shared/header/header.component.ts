import { Component, signal, AfterViewInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { gsap } from "gsap";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <div class="container bar">
        <a routerLink="/" class="brand">
          <span class="brand-name"
            ><img
              src="./assets/logo32.png"
              alt="Duneverse logo"
              style="height: 120px;"
          /></span>
        </a>

        <nav class="nav" [class.open]="menuOpen()">
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="close()"
            >Home</a
          >
          <a
            routerLink="/dune-productions"
            routerLinkActive="active"
            (click)="close()"
            >Dune Productions</a
          >
          <a
            routerLink="/dunova-systems"
            routerLinkActive="active"
            (click)="close()"
            >Dunova Systems</a
          >
          <a routerLink="/about" routerLinkActive="active" (click)="close()"
            >About Us</a
          >
          <a routerLink="/careers" routerLinkActive="active" (click)="close()"
            >Careers</a
          >
          <a
            routerLink="/contact"
            class="btn btn-dune btn-sm nav-cta"
            (click)="close()"
            >Contact Us</a>
        </nav>

        <button class="hamburger" (click)="toggle()" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `,
  styles: [
    `
      .site-header {
        position: sticky;
        top: 0;
        z-index: 50;
        background: rgba(255, 253, 249, 0.92);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid #e7e2d8;
      }
      .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 76px;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: "Sora";
        font-weight: 800;
        font-size: 1.2rem;
      }
      .brand-mark {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        border-radius: 10px;
        background: linear-gradient(135deg, #b5562f, #6a5cff);
        color: #fff;
        font-weight: 800;
      }
      .nav {
        display: flex;
        align-items: center;
        gap: 28px;
      }
      .nav a {
        display: inline-block;
        padding: 5px 5px;
        border-radius: 15px;
        transition: all 0.35s ease;
      }

      .nav a:hover {
        color: #b5562f;
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transform: translateY(-4px) scale(1.08);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
      }
      .nav a.active {
        color: #b5562f;
      }
      .nav-cta {
        padding: 10px 20px !important;
      }
      .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
      }
      .hamburger span {
        width: 24px;
        height: 2px;
        background: #14141a;
        border-radius: 2px;
      }

      @media (max-width: 900px) {
        .hamburger {
          display: flex;
        }
        .nav {
          position: absolute;
          top: 76px;
          left: 0;
          right: 0;
          background: #fffdf9;
          border-bottom: 1px solid #e7e2d8;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
          padding: 20px 24px 28px;
          transform: translateY(-12px);
          opacity: 0;
          pointer-events: none;
          transition: all 0.2s ease;
        }
        .nav.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .nav-cta {
          align-self: flex-start;
        }
      }
    `,
  ],
})
export class HeaderComponent implements AfterViewInit {
  menuOpen = signal(false);
  toggle() {
    this.menuOpen.set(!this.menuOpen());
  }
  close() {
    this.menuOpen.set(false);
  }
  ngAfterViewInit(): void {
    const tl = gsap.timeline();

    tl.from(".brand-name", {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }
}
