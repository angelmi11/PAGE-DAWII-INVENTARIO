import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IResBranchOffice } from 'src/app/core/models/branch-office.model';
import { INavigate } from 'src/app/core/models/navigate.model';
import { IVendor } from 'src/app/core/models/vendor.model';
import { VendorService } from 'src/app/core/services/vendor.service';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.less']
})
export class VendorFormComponent {
  public mode: 'create' | 'edit' | 'view' = 'create';
  public navigate: INavigate = {
    title: 'Proveedor',
    paths: [{
      name: "Proveedor lista",
      link: "/proveedor/lista",
      isSelect: false,
    }]
  }

  public vendor: IVendor;
  public vendorForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  },);

  constructor(
    private fb: FormBuilder = new FormBuilder(),
    private route: ActivatedRoute,
    private vendorService: VendorService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.vendor = {
      id: 0,
      name: "",
      address: "",
      phone: ""
    }
  }

  ngOnInit(): void {
    this.determineMode()
  }

  public onSubmit() {
    if (this.vendorForm.invalid) {
      this.toastr.error("Complete todo los datos")
      return
    }

    if (this.mode === 'create') {
      this.vendorService.post(this?.vendorForm?.value)
    } else {
      this.vendorService.put({ ...this?.vendorForm?.value, id: this.vendor.id }, this.vendor.id)
    }
  }

  private determineMode() {
    const id: number = this.route.snapshot.params['id'];
    if (id) {
      this.mode = 'edit';
      this.getVendorId(id)
      this.navigate.paths.push({
        name: 'Editar',
        link: "#",
        isSelect: true,
      })
    } else {
      this.mode = 'create';
      this.navigate.paths.push({
        name: 'Crear',
        link: "#",
        isSelect: true,
      })
    }
  }

  private async getVendorId(id: number) {
    let resp = await this.vendorService.id(id)
    if (resp) this.vendor = resp
    this.loadFormValue()
  }

  private loadFormValue() {
    this.vendorForm.patchValue(this.vendor);
  }
}
