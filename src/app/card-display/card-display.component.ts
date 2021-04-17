import { Component, OnInit } from '@angular/core';
import { SPOTS } from 'src/assets/classes/storage';

@Component({
  selector: 'travel-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {


  kankou_spots = SPOTS;

  constructor() {
   }

  ngOnInit(): void {
  }

}
