import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {
  @Output() contatoSelecionado = new EventEmitter<any>();

  contatos = [
    { nome: 'João', id: 1 },
    { nome: 'Maria', id: 2 },
    { nome: 'Pedro', id: 3 },
    { nome: 'Vinícius', id: 4 },
    { nome: 'Ana', id: 5 },
    { nome: 'Lucas', id: 6 },
    { nome: 'Fernanda', id: 7 },
    { nome: 'Juliana', id: 8 },
    { nome: 'Carlos', id: 9 },
    { nome: 'Mariana', id: 10 }
  ];

  selecionarContato(contato: any) {
    this.contatoSelecionado.emit(contato);
  }
}
