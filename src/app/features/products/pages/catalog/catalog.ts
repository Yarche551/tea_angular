import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { ProductType } from '../../../../types/product.type';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
  standalone: false,
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
