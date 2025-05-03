// console.log("2" > 1);
// console.log("02" > 1);
// console.log(2 < "1");


let originalName = "Saif Ansari";

let anotherName = originalName;

anotherName = "Saifreen";

console.log(anotherName);
console.log(originalName);


let userOne = {
    email : "saif@gmail.com",
    upi : "saif@ybl"
}
let userTwo = userOne;

userTwo.email = "saifreen@gmail.com";

console.log(userOne);
console.log(userTwo);

console.table([originalName, anotherName, userOne, userTwo]);
