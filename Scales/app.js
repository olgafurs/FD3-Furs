var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.productsArr = [];
        this.sumScale = 0;
        this.nameList = [];
    }
    Scales.prototype.add = function (product) {
        this.productsArr.push(product);
        console.log("На весы добавлен продукт  " + product.name);
    };
    Scales.prototype.getSumScale = function () {
        var _this = this;
        this.productsArr.forEach(function (prod) {
            _this.sumScale = _this.sumScale + prod.weight;
        });
        console.log("Общий вес продуктов на весах  " + this.sumScale);
    };
    Scales.prototype.getNameList = function () {
        var _this = this;
        this.productsArr.forEach(function (prod) {
            _this.nameList.push(prod.name);
        });
        console.log("Список наименований продуктов на весах  " + this.nameList);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name,
            this.weight = _weight;
    }
    Product.prototype.getScale = function () {
        console.log("Вес продукта  " + this.name + "  равен  " + this.weight);
    };
    Product.prototype.getName = function () {
        console.log("Название продукта  " + this.name);
    };
    return Product;
}());
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _weight) {
        var _this = _super.call(this, _name, _weight) || this;
        _this.color = "";
        return _this;
    }
    Tomato.prototype.setColor = function (_color) {
        this.color = _color;
    };
    Tomato.prototype.getName = function () {
        this.setColor("красный");
        _super.prototype.getName.call(this);
        console.log("Цвет помидора  " + this.color);
    };
    return Tomato;
}(Product));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _weight) {
        var _this = _super.call(this, _name, _weight) || this;
        _this.color = "";
        return _this;
    }
    Apple.prototype.setColor = function (_color) {
        this.color = _color;
    };
    Apple.prototype.getName = function () {
        this.setColor("зеленый");
        _super.prototype.getName.call(this);
        console.log("Цвет яблока  " + this.color);
    };
    return Apple;
}(Product));
var scales = new Scales();
var apple1 = new Apple("яблоко1", 100);
apple1.getName();
apple1.getScale();
var tomato1 = new Tomato("помидор1", 200);
tomato1.getName();
tomato1.getScale();
var apple2 = new Apple("яблоко2", 250);
var tomato2 = new Tomato("помидор2", 270);
scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);
scales.getSumScale();
scales.getNameList();
//# sourceMappingURL=app.js.map