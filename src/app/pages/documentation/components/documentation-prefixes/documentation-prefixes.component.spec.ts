import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationPrefixesComponent } from './documentation-prefixes.component';

describe('DocumentationPrefixesComponent', () => {
  let component: DocumentationPrefixesComponent;
  let fixture: ComponentFixture<DocumentationPrefixesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationPrefixesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationPrefixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
