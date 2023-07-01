import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { ServicioDatosEmpleadosService } from './servicio-datos-empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { QuienesSomosComponentComponent } from './quienes-somos-component/quienes-somos-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarRegistroComponentComponent } from './actualizar-registro-component/actualizar-registro-component.component';

const appRoutes:Routes=[
  {path:"", component:HomeComponentComponent},
  {path:"proyectos", component:ProyectosComponentComponent},
  {path:"quienes", component:QuienesSomosComponentComponent},
  {path:"contacto", component:ContactoComponentComponent},
  {path:"actualizarRegistro/:id", component:ActualizarRegistroComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    ContactoComponentComponent,
    QuienesSomosComponentComponent,
    ActualizarRegistroComponentComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, ServicioDatosEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
