import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationValidationStatusComponent } from './documentation-validation-status.component';

describe('DocumentationValidationStatusComponent', () => {
  let component: DocumentationValidationStatusComponent;
  let fixture: ComponentFixture<DocumentationValidationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationValidationStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationValidationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
