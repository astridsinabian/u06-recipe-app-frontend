import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  }

  public error = [];

  constructor(private http: HttpClient) { }

  onSubmit() {
    return this.http.post('http://recipe-app.test/api/register', this.form)
    .subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
