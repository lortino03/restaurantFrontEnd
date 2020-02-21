import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierReservationsComponent } from './calendrier-reservations.component';

describe('CalendrierReservationsComponent', () => {
  let component: CalendrierReservationsComponent;
  let fixture: ComponentFixture<CalendrierReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendrierReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
