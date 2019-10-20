import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InstrumentosService } from './service/instrumentos.service';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { InstrumentoConEnvioComponent } from './components/instrumento-con-envio/instrumento-con-envio.component';
import { InstrumentoDetalleComponent } from './components/instrumento-detalle/instrumento-detalle.component';
import { InstrumentoPagoEnvioComponent } from './components/instrumento-pago-envio/instrumento-pago-envio.component';
import { InstrumentosVentaComponent } from './components/instrumentos-venta/instrumentos-venta.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    InstrumentoConEnvioComponent,
    InstrumentoConEnvioComponent,
    InstrumentoDetalleComponent,
    InstrumentoPagoEnvioComponent,
    InstrumentosVentaComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InstrumentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
