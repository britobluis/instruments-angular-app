import { Component } from '@angular/core';
import { Instrumento } from 'src/app/interfaces/instrumento';
import { InstrumentosService } from 'src/app/service/instrumentos.service';

@Component({
  selector: 'app-instrumentos-venta',
  templateUrl: './instrumentos-venta.component.html',
  styleUrls: ['./instrumentos-venta.component.css']
})
export class InstrumentosVentaComponent {

  instrumentos: Instrumento[] = [];

  // Inyecta el InstrumentosService y usa el metodo get Instrumentos service para cargar el array instrumentos
  constructor(private instrumentoService: InstrumentosService) {
    console.log('InstrumentosVentaComponent');
    this.instrumentoService.getInstrumentosFromFilePHP()
      .subscribe(instrumentosPHP => {
        this.instrumentos = instrumentosPHP;
      });
  }


}
