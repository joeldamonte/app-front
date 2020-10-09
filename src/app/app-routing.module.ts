import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompraComponent } from './components/compra/compra.component';
import { InfovipComponent } from './components/infovip/infovip.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AgregProdCarrComponent } from './components/agreg-prod-carr/agreg-prod-carr.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "compra", component: CompraComponent},
  {path: "vip", component: InfovipComponent},
  {path: "productos/:id", component: CarritoComponent,
   children: [
    {path: "lista", component: ProductosComponent},
    {path: "agregar", component: AgregProdCarrComponent}
  ]},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
