import { Component } from '@angular/core';
import { Produit } from 'src/models/produit.model';
import { PanierService } from 'src/services/panier-service';
import { ProduitService } from 'src/services/produit-service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  products !: Produit[];

  constructor(protected produitService : ProduitService, 
    protected panierService : PanierService
  ){}

  ngOnInit(){
    this.panierService.getProductsByUserId("671f5bb98f79cd2b1be4fc13").subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => console.error(e)
    });
  } 

}
