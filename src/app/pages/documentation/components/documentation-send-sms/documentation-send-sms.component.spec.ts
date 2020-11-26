import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationSendSmsComponent } from './documentation-send-sms.component';

describe('DocumentationSendSmsComponent', () => {
  let component: DocumentationSendSmsComponent;
  let fixture: ComponentFixture<DocumentationSendSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationSendSmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationSendSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
