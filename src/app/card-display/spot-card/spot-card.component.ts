import { Component, Input, OnInit } from '@angular/core';
import { Spot } from '../../../assets/classes/spot';



@Component({
  selector: 'travel-spot-card',
  templateUrl: './spot-card.component.html',
  styleUrls: ['./spot-card.component.scss']
})
export class SpotCardComponent implements OnInit {

  @Input() kankou!: Spot;

  constructor() {
   }

  ngOnInit(): void {
  }

}
