import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/models/produit.model';
import { ProduitService } from 'src/services/produit-service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  id !: string ;
  produit !: Produit;
  constructor(private produitService : ProduitService,
    private route: ActivatedRoute ){ }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.produitService.getProductById(this.id).subscribe({
      next: (data) => {
        this.produit = data;
      },
      error: (e) => console.error(e)
    });
  }
}
