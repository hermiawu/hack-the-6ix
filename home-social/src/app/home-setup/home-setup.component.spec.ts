import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSetupComponent } from './home-setup.component';

describe('HomeSetupComponent', () => {
  let component: HomeSetupComponent;
  let fixture: ComponentFixture<HomeSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
