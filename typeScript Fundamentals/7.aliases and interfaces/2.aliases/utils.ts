
import { UserContactInfo } from "./types";

function printContactInfo(info:UserContactInfo):void{
    console.log(info);
    console.log(info.email); 
}


const person={
    name:"Johndoe",
    email:"johndoe@gmail.com",
}

printContactInfo(person);

// even if you can pass in object with many properties, it will work

const person1={
    name:"mutesa",
    email:"mutesacedric@gmail.com",
    password:"mt1234"
}

printContactInfo(person1);//this will work even if the password is not defined in our alias.
