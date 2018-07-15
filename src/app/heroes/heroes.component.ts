import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;

  constructor() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
