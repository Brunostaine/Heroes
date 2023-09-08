import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes) => {
        this.log(`fetched ${heroes.length} hero(es)`);
      })
    );
  }

  getOne(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.getUrl(id)).pipe(
      tap((hero) => {
        this.log(`fetchead ${this.descAttributes(hero)}`);
      })
    );
  }

  search(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}?name=${term}`).pipe(
      tap((heroes) => {
        heroes.length
          ? this.log(`found ${heroes.length} hero(es) matching "${term}"`)
          : this.log(`no heroes matching "${term}"`);
      })
    );
  }

  create(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero).pipe(
      tap((hero) => {
        this.log(`create ${this.descAttributes(hero)}`);
      })
    );
  }

  update(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.getUrl(hero.id), hero).pipe(
      tap((hero) => {
        this.log(`update ${this.descAttributes(hero)}`);
      })
    );
  }

  delete(hero: Hero): Observable<any> {
    return this.http.delete<any>(this.getUrl(hero.id)).pipe(
      tap(() => {
        this.log(`deleted ${this.descAttributes(hero)}`);
      })
    );
  }

  private descAttributes(hero: Hero): string {
    return `Hero ID=${hero.id} and Name=${hero.name}`;
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private getUrl(id: number): string {
    return `${this.heroesUrl}/${id}`;
  }
}
