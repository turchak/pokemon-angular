import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from '../../../../def/pokemon';

@Component({
  selector: 'pok-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input()
  pokemon: IPokemon
  constructor() { }

  ngOnInit() {
  }

}
