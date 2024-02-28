import { TestBed } from '@angular/core/testing';

import { EstablishComunicationService } from './establish-comunication.service';

describe('EstablishComunicationService', () => {
  let service: EstablishComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstablishComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
