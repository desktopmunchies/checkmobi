import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationVerifyPinComponent } from './documentation-verify-pin.component';

describe('DocumentationVerifyPinComponent', () => {
  let component: DocumentationVerifyPinComponent;
  let fixture: ComponentFixture<DocumentationVerifyPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationVerifyPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationVerifyPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
