import { Component } from '@angular/core';
import { Produit } from 'src/models/produit.model';
import { ProduitService } from 'src/services/produit-service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  products !: Produit[];

  constructor(protected produitService : ProduitService){}

  ngOnInit(){
    this.products = this.produitService.getPanierList();
  } 
}
