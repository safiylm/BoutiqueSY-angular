export class Produit {
    constructor(
        public _id : string ,
        public title: string,
        public categorie: string,
        public color: string[],
        public image: string[],
        public prix : number,
        public size : string[],
        public details: string,
        public description: string,
        public materials: string
    ){}
}
