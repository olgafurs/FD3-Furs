
class Scales {

    productsArr:IScalable[]; //массив добавленных на весы Продуктов (объектов класса Product)    

    constructor() {
        this.productsArr=[];        
    }

    add(product:IScalable):void { //добавление нового Продукта на весы
        this.productsArr.push(product);
        console.log( "На весы добавлен продукт  " + product.getName());         
    }

    getSumScale():number { // получениe суммарного веса добавленных Продуктов       
        let sumScale:number = 0;
        this.productsArr.forEach( (prod:IScalable) => {
            sumScale =  sumScale + prod.getScale();                   
        });

        return sumScale;
    }

    getNameList():string[] { //получение списка наименований добавленных Продуктов в виде массива        
        let nameList:string[] = [];
        this.productsArr.forEach( (prod:IScalable) => {
            nameList.push(prod.getName());                 
        });
       
        return nameList;
    }
   
    
}


// class Product {  

//     name:string;
//     weight:number;

//    constructor(_name:string, _weight:number) {      
//        this.name = _name,
//        this.weight =  _weight;
//     }  

//     getScale():number { //получить вес продукта       
//         return this.weight;
//     }

//     getName():string { //получить название продукта      
//         return this.name;
//     }
   
    
// }

interface IScalable {
    getScale():number;
    getName():string;
}


class Tomato implements IScalable {

    name:string;
    weight:number;
    color:string;

    constructor(_name:string, _weight:number ) {      
        this.name = _name,
        this.weight =  _weight;
        this.color="";
    }

    setColor(_color:string):void {
        this.color=_color;
    }   

    getName():string { //получить название продукта
        this.setColor("красный");         
        return (this.color + " " + this.name);
    }

    getScale():number { //получить вес продукта       
        return this.weight;
    }

   
}


class Apple implements IScalable {
    name:string;
    weight:number;
    color:string;

    constructor(_name:string, _weight:number ) {      
        this.name = _name,
        this.weight =  _weight;
        this.color="";
    }

    setColor(_color:string):void {
        this.color=_color;
    }   

    getName():string { //получить название продукта
        this.setColor("зеленое");       
        return (this.color + " " + this.name);
    }

    getScale():number { //получить вес продукта       
        return this.weight;
    }

   
}


let scales:Scales=new Scales();

let apple1:Apple=new Apple("яблоко1", 100);
console.log("Вес продукта  " +  apple1.getName() + "  равен  "+ apple1.getScale() )

let tomato1:Tomato=new Tomato("помидор1", 200);
console.log("Вес продукта  " +  tomato1.getName() + "  равен  "+ tomato1.getScale() )

let apple2:Apple=new Apple("яблоко2", 250);
let tomato2:Tomato=new Tomato("помидор2", 270);

scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);


console.log("Общий вес продуктов на весах  " + scales.getSumScale());
console.log("Список наименований продуктов на весах  " + scales.getNameList())