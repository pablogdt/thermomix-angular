import { TestBed, inject } from '@angular/core/testing';

import { ThermomixApiServiceService } from './thermomix-api-service.service';

describe('ThermomixApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThermomixApiServiceService]
    });
  });

  it('should be created', inject([ThermomixApiServiceService], (service: ThermomixApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
