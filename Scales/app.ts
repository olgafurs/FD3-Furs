
class Scales {

    productsArr:Product[]; //массив добавленных на весы Продуктов (объектов класса Product)
    sumScale:number; //суммарный вес продуктов на весах
    nameList:string[]; //список продуктов

    constructor() {
        this.productsArr=[]; 
        this.sumScale= 0;
        this.nameList=[];
    }

    add(product:Product):void { //добавление нового Продукта на весы
        this.productsArr.push(product);
        console.log( "На весы добавлен продукт  " + product.name);
    }

    getSumScale():void { // получениe суммарного веса добавленных Продуктов       
        
        this.productsArr.forEach( prod => {
            this.sumScale =  this.sumScale + prod.weight;           
        });
        console.log("Общий вес продуктов на весах  " + this.sumScale);
        
    }

    getNameList():void { //получение списка наименований добавленных Продуктов в виде массива
        this.productsArr.forEach( prod => {
            this.nameList.push(prod.name);           
        });
        console.log("Список наименований продуктов на весах  " + this.nameList);
    }
   
    
}


class Product {  

    name:string;
    weight:number;

   constructor(_name:string, _weight:number) {      
       this.name = _name,
       this.weight =  _weight;
    }  

    getScale():void { //получить вес продукта
        console.log("Вес продукта  " +  this.name + "  равен  "+ this.weight );
    }

    getName():void { //получить название продукта
        console.log("Название продукта  " + this.name);
    }
   
    
}

class Tomato extends Product {

    color:string;

    constructor(_name:string, _weight:number ) {
        super(_name, _weight );
        this.color="";
    }

    setColor(_color:string):void {
        this.color=_color;
    }   

    getName():void { //получить название продукта
        this.setColor("красный");
        super.getName();
        console.log("Цвет помидора  " +  this.color)
    }

   
}


class Apple extends Product {
    color:string;

    constructor(_name:string, _weight:number ) {
        super(_name, _weight );
        this.color="";
    }

    setColor(_color:string):void {
        this.color=_color;
    }   

    getName():void { //получить название продукта
        this.setColor("зеленый");
        super.getName();
        console.log("Цвет яблока  " +  this.color)
    }

   
}


let scales:Scales=new Scales();

let apple1:Apple=new Apple("яблоко1", 100);

apple1.getName();
apple1.getScale();

let tomato1:Tomato=new Tomato("помидор1", 200);

tomato1.getName();
tomato1.getScale();

let apple2:Apple=new Apple("яблоко2", 250);
let tomato2:Tomato=new Tomato("помидор2", 270);

scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);

scales.getSumScale();
scales.getNameList();