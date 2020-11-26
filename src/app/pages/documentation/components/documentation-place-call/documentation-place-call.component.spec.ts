import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationPlaceCallComponent } from './documentation-place-call.component';

describe('DocumentationPlaceCallComponent', () => {
  let component: DocumentationPlaceCallComponent;
  let fixture: ComponentFixture<DocumentationPlaceCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationPlaceCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationPlaceCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
