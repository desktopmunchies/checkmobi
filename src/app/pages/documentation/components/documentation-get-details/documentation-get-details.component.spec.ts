import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationGetDetailsComponent } from './documentation-get-details.component';

describe('DocumentationGetDetailsComponent', () => {
  let component: DocumentationGetDetailsComponent;
  let fixture: ComponentFixture<DocumentationGetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationGetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationGetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
