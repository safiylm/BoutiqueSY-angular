import { Component } from '@angular/core';
import { Panier } from 'src/models/panier.model';
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
  panier !: Panier[];

  constructor(protected produitService: ProduitService,
    protected panierService: PanierService
  ) { }

  ngOnInit() {
    this.products = []
    this.panierService.getByUserId(localStorage.getItem('userId') as string).subscribe({
      next: (data) => {
        this.panier = data;
      },
      error: (e) => console.error(e)
    });

    setTimeout(() => {
      this.panier.forEach(element => {
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