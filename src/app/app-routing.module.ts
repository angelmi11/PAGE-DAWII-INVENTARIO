import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './core/auth/auth.guard';
import { ProductoFormComponent } from './pages/product/producto-form/producto-form.component';
import { ProductoListComponent } from './pages/product/producto-list/producto-list.component';
import { CategoriaFormComponent } from './pages/category/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './pages/category/categoria-list/categoria-list.component';
import { BranchOfficeFormComponent } from './pages/branch-office/branch-office-form/branch-office-form.component';
import { BranchOfficeListComponent } from './pages/branch-office/branch-office-list/branch-office-list.component';
import { PurchaseOrderFormComponent } from './pages/purchase-order/purchase-order-form/purchase-order-form.component';
import { PurchaseOrderListComponent } from './pages/purchase-order/purchase-order-list/purchase-order-list.component';
import { VendorFormComponent } from './pages/vendor/vendor-form/vendor-form.component';
import { VendorListComponent } from './pages/vendor/vendor-list/vendor-list.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'home', component: HomeComponent },
          {
            path: 'producto',
            children: [
              { path: '', redirectTo: 'lista', pathMatch: 'full' },
              { path: 'lista', component: ProductoListComponent },
              { path: 'crear', component: ProductoFormComponent },
              { path: 'editar/:id', component: ProductoFormComponent },
              { path: 'ver/:id', component: ProductoFormComponent },
            ],
          },
          {
            path: 'categoria',
            children: [
              { path: '', redirectTo: 'lista', pathMatch: 'full' },
              { path: 'lista', component: CategoriaListComponent },
              { path: 'crear', component: CategoriaFormComponent },
              { path: 'editar/:id', component: CategoriaFormComponent },
              { path: 'ver/:id', component: CategoriaFormComponent },
            ],
          },
          {
            path: 'usuario',
            children: [
              { path: '', redirectTo: 'lista', pathMatch: 'full' },
              { path: 'lista', component:  UserComponent},
            ],
          },

          {
            path: 'sucursal',
            children: [
              { path: '', redirectTo: 'lista', pathMatch: 'full' },
              { path: 'lista', component: BranchOfficeListComponent },
              { path: 'crear', component: BranchOfficeFormComponent },
              { path: 'editar/:id', component: BranchOfficeFormComponent },
            ],
          },
          {
            path: 'proveedor',
            children: [
              { path: '', redirectTo: 'lista', pathMatch: 'full' },
              { path: 'lista', component: VendorListComponent },
              { path: 'crear', component: VendorFormComponent },
              { path: 'editar/:id', component: VendorFormComponent },
            ],
          },
          {
            path: 'orden-compra',
            children: [
              { path: '', redirectTo: 'lista', pathMatch: 'full' },
              { path: 'lista', component: PurchaseOrderListComponent },
              { path: 'crear', component: PurchaseOrderFormComponent },
            
            ],
          },
        ],
      },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegisterComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, // Redirige rutas desconocidas a /home
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
