//bottom types are used to define things that can hold no possible value

/*
even if it seems crazy , it have a very big usage:
=> in case of exhaustive conditions:
ex:


class Car {
    drive() {
      console.log("vroom")
    }
  }
  class Truck {
    tow() {
      console.log("dragging something")
    }
  }
  type Vehicle = Truck | Car
   
  let myVehicle: Vehicle = obtainRandomVehicle()
   
  // The exhaustive conditional
  if (myVehicle instanceof Truck) {
    myVehicle.tow() // Truck
  } else if (myVehicle instanceof Car) {
    myVehicle.drive() // Car
  } else {
    // NEITHER!
    const neverValue: never = myVehicle
  }


  Now, leaving the conditional exactly as-is, let’s add Boat as a vehicle type:

class Car {
  drive() {
    console.log("vroom")
  }
}
class Truck {
  tow() {
    console.log("dragging something")
  }
}
class Boat {
  isFloating() {
    return true
  }
}
type Vehicle = Truck | Car | Boat
 
let myVehicle: Vehicle = obtainRandomVehicle()
 
// The exhaustive conditional
if (myVehicle instanceof Truck) {
  myVehicle.tow() // Truck
} else if (myVehicle instanceof Car) {
  myVehicle.drive() // Car
} else {
  // NEITHER!
  const neverValue: never = myVehicle
Type 'Boat' is not assignable to type 'never'.
}
Effectively, what has happened here is that we have been alerted to the fact that a new possibility for Vehicle has been introduced. As a result, we don’t end up with the type for myVehicle as a never in that final else clause.

I recommend handling this a little more gracefully via an error subclass:

class UnreachableError extends Error {
  constructor(_nvr: never, message: string) {
    super(message)
  }
}
 
// The exhaustive conditional
if (myVehicle instanceof Truck) {
  myVehicle.tow() // Truck
} else if (myVehicle instanceof Car) {
  myVehicle.drive() // Car
} else {
  // NEITHER!
  throw new UnreachableError(
    myVehicle,
Argument of type 'Boat' is not assignable to parameter of type 'never'.
    `Unexpected vehicle type: ${myVehicle}`
  )
}
Try
Now, one of three things will happen in that final else block

We will have handled every case before reaching it, and thus we will never enter the final else block
We will catch upstream code changes that need to be handled in this conditional at compile time (e.g., adding the Boat case)
If somehow an unexpected value “slip through” and is not caught until we actually run the code, we will get a meaningful error message
Note that this approach works nicely with a switch statement, when the UnreachableError is thrown from the default case clause.


  */

