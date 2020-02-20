import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTablesComponent } from './modifier-tables.component';

describe('ModifierTablesComponent', () => {
  let component: ModifierTablesComponent;
  let fixture: ComponentFixture<ModifierTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
