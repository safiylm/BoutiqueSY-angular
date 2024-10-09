import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model';

@Injectable({
    providedIn: 'root'
})

export class ProduitService {

    liste_produits: Produit[] = []
    p1 !: Produit;
    constructor() { }

    getProducts(): Produit[] {
        this.p1 = new Produit("0123",

            "Puffy Charlotte Ring",
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
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)
        this.liste_produits.push(this.p1)

        return this.liste_produits
    }

    getProductById(id: string): Produit {
        this.p1 = new Produit("0123",

            "Puffy Charlotte Ring",
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

        return this.p1;
    }

}
