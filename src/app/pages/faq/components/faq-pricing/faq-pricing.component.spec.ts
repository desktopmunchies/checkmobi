import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqPricingComponent } from './faq-pricing.component';

describe('FaqPricingComponent', () => {
  let component: FaqPricingComponent;
  let fixture: ComponentFixture<FaqPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
