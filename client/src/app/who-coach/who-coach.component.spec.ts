import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoCoachComponent } from './who-coach.component';

describe('WhoCoachComponent', () => {
  let component: WhoCoachComponent;
  let fixture: ComponentFixture<WhoCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
