import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipes-details,',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  @Input() recipe: Recipe;
  recipes;
  recipeId;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) {
    this.recipeId = this.route.snapshot.paramMap.get('id');
  }
 
  ngOnInit(): void {
   this.getRecipeById();
   
  }

  getRecipeById() {
    this.recipeService.getRecipeById(this.recipeId)
    .subscribe(data => {
      return this.recipes = data;
    })

  }
 

}
