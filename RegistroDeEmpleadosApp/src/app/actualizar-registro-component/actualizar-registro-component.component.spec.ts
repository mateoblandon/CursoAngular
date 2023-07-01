import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarRegistroComponentComponent } from './actualizar-registro-component.component';

describe('ActualizarRegistroComponentComponent', () => {
  let component: ActualizarRegistroComponentComponent;
  let fixture: ComponentFixture<ActualizarRegistroComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarRegistroComponentComponent]
    });
    fixture = TestBed.createComponent(ActualizarRegistroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
