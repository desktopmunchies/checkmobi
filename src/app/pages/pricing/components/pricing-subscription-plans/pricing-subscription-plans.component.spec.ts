import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingSubscriptionPlansComponent } from './pricing-subscription-plans.component';

describe('PricingSubscriptionPlansComponent', () => {
  let component: PricingSubscriptionPlansComponent;
  let fixture: ComponentFixture<PricingSubscriptionPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingSubscriptionPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingSubscriptionPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
