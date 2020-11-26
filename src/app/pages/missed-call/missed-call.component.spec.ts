import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedCallComponent } from './missed-call.component';

describe('MissedCallComponent', () => {
  let component: MissedCallComponent;
  let fixture: ComponentFixture<MissedCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissedCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
