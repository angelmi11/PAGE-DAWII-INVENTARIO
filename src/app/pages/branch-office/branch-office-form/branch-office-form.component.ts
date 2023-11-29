import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IResBranchOffice } from 'src/app/core/models/branch-office.model';
import { INavigate } from 'src/app/core/models/navigate.model';
import { BranchOfficeService } from 'src/app/core/services/branch-office.service';

@Component({
  selector: 'app-branch-office-form',
  templateUrl: './branch-office-form.component.html',
  styleUrls: ['./branch-office-form.component.less']
})
export class BranchOfficeFormComponent {
  public mode: 'create' | 'edit' | 'view' = 'create';
  public branchOffice: IResBranchOffice;
  public navigate: INavigate = {
    title: 'Sucursal',
    paths: [{
      name: "Sucursal lista",
      link: "/sucursal/lista",
      isSelect: false,
    }]
  }

  public branchOfficeForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  },);

  constructor(
    private fb: FormBuilder = new FormBuilder(),
    private route: ActivatedRoute,
    private branchOfficeService: BranchOfficeService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.branchOffice = {
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
    if (this.branchOfficeForm.invalid) {
      this.toastr.error("Complete todo los datos")
      return
    }

    if (this.mode === 'create') {
      this.branchOfficeService.post(this?.branchOfficeForm?.value)
    } else {
      this.branchOfficeService.put({ ...this?.branchOfficeForm?.value, id: this.branchOffice.id }, this.branchOffice.id)
    }
  }

  private determineMode() {
    const id: number = this.route.snapshot.params['id'];
    if (id) {
      this.mode = 'edit';
      this.getIdCategory(id)
    } else {
      this.mode = 'create';
      this.navigate.paths.push({
        name: 'Crear',
        link: "#",
        isSelect: true,
      })
    }
  }

  private async getIdCategory(id: number) {
    let resp = await this.branchOfficeService.id(id)
    if (resp) this.branchOffice = resp
    this.loadFormValue()
    this.navigate.paths.push({
      name: 'editar',
      link: "#",
      isSelect: true,
    })
  }

  private loadFormValue() {
    this.branchOfficeForm.patchValue(this.branchOffice);
  }
}
