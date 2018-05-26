import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerImageDetailsComponent } from './docker-image-details.component';

describe('DockerImageDetailsComponent', () => {
  let component: DockerImageDetailsComponent;
  let fixture: ComponentFixture<DockerImageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockerImageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerImageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
