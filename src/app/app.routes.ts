import { RouterModule, Routes } from '@angular/router';
import { Main } from './components/pages/main/main';
import { Catalog } from './components/pages/catalog/catalog';
import { Order } from './components/pages/order/order';
import { ProductPage } from './components/pages/product-page/product-page';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'catalog', component: Catalog },
  { path: 'order', component: Order },
  { path: 'product-page/:id', component: ProductPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutes {}
