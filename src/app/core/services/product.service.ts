import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IReqProduc, IResProduc } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = "http://localhost:8080/api/v1/product"

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public async post(product: IReqProduc) {
    let resp: any = await this.http.post(this.url, { ...product, category_id: product.category_id }).toPromise()
  }

  public async id(id: number) {
    let resp = await this.http.get<IResProduc>(this.url + `/${id}`).toPromise()
    return resp
  }

  public async put(product: IReqProduc, id: number) {
    let resp = await this.http.put<IResProduc>(this.url + `/${id}`, product).toPromise()

  }

  public async get() {
    let resp = await this.http.get<IResProduc[]>(this.url).toPromise()
    return resp
  }

}
