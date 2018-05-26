import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerImageListComponent } from './docker-image-list.component';

describe('DockerImageListComponent', () => {
  let component: DockerImageListComponent;
  let fixture: ComponentFixture<DockerImageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockerImageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
