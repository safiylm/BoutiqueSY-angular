import { Component } from '@angular/core';
import { Produit } from 'src/models/produit.model';
import { ProduitService } from 'src/services/produit-service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  products !: Produit[];

  constructor(protected produitService : ProduitService){}

  ngOnInit(){
    this.products = this.produitService.getWishList();
  } 

}
