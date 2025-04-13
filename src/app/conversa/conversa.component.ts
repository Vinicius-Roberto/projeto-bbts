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

  mensagens: { texto: string, tipo: 'enviada' | 'recebida' }[] = [];
  mensagem: string = '';

  @ViewChild('messageArea') private messageArea!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  enviarMensagem(): void {
    if (this.mensagem.trim()) {
      // Envia a mensagem do usuário
      this.mensagens.push({ texto: this.mensagem, tipo: 'enviada' });
      
      const mensagemEnviada = this.mensagem; // Salva se quiser usar na resposta
      this.mensagem = '';
  
      // Simula uma resposta do contato com delay
      setTimeout(() => {
        this.mensagens.push({
          texto: `Recebi: "${mensagemEnviada}"`, // ou qualquer outro texto
          tipo: 'recebida'
        });
      }, 1000); // 1 segundo de delay
    }
  }
  

  scrollToBottom(): void {
    try {
      this.messageArea.nativeElement.scrollTop = this.messageArea.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
