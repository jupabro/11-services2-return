import { Injectable } from '@angular/core';
// import { cocktails } from './data/cocktail.data';
import { Observable } from 'rxjs/internal/Observable';
import { Cocktail } from './types/cocktail.types';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) { }

  // public getCocktails() {
  //   return cocktails
  // }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }

}
