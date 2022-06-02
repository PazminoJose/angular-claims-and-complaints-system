import { TestBed } from '@angular/core/testing';

import { AgenciaService } from './agencia.service';

describe('AgenciaService', () => {
  let service: AgenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
