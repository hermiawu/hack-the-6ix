import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateListComponent } from './roommate-list.component';

describe('RoommateListComponent', () => {
  let component: RoommateListComponent;
  let fixture: ComponentFixture<RoommateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoommateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
