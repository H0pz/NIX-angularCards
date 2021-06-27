import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() card: any;

  public isShown: boolean = false;

  openModal(): void {
    this.isShown = true;
  }
  closeModal(): void {
    this.isShown = false;
  }
  constructor() { }

}
