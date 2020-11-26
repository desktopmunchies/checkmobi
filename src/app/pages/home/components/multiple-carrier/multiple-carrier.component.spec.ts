import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCarrierComponent } from './multiple-carrier.component';

describe('MultipleCarrierComponent', () => {
  let component: MultipleCarrierComponent;
  let fixture: ComponentFixture<MultipleCarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleCarrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
