import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as Root from 'postcss/lib/root';
import { INavigate } from 'src/app/core/models/navigate.model';
import { IPurchaseOrder } from 'src/app/core/models/purchase-order.model';
import { PurchaseOrderService } from 'src/app/core/services/purchase-order.service';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.less']
})
export class PurchaseOrderListComponent {
  displayedColumns: string[] = ['id', "user", 'vendor', 'product', 'quantity', "price"];
  purchaseOrders: IPurchaseOrder[] = [];
  public navigate: INavigate = {
    title: 'Ordenes de compra',
    paths: [{
      name: "",
      link: "",
      isSelect: false,
    }]
  }

  constructor(
    private purchaseOrderService: PurchaseOrderService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  private async getAllProducts() {
    let resp = await this.purchaseOrderService.get()
    if (resp && resp.content.length > 0) this.purchaseOrders = resp.content
    console.log('this.purchaseOrders', this.purchaseOrders)
  }

  public viewEditProduct(id: number) {
    this.router.navigate(['/producto/editar', id]);
  }

  public createPurchaseOrder() {
    this.router.navigate(['/orden-compra/crear']);
  }
}
