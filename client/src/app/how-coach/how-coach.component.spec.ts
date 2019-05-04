import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowCoachComponent } from './how-coach.component';

describe('HowCoachComponent', () => {
  let component: HowCoachComponent;
  let fixture: ComponentFixture<HowCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
