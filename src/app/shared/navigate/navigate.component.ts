import { Component, Input } from '@angular/core';
import { INavigate } from 'src/app/core/models/navigate.model';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.less']
})
export class NavigateComponent {
  @Input() navigate: INavigate = { title: "", paths: [] };
}
