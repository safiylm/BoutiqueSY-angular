export class Panier {
    constructor(
        public _id : string ,
        public userId: string,
        public productId: string,
        public size: string,
        public quantity : number
    ){}
}
