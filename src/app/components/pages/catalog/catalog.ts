import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../common/product/product';
import { ProductType } from '../../../types/product.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [Product, RouterLink],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
  providers: [ProductService],
})
export class Catalog implements OnInit {
  public products = signal<ProductType[]>([]);
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products.set(data);
    });
  }
}
