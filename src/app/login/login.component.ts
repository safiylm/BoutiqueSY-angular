import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService: UserService) { }
  dejaUnCompte: boolean = true;
  @ViewChild("logininfo") logininfo !: ElementRef;
  @ViewChild("signininfo") signininfo !: ElementRef;


  ngOnInit() {
    this.logininfo.nativeElement.innerText = "";
    this.signininfo.nativeElement.innerText = "";
  }


  ngAfterViewInit() {
    this.logininfo.nativeElement.innerText = "";
    this.signininfo.nativeElement.innerText = "";
  }

  LoginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  });

  SignInForm = new FormGroup({
    fisrtname: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
    phoneNo: new FormControl("", Validators.required),
  });

  toggleLogin() {
    this.dejaUnCompte = !this.dejaUnCompte;
  }

  submitLogin() {
    this.userService.login(this.LoginForm.value['email'] as string).subscribe({
      next:
        (data: any) => {
          setTimeout(() => {
            if (data.password == this.LoginForm.value['password']) {
              this.logininfo.nativeElement.innerText = "Votre mot de passe est bon.";
              this.logininfo.nativeElement.style.color = "green";
            } else {
              this.logininfo.nativeElement.innerText = "Votre mot de passe est inccorecte.";
              this.logininfo.nativeElement.style.color = "red";
            }

            console.log(data);
          }, 2000)
        }

    })

  }

  submitSignIn() {
    let user = new User("",
      this.SignInForm.value['fisrtname']?.toString() as string,
      this.SignInForm.value['lastname']?.toString() as string,
      this.SignInForm.value['email']!.toString() as string,
      this.SignInForm.value['password']!.toString() as string,
      this.SignInForm.value['phoneNo'] as unknown as number
    )

    this.userService.signin(user).subscribe({
      next:
        (data: any) => {
          setTimeout(() => {
            if (data.insertedId) {
              this.signininfo.nativeElement.innerText = "Inscription réussi.";
              this.signininfo.nativeElement.style.color = "green";
            } else {
              this.signininfo.nativeElement.innerText = "Erreur Inscription.";
              this.signininfo.nativeElement.style.color = "red";
            }

            console.log(data);
          }, 2000)
        }
  })
}
}