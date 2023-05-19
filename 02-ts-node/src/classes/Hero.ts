import powers from "../data/powers";


export class Hero {
    constructor(
        public name:string,
        public powerId:number,
        public age:number
    ){}

    get power():string{
        return powers.find(power => power.id === this.powerId)?.desc || 'not found'; // ? =  acepta undefine y ! = se que va a retornar algo   
    }
}