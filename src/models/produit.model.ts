export class Produit {
    constructor(
        public _id : string ,
        public name: string,
        public categorie: string,
        public color: string[],
        public image: string[],
        public prix : number,
        public size : string[],
        public detail: string,
        public description: string,
        public material: string
    ){}
}
