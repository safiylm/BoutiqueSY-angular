import { Component, AfterViewInit, ViewChild, ElementRef, Input } from "@angular/core";
import { Produit } from "src/models/produit.model";

@Component({
  selector: 'app-main-infos-produit',
  templateUrl: './main-infos-produit.component.html',
  styleUrls: ['./main-infos-produit.component.scss']
})
export class MainInfosProduitComponent   implements AfterViewInit {

  color1 = { 'nom':'Sterling Silver', 'code': "#c8c8c8"}
  color2 = {'nom':'Gold Vermeil','code': '#eac37c'}

   @Input() produit !: Produit;

    @ViewChild("btncolor") btncolor !: ElementRef;
    @ViewChild("btncolor2") btncolor2 !: ElementRef;
  
    ngAfterViewInit() {
      // Après l'initialisation de la vue, nous pouvons accéder en toute
      // sécurité à notre élément référencé.
      this.btncolor.nativeElement.style.backgroundColor = this.color1.code
      this.btncolor2.nativeElement.style.backgroundColor = this.color2.code
      ;
    }
  
   
  }