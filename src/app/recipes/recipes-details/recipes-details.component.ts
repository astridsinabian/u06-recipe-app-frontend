import { Component, OnInit, Input } from '@angular/core';
import { Recipe, RecipeSearchResult } from 'src/app/models/Recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeYummlyService } from 'src/app/services/recipe-yummly.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recipes-details,',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  @Input() recipe: Recipe;
  recipes;
  recipeId;
  recipesUrl;
  

  loggedIn() {
    return this.recipeService.isValid();
  }

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeYummlyService,
    private router: Router
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

  addRecipeToList(){
    this.router.navigateByUrl('profile');
    console.log("add list");
  }
 

 


}
