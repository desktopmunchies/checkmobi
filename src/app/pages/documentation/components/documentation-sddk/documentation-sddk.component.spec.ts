import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationSddkComponent } from './documentation-sddk.component';

describe('DocumentationSddkComponent', () => {
  let component: DocumentationSddkComponent;
  let fixture: ComponentFixture<DocumentationSddkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationSddkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationSddkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
