import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { OrderRequestType } from '../../../types/order-request.type';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.html',
  styleUrl: './order.scss',
  providers: [OrderService],
})
export class Order {
  public orderForm: FormGroup;
  public isOrderSent = signal(false);
  public hasOrderError = signal(false);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private orderService: OrderService,
  ) {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-Я]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{11}$/)]],
      country: [''],
      zip: ['', Validators.required],
      address: ['', Validators.pattern(/^[a-zA-Zа-яА-Я0-9 \-/]+$/)],
      productTitle: [{ value: '', disabled: true }, Validators.required],
      comment: [''],
    });

    const productTitle = this.route.snapshot.queryParamMap.get('product');
    if (productTitle) {
      this.orderForm.controls['productTitle'].setValue(productTitle);
    }
  }

  public createOrder(): void {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    const raw = this.orderForm.getRawValue();
    const payload: OrderRequestType = {
      name: raw.name,
      last_name: raw.lastName,
      phone: raw.phone,
      country: raw.country,
      zip: raw.zip,
      product: raw.productTitle,
      address: raw.address,
      comment: raw.comment,
    };

    this.hasOrderError.set(false);

    this.orderService.sendOrder(payload).subscribe({
      next: (response) => {
        if (response.success === 1) {
          this.isOrderSent.set(true);
        } else {
          this.hasOrderError.set(true);
        }
      },
      error: () => this.hasOrderError.set(true),
    });
  }
}
