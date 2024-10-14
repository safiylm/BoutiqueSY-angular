import { Component } from '@angular/core';
import { Produit } from 'src/models/produit.model';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent {

  products = [
    new Produit("",
      "Bold Huggie Hoops",
     "Earrings",
      ['14k Yellow Gold'],
      ["https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-BoldHuggieHoops-14K-Angled_019_dd57d6ce-3452-4d5a-acb9-c949dd851e26.jpg",
        "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1-BoldHuggieHoops-14K-Stack1_031_39ce9bd2-f10f-4f9a-be17-9b612257d8a2.jpg"
      ],
      40,
      [""], "", "", ""
    ),
    new Produit("", "Tube Huggie Hoops",
      "Earrings",
      ['Gold Vermeil'],
      ["https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-NewHoopStandard_TubeHoopsHuggie12mm_V_ANGLED_175_2c53943e-96fd-4b73-89b0-c1a91be0ced8.jpg",
        "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1-NewHoopStandard_TubeHoopsHuggie12mm_V_Solo_021_afba5c6f-8ff7-4e59-a345-943c6223ea2b.jpg"
      ],
      140, [""], "", "", ""
    ),
    new Produit("", "Cursive Letter Charm", "Earrings",
      ['14k Yellow Gold'],
      ["https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-Cursive_14k_Letter_Pendants_FrontView_A.jpg",
        "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1_Cursive_14k_Letter_Pendants_Stack_0171_ed038b61-9b0a-4b0d-a7f9-06ca019255f5.jpg"],
      60, [""], "", "", ""
    ),
    new Produit("", "Dôme Huggies", "Earrings",
      ['Sterling Silver'],
      ["https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0_DomeHuggies_earrings_yg_hero_Comp_83a98215-f62f-4b50-8d13-e4ceaade717e.jpg",
        "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1_DomeHuggies_v_fair_hero_5ab92108-899b-47d4-a956-08f7710c2132.jpg"],
      20,  [""], "", "", ""
    ),
  ]


}
