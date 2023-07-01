import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { ServicioDatosEmpleadosService } from '../servicio-datos-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {
  titulo = 'Registro de Empleados';
  nombresEntrada="";
  apellidosEntrada="";
  cargoEntrada="";
  salarioEntrada=0;
  empleados:Empleado[];
  
  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private datosEmpleadosService:ServicioDatosEmpleadosService){
    this.empleados=this.datosEmpleadosService.empleadosArray;
  }

  AgregarNuevoEmpleado(){
    //this.miServicio.mostrarMensaje("Nombre del empleado: " + this.nombresEntrada);
    let miEmpleado=new Empleado(this.nombresEntrada, this.apellidosEntrada, this.cargoEntrada, this.salarioEntrada);
    this.datosEmpleadosService.AgregarNuevoEmpleadoServicio(miEmpleado);
    this.router.navigate([""]);
  }


  VolverAHome(){
    this.router.navigate([""]);

  }

}
