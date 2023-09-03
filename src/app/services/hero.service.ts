import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HEROES } from '../mocks/heroes';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
