import { Component } from '@angular/core';
import { INavigate } from 'src/app/core/models/navigate.model';
import { User } from 'src/app/core/models/purchase-order.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent {

  public displayedColumns: string[] = ['id', 'username', 'email', "status"];
  public dataSource: User[] = []
  public navigate: INavigate = {
    title: 'Usuarios',
    paths: [{
      name: "",
      link: "",
      isSelect: true,
    }]
  }

  constructor(
    private userService: UserService,

  ) {
    this.getUsers()
  }

  private async getUsers() {
    let resp = await this.userService.get()
    if (resp?.content && resp.content.length > 0) {
      this.dataSource = resp?.content
      console.log('this.dataSource', this.dataSource)
    }
  }

}
