import { Component, Input } from '@angular/core';
import { work } from '../../interfaces/work.interface';

@Component({
  selector: 'card-work',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public work!: work
}
