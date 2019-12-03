import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  mensaje = '';

  constructor(private router: Router) { }

  buscarInstrumentos(textoBusqueda: string) {
    if (textoBusqueda !== '') {
      console.log(textoBusqueda);
      this.mensaje = '';
      this.router.navigate(['/busqueda', textoBusqueda]);
    } else {
      this.mensaje = 'Ingrese un término de búsqueda';
    }
  }

}
