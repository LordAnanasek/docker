import { TestBed, inject } from '@angular/core/testing';

import { DockerImagesService } from './docker-images.service';

describe('DockerImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DockerImagesService]
    });
  });

  it('should be created', inject([DockerImagesService], (service: DockerImagesService) => {
    expect(service).toBeTruthy();
  }));
});
