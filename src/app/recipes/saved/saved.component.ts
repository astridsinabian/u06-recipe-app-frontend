import { Component, OnInit } from '@angular/core';
import { SavedRecipe } from 'src/app/models/SavedRecipe';
import { RecipesService } from 'src/app/services/recipes.service';
// import { Recipe } from 'src/app/models/Recipe';
import { RecipeYummlyService } from 'src/app/services/recipe-yummly.service';
import { Profilelist } from 'src/app/models/Profilelist';


@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  savedRecipe: SavedRecipe[];
  profilelists: Profilelist[];
  selectedRecipe;
  list_id;
  user_id;

  constructor(private recipeService: RecipesService, private recipeYummlyService: RecipeYummlyService) { }

  ngOnInit() {
   this.getRecipes();
   this.getProfilelist();
  }

  getRecipes(): void {
    let email = this.recipeYummlyService.getEmail();
    this.recipeService.getRecipes(email)
    .subscribe(data => {
       let arr = [];
      for (let i = 0; i < 100; i++) {
        if(data[i] != undefined) arr.push(data[i]);
      }
      this.savedRecipe = arr;
     }); 
  }

  deleteRecipe(id: string) {
    this.selectedRecipe = id;
    this.recipeService.deleteRecipes(id)
     .subscribe(result => {
       return this.getRecipes();
     });
  }

  onSubmit(event) {
    const profilelist = new Profilelist();
    profilelist.name = event.name.value;
    profilelist.email = this.recipeYummlyService.getEmail();
    this.recipeService.createNewList(profilelist).subscribe(result => {
    });
 
  }

  getProfilelist(): void {
    let email = this.recipeYummlyService.getEmail();
    this.recipeService.getProfilelists(email)
    .subscribe(data => {
      let arr = [];
      for (let i = 0; i < 100; i++) {
        if (data[i] != undefined) arr.push(data[i]); 
      }
      this.profilelists = arr;  
    });
  }

  editListName() {
    console.log("Edit list name!");
  }

  deleteList() {
    console.log("Delete list!");
  }

}
