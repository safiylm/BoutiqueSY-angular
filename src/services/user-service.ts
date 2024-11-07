import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient, public router: Router) { }

    public login(email: string): Observable<any> {
        return this.http
            .get(
                "http://localhost:3000/login?email="+ email 
            )
    }

   public signin(user: User):  Observable<any> {
        return this.http
            .post<User>(
                `http://localhost:3000/signin`,
                user,
            )
            
    }

    public getUserById(id: string): Observable<User>{
        return this.http
        .get<User>(
            `http://localhost:3000/api/user?id=`+id,
        )
    }


}