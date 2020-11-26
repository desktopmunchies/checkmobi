import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntifraudComponent } from './antifraud.component';

describe('AntifraudComponent', () => {
  let component: AntifraudComponent;
  let fixture: ComponentFixture<AntifraudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntifraudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntifraudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
