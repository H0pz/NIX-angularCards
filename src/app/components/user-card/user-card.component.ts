import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  constructor() { }

  @Input() card: any;
  @Input() isShown: boolean = true;
}
