var Scales = /** @class */ (function () {
    function Scales(_products) {
        this.products = _products;
    }
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.products.getCount(); i++) {
            var a = this.products.getItem(i);
            sumScale += a.getScale();
        }
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.products.getCount(); i++) {
            var a = this.products.getItem(i);
            nameList.push(a.getName());
        }
        return nameList;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name,
            this.weight = _weight;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.weight;
    };
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.productsArr = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (product) {
        this.productsArr.push(product);
        // console.log("На весы положили  " + product.getName() + "  c весом  " + product.getScale())              
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.productsArr[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.productsArr.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.localStorageKey = "Products";
        this.productsArr = [];
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (product) {
        if (!localStorage.getItem(this.localStorageKey)) {
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.productsArr));
        }
        var a = JSON.parse(localStorage.getItem(this.localStorageKey));
        a.push(product);
        localStorage.setItem(this.localStorageKey, JSON.stringify(a));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var a = JSON.parse(localStorage.getItem(this.localStorageKey));
        return new Product(a[index].name, a[index].weight);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var a = JSON.parse(localStorage.getItem(this.localStorageKey));
        return a.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var apple1 = new Product("яблоко1", 100);
var tomato1 = new Product("помидор1", 200);
var apple2 = new Product("яблоко2", 250);
var tomato2 = new Product("помидор2", 270);
console.log("*********************Сохраняем продукты в массиве*******************");
var SSEngineArray = new ScalesStorageEngineArray;
var scales1 = new Scales(SSEngineArray);
SSEngineArray.addItem(apple1);
console.log("На весы положили  " + apple1.getName() + "  c весом  " + apple1.getScale());
SSEngineArray.addItem(apple2);
console.log("На весы положили  " + apple2.getName() + "  c весом  " + apple2.getScale());
SSEngineArray.addItem(tomato1);
console.log("На весы положили  " + tomato1.getName() + "  c весом  " + tomato1.getScale());
SSEngineArray.addItem(tomato2);
console.log("На весы положили  " + tomato2.getName() + "  c весом  " + tomato2.getScale());
console.log("Общий вес продуктов на весах  " + scales1.getSumScale());
console.log("Список наименований продуктов на весах  " + scales1.getNameList());
console.log("*********************Сохраняем продукты в LocalStorage*******************");
var SSEngineLocalStorage = new ScalesStorageEngineLocalStorage;
window.localStorage.removeItem(SSEngineLocalStorage.localStorageKey);
var scales2 = new Scales(SSEngineLocalStorage);
SSEngineLocalStorage.addItem(apple1);
console.log("На весы положили  " + apple1.getName() + "  c весом  " + apple1.getScale());
SSEngineLocalStorage.addItem(apple2);
console.log("На весы положили  " + apple2.getName() + "  c весом  " + apple2.getScale());
SSEngineLocalStorage.addItem(tomato1);
console.log("На весы положили  " + tomato1.getName() + "  c весом  " + tomato1.getScale());
SSEngineLocalStorage.addItem(tomato2);
console.log("На весы положили  " + tomato2.getName() + "  c весом  " + tomato2.getScale());
console.log("Общий вес продуктов на весах  " + scales2.getSumScale());
console.log("Список наименований продуктов на весах  " + scales2.getNameList());
//# sourceMappingURL=app.js.map