import { Component, OnInit } from '@angular/core';
import { RecipeYummlyService } from '../../services/recipe-yummly.service';

import { Recipe, RecipeSearchResult } from '../../models/Recipe';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [];
  searchString: string;
  foundRecipes: string;
  recipesUrl: string = 'http://api.yummly.com/v1/api/recipes?_app_id=7e6d90e7&_app_key=f2b54716a627719e4b1fa6ac962e6ac6';
  recipeId;
  
  constructor(
    private recipeService:RecipeYummlyService, 
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.recipeService
    .getRecipe()
    .subscribe((result) => {
      this.recipes = result.matches
    });

  }

  search() {
    // let query = this.recipesUrl + '&q=' + this.searchString;
    // this.http.get(query).subscribe((result) => {
    // this.recipes = result.matches
    // });

     }

}
