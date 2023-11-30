import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INavigate } from 'src/app/core/models/navigate.model';
import { IVendor } from 'src/app/core/models/vendor.model';
import { VendorService } from 'src/app/core/services/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.less']
})
export class VendorListComponent {
  public displayedColumns: string[] = ['id', 'name', 'address', 'phone', "action"];
  public dataSource: IVendor[] = []
  public navigate: INavigate = {
    title: 'Proveedores',
    paths: [{
      name: "",
      link: "",
      isSelect: false,
    }]
  }
  constructor(
    private vendorService: VendorService,
    private router: Router
  ) {

  }

  public ngOnInit(): void {
    this.getAllVendor()
  }

  private async getAllVendor() {
    let resp = await this.vendorService.get()
    if (resp?.content && resp?.content?.length > 0) {
      this.dataSource = resp?.content
    }
  }

  public viewEditBranchOffice(id: number) {
    this.router.navigate(['/sucursal/editar', id]);
  }

  public createVendor() {
    this.router.navigate(['/sucursal/crear']);
  }
}
