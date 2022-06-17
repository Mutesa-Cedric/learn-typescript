
/* 

by inheritance in type aliases, you make an alias that combine existing types with new behaviours.

this is commonly achieved using "&" operator.

*/
//example:

type SpecialDate=Date & {getReason():string}; //this interface inheritate type date and added getReason behaviojur


const newYearEvent:SpecialDate={
    ...new Date(),
    getReason:()=>"last day of the year!"
}

newYearEvent
