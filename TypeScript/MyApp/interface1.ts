// enum is use for constant ,we can create n number of constant
enum MyEnum{

    PER_UNIT = 120  // if more than one seperate by coma (,)
}

interface IBill{
    calculateEBillAmount(nou:number):number;
}

// component 1

class ElectricalBillComponent implements IBill{

    eUnit :number = 10;
    calculateEBillAmount(nou: number): number {
        return this.eUnit*nou;
    }

}

// component 2

class WaterlBillComponent implements IBill{

    eUnit :number = MyEnum.PER_UNIT;
    calculateEBillAmount(nou: number): number {
        return this.eUnit*nou;
    }

}

// create the object and invoke the method

var eBill = new ElectricalBillComponent();
console.log("Electrical bill amount : "+eBill.calculateEBillAmount(100));

var eBill1 = new WaterlBillComponent();
console.log("Water bill amount : "+ eBill1.calculateEBillAmount(50));