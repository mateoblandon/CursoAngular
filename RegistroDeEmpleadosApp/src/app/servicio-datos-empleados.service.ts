import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosEmpleadosService {
  empleadosArray:Empleado[] = [new Empleado("Matthew", "Kandell", "Director Ejecutivo", 30000000), new Empleado("Ramón", "Valdés", "CEO", 10000000)];

  AgregarNuevoEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.mostrarMensaje("Persona a agregar: " + empleado.Nombres + " " + empleado.Apellidos + ", " + "cargo: " + empleado.Cargo + ", " + "salario: " + empleado.Salario);
    this.empleadosArray.push(empleado)
  }

  EncontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleadosArray[indice];
    return empleado;
  }

  ActualizarEmpleadoServicio(indice:number, empleado:Empleado){
    let empleadoModificado=this.empleadosArray[indice]
    empleadoModificado.Nombres=empleado.Nombres; empleadoModificado.Apellidos=empleado.Apellidos; empleadoModificado.Cargo=empleado.Cargo; empleadoModificado.Salario=empleado.Salario;
  }

  EliminarEmpleadoServicio(indice:number){
    this.empleadosArray.splice(indice, 1);

  }

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService) { }
}
