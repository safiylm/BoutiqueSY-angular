import { Component } from '@angular/core';
import { Panier } from 'src/models/panier.model';
import { Produit } from 'src/models/produit.model';
import { Wishlist } from 'src/models/wishlist.model';
import { ProduitService } from 'src/services/produit-service';
import { WishlistService } from 'src/services/wishlist-service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  products !: Produit[];
  wishlist !: Wishlist[];

  constructor(protected produitService: ProduitService,
    protected wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.products = [];
    this.wishlist = [];
    this.wishlistService.getByUserId(localStorage.getItem('userId') as string).subscribe({
      next: (data) => {
        this.wishlist = data
      },
      error: (e) => console.error(e)
    });

    setTimeout(() => {
      this.wishlist.forEach(element => {
        this.produitService.getProductById(element.productId).subscribe({
          next: (data1) => {
            this.products.push(data1)
          },

          error: (e) => console.error(e)
        })
      });

    }, 2000)

  }

}
