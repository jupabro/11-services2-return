import { Injectable } from '@angular/core';
import { cocktails } from './data/cocktail.data';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  public getCocktails() {
    return cocktails
  }
}
