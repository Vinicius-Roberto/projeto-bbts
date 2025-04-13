import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import necessário para ngModel

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {
  @Output() contatoSelecionado = new EventEmitter<any>();

  filtro: string = '';

  contatos = [
    { nome: 'João', id: 1, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Maria', id: 2, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Pedro', id: 3, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Vinícius', id: 4, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Ana', id: 5, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Lucas', id: 6, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Fernanda', id: 7, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Juliana', id: 8, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Carlos', id: 9, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Mariana', id: 10, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Roberto', id: 11, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Patrícia', id: 12, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Eduardo', id: 13, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Tatiane', id: 14, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Ricardo', id: 15, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Sofia', id: 16, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Gabriel', id: 17, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Isabela', id: 18, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Thiago', id: 19, imagem: 'assets/Sem título.jpeg', mensagens: [] },
    { nome: 'Aline', id: 20, imagem: 'assets/Sem título.jpeg', mensagens: [] }
  ];

  get contatosFiltrados() {
    const termo = this.filtro.toLowerCase();
    return this.contatos.filter(contato =>
      contato.nome.toLowerCase().includes(termo)
    );
  }

  selecionarContato(contato: any) {
    this.contatoSelecionado.emit(contato);
  }
}
