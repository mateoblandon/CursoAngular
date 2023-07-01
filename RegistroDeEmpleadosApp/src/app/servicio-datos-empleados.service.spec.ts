import { TestBed } from '@angular/core/testing';

import { ServicioDatosEmpleadosService } from './servicio-datos-empleados.service';

describe('ServicioDatosEmpleadosService', () => {
  let service: ServicioDatosEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDatosEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
