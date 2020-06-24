interface IStorageEngine {
    addItem(product:Product):void;
    getItem(index:number):Product;
    getCount():number;
}

class Scales<StorageEngine extends IStorageEngine> {

    products:StorageEngine; //массив добавленных на весы Продуктов (объектов класса Product)    

    constructor(_products:StorageEngine) {
         this.products=_products;        
    } 
    
    addItem(product:Product):void { //добавление нового Продукта на весы
        this.products.addItem(product);                   
    }

    getItem(index:number):Product {
        return this.products.getItem(index);
    }

    getCount():number {
        return  this.products.getCount();
    }

    getSumScale():number { // получениe суммарного веса добавленных Продуктов       
        let sumScale:number = 0;

        for(let i=0; i<this.products.getCount(); i++) {
            let a:Product = this.products.getItem(i);
            sumScale += a.getScale();  
          }
        return sumScale;
    }

    getNameList():string[] { //получение списка наименований добавленных Продуктов в виде массива        
        let nameList:string[] = [];
        for(let i=0; i<this.products.getCount(); i++) {
            let a:Product = this.products.getItem(i);
            nameList.push(a.getName()); 
          }
       
        return nameList;
    }
   
    
}


class Product {

    private name:string;
    private weight:number;   

    constructor(_name:string, _weight:number ) {      
        this.name = _name,
        this.weight =  _weight;       
    }      

    getName():string { //получить название продукта                
        return this.name;
    }

    getScale():number { //получить вес продукта       
        return this.weight;
    }

   
}


class ScalesStorageEngineArray implements IStorageEngine { //хранилище весов в виде массива

    productsArr:Product[]; //массив добавленных на весы Продуктов (объектов класса Product)    

    constructor() {
        this.productsArr=[];        
    }

    addItem(product:Product):void { //добавление нового Продукта на весы
        this.productsArr.push(product);                   
    }

    getItem(index:number):Product {
        return  this.productsArr[index];
    }

    getCount():number {
        return  this.productsArr.length;
    }   

}


class ScalesStorageEngineLocalStorage {
       
    localStorageKey:string = "Products";
 
    addItem(product:Product):void { //добавление нового Продукта на весы
        if(!localStorage.getItem(this.localStorageKey)){
            localStorage.setItem(this.localStorageKey,   JSON.stringify([]));
        }           
        let a:Product[]= JSON.parse(localStorage.getItem(this.localStorageKey));
        a.push(product);
        localStorage.setItem(this.localStorageKey, JSON.stringify(a));       
                   
    }

    getItem(index:number):Product {
        let a:any = JSON.parse(localStorage.getItem(this.localStorageKey));
        return new Product(a[index].name, a[index].weight)
    }

    getCount():number {
        let a:Product[] = JSON.parse(localStorage.getItem(this.localStorageKey));
        return  a.length;
    }   


    
}

let apple1:Product=new Product("яблоко1", 100);
let tomato1:Product=new Product("помидор1", 200);
let apple2:Product=new Product("яблоко2", 250);
let tomato2:Product=new Product("помидор2", 270);

console.log("*********************Сохраняем продукты в массиве*******************");
 let SSEngineArray = new ScalesStorageEngineArray;
let scales1 =new Scales<ScalesStorageEngineArray>(SSEngineArray);

scales1.addItem(apple1);
console.log("На весы положили  " + apple1.getName() + "  c весом  " + apple1.getScale());
scales1.addItem(apple2);
console.log("На весы положили  " + apple2.getName() + "  c весом  " + apple2.getScale());
scales1.addItem(tomato1);
console.log("На весы положили  " + tomato1.getName() + "  c весом  " + tomato1.getScale());
scales1.addItem(tomato2);
console.log("На весы положили  " + tomato2.getName() + "  c весом  " + tomato2.getScale());


console.log("Общий вес продуктов на весах  " + scales1.getSumScale());
console.log("Список наименований продуктов на весах  " + scales1.getNameList())

console.log("*********************Сохраняем продукты в LocalStorage*******************");
let SSEngineLocalStorage = new ScalesStorageEngineLocalStorage;
window.localStorage.removeItem(SSEngineLocalStorage.localStorageKey);
let scales2 =new Scales<ScalesStorageEngineLocalStorage>(SSEngineLocalStorage);

scales2.addItem(apple1);
console.log("На весы положили  " + apple1.getName() + "  c весом  " + apple1.getScale());
scales2.addItem(apple2);
console.log("На весы положили  " + apple2.getName() + "  c весом  " + apple2.getScale());
scales2.addItem(tomato1);
console.log("На весы положили  " + tomato1.getName() + "  c весом  " + tomato1.getScale());
scales2.addItem(tomato2);
console.log("На весы положили  " + tomato2.getName() + "  c весом  " + tomato2.getScale());




console.log("Общий вес продуктов на весах  " + scales2.getSumScale());
console.log("Список наименований продуктов на весах  " + scales2.getNameList())