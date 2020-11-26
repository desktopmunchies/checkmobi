import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqMissedCallComponent } from './faq-missed-call.component';

describe('FaqMissedCallComponent', () => {
  let component: FaqMissedCallComponent;
  let fixture: ComponentFixture<FaqMissedCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqMissedCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqMissedCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
