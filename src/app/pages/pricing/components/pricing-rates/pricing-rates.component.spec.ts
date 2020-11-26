import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingRatesComponent } from './pricing-rates.component';

describe('PricingRatesComponent', () => {
  let component: PricingRatesComponent;
  let fixture: ComponentFixture<PricingRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
