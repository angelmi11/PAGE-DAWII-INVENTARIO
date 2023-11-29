import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IResCategory } from 'src/app/core/models/category.model';
import { INavigate } from 'src/app/core/models/navigate.model';
import { IResProduc } from 'src/app/core/models/product.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/core/services/product.service';
interface Animal {
  name: string,
  sound: string
}
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.less']
})
export class ProductoFormComponent implements OnInit {
  public mode: 'create' | 'edit' | 'view' = 'create';
  public products: IResProduc[] = []
  public categories: IResCategory[] = [];
  public product: IResProduc
  public navigate: INavigate = {
    title: 'Producto',
    paths: [{
      name: "Producto lista",
      link: "/producto/lista",
      isSelect: false,
    }]
  }

  public productForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    category_id: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder = new FormBuilder(),
    private categoryService: CategoryService,
    private productService: ProductService,
    private toastr: ToastrService,
    private route: ActivatedRoute,

  ) {
    this.product = {
      id: 0,
      category: {
        id: 0,
        description: "",
        name: ""
      },
      description: "",
      name: "",
      price: 0
    }
  }


  ngOnInit(): void {
    this.getAllCategories();
    this.determineMode();

  }

  public onSubmit() {
    if (this.productForm.invalid) {
      this.toastr.error("Complete todo los datos")
      return
    }
    console.log('this.productForm.value', this.productForm.value)
    if (this.mode === "create") {
      this.productService.post(this.productForm.value)
    } else {
      this.productService.put({ ...this.productForm.value }, this.product.id)
    }
  }

  private async getAllCategories() {
    let resp = await this.categoryService.get()
    if (resp && resp.length > 0) {
      this.categories = resp;
    }
  }

  private determineMode() {
    const id: number = this.route.snapshot.params['id'];
    if (id) {
      this.mode = 'edit';
      this.getProducId(id)
    } else {
      this.mode = 'create';
      this.navigate.paths.push({
        name: `${this.mode == "create" ? "Crear" : "Editar"}`,
        link: `/producto/${this.mode == "create" ? "crear" : "editar"}`,
        isSelect: true,
      })
    }
  }

  private async getProducId(id: number) {
    let resp = await this.productService.id(id)
    if (resp) this.product = resp
    this.navigate.paths.push({
      name: `${this.mode == "create" ? "Crear" : "Editar"}`,
      link: `/producto/${this.mode == "create" ? "crear" : "editar"}`,
      isSelect: true,
    })
    this.loadFormValue()
  }

  private loadFormValue() {
    this.productForm.patchValue({
      ...this.product,
      category_id: this.product.category.id,
    });
  }
}
