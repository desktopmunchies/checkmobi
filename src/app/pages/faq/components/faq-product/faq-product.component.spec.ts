import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqProductComponent } from './faq-product.component';

describe('FaqProductComponent', () => {
  let component: FaqProductComponent;
  let fixture: ComponentFixture<FaqProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
