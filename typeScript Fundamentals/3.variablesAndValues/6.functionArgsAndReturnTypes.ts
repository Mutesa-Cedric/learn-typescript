function add(a, b) {
    return a + b // strings? numbers? a mix?
}

//with this declaration, everything is 'any type'

const result = add(3, "4")
console.log(result);//this will work and will concatinate as strings

//but you can specify the type of the return value

function addNumbers(a:number,b:number):number{
    return a+b;

}

addNumbers(3,4);//7

// addNumbers(3,"mutesa")//Argument of type 'string' is not assignable to parameter of type 'number'.