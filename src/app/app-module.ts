import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { SharedModule } from './shared/shared-module';
import { MainModule } from './features/main/main-module';
import { ProductsModule } from './features/products/products-module';
import { OrderModule } from './features/order/order-module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    SharedModule,
    MainModule,
    ProductsModule,
    OrderModule,
    AppRoutingModule,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
