import { Component } from '@angular/core';
import { Instrumento } from 'src/app/interfaces/instrumento';
import { InstrumentosService } from 'src/app/service/instrumentos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instrumento-detalle',
  templateUrl: './instrumento-detalle.component.html',
  styleUrls: ['./instrumento-detalle.component.css']
})
export class InstrumentoDetalleComponent {

  // Inicializa un instrumento vacio
  private instrumentoDetalle: Instrumento;

  // Al ser instanciado el componente en su constructor utiliza el InstrumentosService para buscar 1 instrumento por marca
  constructor(private activatedRoute: ActivatedRoute, private instrumentoService: InstrumentosService) {
    this.activatedRoute.params.subscribe(params => {
      this.instrumentoDetalle = this.instrumentoService.getInstrumentoXMarca(params.marca);
    });
  }
}
