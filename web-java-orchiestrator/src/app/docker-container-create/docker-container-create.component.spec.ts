import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerContainerCreateComponent } from './docker-container-create.component';

describe('DockerContainerCreateComponent', () => {
  let component: DockerContainerCreateComponent;
  let fixture: ComponentFixture<DockerContainerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockerContainerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerContainerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
