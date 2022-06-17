//we can use aliases for code cleanup

/*
example: 
original version

export function maybeGetUserInfo():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  // implementation is the same in both examples
  if (Math.random() > 0.5) {
    return [
      "success",
      { name: "Mike North", email: "mike@example.com" },
    ]
  } else {
    return [
      "error",
      new Error("The coin landed on TAILS :("),
    ]
  }
}
 
*/

//with aliases:

type UserInfoOutComeError=["error",Error];
type UserInfoOutComeSuccess=["success",{name:string,email:string}];

type UserInfoOutcome=UserInfoOutComeError|UserInfoOutComeSuccess;

function mayBeGetUserInfo():UserInfoOutcome{
    if(Math.random() > 0.5) return ["success",{name:"mike North",email:"mike@example.com"}]

    return ["error",new Error("the coin landed on tails")]
}
