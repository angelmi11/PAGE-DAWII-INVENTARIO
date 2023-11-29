import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { INavigate } from 'src/app/core/models/navigate.model';
import { IResProduc } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.less'],
})
export class ProductoListComponent implements OnInit {
  displayedColumns: string[] = ["id",'name', 'price', 'category', 'description', "action"];
  productList: IResProduc[] = [];
  public navigate: INavigate = {
    title: 'Productos',
    paths: [{
      name: "",
      link: "",
      isSelect: true,
    }]
  }
  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  private async getAllProducts() {
    let resp = await this.productService.get()
    if (resp && resp.length > 0) this.productList = resp
  }

  public viewEditProduct(id: number) {
    this.router.navigate(['/producto/editar', id]);
  }

  public createProduct (){
    this.router.navigate(['/producto/crear']);
  }
}
