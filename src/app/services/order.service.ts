import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequestType } from '../types/order-request.type';
import { OrderResponseType } from '../types/order-response.type';

@Injectable()
export class OrderService {
  constructor(public http: HttpClient) {}

  public sendOrder(data: OrderRequestType): Observable<OrderResponseType> {
    return this.http.post<OrderResponseType>('https://testologia.ru/order-tea', data);
  }
}
