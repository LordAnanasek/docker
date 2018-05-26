import { TestBed, inject } from '@angular/core/testing';

import { DockerNetworkService } from './docker-network.service';

describe('DockerNetworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockerNetworkService]
    });
  });

  it('should be created', inject([DockerNetworkService], (service: DockerNetworkService) => {
    expect(service).toBeTruthy();
  }));
});
