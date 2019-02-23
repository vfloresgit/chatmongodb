import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLateralContactosComponent } from './barra-lateral-contactos.component';

describe('BarraLateralContactosComponent', () => {
  let component: BarraLateralContactosComponent;
  let fixture: ComponentFixture<BarraLateralContactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraLateralContactosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraLateralContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
