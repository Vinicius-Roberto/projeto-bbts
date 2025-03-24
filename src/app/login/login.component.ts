import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { ImagemComponent } from '../imagem/imagem.component';

@Component({
  selector: 'app-login',
  imports: [FormularioComponent, ImagemComponent], // Adicione os componentes aqui
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
