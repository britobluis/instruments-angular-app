import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentosVentaComponent } from './components/instrumentos-venta/instrumentos-venta.component';
import { InstrumentoDetalleComponent } from './components/instrumento-detalle/instrumento-detalle.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [{ path: 'instrumentos', component: InstrumentosVentaComponent },
  { path: 'detalle/:marca', component: InstrumentoDetalleComponent },
  { path: 'busqueda/:termino', component: BusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'instrumentos' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
