/*excess property checking exists if a an 
an object which received some properties and you want to add other properties which you didn't define
*/

import { printMyCar } from "./2.objects-optionalProperties";

//example

// printMyCar({
//     make: "Toyota",
//     model: "Corolla",
//     year: 2002,
//     chargeVoltage: 300,
//     color: "red"//this will cause the error because during declaration, we didn't define "color" property.
// })


//when we add property that we didn't define, we get excess property error.
/*ways to solve excess property error
1.declare that variable in declaration and make it optional
    ex: car: {
        make: string,
        model: string,
        year: number,
        chargeVoltage?: number,
        color?: string
    }

2.create a new object with the same properties and add the new property
example :
*/

let car1={
    make:"Toyota",
    model:"Corolla",
    year:2002,
    chargeVoltage:300,
    color:"red"
}

//then pass that object to the function
printMyCar(car1);//no error
