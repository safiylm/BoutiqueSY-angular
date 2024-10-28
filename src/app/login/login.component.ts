import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user-service';
import * as bcrypt from "bcryptjs";


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


  ngAfterViewInit() {
    this.logininfo.nativeElement.innerText = "";
   setTimeout(()=>{
    this.signininfo.nativeElement.innerText = "";
   }, 4500)
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
    if ((this.LoginForm.value['email']!.length > 5) && (this.LoginForm.value['password']!.length > 5))
      this.userService.login(this.LoginForm.value['email'] as string).subscribe({
        next:
          (data: any) => {
            setTimeout(() => {
              if (data != null) {
                //if (data.password == this.LoginForm.value['password']) {
                bcrypt.compare(this.LoginForm.value['password'] as string, data.password,
                  (err, data1) => {
                    //if error than throw error
                    if (err) throw err

                    //if both match than you can do anything
                    if (data1) {
                      this.logininfo.nativeElement.innerText = "Votre mot de passe est bon.";
                      this.logininfo.nativeElement.style.color = "green";
                      // localStorage.setItem('isLoggedIn', "true");
                      //  localStorage.setItem('userId', data["_id"]);
                      // window.location.href = '/mon-compte'

                    } else {
                      this.logininfo.nativeElement.innerText = "Votre mot de passe est inccorecte.";
                      this.logininfo.nativeElement.style.color = "red";
                    }
                  })
              }
              else {
                this.logininfo.nativeElement.innerText = "Votre email est incorrecte.";
                this.logininfo.nativeElement.style.color = "red";
              }

              console.log(data);
            }, 2000)
          }

      })

  }

  submitSignIn() {
    const salt = bcrypt.genSaltSync(10);
    let user = new User("",
      this.SignInForm.value['fisrtname']?.toString() as string,
      this.SignInForm.value['lastname']?.toString() as string,
      this.SignInForm.value['email']!.toString() as string,
      bcrypt.hashSync(this.SignInForm.value['password']?.toString() as string, salt) as string,
      this.SignInForm.value['phoneNo'] as unknown as number
    )

    console.log(this.SignInForm.value['password'])


    if ((this.SignInForm.value['email']!.length > 5) &&
      (this.SignInForm.value['password']!.length > 5) &&
      (this.SignInForm.value['fisrtname']!.length > 2) &&
      (this.SignInForm.value['lastname']!.length > 2))

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
    else {
      this.signininfo.nativeElement.innerText = "Veuillez remplir les tous les champs.";
      this.signininfo.nativeElement.style.color = "violetblue";
    }
  }

  handleEvent(event: string) {
    console.log(event);  // Affiche 'Hello Parent!' dans la console
    this.SignInForm.value['password'] = event;
    this.LoginForm.value['password'] = event;
  }
}