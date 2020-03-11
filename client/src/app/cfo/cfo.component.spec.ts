import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfoComponent } from './cfo.component';

describe('CfoComponent', () => {
  let component: CfoComponent;
  let fixture: ComponentFixture<CfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
