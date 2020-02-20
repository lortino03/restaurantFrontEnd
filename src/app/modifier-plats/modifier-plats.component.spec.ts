import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPlatsComponent } from './modifier-plats.component';

describe('ModifierPlatsComponent', () => {
  let component: ModifierPlatsComponent;
  let fixture: ComponentFixture<ModifierPlatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPlatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
