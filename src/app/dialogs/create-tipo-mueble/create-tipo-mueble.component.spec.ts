import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoMuebleComponent } from './create-tipo-mueble.component';

describe('CreateTipoMuebleComponent', () => {
  let component: CreateTipoMuebleComponent;
  let fixture: ComponentFixture<CreateTipoMuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTipoMuebleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTipoMuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
