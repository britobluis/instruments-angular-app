import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentoConEnvioComponent } from './instrumento-con-envio.component';

describe('InstrumentoConEnvioComponent', () => {
  let component: InstrumentoConEnvioComponent;
  let fixture: ComponentFixture<InstrumentoConEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentoConEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentoConEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
