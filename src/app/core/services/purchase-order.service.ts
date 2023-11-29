import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IPurchaseOrderRoot, ITransationPurchase } from '../models/purchase-order.model';
import { Root } from 'postcss';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  private url: string = "http://localhost:8080/api/v1/ordencompra"

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public async post(purchaseOrder: ITransationPurchase) {
    let resp: any = await this.http.post(this.url, purchaseOrder).toPromise()
  }

  public async get() {
    return await this.http.get<IPurchaseOrderRoot>(this.url).toPromise()
  }
}
