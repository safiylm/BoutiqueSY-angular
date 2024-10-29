import { Injectable } from '@angular/core';
import { Wishlist } from '../models/wishlist.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class WishlistService {

    constructor(private http: HttpClient, public router: Router) { }

    public getByUserId(userId: string): Observable<any> {
        return this.http
            .get(
                "http://localhost:3000/api/wishlist/u?userId="+ userId 
            )
    }

    public getByProductId(id: string ){
        return this.http
        .get(
            "http://localhost:3000/api/wishlist/product?productId="+ id 
        )
    }

    public add(wish: Wishlist):  Observable<any> {
        return this.http
            .post<Wishlist>(
                `http://localhost:3000/api/wishlist/add`,
                wish,
            )   
    } 

    public remove(id: string):  Observable<any> {
        return this.http
            .post<any>(
                `http://localhost:3000/api/wishlist/remove`,
                {"id":id},
            )
    }

}