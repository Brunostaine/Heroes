import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../mocks/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Hero[] {
    return HEROES;
  }
}
