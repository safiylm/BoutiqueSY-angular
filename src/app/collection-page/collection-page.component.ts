import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/models/produit.model';
import { ProduitService } from 'src/services/produit-service';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
})
export class CollectionPageComponent {
  listeProduits !: Produit[] ;
  categorie !: string;
  constructor(private produitService : ProduitService, private route: ActivatedRoute){}

   ngOnInit(){
    this.categorie = this.route.snapshot.paramMap.get('categorie')!;
   this.listeProduits = this.produitService.getProductByCategorie(this.categorie)
    
  
  }
}
