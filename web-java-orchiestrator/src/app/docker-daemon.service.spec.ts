import { TestBed, inject } from '@angular/core/testing';

import { DockerDaemonService } from './docker-daemon.service';

describe('DockerDaemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockerDaemonService]
    });
  });

  it('should be created', inject([DockerDaemonService], (service: DockerDaemonService) => {
    expect(service).toBeTruthy();
  }));
});
