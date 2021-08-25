var A = /** @class */ (function () {
    function A(a, b) {
        this.a = a;
        this.b = b;
    }
    A.prototype.comb = function () {
        console.log("interface with " + this.a + " and " + this.b);
    };
    return A;
}());
var a = new A(8, "hi");
a.comb();
