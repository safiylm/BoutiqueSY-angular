import { Component } from '@angular/core';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent {
  products = [
    { "title": "Bold Huggie Hoops", "image": "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-BoldHuggieHoops-14K-Angled_019_dd57d6ce-3452-4d5a-acb9-c949dd851e26.jpg", "prix": "40", "color": ['14k Yellow Gold'], },
    { "title": "Tube Huggie Hoops", "image": "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-NewHoopStandard_TubeHoopsHuggie12mm_V_ANGLED_175_2c53943e-96fd-4b73-89b0-c1a91be0ced8.jpg", "prix": "140", "color": ['Gold Vermeil'], },
    { "title": "Cursive Letter Charm", "image": "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-Cursive_14k_Letter_Pendants_FrontView_A.jpg", "prix": "60", "color": ['14k Yellow Gold'], },
    { "title": "Dôme Huggies", "image": "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0_DomeHuggies_earrings_yg_hero_Comp_83a98215-f62f-4b50-8d13-e4ceaade717e.jpg", "prix": "20", "color": ['Sterling Silver'], },
  ]

}
