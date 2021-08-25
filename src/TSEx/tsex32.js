var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PClass = /** @class */ (function () {
    function PClass(km) {
        this.km = km;
    }
    return PClass;
}());
var CClass = /** @class */ (function (_super) {
    __extends(CClass, _super);
    function CClass(l, km) {
        var _this = _super.call(this, km) || this;
        _this.l = l;
        return _this;
    }
    CClass.prototype.value = function () {
        return ("Value from parent is " + this.km + " and value from child is " + this.l + ".");
    };
    return CClass;
}(PClass));
var CCObj = new CClass(5, 23);
console.log(CCObj.value());
