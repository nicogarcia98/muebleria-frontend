import { TestBed } from '@angular/core/testing';

import { TipoMuebleService } from './tipo-mueble.service';

describe('TipoMuebleService', () => {
  let service: TipoMuebleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMuebleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
