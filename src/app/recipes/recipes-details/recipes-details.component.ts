import { Component, OnInit, Input } from '@angular/core';
import { Recipe, RecipeSearchResult } from 'src/app/models/Recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeYummlyService } from 'src/app/services/recipe-yummly.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SavedRecipe } from 'src/app/models/SavedRecipe';


@Component({
  selector: 'app-recipes-details,',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {


  recipe: Recipe
  recipeId;
  recipesUrl;


  

  loggedIn() {
    return this.recipeYummlyService.isValid();
  }

  constructor(
    private route: ActivatedRoute,
    private recipeYummlyService: RecipeYummlyService,
    private router: Router,
    private http: HttpClient,
  ) {
    this.recipeId = this.route.snapshot.paramMap.get('id');
  }
 
  ngOnInit(): void {
   this.getRecipeById();
   
  }


  getRecipeById() {
    this.recipeYummlyService.getRecipeById(this.recipeId)
    .subscribe(data => {
      this.recipe = data;
    })

  }

  addRecipes() {
    const recipeAddToList = new SavedRecipe();
    recipeAddToList.name = this.recipe.name;

    this.http.post('http://recipe-app.test/api/recipelists', recipeAddToList)
    .subscribe(result => {
      this.getRecipeById();
      this.router.navigateByUrl('/profile');
    });
  }


}
