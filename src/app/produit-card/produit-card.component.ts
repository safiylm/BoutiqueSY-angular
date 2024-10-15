import { Component, Input } from '@angular/core';
import { Produit } from 'src/models/produit.model';

@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.component.html',
  styleUrls: ['./produit-card.component.scss']
})
export class ProduitCardComponent {
  imagehover : boolean = false;
  @Input() produit !: Produit;
  
  imagehover_(){
    this.imagehover = true
  }
}
