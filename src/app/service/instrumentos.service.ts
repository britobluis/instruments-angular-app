import { Injectable } from '@angular/core';
import { Instrumento } from '../interfaces/instrumento';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstrumentosService {

  public instrumentos: Instrumento[] = [];
  public instrumento: Instrumento;

  // Inyecta el HttpClient cuando se instancia el servicio
  constructor(public http: HttpClient) { }

  // Carga el listado de instrumentos en el array de tipo Intrumento
  public getInstrumentosFromFilePHP() {
    console.log('getInstrumentosFromFilePHP');
    return this.http.get('http://localhost/utn/lista_instrumentos.php')
      .pipe(map((instrumentosServer) => {
        this.instrumentos = JSON.parse(JSON.stringify(instrumentosServer));
        console.log(this.instrumentos);
        return this.instrumentos;
      }));
  }

  // Busca instrumentos por marca
  public getInstrumentoXMarca(marcaParam: string) {
    for (const inst of this.instrumentos) {
      if (inst.marca === marcaParam) {
        console.log('ENCONTRE ' + inst.instrumento);
        return inst;
      }
    }
  }

  // Sortea instrumentos por precio menor a cantidad especificada
  public getInstrumentosXPrecio(precio: string) {
    const instrumentosEncontrados: Instrumento[] = [];
    for (const inst of this.instrumentos) {
      if (parseFloat(inst.precio) < parseFloat(precio)) {
        instrumentosEncontrados.push(inst);
      }
    }
    console.log(instrumentosEncontrados);
    return instrumentosEncontrados;
  }

}
