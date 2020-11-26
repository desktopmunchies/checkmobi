import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationGetSmsDetailsComponent } from './documentation-get-sms-details.component';

describe('DocumentationGetSmsDetailsComponent', () => {
  let component: DocumentationGetSmsDetailsComponent;
  let fixture: ComponentFixture<DocumentationGetSmsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationGetSmsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationGetSmsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
