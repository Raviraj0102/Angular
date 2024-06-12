var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["PER_UNIT"] = 120] = "PER_UNIT";
})(MyEnum || (MyEnum = {}));
// component 1
var ElectricalBillComponent = /** @class */ (function () {
    function ElectricalBillComponent() {
        this.eUnit = 10;
    }
    ElectricalBillComponent.prototype.calculateEBillAmount = function (nou) {
        return this.eUnit * nou;
    };
    return ElectricalBillComponent;
}());
// component 2
var WaterlBillComponent = /** @class */ (function () {
    function WaterlBillComponent() {
        this.eUnit = MyEnum.PER_UNIT;
    }
    WaterlBillComponent.prototype.calculateEBillAmount = function (nou) {
        return this.eUnit * nou;
    };
    return WaterlBillComponent;
}());
// create the object and invoke the method
var eBill = new ElectricalBillComponent();
console.log("Electrical bill amount : " + eBill.calculateEBillAmount(100));
var eBill1 = new WaterlBillComponent();
console.log("Water bill amount : " + eBill1.calculateEBillAmount(50));
