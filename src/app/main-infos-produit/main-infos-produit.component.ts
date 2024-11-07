import { Component, AfterViewInit, ViewChild, ElementRef, Input } from "@angular/core";
import { Panier } from "src/models/panier.model";
import { Produit } from "src/models/produit.model";
import { Wishlist } from "src/models/wishlist.model";
import { PanierService } from "src/services/panier-service";
import { ProduitService } from "src/services/produit-service";
import { WishlistService } from "src/services/wishlist-service";

@Component({
  selector: 'app-main-infos-produit',
  templateUrl: './main-infos-produit.component.html',
  styleUrls: ['./main-infos-produit.component.scss']
})
export class MainInfosProduitComponent implements AfterViewInit {

  color1 = { 'nom': 'Sterling Silver', 'code': "#c8c8c8" }
  color2 = { 'nom': 'Gold Vermeil', 'code': '#eac37c' }
  isInPanier: boolean =false;
  isInWishlist: boolean =false;
  @Input() produit !: Produit;
  @ViewChild("btncolor") btncolor !: ElementRef;
  @ViewChild("btncolor2") btncolor2 !: ElementRef;

  constructor(protected produitService : ProduitService, 
    private panierService: PanierService,
  private wishlistService : WishlistService){
  }

  ngOnInit(){
   
  }
  checkIsInWishlist(){
    this.wishlistService.getByProductId(this.produit._id).subscribe({
      next:
      (data: any) => {
          if(data) this.isInWishlist=true
          else this.isInWishlist=false;
      }
    })
  }

  checkIsInPanier(){
    this.panierService.getByProductId(this.produit._id).subscribe({
      next:
      (data: any) => {
          if(data) this.isInPanier=true
          else this.isInPanier=false;
      }
    })
  }

  ngAfterViewInit() {
    // Après l'initialisation de la vue, nous pouvons accéder en toute
    // sécurité à notre élément référencé.
    this.btncolor.nativeElement.style.backgroundColor = this.color1.code
    this.btncolor2.nativeElement.style.backgroundColor = this.color2.code;
    this.checkIsInPanier()
    this.checkIsInWishlist()
    
  }

  pushInPanier(){
    this.produitService.pushPanierList(this.produit)
    this.panierService.add( new Panier("",localStorage.getItem('userId') as string, this.produit._id, "1", 1)
    ).subscribe({
      next:
        (data: any) => {
            console.log(data)
            this.checkIsInPanier()
        }
    })
  }

  pushInWishlist(){
    this.wishlistService.add( new Wishlist("",localStorage.getItem('userId') as string, this.produit._id, "1")
    ).subscribe({
      next:
        (data: any) => {
            console.log(data)
            this.checkIsInWishlist()
        }
    })
  }

  removeFromPanier(){
    this.produitService.removePanierList(this.produit)
    this.panierService.remove(this.produit._id).subscribe({
      next:
        (data: any) => {
            console.log(data)
            this.checkIsInPanier()

        }
    })
  }

  removeFromWishlist(){
    this.wishlistService.remove(this.produit._id).subscribe({
      next:
        (data: any) => {
            console.log(data)
            this.checkIsInWishlist()
        }
    })
  }

}