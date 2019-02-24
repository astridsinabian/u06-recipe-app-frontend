import { Component, OnInit } from '@angular/core';
import { SavedRecipe } from 'src/app/models/SavedRecipe';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/Recipe';


@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  savedRecipe: SavedRecipe[];
  selectedRecipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
   this.getRecipes();
  }

  getRecipes(): void {
     this.recipeService.getRecipes().subscribe(savedRecipe => (this.savedRecipe = savedRecipe))
  }

  deleteRecipe(id: string) {
     this.selectedRecipe = id;
    this.recipeService.deleteRecipes(id)
     .subscribe(result => {
       return this.getRecipes();
     });
  }

}
