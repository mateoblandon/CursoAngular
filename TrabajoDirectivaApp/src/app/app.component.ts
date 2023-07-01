import { Component } from '@angular/core';

export interface Entradas {
  titulo: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = "";
  registrado = false;
  nombreUsuario:string = "";
  apellidoUsuario:string = "";
  cargo = "";
  entradas: Entradas[];

  constructor(){
    this.entradas = [
      {titulo: "Python cada día más presente"},
      {titulo: "Java presente desde hace más de 20 años"},
      {titulo: "JavaScript cada vez más funcional"},
      {titulo: "Kotlin potencia tus apps"},
      {titulo: "¿Dónde quedó Pascal?"}
    ]
  }

  

  RegistrarUsuario(){
    this.registrado = true
    this.mensaje = "Usuario registrado con éxito"
  }
}