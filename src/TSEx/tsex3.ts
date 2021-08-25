class SIV{

    km: number

    constructor(km: number){

        this.km = km;
    }

    value(){
        return "Kms traveled when asking for this Item - "+this.km;
    }


}


let siv = new SIV(343536);
console.log(siv.value());