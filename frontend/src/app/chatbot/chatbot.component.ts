import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatbotService } from './chatbot.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {

  opened = false;

  message = '';

  messages = [
    {
      sender: 'bot',
      text: 'Hi 👋 I am DuneBot. Ask me anything about Duneverse.'
    }
  ];

  constructor(private chatbot: ChatbotService){}

  send(){

    if(!this.message.trim()) return;

    this.messages.push({
      sender:'user',
      text:this.message
    });

    const reply = this.chatbot.getResponse(this.message);

    this.messages.push({
      sender:'bot',
      text:reply
    });

    this.message='';

  }

}