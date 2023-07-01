import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { ServicioDatosEmpleadosService } from '../servicio-datos-empleados.service';

@Component({
  selector: 'app-actualizar-registro-component',
  templateUrl: './actualizar-registro-component.component.html',
  styleUrls: ['./actualizar-registro-component.component.css']
})
export class ActualizarRegistroComponentComponent {
  titulo = 'Registro de Empleados';
  nombresEntrada="";
  apellidosEntrada="";
  cargoEntrada="";
  salarioEntrada=0;
  empleados:Empleado[];
  indice:number;
  textoDelBoton="";
  accionDelBoton:number;

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private datosEmpleadosService:ServicioDatosEmpleadosService){
    this.empleados=this.datosEmpleadosService.empleadosArray;
    this.indice=this.route.snapshot.params['id']
    this.accionDelBoton=parseInt(this.route.snapshot.queryParams['accion']);
    let empleado:Empleado=this.datosEmpleadosService.EncontrarEmpleado(this.indice);
    this.nombresEntrada=empleado.Nombres; this.apellidosEntrada=empleado.Apellidos; this.cargoEntrada=empleado.Cargo; this.salarioEntrada=empleado.Salario;
    if(this.accionDelBoton==1){
      this.textoDelBoton="Actualizar registro";
    }
    else{
      this.textoDelBoton="Eliminar registro";
    }
  }

  ActualizarEmpleado(){
    //this.miServicio.mostrarMensaje("Nombre del empleado: " + this.nombresEntrada);;
    let miEmpleado=new Empleado(this.nombresEntrada, this.apellidosEntrada, this.cargoEntrada, this.salarioEntrada);
    this.datosEmpleadosService.ActualizarEmpleadoServicio(this.indice, miEmpleado);
    this.router.navigate([""]);
  }

  EliminarEmpleado(){
    this.datosEmpleadosService.EliminarEmpleadoServicio(this.indice);
    this.router.navigate([""]);
  }

  VolverAHome(){
    this.router.navigate([""]);
  }

  AccionDelBoton(){
    if(this.accionDelBoton==1){
      this.ActualizarEmpleado();
    }
    else{
      this.EliminarEmpleado();
    }
  }
}
