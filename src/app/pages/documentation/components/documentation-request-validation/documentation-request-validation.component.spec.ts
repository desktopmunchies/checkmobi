import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationRequestValidationComponent } from './documentation-request-validation.component';

describe('DocumentationRequestValidationComponent', () => {
  let component: DocumentationRequestValidationComponent;
  let fixture: ComponentFixture<DocumentationRequestValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationRequestValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationRequestValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
