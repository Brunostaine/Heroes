import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../core/models/hero';
import { HeroService } from '../../../core/services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService.getOne(id).subscribe((response) => {
      this.hero = response;
    });
  }

  goBack(): void {
    this.location.back();
  }

  isFormValid(): boolean {
    return !!this.hero.name.trim();
  }

  save(): void {
    this.heroService.update(this.hero).subscribe((hero) => {
      this.goBack();
    });
  }
}
