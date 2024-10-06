import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-main-infos-produit',
  templateUrl: './main-infos-produit.component.html',
  styleUrls: ['./main-infos-produit.component.scss']
})
export class MainInfosProduitComponent   implements AfterViewInit {

  title: string ="Puffy Charlotte Ring";
  price: number = 68;
  color1 = { 'nom':'Sterling Silver', 'code': "#c8c8c8"}
  color2 = {'nom':'Gold Vermeil','code': '#eac37c'}
  size : number[]=[4,5,6,7,8,9,10,11,12]
  details:string ="- Top Width: 12.5 mm - Shank Thickness: 2 mm"
  description :string = "Designed for doing big things. The boldest pieces in our Charlotte Collection want you to take up space—all of it. "
  materials :string ="925 Sterling Silver is a lightweight metal made of 92.5% pure silver. It’s highly durable and designed for everyday wear."


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