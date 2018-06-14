import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pok-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  constructor(public service: PokemonService) { }

  ngOnInit() {
    const sub = this.service
      .fetchPokemons()
      .subscribe(subscribed => {
        console.log('subscribed:', subscribed);
        console.log('currentData:', this.service.currentData);
        console.log('currentPage:', this.service.page);
      });
    this._subs.push(sub);
  }

  sendRequest(query) {
    const sub = this.service
      .fetchPokemons(query)
      .subscribe(subscribed => {
        console.log('subscribed:', subscribed);
        console.log('currentData:', this.service.currentData);
        console.log('currentPage:', this.service.page);
      });
    this._subs.push(sub);
  }

  ngOnDestroy() {
    this._subs.forEach(sub => sub.unsubscribe());
  }
}
