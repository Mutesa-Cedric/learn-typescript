/*

Let’s go back to our car example. In the JS world, we could have something like:

////////////////////////////////
// JavaScript, not TypeScript //
////////////////////////////////
class Car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
          
(property) Car.model: any
    this.year = year
  }
}
 
let sedan = new Car("Honda", "Accord", 2017)
sedan.activateTurnSignal("left") // not safe!
new Car(2017, "Honda", "Accord") // not safe!
Try
If we stop and think for a moment, this makes sense in a world (the JS world) where every value, including the class fields and instances of the class itself, is effectively of type any.
*/

//in TS, you can not add your own fields.

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

let sedan=new Car("Honda", "Accord:", 2017);//works fine


// sedan.activateTurnSignal("left")//Property 'activateTurnSignal' does not exist on type 'Car'.
//let ferrari=new Car(12,"ferrari","ferrari") Argument of type 'number' is not assignable to parameter of type 'string'