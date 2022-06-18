/*
let's take an example of our class:

    class Car{
    make:string;
    model:string;
    year:number;

    constructor(make:string, model:string, year:number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

this can be defined using param properties like: 

*/

class Car1{
    constructor(
        public make:string,
        public model:string,
        public year:number
    ){}//no body required
}

const car=new Car1("Honda","Accord",2017);
//all those two decralation are the same