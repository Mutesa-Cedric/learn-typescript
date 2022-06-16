function printMyCar(car: {
    make: string,
    model: string,
    year: number,
    chargeVoltage?: number,//we use variableName?:variableType to make the variable optional
}) {
    let str = `${car.make} ${car.model} ${car.year}`;
    
    if (car.chargeVoltage !== undefined) {
        str += ` ${car.chargeVoltage}v`;//thsi will run only if chargVoltage is available
    }

    console.log(str);
}

printMyCar({ make: "Toyota", model: "Corolla", year: 2002, chargeVoltage: 3 });//charge voltage exists
printMyCar({ make: "ferrari", model: "FE222", year: 2010 });//chargeVoltage is not defined

  //all those will work

  /*

  if we didn't provide ? in the variable declaration, we are meaning that
  eacha time the function is invoked, should contain that parameter.

    if we provided ? in the variable declaration, we are meaning that
    even if the parameter is not there , the function will run

  */

    export {printMyCar}