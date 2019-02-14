import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

import { Recipe } from '../../models/Recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [];

  constructor(private recipeService:RecipeService, private router: Router) {
 
   }

  ngOnInit() {
    this.recipeService
    .getRecipe()
    .subscribe((result) => {
      this.recipes = result.matches
    });
    
  }

  selectedRecipes: Recipe;

  onSelect(recipes: Recipe): void {
    this.router.navigate(['/recipes', recipes.id]);
  }

}
