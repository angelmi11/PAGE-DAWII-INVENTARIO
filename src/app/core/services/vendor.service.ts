import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IVendor, IVendorRoot } from '../models/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private url: string = "http://localhost:8080/api/v1/proveedor"

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public async post(vendor: IVendor) {
    console.log('vendor', vendor)
    let resp: any = await this.http.post(this.url, vendor).toPromise()
  }

  public async id(id: number) {
    let resp = await this.http.get<IVendor>(this.url + `/${id}`).toPromise()
    return resp
  }

  public async put(vendor: IVendor, id: number) {
    let resp = await this.http.put<IVendor>(this.url + `/${id}`, vendor).toPromise()

  }

  public async get() {
    return await this.http.get<IVendorRoot>(this.url).toPromise()

  }
}
