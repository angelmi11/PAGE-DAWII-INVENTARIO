import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'inventario';
  auth: boolean = false
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.auth = this.authService.isAuthenticated()
  }


}
