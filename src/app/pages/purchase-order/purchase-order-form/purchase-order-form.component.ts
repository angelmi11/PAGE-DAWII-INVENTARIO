import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/core/models/User.model';
import { IResBranchOffice } from 'src/app/core/models/branch-office.model';
import { INavigate } from 'src/app/core/models/navigate.model';
import { IResProduc } from 'src/app/core/models/product.model';
import { ITransationPurchase, User } from 'src/app/core/models/purchase-order.model';
import { IVendor } from 'src/app/core/models/vendor.model';
import { BranchOfficeService } from 'src/app/core/services/branch-office.service';
import { ProductService } from 'src/app/core/services/product.service';
import { PurchaseOrderService } from 'src/app/core/services/purchase-order.service';
import { UserService } from 'src/app/core/services/user.service';
import { VendorService } from 'src/app/core/services/vendor.service';

@Component({
  selector: 'app-purchase-order-form',
  templateUrl: './purchase-order-form.component.html',
  styleUrls: ['./purchase-order-form.component.less']
})
export class PurchaseOrderFormComponent {
  public mode: 'create' | 'edit' | 'view' = 'create';
  public products: IResProduc[] = []
  public branchOffices: IResBranchOffice[] = []
  public user: User[] = []
  public vendor: IVendor[] = []
  public navigate: INavigate = {
    title: 'Ordenes de compra',
    paths: [{
      name: "Orden de compra",
      link: "/orden-compra/lista",
      isSelect: false,
    },
    {
      name: "Crear",
      link: "",
      isSelect: true,
    }]
  }
  public purchaseOrderForm: FormGroup = this.fb.group({
    branchId: ['', [Validators.required]],
    userId: ['', [Validators.required]],
    vendorId: ['', [Validators.required]],
    productId: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    price: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder = new FormBuilder(),
    private branchOfficeService: BranchOfficeService,
    private productService: ProductService,
    private vendorService: VendorService,
    private userService: UserService,
    private purchaseOrderService: PurchaseOrderService,
    private toastr: ToastrService,
    private route: ActivatedRoute,

  ) { }


  ngOnInit(): void {
    this.getUsers()
    this.getProducts()
    this.getBrachOfficies()
    this.getVendors()
  }

  public onSubmit() {
    if (this.purchaseOrderForm.invalid) {
      this.toastr.error("Complete todo los datos")
      return
    }

    let order: ITransationPurchase = {
      purcherOrder: {
        branch: {
          id: this.purchaseOrderForm.value.branchId
        },
        user: {
          id: this.purchaseOrderForm.value.userId
        },
        vendor: {
          id: this.purchaseOrderForm.value.vendorId
        },
        order_date: this.formatDateToYYYYMMDD(),
        status: "PENDING"
      },
      purcherOrderDetail: {
        product: {
          id: this.purchaseOrderForm.value.productId
        },
        quantity: Number(this.purchaseOrderForm.value.quantity),
        price: Number(this.purchaseOrderForm.value.price)
      }
    }

    if (this.mode === "create") {
      this.purchaseOrderService.post(order)
    }
  }

  private async getUsers() {
    let resp = await this.userService.get()
    if (resp?.content && resp.content.length > 0) {
      this.user = resp?.content

    }

  }
  private async getProducts() {
    let resp = await this.productService.get()
    if (resp && resp?.length > 0) {
      this.products = resp
    }

  }

  private async getBrachOfficies() {
    let resp = await this.branchOfficeService.get()
    if (resp && resp?.length > 0) {
      this.branchOffices = resp
    }

  }

  private async getVendors() {
    let resp = await this.vendorService.get()
    if (resp?.content && resp?.content?.length > 0) {
      this.vendor = resp?.content
    }
  }

  private formatDateToYYYYMMDD() {
    let date = new Date()
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }



}
