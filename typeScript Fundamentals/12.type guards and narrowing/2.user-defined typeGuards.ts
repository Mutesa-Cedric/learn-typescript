//let's create an interface

interface CarLike {
    make: string;
    model: string;
    year: number;
}

//we can create a typeguard to check if that interface is our car object

let maybeCar: unknown

// the guard
if (
    maybeCar &&
    typeof maybeCar === "object" &&
    "make" in maybeCar &&
    typeof maybeCar["make"] === "string" &&
    "model" in maybeCar &&
    typeof maybeCar["model"] === "string" &&
    "year" in maybeCar &&
    typeof maybeCar["year"] === "number"
) {
    let maybeCar: object
}