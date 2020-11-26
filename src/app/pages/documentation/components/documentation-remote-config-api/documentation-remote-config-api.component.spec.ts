import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationRemoteConfigApiComponent } from './documentation-remote-config-api.component';

describe('DocumentationRemoteConfigApiComponent', () => {
  let component: DocumentationRemoteConfigApiComponent;
  let fixture: ComponentFixture<DocumentationRemoteConfigApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationRemoteConfigApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationRemoteConfigApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
