import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {
  @Input() empleadoDeLaLista:Empleado;
  @Input() indice:number;

  arrayDeCaracteristicas = [''];

  agregarCaracteristica(nuevoElemento: string) {
    this.arrayDeCaracteristicas.push(nuevoElemento);
  }
}
