import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
    this.remove()
  }

  clear(): void {
    this.messages = [];
  }

  remove(): void {
    if (this.messages.length > 5) {
      this.messages = this.messages.slice(1, 6);
    }
  }
}