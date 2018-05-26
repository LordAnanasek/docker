import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerDetailsComponent } from './docker-details.component';

describe('DockerDetailsComponent', () => {
  let component: DockerDetailsComponent;
  let fixture: ComponentFixture<DockerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DockerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
