import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model';
import { Observable } from 'rxjs';
import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';

@Injectable({
    providedIn: 'root'
})

export class ProduitService {

    liste_produits: Produit[] = [
        new Produit(
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
        new Produit("4", "Round Topaz Bracelet", "Bracelets",
            ['Gold Vermeil'],
            ["https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0_Round_Cut_Topaz_Bracelet_78bd858a-b4d4-4df5-a521-733f1dbc524c.jpg",
                "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1_Round_Cut_Topaz_Bracelet.jpg",
                "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2_Round_Cut_Topaz_Bracelet_21cbbb7b-b557-4f26-abc8-e2f5cc74bd38.jpg",
                "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/3_Round_Cut_Topaz_Bracelet.jpg"],
            68, ["Gold Vermeil"],
            "- Stone Size: 4.5 mm",
            "You’re right, this is the perfect gift. Get them a fresh, clear-cut statement piece that goes with everything they own. Handcrafted in 18k gold vermeil, set with a round cut topaz gemstone.",
            "Gold Vermeil Not to be confused with regular gold plating, our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price. Gemstones We use an array of high-quality, precious and semi-precious gemstones selected for their beauty and longevity."
        ),
        new Produit
            ("5",

                "Puffy Charlotte Ring",
                "Rings",
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
                "925 Sterling Silver is a lightweight metal made of 92.5% pure silver. It’s highly durable and designed for everyday wear."
            ),
        new Produit
            ("8",
                "Round Topaz Necklace",
                "Necklaces",
                ['Gold Vermeil'],
                ['https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0_White_Topaz_Round_Necklace_Front_b2580954-f19a-4a7c-81ff-ae3bd252bc96.jpg',
                    'https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1_Mejuri_MarchDropsv_White_Topaz_Round_Necklace_Solo_4712_dd0f9451-b635-4ab0-a8e4-5903307b1ce4.jpg',
                    'https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2_Mejuri_MarchDrops__26_White_Topaz_Round_Necklace_Stack_3359.jpg',
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/3_White_Topaz_Round_Necklace_FlatLay.jpg",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/4_White_Topaz_Necklace_Clasp.jpg"
                ],
                88,
                ["4", "5"],
                "- Length: 16 - 18 - Stone Size: 4 mm",
                "You’re right, this is the perfect gift. Get them a fresh, clear-cut statement piece that goes with everything they own. Handcrafted in 18k gold vermeil, set with a round cut topaz gemstone.",
                "Not to be confused with regular gold plating, our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price."
            ),
        new Produit
            ("9",
                "Baby Box Chain Necklace",
                "Necklaces",
                ['14k Yellow Gold',
                    '14k White Gold'],
                ['https://cdn.shopify.com/s/files/1/0837/7489/8461/files/BabyBoxChain_Necklace_yg_hero-0328_009859ac-f468-47f9-80e7-57d4544754e9.jpg',
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1-BeadedCushionGemstonePendant_White_yg_Medium_SOLO_0380_3cb4bd0d-4929-42a3-9399-8f4e13722335.jpg",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2-ZodiacRelaunch_ZodiacNecklaceGemini_V_Stack_007_fca1e52a-744c-4f55-9cdd-f6b03e18f380.jpg",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/BabyBoxChain_Necklace_yg_alt1-0247_284e8dba-c060-42d6-b5f2-758d7267d4d9.jpg",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/BabyBoxChain_Necklace_YG_Clasp_e03a5ab1-a4e0-49cd-a1d1-1e4429434879.jpg"
                ],
                178,
                ["16-18 inches"],
                "- Chain Width: 0.65 mm",
                "",
                "14k Gold When properly cared for, our 14k gold pieces can last forever. With its beautiful, subtle hue, you can wear your jewelry every day, everywhere."
            ),
        new Produit
            ("10",
                "Layered Opal Necklace",
                "Necklaces",
                ['Sterling Silver',
                    'Gold Vermeil'],
                ['https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0_LayeredOpalNecklace_SS_Hero_25a7527e-eeff-4ddd-a53f-6c511d27a49b.jpg',
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1_LayeredOpalNecklace_SS_Solo_Medium_52c52bca-37b5-4f60-824a-eabac1397eb9.jpg",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2_LayeredOpalNecklace_SS_Stacked_Fair.jpg",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/3_LayeredOpalNecklace_SS_Detail_Side.jpg",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/4_LayeredOpalNecklace_SS_Clasp_ec4201f2-8ad3-4c2a-8f9c-e14c126aec4b.jpg"
                ],
                118,
                ["-"],
                "- Length: 15 inches - 17 inches.- Width: 1 mm. - Stone size: 4 mm.",
                "Shoo away your stacking woes with two chains bound seamlessly with a natural opal pendant.",
                "925 Sterling Silver is a lightweight metal made of 92.5% pure silver. It’s highly durable and designed for everyday wear."
            ), new Produit
            ("11",
                "Heart Station Bracelet",
                "Bracelets",
                ['Sterling Silver',
                    'Gold Vermeil'],
                ['https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-VERMEILBRACELETS_MultiStationBraceletHeartVermeil_V_TopDown_033_01341fb2-a1d6-4504-89e0-d37fc6cfb42d.jpg',
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1-VERMEILBRACELETS_MultiStationBraceletHeartVermeil_V_Stack_019_94859061-9dad-4cf3-83d3-2a71ca1814a5.jpg?v=1722957422&width=1000&height=1195&crop=center",
                    ""
                ],
                68,
                ["4", "5"],
                "- Pendant Width: 6 mm - Chain Thickness: 1.4 mm",
                "Do what you want. Wear a bunch of little hearts on your sleeve.",
                "Gold Vermeil Not to be confused with regular gold plating, our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price."
            ),
        new Produit
            ("12",
                "Mini Pearl Satellite Bracelet",
                "Bracelets",
                ['Gold Vermeil'],
                ['https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0_MiniPearlSatelliteBracelet_V_Hero_441628ff-d986-480d-b9bd-37f4fa502192.jpg?v=1722957423&width=1000&height=1000&crop=center',
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1_MiniPearlSatelliteBracelet_V_Stack_0830.jpg?v=1722957423&width=1000&height=1000&crop=center",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2_MiniPearlSatelliteBracelet_V_Solo_2632_87546564-35e5-4af8-8c93-4180ef1a28af.jpg?v=1722957423&width=1000&height=1000&crop=center",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/3_MiniPearlSatelliteBracelet_V_Detail_Alt.jpg?v=1722957423&width=1000&height=1000&crop=center"
                ],
                88,
                [""],
                "Pearl Size: 4.5 mm - 5 mm round",
                "Because one is never enough. Take these freshwater pearls out for a spin on a gold vermeil chain that goes with everything.",
                "Gold Vermeil Not to be confused with regular gold plating, our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price."
            ),
        new Produit
            ("13",
                "Lab Grown Diamond Baguette Stacker Ring",
                "Rings",
                ['14k Yellow Gold'],
                ['https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-LGDSTACKERRINGS-BaguetteDiamondRingLGD-14K-Angled_029_ab3ad035-7225-4b72-b2e8-aedfb470afa3.jpg?v=1722952257&width=1000&height=1195&crop=center',
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1-LGDSTACKERRINGS-BaguetteDiamondRingLGD-14K-Stack_009.jpg?v=1722952257&width=1000&height=1195&crop=center",
                ],
                330,
                ["4", "7", "10"],
                "- Average Carat Weight: 0.105 ct - Diamond Clarity: VS - Diamond Color: FG - Stone Size: 4 mm x 2 mm - Shank Width: 1.25 mm  - This piece comes with the SCS-007 Certificate of Sustainability from SCS Global Services. The card must accompany the item if returned.",
                "To answer your question, yes, every jewelry wardrobe requires a beaded ring. It’s our iconic texture that’s loved and stacked by all—so we had no choice but to double it. More is more. Handcrafted in 18k gold vermeil.",
                "Gold Vermeil Not to be confused with regular gold plating, our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price."
            ),
        new Produit
            ("14",
                "Diamonds Team Ring",
                "Rings",
                ['14k Yellow Gold'],
                ['https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-DiamondsTeamRing-14k-Angled_117_d87923f2-104f-4bfc-9b02-f60e5d035ce2.jpg?v=1722957479&width=1000&height=1195&crop=center'
                    , "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1-24-085-Evergreen_On-Figure_Imagery-14K-RING-STACK-022_55e35c04-b4f5-4171-b5cd-49aa8a26c40c.jpg?v=1722957479&width=1000&height=1195&crop=center",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2-DiamondsTeamRing-14K-Stack_002_72606fd8-50a1-438a-95ca-7fc9766bdc9d.jpg?v=1722957479&width=1000&height=1195&crop=center",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/3-DiamondsTeamRing-14k-Front_166_72d7b1f8-a695-486e-8bca-cc023e0fa2a8.jpg?v=1722957479&width=1000&height=1195&crop=center",
                ],
                68,
                ["4", "5", "8", "10"],
                "- Average Carat Weight: 0.15 ct - Diamond Clarity: SI - I - Diamond Color: GHI - Stone Size: 1.3 mm - Shank Width: 1.6 mm",
                "The daintiest statement you’ll ever see. Pairs well with any of our Stacker Rings and upgrades every outfit.",
                "14k Gold When properly cared for, our 14k gold pieces can last forever. With its beautiful, subtle hue, you can wear your jewelry every day, everywhere."
            )
        ,
        new Produit
            ("15",
                "Duo Beaded Stacker Ring",
                "Rings",
                ['Gold Vermeil'],
                ['https://cdn.shopify.com/s/files/1/0837/7489/8461/files/0-VermeilSilverStackerRings_DuoBeadedStackerRing_V_ANGLED_011_2357df7c-2cdf-45b3-a0d8-a281a30bad34.jpg?v=1722953571&width=1000&height=1000&crop=center',
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/1-VermeilSilverStackerRings_DuoBeadedStackerRing_V_Stack_004.jpg?v=1722953571&width=1000&height=1000&crop=center",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/2-VermeilSilverStackerRings_DuoBeadedStackerRing_V_Solo_007_5bf5d8f8-74cc-4eeb-ba6d-066edb4d5612.jpg?v=1722953571&width=1000&height=1000&crop=center",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/3-VermeilSilverStackerRings_DuoBeadedStackerRing_V_ANGLEDSIDE_046_e2aa5e11-83cc-43db-9bd9-5c970f66fa1a.jpg?v=1722953571&width=1000&height=1000&crop=center",
                    "https://cdn.shopify.com/s/files/1/0837/7489/8461/files/4-VermeilSilverStackerRings_DuoBeadedStackerRing_V_STACK_149_5ef20f22-c5c4-4725-b62f-c2b1675426ed.jpg?v=1722953572&width=1000&height=1000&crop=center",
                ],
                48,
                ["4", "5", "6", "7", "8", "9", "10"],
                "- Width: 2.9 mm - Thickness: 1.7 mm",
                "To answer your question, yes, every jewelry wardrobe requires a beaded ring. It’s our iconic texture that’s loved and stacked by all—so we had no choice but to double it. More is more. Handcrafted in 18k gold vermeil.",
                "Gold Vermeil Not to be confused with regular gold plating, our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price."
            ),
    ]

    wishlist: Produit[] = [];
    panierlist: Produit[] = [];

    constructor() { }

    getProducts(): Produit[] {
        return this.liste_produits
    }

    getProductById(id: string): Produit {

        for (let i = 0; i < this.liste_produits.length; i++) {
            if (this.liste_produits[i]._id == id) {
                return this.liste_produits[i];
            }
        }
        return this.liste_produits[0]
    }

    getProductByCategorie(categorie: string): Produit[] {
        return this.liste_produits.filter((e) => e.categorie == categorie)
    }

    pushWishList(p: Produit) {
        if( !this.isDejaInWishList(p))
        this.wishlist.push(p);
    }

    isDejaInWishList(p: Produit): boolean {
        return this.wishlist.filter(e => e._id == p._id).length > 0;
    }

    removeWishList(p: Produit) {
        this.wishlist = this.wishlist.filter(e => e._id !== p._id)
    }

    getWishList(): Produit[] {
        return this.wishlist;
    }

    pushPanierList(p: Produit) {
        this.panierlist.push(p);
    }

    isDejaInPanierList(p: Produit): boolean {
        return this.panierlist.filter(e => e._id == p._id).length > 0;
    }

    removePanierList(p: Produit) {
        this.panierlist = this.panierlist.filter(e => e._id !== p._id)
    }

    getPanierList(): Produit[] {
        return this.panierlist;
    }
}
