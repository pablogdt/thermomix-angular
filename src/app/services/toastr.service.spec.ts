import { TestBed, inject } from '@angular/core/testing';

import { ToasterService } from './toastr.service';

describe('ToastrServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasterService]
    });
  });

  it('should be created', inject([ToasterService], (service: ToasterService) => {
    expect(service).toBeTruthy();
  }));
});
