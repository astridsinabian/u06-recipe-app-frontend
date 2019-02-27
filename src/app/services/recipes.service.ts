import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavedRecipe } from '../models/SavedRecipe';
import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  id: Recipe;

   constructor(private http: HttpClient) {

    }

  getRecipes(): Observable<SavedRecipe[]> {
    return this.http.get<SavedRecipe[]>('http://recipe-app.test/api/recipelists');
   }

  addRecipes(savedRecipe: SavedRecipe): Observable<SavedRecipe> {
     return this.http.post<SavedRecipe>('http://recipe-app.test/api/recipelists', savedRecipe);
  } 

   deleteRecipes(id: string): Observable<{}> {
     console.log("delete this recipe");
      const url = `http://recipe-app.test/api/recipelists/${id}`;
      return this.http.delete(url);
   } 


}
