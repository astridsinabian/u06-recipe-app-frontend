import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavedRecipe } from '../models/SavedRecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

   constructor(private http: HttpClient) { }

  getRecipes(email: string): any {
   return this.http.get<SavedRecipe[]>(`http://recipe-app.test/api/recipelists/${email}`);
   }

  addRecipes(savedRecipe: SavedRecipe): any {
     return this.http.post<SavedRecipe>('http://recipe-app.test/api/recipelists/add', savedRecipe);
  } 

   deleteRecipes(id: string): Observable<{}> {
      const url = `http://recipe-app.test/api/recipelists/${id}`;
      return this.http.delete(url);
   } 


}
