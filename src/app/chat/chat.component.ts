import { Component } from "@angular/core";
import { ConversaComponent } from "../conversa/conversa.component";

@Component({
  selector: "app-chat",
  standalone: true,
  imports: [ConversaComponent],
  templateUrl: "./chat.component.html",
  styleUrl: "./chat.component.css",
})
export class ChatComponent {
  contatoPersonalizado = {
    nome: "ChatBBTS",
    foto: null, // Remove a foto
    mensagens: [
      { texto: "Olá! Como posso ajudar?", tipo: "recebida" }
    ]
  };
}

