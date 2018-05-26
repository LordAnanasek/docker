import { TestBed, inject } from '@angular/core/testing';

import { MessageInfoService } from './message-info.service';

describe('MessageInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageInfoService]
    });
  });

  it('should be created', inject([MessageInfoService], (service: MessageInfoService) => {
    expect(service).toBeTruthy();
  }));
});
