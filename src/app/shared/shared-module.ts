import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Product } from './components/product/product';
import { TextFormatPipe } from './pipes/text-format-pipe';

@NgModule({
  declarations: [Header, Footer, Product, TextFormatPipe],
  imports: [CommonModule, RouterModule, NgbCollapseModule],
  exports: [Header, Footer, Product, TextFormatPipe],
})
export class SharedModule {}
