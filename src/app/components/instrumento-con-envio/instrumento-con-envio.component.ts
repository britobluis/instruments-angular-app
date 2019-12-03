import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/interfaces/instrumento';

@Component({
  selector: 'app-instrumento-con-envio',
  templateUrl: './instrumento-con-envio.component.html',
  styleUrls: ['./instrumento-con-envio.component.css']
})
export class InstrumentoConEnvioComponent implements OnInit {

  @Input() instrumentoInput: Instrumento;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public verDetalle(marca: string) {
    this.router.navigate(['/detalle', marca]);
  }


}
