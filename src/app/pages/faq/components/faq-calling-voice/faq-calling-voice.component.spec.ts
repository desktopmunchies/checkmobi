import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqCallingVoiceComponent } from './faq-calling-voice.component';

describe('FaqCallingVoiceComponent', () => {
  let component: FaqCallingVoiceComponent;
  let fixture: ComponentFixture<FaqCallingVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqCallingVoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqCallingVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
