import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IResCategory } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { INavigate } from 'src/app/core/models/navigate.model';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.less']
})
export class CategoriaFormComponent implements OnInit {
  public mode: 'create' | 'edit' | 'view' = 'create';
  public category: IResCategory;
  public navigate: INavigate = {
    title: 'Categoría',
    paths: [{
      name: "Categoría lista",
      link: "/categoria/lista",
      isSelect: false,
    }]
  }
  public categoryForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  },);

  constructor(
    private fb: FormBuilder = new FormBuilder(),
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.category = {
      id: 0,
      name: "",
      description: ""
    }
  }

  ngOnInit(): void {
    this.determineMode()
  }

  public onSubmit() {
    if (this.categoryForm.invalid) {
      this.toastr.error("Complete todo los datos")
      return
    }

    if (this.mode === 'create') {
      this.categoryService.post(this?.categoryForm?.value)
    } else {
      this.categoryService.put({ ...this?.categoryForm?.value, id: this.category.id }, this.category.id)
    }
  }

  private determineMode() {
    const id: number = this.route.snapshot.params['id'];
    if (id) {
      this.mode = 'edit';
      this.getIdCategory(id)
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

  private async getIdCategory(id: number) {
    let resp = await this.categoryService.id(id)
    if (resp) this.category = resp
    this.loadFormValue()
  }

  private loadFormValue() {
    this.categoryForm.patchValue(this.category);
  }
}
