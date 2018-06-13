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
  length: number = 0;
  pageSize = 12;
  pageSizeOptions = [12, 24, 48];
  constructor(public service: PokemonService) { }

  ngOnInit() {
    const sub = this.service
      .fetchPokemons(this.length, this.pageSize)
      .subscribe(subscribed => {
        this.length = this.service.total;
        console.log('subscribed:', subscribed);
        console.log('currentData:', this.service.currentData);
      });
    this._subs.push(sub);
  }

  pageEvent(event) {
    console.log(event);
    const sub = this.service
      .fetchPokemons(event.pageSize * event.pageIndex, event.pageSize)
      .subscribe(subscribed => {
        this.length = this.service.total;
        console.log('subscribed:', subscribed);
        console.log('currentData:', this.service.currentData);
      });
    this._subs.push(sub);
  }

  ngOnDestroy() {
    this._subs.forEach(sub => sub.unsubscribe());
  }
}
