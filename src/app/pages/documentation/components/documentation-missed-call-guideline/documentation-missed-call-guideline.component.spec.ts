import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationMissedCallGuidelineComponent } from './documentation-missed-call-guideline.component';

describe('DocumentationMissedCallGuidelineComponent', () => {
  let component: DocumentationMissedCallGuidelineComponent;
  let fixture: ComponentFixture<DocumentationMissedCallGuidelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationMissedCallGuidelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationMissedCallGuidelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
