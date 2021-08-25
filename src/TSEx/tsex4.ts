interface MyNums{


    a:number;
    b:string;

    comb();

    
}

class A implements MyNums{

    a:number;
    b:string;

    constructor(a:number, b:string){
        this.a=a;
        this.b=b;
    }

    comb(){
        console.log("interface with "+this.a+" and "+this.b);
    }
}

let a = new A(8, "hi");
a.comb();