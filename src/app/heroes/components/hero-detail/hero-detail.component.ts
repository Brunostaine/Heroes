import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../../core/services/hero.service';
import { Hero } from './../../../core/models/hero';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  isEditing = false;

  form = this.fb.group({
    id: [{ value: '', disabled: true }],
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId !== 'new') {
      this.isEditing = true;

      const id = Number(paramId);
      this.heroService.getOne(id).subscribe((response) => {
        this.hero = response;
        this.form.controls['id'].setValue(String(response.id));
        this.form.controls['name'].setValue(response.name);
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  create(): void {
    const { valid, value } = this.form;

    if (valid) {
      const hero: Hero = {
        name: value.name,
      } as Hero;

      this.heroService.create(hero).subscribe((hero) => {
        this.goBack();
      });
    } else {
      this.showErrorMsg();
    }
  }

  update(): void {
    const { valid, value } = this.form;

    if (valid) {
      const hero: Hero = {
        id: this.hero.id,
        name: value.name!!,
      };

      this.heroService.update(hero).subscribe((hero) => {
        this.goBack();
      });
    } else {
      this.showErrorMsg();
    }
  }

  private showErrorMsg(): void {
    this.snackbar.open('Please check the erros found.', 'Ok', {
      duration: 5000,
      verticalPosition: 'top',
    });
  }
}
