// between 500 and 1000
const RANDOM_WAIT_TIME =
  Math.round(Math.random() * 500) + 500
 
let startTime = new Date()
let endTime:Date//this is a type annotation 
//we have given it a type even if we don't know when it will be assigned.

 
setTimeout(() => {
//   endTime = 0 //this will automatically give an error
  endTime = new Date()
}, RANDOM_WAIT_TIME)

export{}