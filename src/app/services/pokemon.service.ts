import { Injectable } from '@angular/core';
import { POKEMON_URL, POKEMON_URL_V2, LIMIT } from '../def/constants';
import { IPokemon, IPokemonDetails } from '../def/pokemon';
import { IData } from '../def/data';
import { Http } from '@angular/http';
import { Observable, throwError, of as ofObs } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: IPokemon[] = [];
  currentData: IData<IPokemon>;
  currentPokemonDetails: IPokemon;
  loading: boolean;
  total: number;
  totalPages: number;
  page: number;
  constructor(private _http: Http) {}

  fetchPokemons(offset: number = 0, limit: number = LIMIT): Observable<boolean> {
    this.currentData = null;
    this.page = null;
    this.totalPages = null;
    this.pokemons = [];
    this.loading = true;
    return this._http
      .get(`${POKEMON_URL}?limit=${limit}&offset=${offset}`)
      .pipe(
        map(response => {
          this.loading = false;
          return response.json();
        }),
        // switchMap(response => {
        //   if (response.ok || response.status < 400) {
        //     console.log('ok')
        //     return ofObs(response.json())
        //   }
        // }),
        map(value => {
          this.currentData = value;
          this.page = value.meta.offset / value.meta.limit + 1;
          this.pokemons = this.currentData.objects;
          this.total = this.currentData.meta.total_count;
          this.totalPages = Math.ceil(this.total / limit)
          return true;
        })
      );
  }

  fetchDetails(id: number): Observable<boolean> {
    this.currentPokemonDetails = null;
    return this._http.get(`${POKEMON_URL_V2}${id}`).pipe(
      map(response => response.json()),
      map(data => {
        this.currentPokemonDetails = data;
        return true;
      })
    );
  }
}
