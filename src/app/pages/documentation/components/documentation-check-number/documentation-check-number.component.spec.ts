import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationCheckNumberComponent } from './documentation-check-number.component';

describe('DocumentationCheckNumberComponent', () => {
  let component: DocumentationCheckNumberComponent;
  let fixture: ComponentFixture<DocumentationCheckNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationCheckNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationCheckNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
