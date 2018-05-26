import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerNetworkDetailsComponent } from './docker-network-details.component';

describe('DockerNetworkDetailsComponent', () => {
  let component: DockerNetworkDetailsComponent;
  let fixture: ComponentFixture<DockerNetworkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockerNetworkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerNetworkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
