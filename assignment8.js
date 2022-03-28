var Addition = /** @class */ (function () {
    function Addition() {
    }
    Addition.prototype.add = function (a, b) {
        console.log(a + b);
    };
    return Addition;
}());
var o = new Addition();
o.add(1, 2);
o.add("Hello", "World");
