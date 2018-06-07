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

  normalizeId(n: number) {
    let id;
    const digits = n.toString().split("");

    if (digits.length >= 3) {
      return n;
    }

    if (digits.length === 2) {
      digits.unshift('0');
      return digits.join('')
    }

    if (digits.length === 1) {
      id = digits.unshift('0', '0');
      return digits.join('')
    }
  }

  ngOnInit() {
  }

  

}
