import { Injectable } from '@angular/core';
import { Panier } from '../models/panier.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PanierService {

    constructor(private http: HttpClient, public router: Router) { }

    public getByUserId(userId: string): Observable<any> {
        return this.http
            .get(
                "http://localhost:3000/api/panier/u?userId="+ userId 
            )
    }

    public getByProductId(productId: string): Observable<any> {
        return this.http
            .get(
                "http://localhost:3000/api/panier/product?productId="+ productId 
            )
    }


    public add(prod: Panier):  Observable<any> {
        return this.http
            .post<Panier>(
                `http://localhost:3000/api/panier/add`,
                prod,
            )   
    } 

    public remove(id: string):  Observable<any> {
        return this.http
            .post<any>(
                `http://localhost:3000/api/panier/remove`,
                {"id":id},
            )
    }

}