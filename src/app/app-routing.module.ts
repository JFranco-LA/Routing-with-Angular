import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { ProductoComponent } from './views/producto/producto.component';
import { ProductosComponent } from './views/productos/productos.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: InicioComponent},
  {path: 'products', component: ProductosComponent},
  {path: 'product/:id', component: ProductoComponent},
  {path: 'products/:**', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
