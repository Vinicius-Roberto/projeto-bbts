import { Component } from '@angular/core';
import { ContatosComponent } from '../contatos/contatos.component';
import { ConversaComponent } from '../conversa/conversa.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContatosComponent, ConversaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contatoAtual: any = null;

  aoSelecionarContato(contato: any) {
    this.contatoAtual = contato;
  }
}
