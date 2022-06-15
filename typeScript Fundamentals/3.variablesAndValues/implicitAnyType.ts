// between 500 and 1000
const RANDOM_WAIT_TIME =
  Math.round(Math.random() * 500) + 500
 
let startTime = new Date()
let endTime//this is any type
 
setTimeout(() => {
  endTime = 0
  endTime = new Date()
}, RANDOM_WAIT_TIME)

//when we declare variable and its value will be assigned later, it takes the initial value of 
//any type ( let endTime;) this takes any type
//any is like javascript variable rule.