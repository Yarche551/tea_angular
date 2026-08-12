import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductType } from '../../../types/product.type';
import { TextFormatPipe } from '../../../pipes/text-format-pipe';

@Component({
  selector: 'app-product',
  imports: [RouterLink, TextFormatPipe],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  @Input() product: ProductType = { } as ProductType;
}
