import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';

export interface IMenuItem {
  title: string
  icon: string
  link: string
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }


  public logOut() {
    this.sessionService.clear()
    this.router.navigate(['/login']);
  }


}
