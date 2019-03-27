import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SavedRecipe } from '../models/SavedRecipe';
import { Profilelist } from '../models/Profilelist';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getRecipes(email: string): any {
   return this.http.get<SavedRecipe[]>(`http://recipe-app.test/api/recipelists/${email}`);
   }

  addRecipes(savedRecipe: SavedRecipe): any {
     return this.http.post<SavedRecipe[]>('http://recipe-app.test/api/recipelists/add', savedRecipe);
  } 

   deleteRecipes(id: string): Observable<{}> {
      const url = `http://recipe-app.test/api/recipelists/${id}`;
      return this.http.delete(url);
   } 

   deleteLists(id: number): Observable<{}> {
      const url = `http://recipe-app.test/api/profilelist/add/${id}`;
      return this.http.delete(url);
   } 

   createNewList(profilelist: Profilelist): any {
      return this.http.post<Profilelist[]>('http://recipe-app.test/api/profilelist/add', profilelist);
   }

   getProfilelists(email: string): any {
      return this.http.get<Profilelist[]>(`http://recipe-app.test/api/profilelist/${email}`);
   }

}
