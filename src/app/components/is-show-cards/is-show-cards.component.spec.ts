import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsShowCardsComponent } from './is-show-cards.component';

describe('IsShowCardsComponent', () => {
  let component: IsShowCardsComponent;
  let fixture: ComponentFixture<IsShowCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsShowCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsShowCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
