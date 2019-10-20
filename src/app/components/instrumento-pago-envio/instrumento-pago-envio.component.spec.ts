import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentoPagoEnvioComponent } from './instrumento-pago-envio.component';

describe('InstrumentoPagoEnvioComponent', () => {
  let component: InstrumentoPagoEnvioComponent;
  let fixture: ComponentFixture<InstrumentoPagoEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentoPagoEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentoPagoEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
