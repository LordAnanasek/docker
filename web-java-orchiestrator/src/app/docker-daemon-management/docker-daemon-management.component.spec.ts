import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerDaemonManagementComponent } from './docker-daemon-management.component';

describe('DockerDaemonManagementComponent', () => {
  let component: DockerDaemonManagementComponent;
  let fixture: ComponentFixture<DockerDaemonManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockerDaemonManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerDaemonManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
