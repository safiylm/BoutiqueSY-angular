import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  dejaUnCompte: boolean = true;

  LoginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  });

  SignInForm = new FormGroup({
    nom: new FormControl("", Validators.required),
    prenom: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  });

  toggleLogin() {
    this.dejaUnCompte = !this.dejaUnCompte;
  }

  submitLogin(){
    console.log(this.LoginForm.value['email'])
    console.log(this.LoginForm.value['password'])
  }

  submitSignIn(){
    console.log(this.SignInForm)

  }
}
