import { TestBed } from '@angular/core/testing';

import { CiudadService } from './sevicios/ciudad.service';

describe('CiudadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CiudadService = TestBed.get(CiudadService);
    expect(service).toBeTruthy();
  });
});
