import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name']

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getAll().subscribe(response => {
      this.heroes = response;
    });
  }

}
