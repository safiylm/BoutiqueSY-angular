import { Component, Input } from '@angular/core';
import { Produit } from 'src/models/produit.model';

@Component({
  selector: 'app-photos-viewer',
  templateUrl: './photos-viewer.component.html',
  styleUrls: ['./photos-viewer.component.scss']
})
export class PhotosViewerComponent {

  image: string = "";
  @Input() produit !:Produit ;
  
  displayImage(nb: number) {
    this.image = this.produit.image[nb]
  }
}
