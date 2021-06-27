import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-is-show-cards',
  templateUrl: './is-show-cards.component.html',
  styleUrls: ['./is-show-cards.component.scss']
})
export class IsShowCardsComponent implements OnInit {

  constructor() { }
  public cards = [
    {name: 'firstCard'},
    {name: 'secondCard'},
    {name: 'thirdCard'},
    {name: 'fourthCard'},
    {name: 'fifthCard'},
    {name: 'sixthCard'}
  ]

  ngOnInit(): void {
  }

}
