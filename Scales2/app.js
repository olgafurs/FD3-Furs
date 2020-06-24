var Scales = /** @class */ (function () {
    function Scales() {
        this.productsArr = [];
    }
    Scales.prototype.add = function (product) {
        this.productsArr.push(product);
        console.log("На весы добавлен продукт  " + product.getName());
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        this.productsArr.forEach(function (prod) {
            sumScale = sumScale + prod.getScale();
        });
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        this.productsArr.forEach(function (prod) {
            nameList.push(prod.getName());
        });
        return nameList;
    };
    return Scales;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _weight) {
        this.name = _name,
            this.weight = _weight;
        this.color = "";
    }
    Tomato.prototype.setColor = function (_color) {
        this.color = _color;
    };
    Tomato.prototype.getName = function () {
        this.setColor("красный");
        return (this.color + " " + this.name);
    };
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    return Tomato;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _weight) {
        this.name = _name,
            this.weight = _weight;
        this.color = "";
    }
    Apple.prototype.setColor = function (_color) {
        this.color = _color;
    };
    Apple.prototype.getName = function () {
        this.setColor("зеленое");
        return (this.color + " " + this.name);
    };
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    return Apple;
}());
var scales = new Scales();
var apple1 = new Apple("яблоко1", 100);
console.log("Вес продукта  " + apple1.getName() + "  равен  " + apple1.getScale());
var tomato1 = new Tomato("помидор1", 200);
console.log("Вес продукта  " + tomato1.getName() + "  равен  " + tomato1.getScale());
var apple2 = new Apple("яблоко2", 250);
var tomato2 = new Tomato("помидор2", 270);
scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);
console.log("Общий вес продуктов на весах  " + scales.getSumScale());
console.log("Список наименований продуктов на весах  " + scales.getNameList());
//# sourceMappingURL=app.js.map