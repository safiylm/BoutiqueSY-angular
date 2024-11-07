import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  user!: User;
  deconnexion() {
    localStorage.removeItem("userId")
    localStorage.setItem('isLoggedIn', "false")
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(localStorage.getItem("userId") as string ).subscribe({
      next: (data) => {
        this.user = data
      },
      error: (e) => console.error(e)
    })
  }
}
