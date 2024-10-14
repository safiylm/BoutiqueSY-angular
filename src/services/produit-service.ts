import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model';

@Injectable({
    providedIn: 'root'
})

export class ProduitService {
    p1 = new Produit
        ("4",

            "Puffy Charlotte Ring",
            "Ring",
            ['Sterling Silver',
                'Gold Vermeil'],
            ['https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-INFLATEDCHARLOTTE-InflatedCharlotteRing-SS-Angled_040_62ed8e65-7e1f-437b-90d1-126d716e9f32.jpg?v=1722952733&width=1200&height=1433&crop=center'
                , "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1-INFLATEDCHARLOTTE-InflatedCharlotteRingSilver-SS-Stack2_058_c96781af-abfb-4356-92d2-5a1a193ee0c3.jpg?v=1722952733&width=1200&height=1433&crop=center",
                "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2-INFLATEDCHARLOTTE-InflatedCharlotteRingSilver-SS-Stack1_046_4da4d730-60ed-45c0-bc1c-b203d27c0147.jpg?v=1722952733&width=1200&height=1433&crop=center",
                "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/3-INFLATEDCHARLOTTE-InflatedCharlotteRing-SS-Back_018.jpg?v=1722952733&width=1200&height=1433&crop=center",
                "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/4-INFLATEDCHARLOTTE-InflatedCharlotteRing-SS-TopDown_014_199573a4-5618-4068-a33d-191f98aeb012.jpg?v=1722952733&width=1200&height=1433&crop=center"
            ],
            68,
            ["4", "5", "6", "7", "8", "9", "10", "11", "12"],
            "- Top Width: 12.5 mm - Shank Thickness: 2 mm",
            "Designed for doing big things. The boldest pieces in our Charlotte Collection want you to take up space—all of it. ",
            "925 Sterling Silver is a lightweight metal made of 92.5% pure silver. It’s highly durable and designed for everyday wear.")

    liste_produits: Produit[] = [new Produit(
        "0",
       
        "Bold Huggie Hoops", 
        "Earrings",
        ['14k Yellow Gold'],
        ["https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-BoldHuggieHoops-14K-Angled_019_dd57d6ce-3452-4d5a-acb9-c949dd851e26.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1-BoldHuggieHoops-14K-Stack1_031_39ce9bd2-f10f-4f9a-be17-9b612257d8a2.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2-BoldHuggieHoops-14K-Stack2_026_b2f59923-f2c5-476c-bac9-52d5c060571d.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/3-BoldHuggieHoops-14K-Clasp_115_fef2a0ec-70ca-4818-a515-02d56da1d0b3.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/4_BoldHuggieHoops_yg_alt2_6f831baf-9a9e-4f18-8e90-12186e47c7d8.jpg"
        ],
        168,
        [""], "- Outer Diameter: 12 mm - Width: 3.2 mm",
        "Formerly known as the Bold Hoops. You know them, you love them: they're your favorite hoops. Those outfit-elevating, mood-boosting, can't-go-wrong hoops. ",
        "14k Gold When properly cared for, our 14k gold pieces can last forever. With its beautiful, subtle hue, you can wear your jewelry every day, everywhere."

    ),
    new Produit("1", "Tube Huggie Hoops", "Earrings",
        ['Gold Vermeil'],
        ["https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-NewHoopStandard_TubeHoopsHuggie12mm_V_ANGLED_175_2c53943e-96fd-4b73-89b0-c1a91be0ced8.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1-NewHoopStandard_TubeHoopsHuggie12mm_V_Solo_021_afba5c6f-8ff7-4e59-a345-943c6223ea2b.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/3-NewHoopStandard_TubeHoopsHuggie12mm_V_FLATLAY_226_ca50f967-1f10-4545-85ad-32a8241494dc.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2_Tube-Hoops_V_Annotations_0f1c1c54-1d10-40dc-ad03-f8b98d1d9324.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/4-NewHoopStandard_TubeHoopsHuggie12mm_V_CLASP_308_86615319-b9f9-47ce-927c-ccf65ce43f28.jpg",


        ],
        48, [""],
        "- Outer Diameter: 12 mm - Width: 2 mm - Thickness: 2 mm",
        "A modern take on tubes. These bold hoops are lightweight enough to wear effortlessly, featuring a clicker closure for maximum comfort and security.",
        "Not to be confused with regular gold plating, our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price."),
   
        new Produit("2", "Pavé Diamond Pearl Huggies", "Earrings",
        ['14k Yellow Gold'],
        ["https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0_PaveDiamondPearlHuggies_Earrings_YG_Hero_c1e9f2b9-1182-4070-a067-09e6ed47bb88.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2_PaveDiamondPearlHuggies_Earrings_YG_Solo_Rich.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/3_PaveDiamondPearlHuggies_Earrings_YG_Stacked_Fair_f9b40bab-5881-47a7-a71f-ce27ea55ed43.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/4_PaveDiamondPearlHuggies_Earrings_YG_FlayLay_9d570915-4c9a-4803-839f-4563a2b63b86.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/5_PaveDiamondPearlHuggies_Earrings_YG_Stacked_Rich_1bfd1c7e-f302-471f-9a17-eebb160db535.jpg"
        ],
        450,
        ["14k Yellow Gold"],
        "- Average Carat Weight: 0.089 ct - Diamond Clarity: SI - I - Diamond Color: GHI - Diamond Size: 0.9 mm - Pearl Diameter: 5 mm - 5.5 mm - Outer Diameter: 11 mm - Width: 1.9 mm",
        "Any time, any place these huggies fit the bill. Handcrafted in 14k solid gold featuring 22 diamonds in a pavé setting and a round freshwater pearl—it’s your essential diamond earring with a fresh twist.",
        "14k Gold When properly cared for, our 14k gold pieces can last forever. With its beautiful, subtle hue, you can wear your jewelry every day, everywhere."
    ),
    new Produit("3", "Dôme Huggies", "Earrings",
        ['Sterling Silver'],
        ["https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0_DomeHuggies_earrings_yg_hero_Comp_83a98215-f62f-4b50-8d13-e4ceaade717e.jpg",
            "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1_DomeHuggies_v_fair_hero_5ab92108-899b-47d4-a956-08f7710c2132.jpg"],
        58, ["Gold Vermeil", "Sterling Silver"],
        "- Length: 13.5 mm. - Width: 8 mm.- Thickness: 4 mm. ",
        "Part of the iconic Mejuri Dôme collection, these lobe-hugging earrings have a sleek sculptural style and rounded vault. It’s as bold as it is understated and perfect for stacking and everyday wear.",
        "925 Sterling Silver is a lightweight metal made of 92.5% pure silver. It’s highly durable and designed for everyday wear."
    ),
    this.p1]

    constructor() { }

    getProducts(): Produit[] {
        return this.liste_produits
    }

    getProductById(id: string): Produit {
        return this.liste_produits[Number(id)];
    }

    getProductByCategorie(categorie: string): Produit[] {
        let listeProdCateg  : any ;
        this.liste_produits.forEach((e: Produit)=>{
            if(e.categorie == categorie){
                listeProdCateg.push(e)
            }
        })
        return listeProdCateg;
    }

}
