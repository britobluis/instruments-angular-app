import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/interfaces/instrumento';

@Component({
  selector: 'app-instrumento-pago-envio',
  templateUrl: './instrumento-pago-envio.component.html',
  styleUrls: ['./instrumento-pago-envio.component.css']
})
export class InstrumentoPagoEnvioComponent {

  // Espera un instrumento desde la lista de instrumentos-venta
  @Input() instrumentoInput: Instrumento;

  constructor(private router: Router) { }

  // Navega hacia componente instrumento detalle pasandole la marca del instrumento
  public verDetalle(marca: string) {
    this.router.navigate(['/detalle', marca]);
  }


}
