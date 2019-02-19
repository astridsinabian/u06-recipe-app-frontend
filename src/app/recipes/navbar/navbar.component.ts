import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean;

  constructor(private recipe: RecipeService, private router: Router) { }

  ngOnInit() {
    this.recipe.authStatus
    .subscribe(
    value => this.loggedIn = value
    );
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.recipe.remove();
    this.recipe.changeAuthStatus(false);
    this.router.navigateByUrl('login');
  }

  

}
