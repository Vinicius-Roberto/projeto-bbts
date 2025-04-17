import { Component } from "@angular/core";
import { Router } from "@angular/router"; // <- Importa o router
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
    foto: null,
    mensagens: [
      { texto: "Olá! Como posso ajudar?", tipo: "recebida" }
    ]
  };

  constructor(private router: Router) {}

  logout() {
    localStorage.clear(); // Limpa sessão ou token, se estiver usando
    this.router.navigate(['/']); // Redireciona para tela de login
  }
}
