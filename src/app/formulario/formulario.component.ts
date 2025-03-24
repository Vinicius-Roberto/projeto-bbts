import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importando FormsModule

@Component({
  selector: 'app-formulario',
  standalone: true, // Definindo o componente como standalone
  imports: [FormsModule], // Importando FormsModule aqui
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formData = {
    nome: '',
    email: '',
    telefone: '',
    cpf: ''
  };

  onSubmit() {
    console.log(this.formData);
  }
}
