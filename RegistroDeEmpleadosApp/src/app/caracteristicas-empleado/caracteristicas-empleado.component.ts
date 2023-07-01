import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {
  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  enviarCaracteristicaAlPadre(value: string) {
    this.miServicio.mostrarMensaje(value)
    this.caracteristicasEmpleado.emit(value);
  }

  constructor(private miServicio:ServicioEmpleadosService){}
}
