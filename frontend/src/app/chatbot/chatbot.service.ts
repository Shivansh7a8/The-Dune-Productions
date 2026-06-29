import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  getResponse(question: string): string {

    const q = question.toLowerCase();

    // Greetings
    if (q.includes('hi') || q.includes('hello') || q.includes('hey')) {
      return "Hello 👋 Welcome to Duneverse! How can I help you today?";
    }

    // About
    if (q.includes('about') || q.includes('about us')) {
      return "Duneverse is the parent company of The Dune Productions and Dunova Systems. We combine creativity with AI-powered technology solutions.";
    }

    // Services
    if (q.includes('service') || q.includes('services') || q.includes('what do you offer')) {
      return "We provide Branding, Website Development, AIaaS, Mobile Apps, AI Chatbots, Video Production, Marketing and Business Automation.";
    }

    // AI
    if (q.includes('ai')) {
      return "Dunova Systems specializes in AI-as-a-Service (AIaaS), AI automation, intelligent chatbots and custom AI solutions.";
    }
    //Website
    if (q.includes('website') || q.includes('web')) {
      return "We offer professional website development services, including responsive design, e-commerce solutions, and content management systems.";
    }

    // Production
    if (q.includes('production')) {
      return "The Dune Productions offers branding, cinematography, photography, social media content, advertising and creative marketing.";
    }

    // Founder
    if (q.includes('founder')) {
      return "Duneverse was founded by passionate entrepreneurs dedicated to combining creativity with technology.";
    }

    // Contact
    if (q.includes('contact') || q.includes('email')) {
      return "You can contact us through the Contact page on our website or email us at hello@duneverse.com.";
    }

    // Career
    if (q.includes('career') || q.includes('job')) {
      return "Visit our Careers page to explore current openings and internship opportunities.";
    }

    // Pricing
    if (q.includes('price') || q.includes('cost')) {
      return "Pricing depends on your project requirements. Please contact us for a customized quote.";
    }

    // Thanks
    if (q.includes('thank')) {
      return "You're welcome! 😊";
    }

    return "I'm sorry, I don't have information about that. Please contact our team for further assistance.";
  }

}