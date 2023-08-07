import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../types/cocktail.types';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  constructor(public cocktailService: CocktailService) { }

  cocktails: Cocktail[] = []

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails()
  }

}
