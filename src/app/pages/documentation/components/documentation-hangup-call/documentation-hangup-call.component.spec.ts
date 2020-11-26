import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationHangupCallComponent } from './documentation-hangup-call.component';

describe('DocumentationHangupCallComponent', () => {
  let component: DocumentationHangupCallComponent;
  let fixture: ComponentFixture<DocumentationHangupCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationHangupCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationHangupCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
