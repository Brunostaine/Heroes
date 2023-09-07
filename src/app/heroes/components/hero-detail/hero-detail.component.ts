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
  isEditing!: boolean;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId == 'new') {
      this.isEditing = false;
      this.hero = { name: '' } as Hero;
    } else {
      this.isEditing = true;
      const id = Number(paramId);
      this.heroService.getOne(id).subscribe((response) => {
        this.hero = response;
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  isFormValid(): boolean {
    return !!this.hero.name.trim();
  }

  create(): void {
    this.heroService.create(this.hero).subscribe((hero) => {
      this.goBack();
    });
  }

  update(): void {
    this.heroService.update(this.hero).subscribe((hero) => {
      this.goBack();
    });
  }
}
