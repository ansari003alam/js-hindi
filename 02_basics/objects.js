const mySymbo = Symbol("Key1");

const myObj = {
    name: "Saif",
    "full name": "Saif Ansari",
    [mySymbo]: "mykey1",
    age: 22,
    location: "Bihar",
    email: "saif@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Maonday", "Sunday"]
}
//console.log(myObj);
// console.log(myObj["full name"]);
// console.log(myObj[mySymbo]);

// console.log(myObj["email"]);

myObj.email = "saif@google.com";
//Object.freeze(myObj);
myObj.email = "saif@gpt.com"

//console.log(myObj);

myObj.greeting = function(){
    console.log("Hello JS family");
    
}
myObj.greetingTwo = function(){
    console.log(`Hello JS family , ${this.name}`);
    
}
console.log(myObj.greeting());
console.log(myObj.greetingTwo());


