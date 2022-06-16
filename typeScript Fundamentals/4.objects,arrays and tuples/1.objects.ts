/*
{
  make: "Toyota",
  model: "Corolla",
  year: 2002
}
*/

//1.implicit declaration
// const car={
//     make:"Toyota",//string
//     model:"Corolla",//string
//     year:2002//number
// }

//2.explicit declaration

// let car:{
//     make:string,
//     model:string,
//     year:number
// }

//use in a function

function printCar(car: {
  make: string,
  model: string,
  year: number
}) {
  console.log(`${car.make} ${car.model} ${car.year}`);
}

printCar({make:"Toyota",model:"Corolla",year:2002});
