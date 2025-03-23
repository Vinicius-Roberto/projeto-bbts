import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule], // Adicione o CommonModule aqui
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {
  contatos = [
    { nome: 'João', id: 1 },
    { nome: 'Maria', id: 2 },
    { nome: 'Pedro', id: 3 },
  ];

  selecionarContato(contato: any) {
    console.log('Contato selecionado:', contato);
  }
}