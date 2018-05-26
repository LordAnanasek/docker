import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerContainerDetailsComponent } from './docker-container-details.component';

describe('DockerContainerDetailsComponent', () => {
  let component: DockerContainerDetailsComponent;
  let fixture: ComponentFixture<DockerContainerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockerContainerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerContainerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
