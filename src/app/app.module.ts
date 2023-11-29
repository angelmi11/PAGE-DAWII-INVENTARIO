import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './shared/components/card/card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RegisterComponent } from './pages/register/register.component';
import { AuthService } from './core/auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './core/auth/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './shared/layout/layout.component';
import { ProductoFormComponent } from './pages/product/producto-form/producto-form.component';
import { ProductoListComponent } from './pages/product/producto-list/producto-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { CategoriaFormComponent } from './pages/category/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './pages/category/categoria-list/categoria-list.component';
import { AuthInterceptor } from './core/interceptors/http-interceptor.service';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { BranchOfficeFormComponent } from './pages/branch-office/branch-office-form/branch-office-form.component';
import { BranchOfficeListComponent } from './pages/branch-office/branch-office-list/branch-office-list.component';
import { PurchaseOrderFormComponent } from './pages/purchase-order/purchase-order-form/purchase-order-form.component';
import { PurchaseOrderListComponent } from './pages/purchase-order/purchase-order-list/purchase-order-list.component';
import { VendorFormComponent } from './pages/vendor/vendor-form/vendor-form.component';
import { VendorListComponent } from './pages/vendor/vendor-list/vendor-list.component';
import { NavigateComponent } from './shared/navigate/navigate.component';
import { UserComponent } from './pages/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CardComponent,
    RegisterComponent,

    LayoutComponent,
    ProductoFormComponent,
    ProductoListComponent,
    CategoriaFormComponent,
    CategoriaListComponent,
    BranchOfficeFormComponent,
    BranchOfficeListComponent,
    PurchaseOrderFormComponent,
    PurchaseOrderListComponent,
    VendorFormComponent,
    VendorListComponent,
    NavigateComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    ToastrModule.forRoot(),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
