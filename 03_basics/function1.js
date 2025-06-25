// function addTwoNumber (num1 , num2) {
//     console.log(num1 + num2);
// }
// addTwoNumber(5, 6);


function addTwoNumber (num1 , num2) {
    let result = (num1 + num2)
    return result
}
const result = addTwoNumber(5, 6);
//console.log("Result : " , result);


function loginUser (username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUser());

//Rest or Spread Operator
function calculateCartPrice (...num1){

    return num1

}

//console.log(calculateCartPrice(200,300,400));


//OBJECT

const user = {
    username : "Saif",
    price : 149
}

function operateObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//operateObject(user)



//ARRAY

const myArray = [200, 400, 600, 800]

function returnValue (getArray){
    return getArray[3]
}
console.log(returnValue(myArray));

