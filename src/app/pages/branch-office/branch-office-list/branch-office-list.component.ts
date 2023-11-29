import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IResBranchOffice } from 'src/app/core/models/branch-office.model';
import { INavigate } from 'src/app/core/models/navigate.model';
import { BranchOfficeService } from 'src/app/core/services/branch-office.service';

@Component({
  selector: 'app-branch-office-list',
  templateUrl: './branch-office-list.component.html',
  styleUrls: ['./branch-office-list.component.less']
})
export class BranchOfficeListComponent {
  public displayedColumns: string[] = ['id', 'name', 'address', 'phone', "action"];
  public dataSource: IResBranchOffice[] = []
  public navigate: INavigate = {
    title: 'Sucursales',
    paths: [{
      name: "",
      link: "",
      isSelect: true,
    }]
  }
  constructor(
    private branchOfficeService: BranchOfficeService,
    private router: Router
  ) {

  }

  public ngOnInit(): void {
    this.getAllCategories()
  }

  private async getAllCategories() {
    let resp = await this.branchOfficeService.get()
    if (resp && resp?.length > 0) {
      this.dataSource = resp
    }
  }

  public viewEditBranchOffice(id: number) {
    this.router.navigate(['/sucursal/editar', id]);
  }

  public createBranchOffice() {
    this.router.navigate(['/sucursal/crear']);

  }
}
