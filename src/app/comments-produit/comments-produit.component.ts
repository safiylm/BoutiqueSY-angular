import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-produit',
  templateUrl: './comments-produit.component.html',
  styleUrls: ['./comments-produit.component.scss']
})
export class CommentsProduitComponent {

  nbcomments = 3;
  listeComments = [
    { 'nom': 'Ranjeev J.', "stars": 4, "comment": "Excellent bracelet", "comment2": "Excellent bracelet", "date": "24/06/2024" },
    { 'nom': 'Sach G.', "stars": 3, "comment": "Perfect little station bracelet", "comment2": "Great gift for my niece who loved it.", "date": "03/04/2024" },
    { 'nom': 'Raluca B.', "stars": 5, "comment": "Highly recommended", "comment2": "This was a present for my wife and she loved it. Very high quality, quick delivery and great prices. Will buy again.", "date": "29/02/2024" }
  ]
  moy = 0

  ngOnInit(){
    this.listeComments.forEach(element => {
      this.moy = this.moy + element.stars 
    });
    this.moy = this.moy / this.listeComments.length
  }

}
