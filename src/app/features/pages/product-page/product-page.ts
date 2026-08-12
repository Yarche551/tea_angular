import { Component, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ProductType } from '../../../types/product.type';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../common/product/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-page',
  imports: [RouterLink, Product, CurrencyPipe],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss',
  providers: [ProductService],
})
export class ProductPage implements OnInit {
  @Input() public product = signal<ProductType>({} as ProductType);
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((data) => {
        this.product.set(data);
        console.log(this.product);
      });
    }
  }
}
