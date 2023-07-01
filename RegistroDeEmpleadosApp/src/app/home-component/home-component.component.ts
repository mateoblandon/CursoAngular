import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { ServicioDatosEmpleadosService } from '../servicio-datos-empleados.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  titulo = 'Registro de Empleados';
  nombresEntrada="";
  apellidosEntrada="";
  cargoEntrada="";
  salarioEntrada=0;
  empleados:Empleado[];

  AgregarNuevoEmpleado(){
    //this.miServicio.mostrarMensaje("Nombre del empleado: " + this.nombresEntrada);
    let miEmpleado=new Empleado(this.nombresEntrada, this.apellidosEntrada, this.cargoEntrada, this.salarioEntrada);
    this.datosEmpleadosService.AgregarNuevoEmpleadoServicio(miEmpleado);
  }

  constructor(private miServicio:ServicioEmpleadosService, private datosEmpleadosService:ServicioDatosEmpleadosService){
    this.empleados=this.datosEmpleadosService.empleadosArray;
  }

}
