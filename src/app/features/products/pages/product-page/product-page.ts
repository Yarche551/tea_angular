import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from '../../../../types/product.type';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss',
  standalone: false,
  providers: [ProductService],
})
export class ProductPage implements OnInit {
  public product = signal<ProductType>({} as ProductType);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((data) => {
        this.product.set(data);
      });
    }
  }
}
