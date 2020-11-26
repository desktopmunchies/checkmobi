import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqMonitoringComponent } from './faq-monitoring.component';

describe('FaqMonitoringComponent', () => {
  let component: FaqMonitoringComponent;
  let fixture: ComponentFixture<FaqMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
