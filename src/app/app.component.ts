import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'inventario';
  auth: boolean = false
  constructor(
    private authService: AuthService
  ) {
    this.auth = this.authService.isAuthenticated()
    console.log('this.auth', this.auth)
  }
}
