import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  nombre = 'Iván';
  apellido = 'Mazo';
  edad = 55;
  habilitacionCuadro=false;
  empresa="Google";
  usuRegistrado=false;
  textoDeRegistro="No hay nadie registrado"
  textoDeRegistro2="There is no one registrated"

  cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }

  getRegistroUsuario(trueOrFalse: boolean){
    this.usuRegistrado=trueOrFalse;
  }

  setUsuarioRegistrado(){
    if(this.usuRegistrado==false){
      alert("El usuario se acaba de registrar.");
      this.getRegistroUsuario(true);
      this.textoDeRegistro= "El usuario acaba de ser registrado";
    }
    else{
      alert("El usuario dejó de estar registrado")
      this.getRegistroUsuario(false);
      this.textoDeRegistro="No hay nadie registrado";
    }
  }

  // Para saber el tipo de objeto Event se pone $event como parámetro en la función que recibe el objeto, luego colocamos alert(event.target). en este caso el alert muestra HTMLInputElement
  setUsuarioRegistrado2(event: Event){
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro2="The user is already registered";
    }
    else{
      this.textoDeRegistro2="There is no one registrated";
    }
  }
}
