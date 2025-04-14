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
  @Input() contato: any;
  mensagem: string = '';

  @ViewChild('messageArea') private messageArea!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  get mensagens() {
    return this.contato?.mensagens || [];
  }

  enviarMensagem(): void {
    if (this.mensagem.trim() && this.contato) {
      this.contato.mensagens.push({ texto: this.mensagem, tipo: 'enviada' });

      const mensagemEnviada = this.mensagem;
      this.mensagem = '';

      setTimeout(() => {
        this.contato.mensagens.push({
          texto: `Recebi: "${mensagemEnviada}"`,
          tipo: 'recebida'
        });
      }, 1000);
    }
  }

  scrollToBottom(): void {
    try {
      this.messageArea.nativeElement.scrollTop = this.messageArea.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
