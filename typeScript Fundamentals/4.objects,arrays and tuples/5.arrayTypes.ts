/*to declare an array , you have to only add [] 
after the variable name
examples:

*/

//1.array of literal types like string,number,boolean

const names=["John","Jane","Mary"];//names is get the type of string[] implicitly

//you can add type explicitly as:

const namesArray:string[]=["John","Jane","Mary"];//names is get the type of string[] explicitly

//2.array of objects
//a.implicit declaration

const cars=[
    {
        make:"Ford",
        model:"Fiesta",
        year:2018
    }
]
/*the type of the above looks like :
 {
    make: string;
    model: string;
    year: number;
}[]
*/
cars.push({make:"Land Rover",model:"Range Rover",year:2019});//will work

//b.explicit declaration

const carsArray:{make:string,model:string,year:number}[]=[];//will work
carsArray.push({make:"Ford",model:"Fiesta",year:2018});
