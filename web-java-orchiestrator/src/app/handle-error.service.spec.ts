import { TestBed, inject } from '@angular/core/testing';

import { HandleErrorService } from './handle-error.service';

describe('HandleErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleErrorService]
    });
  });

  it('should be created', inject([HandleErrorService], (service: HandleErrorService) => {
    expect(service).toBeTruthy();
  }));
});
