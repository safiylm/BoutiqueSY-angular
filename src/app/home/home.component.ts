import { Component } from '@angular/core';
import { Produit } from 'src/models/produit.model';
import { ProduitService } from 'src/services/produit-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  listeProduits : Produit[] = this.produitService.getProducts()
  constructor(private produitService : ProduitService){}

   ngOnInit(){

  }

}
