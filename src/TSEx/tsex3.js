var SIV = /** @class */ (function () {
    function SIV(km) {
        this.km = km;
    }
    SIV.prototype.value = function () {
        return "Kms traveled when asking for this Item - " + this.km;
    };
    return SIV;
}());
var siv = new SIV(343536);
console.log(siv.value());
