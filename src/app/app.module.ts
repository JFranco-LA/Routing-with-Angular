import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule as MaterialAngularModules } from './components/shared/shared.module';
import { InicioComponent } from './views/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './views/productos/productos.component';
import { ProductoComponent } from './views/producto/producto.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    ProductosComponent,
    ProductoComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAngularModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
