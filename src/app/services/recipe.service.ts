import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RecipeSearchResult } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesUrl:string = 'http://api.yummly.com/v1/api/recipes?_app_id=7e6d90e7&_app_key=f2b54716a627719e4b1fa6ac962e6ac6';

  constructor(private http:HttpClient) { }

  getRecipe():Observable<RecipeSearchResult> {
    return this.http.get<RecipeSearchResult>(this.recipesUrl);
  }

}
