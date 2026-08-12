import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Catalog } from './pages/catalog/catalog';
import { ProductPage } from './pages/product-page/product-page';

const routes: Routes = [
  { path: 'catalog', component: Catalog },
  { path: 'product-page/:id', component: ProductPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
