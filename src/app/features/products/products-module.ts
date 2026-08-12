import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { Catalog } from './pages/catalog/catalog';
import { ProductPage } from './pages/product-page/product-page';

@NgModule({
  declarations: [Catalog, ProductPage],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
