import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAntifraudComponent } from './home-antifraud.component';

describe('HomeAntifraudComponent', () => {
  let component: HomeAntifraudComponent;
  let fixture: ComponentFixture<HomeAntifraudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAntifraudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAntifraudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
