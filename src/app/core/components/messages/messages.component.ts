import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  // Nesse caso está public pois vou usar ele no html
  constructor(public messageService: MessageService) {}
}
