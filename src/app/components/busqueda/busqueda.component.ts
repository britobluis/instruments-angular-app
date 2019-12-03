import { Component } from '@angular/core';
import { Instrumento } from 'src/app/interfaces/instrumento';
import { ActivatedRoute } from '@angular/router';
import { InstrumentosService } from 'src/app/service/instrumentos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  instrumentos: Instrumento[] = [];

  constructor(private activatedRoute: ActivatedRoute, private instrumentoService: InstrumentosService) {
    this.activatedRoute.params.subscribe(params => {
      this.instrumentos = this.instrumentoService.getInstrumentosXPrecio(params.termino);
    });
  }

}
