import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // <- Importa o Router

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formData = {
    nome: '',
    cpf: ''
  };

  loginValido = false;
  erroLogin = false;

  constructor(private router: Router) {} // <- Injeta o Router no construtor

  onSubmit() {
    // Simulação de login
    const cliente = { nome: 'Leo', cpf: '12345678900' };
    const funcionario = { nome: 'Maria', cpf: '98765432100' };

    if (this.formData.nome === cliente.nome && this.formData.cpf === cliente.cpf) {
      this.loginValido = true;
      this.erroLogin = false;
      console.log('Login como cliente');
      this.router.navigate(['/chat']); // Redireciona para cliente
    } else if (this.formData.nome === funcionario.nome && this.formData.cpf === funcionario.cpf) {
      this.loginValido = true;
      this.erroLogin = false;
      console.log('Login como funcionário');
      this.router.navigate(['/home']); // Redireciona para funcionário
    } else {
      this.loginValido = false;
      this.erroLogin = true;
      console.log('Login inválido');
    }
  }
}
