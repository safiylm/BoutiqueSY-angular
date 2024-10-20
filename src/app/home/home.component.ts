import { Component } from '@angular/core';
import { Produit } from 'src/models/produit.model';
import { ProduitService } from 'src/services/produit-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  listeProduits !: Produit[] ;
  constructor(private produitService : ProduitService){}

   ngOnInit(){
    this.produitService.getProducts().subscribe({
      next: (data) => {
        this.listeProduits = data;
        //  console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
