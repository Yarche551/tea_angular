import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { Order } from './pages/order/order';

@NgModule({
  declarations: [Order],
  imports: [CommonModule, ReactiveFormsModule, OrderRoutingModule, SharedModule],
})
export class OrderModule {}
