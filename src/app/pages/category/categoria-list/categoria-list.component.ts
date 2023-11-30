import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IResCategory } from 'src/app/core/models/category.model';
import { INavigate } from 'src/app/core/models/navigate.model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.less']
})
export class CategoriaListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'name', 'description', "action"];
  public dataSource: IResCategory[] = []
  public navigate: INavigate = {
    title: 'Categorías',
    paths: [{
      name: "",
      link: "",
      isSelect: true,
    }]
  }
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {

  }

  public ngOnInit(): void {
    this.getAllCategories()
  }

  private async getAllCategories() {
    let resp = await this.categoryService.get()
    if (resp && resp?.length > 0) {
      this.dataSource = resp
    }
  }

  public viewEditCategory(id: number) {
    this.router.navigate(['/categoria/editar', id]);
  }

  public createCategory() {
    this.router.navigate(['/categoria/crear']);
  }



}
