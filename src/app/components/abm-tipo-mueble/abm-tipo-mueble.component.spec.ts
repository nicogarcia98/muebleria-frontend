import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmTipoMuebleComponent } from './abm-tipo-mueble.component';

describe('AbmTipoMuebleComponent', () => {
  let component: AbmTipoMuebleComponent;
  let fixture: ComponentFixture<AbmTipoMuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbmTipoMuebleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbmTipoMuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
