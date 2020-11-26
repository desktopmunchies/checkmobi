import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationApiRequestComponent } from './documentation-api-request.component';

describe('DocumentationApiRequestComponent', () => {
  let component: DocumentationApiRequestComponent;
  let fixture: ComponentFixture<DocumentationApiRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationApiRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationApiRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
