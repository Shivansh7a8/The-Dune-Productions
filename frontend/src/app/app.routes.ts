import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), title: 'Duneverse | Home' },
  { path: 'dune-productions', loadComponent: () => import('./pages/dune-productions/dune-productions.component').then(m => m.DuneProductionsComponent), title: 'The Dune Productions | Marketing & Media' },
  { path: 'dunova-systems', loadComponent: () => import('./pages/dunova-systems/dunova-systems.component').then(m => m.DunovaSystemsComponent), title: 'Dunova Systems | AI & Technology' },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), title: 'About Us | Duneverse' },
  { path: 'careers', loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent), title: 'Careers | Duneverse' },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), title: 'Contact Us | Duneverse' },
  {path: 'chatbot', loadComponent: () => import('./chatbot/chatbot.component').then(m => m.ChatbotComponent), title: 'DuneBot | Chatbot'},
  { path: '**', redirectTo: '' }
];
