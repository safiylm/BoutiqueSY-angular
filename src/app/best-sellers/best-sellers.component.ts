import { Component } from '@angular/core';
import { Produit } from 'src/models/produit.model';
import { ProduitService } from 'src/services/produit-service';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent {
  products !: Produit[];

  constructor(protected produitService : ProduitService){}

  ngOnInit(){
    this.products = this.produitService.getProductByCategorie("Rings")
  } 


}
