import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentosVentaComponent } from './instrumentos-venta.component';

describe('InstrumentosVentaComponent', () => {
  let component: InstrumentosVentaComponent;
  let fixture: ComponentFixture<InstrumentosVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentosVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentosVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
