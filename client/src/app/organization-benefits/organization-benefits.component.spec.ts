import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationBenefitsComponent } from './organization-benefits.component';

describe('OrganizationBenefitsComponent', () => {
  let component: OrganizationBenefitsComponent;
  let fixture: ComponentFixture<OrganizationBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
