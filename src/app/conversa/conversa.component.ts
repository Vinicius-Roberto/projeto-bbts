import { Component, Input, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversa.component.html',
  styleUrls: ['./conversa.component.css']
})
export class ConversaComponent implements AfterViewChecked {
  @Input() contato: any; // <- Isso resolve o erro

  mensagens: string[] = [];
  mensagem: string = '';

  @ViewChild('messageArea') private messageArea!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  enviarMensagem(): void {
    if (this.mensagem.trim()) {
      this.mensagens.push(this.mensagem);
      this.mensagem = '';
    }
  }

  scrollToBottom(): void {
    try {
      this.messageArea.nativeElement.scrollTop = this.messageArea.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
