import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationGetCallDetailsComponent } from './documentation-get-call-details.component';

describe('DocumentationGetCallDetailsComponent', () => {
  let component: DocumentationGetCallDetailsComponent;
  let fixture: ComponentFixture<DocumentationGetCallDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationGetCallDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationGetCallDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
