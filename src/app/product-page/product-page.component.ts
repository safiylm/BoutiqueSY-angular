import { Component } from '@angular/core';
import { Produit } from 'src/models/produit.model';
import { ProduitService } from 'src/services/produit-service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  produit !: Produit;
  constructor(private produitService : ProduitService){
  }

  ngOnInit(){
    this.produit = this.produitService.getProductById("123")
  }
}
