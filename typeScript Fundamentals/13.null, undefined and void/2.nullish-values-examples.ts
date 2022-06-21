//null

const userInfo={
    name:"cedric",
    primaryEmail:"mutesacedric@gmail.com",
    secondaryEmail:null//this means that this user does not have secondary email.
}

//undefined

const myEvent={
    name:"party",
    startDate:"2022-01-01T00:00:00",
    endDate:undefined//this means that the end date is not yet known.
}

//void

function printName(name:string):void{
    console.log(name);
}

//the return value of the above function should not be used;

let printedName=printName("cedric");//the printed name will have type of "void"
console.log(printName.length)//this will print 1;