import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationCountriesListComponent } from './documentation-countries-list.component';

describe('DocumentationCountriesListComponent', () => {
  let component: DocumentationCountriesListComponent;
  let fixture: ComponentFixture<DocumentationCountriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationCountriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationCountriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
