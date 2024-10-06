import { Component } from '@angular/core';

@Component({
  selector: 'app-photos-viewer',
  templateUrl: './photos-viewer.component.html',
  styleUrls: ['./photos-viewer.component.scss']
})
export class PhotosViewerComponent {
  liste_image: string[] = ['https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-INFLATEDCHARLOTTE-InflatedCharlotteRing-SS-Angled_040_62ed8e65-7e1f-437b-90d1-126d716e9f32.jpg?v=1722952733&width=1200&height=1433&crop=center'
    , "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1-INFLATEDCHARLOTTE-InflatedCharlotteRingSilver-SS-Stack2_058_c96781af-abfb-4356-92d2-5a1a193ee0c3.jpg?v=1722952733&width=1200&height=1433&crop=center",
    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2-INFLATEDCHARLOTTE-InflatedCharlotteRingSilver-SS-Stack1_046_4da4d730-60ed-45c0-bc1c-b203d27c0147.jpg?v=1722952733&width=1200&height=1433&crop=center",
    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/3-INFLATEDCHARLOTTE-InflatedCharlotteRing-SS-Back_018.jpg?v=1722952733&width=1200&height=1433&crop=center",
    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/4-INFLATEDCHARLOTTE-InflatedCharlotteRing-SS-TopDown_014_199573a4-5618-4068-a33d-191f98aeb012.jpg?v=1722952733&width=1200&height=1433&crop=center"
  ]
  image: string = "";

  displayImage(nb: number) {
    this.image = this.liste_image[nb]
  }
}
