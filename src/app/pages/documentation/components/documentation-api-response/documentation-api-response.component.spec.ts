import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationApiResponseComponent } from './documentation-api-response.component';

describe('DocumentationApiResponseComponent', () => {
  let component: DocumentationApiResponseComponent;
  let fixture: ComponentFixture<DocumentationApiResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationApiResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationApiResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
