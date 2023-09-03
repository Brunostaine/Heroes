import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HEROES } from '../mocks/heroes';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id == id)!;
    this.messageService.add(`HeroService: fetchead hero id=${id}`);
    return of(hero);
  }
}
