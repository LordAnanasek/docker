import { TestBed, inject } from '@angular/core/testing';

import { DockerListService } from './docker-list.service';

describe('DockerListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockerListService]
    });
  });

  it('should be created', inject([DockerListService], (service: DockerListService) => {
    expect(service).toBeTruthy();
  }));
});
