import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './shared/components/card/card.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { RegisterComponent } from './pages/register/register.component';
import { AuthService } from './core/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './core/auth/auth.guard';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { PurchaseOrderComponent } from './pages/purchase-order/purchase-order.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CardComponent,
    RegisterComponent,
    CategoryComponent,
    ProductComponent,
    InventoryComponent,
    PurchaseOrderComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
