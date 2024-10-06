import { Component } from '@angular/core';

@Component({
  selector: 'app-main-infos-produit',
  templateUrl: './main-infos-produit.component.html',
  styleUrls: ['./main-infos-produit.component.scss']
})
export class MainInfosProduitComponent {

  title: string ="Puffy Charlotte Ring";
  price: number = 68;
  colors : string[]= ['Gold Vermeil, "Sterling Silver']
  size : number[]=[4,5,6,7,8,9,10,11,12]


}
