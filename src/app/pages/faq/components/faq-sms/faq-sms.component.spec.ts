import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSmsComponent } from './faq-sms.component';

describe('FaqSmsComponent', () => {
  let component: FaqSmsComponent;
  let fixture: ComponentFixture<FaqSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqSmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
