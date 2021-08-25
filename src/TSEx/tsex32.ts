class PClass{

    km: number

    constructor(km: number){

        this.km = km;
    }

    

}

class CClass extends PClass{

    l: number;

    constructor(l:number, km:number){
        super(km);
        this.l=l;
    }


    value(){
        return ("Value from parent is "+this.km+" and value from child is "+this.l+".");
    }
}

let CCObj = new CClass(5,23);
console.log(CCObj.value());

