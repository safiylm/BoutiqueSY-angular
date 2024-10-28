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

    public getProductsByUserId(userId: string): Observable<any> {
        return this.http
            .get(
                "http://localhost:3000/api/panier/u?userId="+ userId 
            )
    }


}