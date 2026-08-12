import { Component, Input } from '@angular/core';
import { ProductType } from '../../../types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrl: './product.scss',
  standalone: false,
})
export class Product {
  @Input() product: ProductType = {} as ProductType;
}
