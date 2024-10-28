import { Component } from '@angular/core';
import { Produit } from 'src/models/produit.model';
import { ProduitService } from 'src/services/produit-service';
import { WishlistService } from 'src/services/wishlist-service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  products !: Produit[];

  constructor(protected produitService : ProduitService, 
    protected wishlist : WishlistService
  ){}

  ngOnInit(){
    this.wishlist.getProductsByUserId("671f5bb98f79cd2b1be4fc13").subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => console.error(e)
    });
  } 

}
